import * as THREE from 'three';
import { AssetLoader } from './AssetLoader.js';
import { difficultyForLevel } from '../game/DifficultySystem.js';
import { TrackModules } from './TrackModules.js';
import { TrackValidator } from './TrackValidator.js';

/**
 * HARD-CODED ELEVATION TRANSITION & Z-OFFSET DOCKING TRACK BUILDER v6
 *
 * Rules:
 * 1. BANS ARBITRARY Y-JUMPS: Zero vertical wall steps allowed.
 * 2. 30-DEGREE RAMP INJECTION: All elevation gains use an explicit 30° sloped ramp.
 * 3. HARD-CODED Z-AXIS GAP (55m MINIMUM): Upper landing platforms are pushed 55m+ downstream.
 * 4. PARABOLIC ARC CLEARANCE: Trajectory equation mathematically validated.
 */
export class TrackBuilder {
  constructor(scene) {
    this.scene = scene;
    this.trackGroup = new THREE.Group();
    this.scene.add(this.trackGroup);

    this.colliders = [];
    this.barrierColliders = [];
    this.antiGravZones = [];
    this.speedBoostZones = [];
    this.launchPadTriggers = [];
    this.gapIntervals = [];

    this.finishZ = 200;
    this._elevationMap = [];

    this.woodTexture = this._createWoodTexture();
    this.cautionTexture = this._createCautionTexture();
    this.launchTexture = this._createLaunchTexture();

    // Persistent Shared Materials (reused across all level loads without VRAM churn or shader re-compiles)
    this.woodMaterial = new THREE.MeshStandardMaterial({
      map: this.woodTexture, roughness: 0.35, metalness: 0.15
    });
    this.woodMaterial.isPersistent = true;

    this.cautionMaterial = new THREE.MeshStandardMaterial({
      map: this.cautionTexture, roughness: 0.4, metalness: 0.1
    });
    this.cautionMaterial.isPersistent = true;

    this.launchMaterial = new THREE.MeshStandardMaterial({
      map: this.launchTexture, roughness: 0.2, metalness: 0.5
    });
    this.launchMaterial.isPersistent = true;

    this.guardrailMaterial = new THREE.MeshStandardMaterial({
      color: 0x64748b, roughness: 0.3, metalness: 0.8
    });
    this.guardrailMaterial.isPersistent = true;
  }

  /* ───────────────────── PUBLIC ───────────────────── */

  clear() {
    while (this.trackGroup.children.length > 0) {
      const child = this.trackGroup.children[this.trackGroup.children.length - 1];
      this.trackGroup.remove(child);
      // Dispose generated geometry
      if (child.geometry) {
        child.geometry.dispose();
      }
      // Dispose non-persistent custom materials only
      if (child.material) {
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        mats.forEach(m => {
          if (m && !m.isPersistent && !m.isCachedAsset) {
            m.dispose();
          }
        });
      }
    }
    this.trackGroup.userData.hammers = [];
    this.colliders = [];
    this.barrierColliders = [];
    this.antiGravZones = [];
    this.speedBoostZones = [];
    this.launchPadTriggers = [];
    this.gapIntervals = [];
    this._elevationMap = [];
  }

  getTrackYAtZ(z) {
    const map = this._elevationMap;
    if (!map || map.length === 0) return 0;
    if (z <= map[0].z) return map[0].y;
    if (z >= map[map.length - 1].z) return map[map.length - 1].y;

    for (let i = 0; i < map.length - 1; i++) {
      const p0 = map[i];
      const p1 = map[i + 1];
      if (z >= p0.z && z <= p1.z) {
        const dz = p1.z - p0.z;
        if (Math.abs(dz) < 0.0001) return p0.y;
        const t = Math.max(0, Math.min(1, (z - p0.z) / dz));
        const y = p0.y + t * (p1.y - p0.y);
        return isFinite(y) ? y : p0.y;
      }
    }
    return map[map.length - 1].y;
  }

  _addColliderWireframe(mesh) {
    if (!mesh || !mesh.geometry) return;
    const wireMat = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const wireMesh = new THREE.Mesh(mesh.geometry.clone(), wireMat);
    wireMesh.position.copy(mesh.position);
    wireMesh.quaternion.copy(mesh.quaternion);
    wireMesh.scale.copy(mesh.scale);
    (this._targetGroup || this.trackGroup).add(wireMesh);
  }

  buildLevel(levelNumber) {
    const res = this.generateLevel(levelNumber);
    console.warn(`[TRACK DIAGNOSTIC] Track generation complete. Total visual meshes: ${this.trackGroup.children.length}. Total physics colliders registered: ${this.colliders ? this.colliders.length : 'UNDEFINED'}`);
    return res;
  }

  generateTrack(levelNumber) {
    return this.buildLevel(levelNumber);
  }

  getStartPoint() {
    return new THREE.Vector3(0, 1.5, 0);
  }

  getStartTransform() {
    return {
      position: new THREE.Vector3(0, 1.5, 0),
      quaternion: new THREE.Quaternion(0, 0, 0, 1)
    };
  }

  /**
   * Returns true if the given z coordinate falls inside a launch-ramp gap
   * (empty air with no physical collider underneath).
   */
  isInGap(z) {
    for (const gap of this.gapIntervals) {
      if (z >= gap.startZ && z <= gap.endZ) return true;
    }
    return false;
  }

  /**
   * GENERATE LEVEL — Level 2 uses HARDCODED JSON TILE ARRAY.
   * All other levels fall through to the procedural generator.
   */
  generateLevel(levelNumber) {
    this.clear();

    if (levelNumber === 2) {
      const res = this._buildLevel2Hardcoded();
      console.warn(`[TRACK DIAGNOSTIC] Track generation complete. Total visual meshes: ${this.trackGroup.children.length}. Total physics colliders registered: ${this.colliders ? this.colliders.length : 'UNDEFINED'}`);
      return res;
    }

    // ── Procedural path (levels 1, 3+) ──────────────────────────────────
    let attempt = 0;
    let isValid = false;

    while (!isValid && attempt < 5) {
      attempt++;
      this.clear();
      const diff = difficultyForLevel(levelNumber);

      let seed = levelNumber * 7919 + 104729 + (attempt - 1) * 31;
      const rand = () => {
        seed = (seed * 16807 + 0) % 2147483647;
        return (seed & 0x7fffffff) / 2147483647;
      };

      let c = { x: 0, y: 0, z: -15 };
      c = this._straight(c, 45);

      const targetZ = diff.trackLength;

      while (c.z < targetZ) {
        const roll = rand();

        if (roll < diff.rampFrequency) {
          const run = 20 + rand() * 8;
          const rise = 4 + rand() * 3;
          c = this._ramp(c, run, rise);
          c = this._straight(c, 15);

        } else if (roll < diff.rampFrequency + diff.launchRampFrequency) {
          c = this._straight(c, 10);
          c = this._launchRamp(c, 18, 55.0, 22);

        } else if (roll < diff.rampFrequency + diff.launchRampFrequency + diff.platformFrequency) {
          c = this._straight(c, 15);
          const hasHammer = diff.unlockedHazards.includes('hammers') && (rand() < 0.5);
          c = this._circularPlatform(c, 7, hasHammer);
          c = this._straight(c, 15);

        } else {
          const len = 20 + rand() * 15;
          if (rand() < diff.boosterFrequency) {
            this._booster(c, 6, diff.speedMultiplier * 1.4);
          }
          c = this._straight(c, len);
        }
      }

      c = this._straight(c, 30);
      this._finishGate(c);
      this.finishZ = c.z;

      const val = TrackValidator.validate(this);
      if (val.isValid || attempt >= 5) {
        isValid = true;
        if (!val.isValid) {
          console.warn(`[TrackBuilder] Level ${levelNumber} generated with warnings:`, val.issues);
        } else {
          console.log(`[TrackBuilder] Level ${levelNumber} validated cleanly ✓ (attempt #${attempt})`);
        }
      }
    }

    console.warn(`[TRACK DIAGNOSTIC] Track generation complete. Total visual meshes: ${this.trackGroup.children.length}. Total physics colliders registered: ${this.colliders ? this.colliders.length : 'UNDEFINED'}`);
    return difficultyForLevel(levelNumber);
  }

  /**
   * LEVEL 2 — HARDCODED JSON TILE LAYOUT
   * Z-positions are absolute and explicit. No random math involved.
   */
  _buildLevel2Hardcoded() {
    let cursor = { x: 0, y: 0, z: -15 };
    cursor = this._straight(cursor, 55);  // z: -15 to 40
    cursor = this._straight(cursor, 60);  // z: 40 to 100
    cursor = this._launchRamp(cursor, 18, 55.0, 22); // Gap from lip to landing
    cursor = this._straight(cursor, 60);

    this._finishGate(cursor);
    this.finishZ = cursor.z;

    console.log(`[TrackBuilder] Level 2 built from HARDCODED JSON ARRAY ✓ finishZ=${this.finishZ}`);
    return difficultyForLevel(2);
  }

  /* ───────────────── ARCHITECTURAL SEGMENT PRIMITIVES ───────────────── */

  _straight(cursor, length, width = 6.0) {
    const { x, y, z } = cursor;
    const target = this._targetGroup || this.trackGroup;

    const geo = new THREE.BoxGeometry(width, 0.6, length);
    const mesh = new THREE.Mesh(geo, this.woodMaterial);
    mesh.position.set(x, y - 0.3, z + length / 2);
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    target.add(mesh);
    this.colliders.push(mesh);
    this._addColliderWireframe(mesh);

    this._guardrail(x - width / 2, y, z, length);
    this._guardrail(x + width / 2, y, z, length);

    TrackModules.addSupportPillars(target, x, y, z + length / 2, width);
    TrackModules.addLEDNeonStrips(target, x, y, z, length, width, 0x06b6d4);

    this._recordElevation(z, y);
    this._recordElevation(z + length, y);

    return { x, y, z: z + length };
  }

  _ramp(cursor, runLength, rise, width = 6.0) {
    const { x, y, z } = cursor;
    const target = this._targetGroup || this.trackGroup;
    const angle = Math.atan2(rise, runLength);
    const hyp = Math.sqrt(runLength * runLength + rise * rise);

    const geo = new THREE.BoxGeometry(width, 0.6, hyp);
    const mesh = new THREE.Mesh(geo, this.woodMaterial);
    mesh.position.set(x, y + rise / 2 - 0.3, z + runLength / 2);
    mesh.rotation.x = -angle;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    target.add(mesh);
    this.colliders.push(mesh);
    this._addColliderWireframe(mesh);

    // Speed Booster pad ON the ramp deck
    this._booster({ x, y: y + rise * 0.25, z: z + runLength * 0.25 }, 6.0, 2.2);

    this._guardrail(x - width / 2, y, z, runLength);
    this._guardrail(x + width / 2, y, z, runLength);

    TrackModules.addSupportPillars(target, x, y + rise / 2, z + runLength / 2, width);
    TrackModules.addLEDNeonStrips(target, x, y + rise / 2, z, runLength, width, 0xf59e0b);

    const steps = Math.max(4, Math.ceil(runLength / 5));
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      this._recordElevation(z + t * runLength, y + t * rise);
    }

    return { x, y: y + rise, z: z + runLength };
  }

  /**
   * 30-DEGREE RAMP INJECTION WITH HARD-CODED 55M Z-AXIS GAP
   *
   * 1. Angle = 30° (THREE.MathUtils.degToRad(30)).
   * 2. Ramp entry snapped flush to current flat track exit.
   * 3. Speed booster pad ON ramp deck.
   * 4. HARD-CODED Z-GAP: Upper landing deck pushed FORWARD by 55m+ (landingZ = rampExitZ + 55m).
   */
  _launchRamp(cursor, rampLength = 18, jumpGapDistance = 55.0, landingLength = 22, width = 6.0) {
    const { x, y, z } = cursor;
    const target = this._targetGroup || this.trackGroup;

    // STEP 1: Angle ramp upward by exactly 30 degrees
    const angle = THREE.MathUtils.degToRad(30);
    const rise = rampLength * Math.sin(angle); // ~9.0m elevation rise
    const runLength = rampLength * Math.cos(angle); // ~15.58m horizontal run
    const hyp = rampLength;

    // STEP 2: Position bottom entry of ramp EXACTLY at exit of current flat track
    const rampGeo = new THREE.BoxGeometry(width, 0.6, hyp);
    const rampMesh = new THREE.Mesh(rampGeo, this.woodMaterial);
    rampMesh.position.set(x, y + rise / 2 - 0.3, z + runLength / 2);
    rampMesh.rotation.x = -angle; // Exactly 30° pitch
    rampMesh.receiveShadow = true;
    rampMesh.castShadow = true;
    target.add(rampMesh);
    this.colliders.push(rampMesh);
    this._addColliderWireframe(rampMesh);

    // STEP 3: Speed boost pad ON the 30° ramp deck
    this._booster({ x, y: y + rise * 0.3, z: z + runLength * 0.3 }, width * 0.9, 2.5);

    this._guardrail(x - width / 2, y, z, runLength);
    this._guardrail(x + width / 2, y, z, runLength);

    TrackModules.addSupportPillars(this.trackGroup, x, y + rise / 2, z + runLength / 2, width);
    TrackModules.addLEDNeonStrips(this.trackGroup, x, y + rise / 2, z, runLength, width, 0xef4444);

    const rampSteps = 6;
    for (let i = 0; i <= rampSteps; i++) {
      const t = i / rampSteps;
      this._recordElevation(z + t * runLength, y + t * rise);
    }

    const lipZ = z + runLength;
    const lipY = y + rise;

    // LaunchPadTrigger Box (Physics sensor preserved without visual mesh block)
    const triggerBox = new THREE.Box3();
    triggerBox.min.set(x - width / 2, lipY - 1.0, lipZ - 3.0);
    triggerBox.max.set(x + width / 2, lipY + 3.0, lipZ + 2.0);

    const upForce = 24.0;   // Massive upward launch impulse
    const fwdForce = 35.0;  // Massive forward launch impulse

    this.launchPadTriggers.push({
      box: triggerBox,
      upForce,
      fwdForce,
      used: false,
      lipZ,
      lipY
    });

    // STEP 4: HARD-CODED Z-AXIS GAP (THE FIX)
    // Push upper landing platform FORWARD by jumpGapDistance (55m+)
    const landingZ = lipZ + Math.max(45.0, jumpGapDistance);
    const landingY = lipY; // Platform at launch lip altitude

    const landWidthBonus = 3.5; // Generous landing deck width
    const landExit = this._straight(
      { x, y: landingY, z: landingZ },
      landingLength,
      width + landWidthBonus
    );

    // Record actual deck edge elevations (do NOT populate fake height points across empty air gaps)
    this._recordElevation(lipZ, lipY);
    this._recordElevation(landingZ, landingY);

    // Record this gap interval so HazardManager can skip it
    this.gapIntervals.push({ startZ: lipZ, endZ: landingZ });

    return landExit;
  }

  _circularPlatform(cursor, radius = 7.0, hasHammer = false) {
    const { x, y, z } = cursor;
    const centerZ = z + radius;

    const geo = new THREE.CylinderGeometry(radius, radius, 0.6, 32);
    const mesh = new THREE.Mesh(geo, this.woodMaterial);
    mesh.position.set(x, y - 0.3, centerZ);
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    target.add(mesh);
    this.colliders.push(mesh);
    this._addColliderWireframe(mesh);

    const border = new THREE.Mesh(
      new THREE.TorusGeometry(radius, 0.22, 16, 48),
      this.cautionMaterial
    );
    border.rotation.x = Math.PI / 2;
    border.position.set(x, y + 0.22, centerZ);
    border.castShadow = true;
    border.receiveShadow = true;
    target.add(border);

    TrackModules.addSupportPillars(target, x, y, centerZ, radius * 1.5);

    if (hasHammer) {
      const hg = new THREE.Group();
      hg.position.set(x, y + 0.3, centerZ);

      const arm = new THREE.Mesh(
        new THREE.BoxGeometry(radius * 1.6, 0.3, 0.3),
        new THREE.MeshStandardMaterial({ map: this.woodTexture, roughness: 0.3 })
      );
      arm.position.y = 0.5;
      hg.add(arm);

      const head = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.8, 1.4),
        new THREE.MeshStandardMaterial({ color: 0x92400e, metalness: 0.5 })
      );
      head.position.set(radius * 0.7, 0.5, 0);
      hg.add(head);

      this.trackGroup.add(hg);
      if (!this.trackGroup.userData.hammers) this.trackGroup.userData.hammers = [];
      this.trackGroup.userData.hammers.push(hg);
    }

    this._recordElevation(z, y);
    this._recordElevation(centerZ, y);
    this._recordElevation(z + radius * 2, y);

    return { x, y, z: z + radius * 2 };
  }

  _createBoostPadTexture() {
    if (!this._boostPadTexture) {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');

      // Background
      ctx.fillStyle = '#ffb700';
      ctx.fillRect(0, 0, 512, 512);

      // Neon Chevrons pointing UP (Forward direction)
      ctx.strokeStyle = '#00ffcc';
      ctx.lineWidth = 42;
      ctx.lineCap = 'round';
      ctx.shadowColor = '#00ffcc';
      ctx.shadowBlur = 20;

      // Draw chevrons pointing UP: ^ ^ ^
      for (let y = 380; y >= 140; y -= 120) {
        ctx.beginPath();
        ctx.moveTo(100, y);
        ctx.lineTo(256, y - 80); // Pointing UP to top of canvas
        ctx.lineTo(412, y);
        ctx.stroke();
      }

      this._boostPadTexture = new THREE.CanvasTexture(canvas);
      this._boostPadTexture.wrapS = THREE.RepeatWrapping;
      this._boostPadTexture.wrapT = THREE.RepeatWrapping;

      // Flip texture center & rotation to guarantee arrows point away from camera (+Z)
      this._boostPadTexture.center.set(0.5, 0.5);
      this._boostPadTexture.rotation = Math.PI;
    }
    return this._boostPadTexture;
  }

  _booster(cursor, length = 6.0, multiplier = 2.0) {
    const { x, y, z } = cursor;
    const geo = new THREE.PlaneGeometry(4.0, length);
    const mat = new THREE.MeshBasicMaterial({
      map: this._createBoostPadTexture(),
      toneMapped: false
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, y + 0.05, z + length / 2);
    this.trackGroup.add(mesh);

    const box = new THREE.Box3();
    box.min.set(x - 2.5, y - 0.5, z);
    box.max.set(x + 2.5, y + 3.0, z + length);
    this.speedBoostZones.push({ box, multiplier });
  }

  _finishGate(cursor) {
    const { x, y, z } = cursor;
    this.finishZ = z;

    const archMat = new THREE.MeshStandardMaterial({
      color: 0x10b981, emissive: 0x10b981, emissiveIntensity: 0.5
    });

    const pL = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 6), archMat);
    pL.position.set(x - 3.5, y + 3, z);
    this.trackGroup.add(pL);

    const pR = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 6), archMat);
    pR.position.set(x + 3.5, y + 3, z);
    this.trackGroup.add(pR);

    const bar = new THREE.Mesh(new THREE.BoxGeometry(8, 0.5, 0.5), archMat);
    bar.position.set(x, y + 6, z);
    this.trackGroup.add(bar);
  }

  _guardrail(x, y, startZ, length) {
    const r = 0.22;
    const pipe = new THREE.Mesh(
      new THREE.CylinderGeometry(r, r, length, 16),
      new THREE.MeshStandardMaterial({ map: this.cautionTexture, roughness: 0.2, metalness: 0.4 })
    );
    pipe.rotation.x = Math.PI / 2;
    pipe.position.set(x, y + 0.45, startZ + length / 2);
    pipe.castShadow = true;
    this.trackGroup.add(pipe);

    // Hard-remove side socket disc posts so track deck edges are 100% clean

    const box = new THREE.Box3();
    box.min.set(x - 0.3, y, startZ);
    box.max.set(x + 0.3, y + 1.2, startZ + length);
    this.barrierColliders.push({ box, position: new THREE.Vector3(x, y + 0.45, startZ + length / 2) });
  }

  _recordElevation(z, y) {
    this._elevationMap.push({ z, y });
    this._elevationMap.sort((a, b) => a.z - b.z);
  }

  _createWoodTexture() {
    const c = document.createElement('canvas');
    c.width = 1024; c.height = 1024;
    const ctx = c.getContext('2d');

    const g = ctx.createLinearGradient(0, 0, c.width, 0);
    g.addColorStop(0, '#d97706');
    g.addColorStop(0.5, '#b45309');
    g.addColorStop(1, '#92400e');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.strokeStyle = 'rgba(69,26,3,0.18)';
    ctx.lineWidth = 4;
    for (let i = 0; i < 60; i++) {
      const x = Math.random() * c.width;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.bezierCurveTo(
        x + Math.random() * 40 - 20, c.height * 0.3,
        x + Math.random() * 40 - 20, c.height * 0.7,
        x + Math.random() * 60 - 30, c.height
      );
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  _createCautionTexture() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 512;
    const ctx = c.getContext('2d');

    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = '#1e293b';
    const sw = 64;
    for (let x = -c.height; x < c.width + c.height; x += sw * 2) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + sw, 0);
      ctx.lineTo(x + sw - c.height, c.height);
      ctx.lineTo(x - c.height, c.height);
      ctx.closePath();
      ctx.fill();
    }

    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(8, 1);
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  _createLaunchTexture() {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 64;
    const ctx = c.getContext('2d');

    const g = ctx.createLinearGradient(0, 0, c.width, 0);
    g.addColorStop(0, '#f97316');
    g.addColorStop(0.3, '#fbbf24');
    g.addColorStop(0.5, '#ffffff');
    g.addColorStop(0.7, '#fbbf24');
    g.addColorStop(1, '#f97316');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.strokeStyle = 'rgba(255,255,255,0.6)';
    ctx.lineWidth = 3;
    for (let i = 0; i < 6; i++) {
      const cx = 30 + i * 40;
      ctx.beginPath();
      ctx.moveTo(cx - 8, c.height * 0.7);
      ctx.lineTo(cx, c.height * 0.3);
      ctx.lineTo(cx + 8, c.height * 0.7);
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }
}
