import * as THREE from 'three';
import { sfx } from '../audio/SoundEffects.js';
import { AssetLoader } from '../graphics/AssetLoader.js';
import { difficultyForLevel } from '../game/DifficultySystem.js';
import { HazardPatterns } from './HazardPatterns.js';

if (typeof window !== 'undefined' && !window._hazardDebugRegistered) {
  window._hazardDebugRegistered = true;
  window.SHOW_HAZARD_HITBOXES = false;
  window.addEventListener('keydown', (e) => {
    if (e.key === 'h' || e.key === 'H') {
      window.SHOW_HAZARD_HITBOXES = !window.SHOW_HAZARD_HITBOXES;
      console.log(`🎯 DevTool: Hazard Hitbox Wireframes = ${window.SHOW_HAZARD_HITBOXES ? 'ON' : 'OFF'}`);
    }
  });
}

/**
 * HazardManager v4 — Complete Genre-Standard Hazard Overhaul
 *
 * New & Retuned Hazards with Telegraphs, Safe Windows, and Emissive Danger Accents:
 *   1. Pendulum Hammer: Overhead mount, wide swinging arc, pause at peak (telegraph).
 *   2. Slam Piston/Crusher: Telegraph warning glow & hum -> slam -> retract/pause (safe window).
 *   3. Rolling Boulder: Rotates with movement direction along Z, dodged laterally.
 *   4. Sweeping Wall Gap: Wall segment sliding laterally with dodgeable gap.
 *   5. Retuned Saw Blades, Spike Balls, Cat Paws, Rotating Bars, Barrels with emissive danger accents.
 */
export class HazardManager {
  constructor(scene) {
    this.scene = scene;
    this.hazardGroup = new THREE.Group();
    this.scene.add(this.hazardGroup);

    this.sawBlades = [];
    this.rotatingBars = [];
    this.catPaws = [];
    this.spikeBalls = [];
    this.collectibles = [];
    this.destructibleBarrels = [];
    this.pendulums = [];
    this.crushers = [];
    this.boulders = [];
    this.wallGaps = [];
    this.time = 0;

    // Emissive materials for warning lights & business ends
    this.dangerMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xef4444,
      emissiveIntensity: 0.8,
      metalness: 0.6,
      roughness: 0.2
    });
    this.warningLightMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 1.2,
      metalness: 0.8
    });
  }

  clear() {
    this.sawBlades.forEach(s => this.scene.remove(s.mesh));
    this.rotatingBars.forEach(r => this.scene.remove(r.group));
    this.catPaws.forEach(c => this.scene.remove(c.mesh));
    this.spikeBalls.forEach(sb => this.scene.remove(sb.mesh));
    this.collectibles.forEach(c => this.scene.remove(c.mesh));
    this.destructibleBarrels.forEach(b => this.scene.remove(b.mesh));
    this.pendulums.forEach(p => this.scene.remove(p.group));
    this.crushers.forEach(cr => this.scene.remove(cr.group));
    this.boulders.forEach(b => this.scene.remove(b.mesh));
    this.wallGaps.forEach(w => this.scene.remove(w.group));

    this.sawBlades = [];
    this.rotatingBars = [];
    this.catPaws = [];
    this.spikeBalls = [];
    this.collectibles = [];
    this.destructibleBarrels = [];
    this.pendulums = [];
    this.crushers = [];
    this.boulders = [];
    this.wallGaps = [];
  }

  /**
   * Spawn hazards using difficultyForLevel profile and HazardPatterns rotation.
   */
  spawnLevelHazards(levelNumber, trackBuilder) {
    this.clear();
    this._tb = trackBuilder;

    const diff = difficultyForLevel(levelNumber);
    const finishZ = trackBuilder.finishZ || 200;

    console.log(`[HazardManager] Spawning hazards for Level ${levelNumber}:`, {
      unlockedHazards: diff.unlockedHazards,
      obstacleDensity: diff.obstacleDensity,
      finishZ
    });

    const hazardInterval = Math.max(14, 100 / diff.obstacleDensity);
    let z = 55; // Clear 50m starting zone in front of player car

    let seed = levelNumber * 13007 + 54321;
    const rand = () => {
      seed = (seed * 16807 + 0) % 2147483647;
      return (seed & 0x7fffffff) / 2147483647;
    };

    const patternKeys = this._buildPatternRotation(diff.unlockedHazards);
    let patternIndex = 0;

    while (z < finishZ - 25) {
      if (trackBuilder.isInGap && trackBuilder.isInGap(z)) {
        z += hazardInterval;
        continue;
      }

      if (patternKeys.length > 0 && rand() < 0.65) {
        const patternKey = patternKeys[patternIndex % patternKeys.length];
        patternIndex++;
        console.log(`[HazardManager] Spawning Pattern '${patternKey}' at z=${z.toFixed(1)}`);
        HazardPatterns.spawnPattern(patternKey, z, (pz) => this._surfaceY(pz), this);
      } else {
        const hazardType = diff.unlockedHazards[Math.floor(rand() * diff.unlockedHazards.length)];
        console.log(`[HazardManager] Spawning Hazard '${hazardType}' at z=${z.toFixed(1)}`);

        switch (hazardType) {
          case 'pendulums':
            this._spawnPendulumSnapped(0, z, rand() * Math.PI);
            break;
          case 'crushers':
            this._spawnCrusherSnapped(0, z, rand() * 1.5);
            break;
          case 'boulders':
            this._spawnBoulderSnapped(z, 12.0 + rand() * 4.0);
            break;
          case 'wall_gaps':
            this._spawnWallGapSnapped(z, 2.0 + rand() * 1.5);
            break;
          case 'cat_paws':
            this._spawnCatPawSnapped((rand() - 0.5) * 2, z);
            break;
          case 'spike_balls':
            this._spawnSpikeBallSnapped((rand() - 0.5) * 3, z);
            break;
          case 'saw_blades':
            this._spawnSawBladeSnapped((rand() - 0.5) * 3, z);
            break;
          case 'rotating_bars':
            this._spawnRotatingBarSnapped(0, z, 4.0 + diff.progressFactor * 2);
            break;
          case 'barrels':
          default:
            this._spawnBarrelLineSnapped(0, z, 2 + Math.floor(rand() * 3));
            break;
        }
      }

      const coinZ = z + hazardInterval * 0.5;
      if (rand() < 0.65 && !(trackBuilder.isInGap && trackBuilder.isInGap(coinZ))) {
        this._spawnCashGridSnapped(0, coinZ, 4 + Math.floor(rand() * 4));
      }

      z += hazardInterval;
    }
  }

  _buildPatternRotation(unlockedHazards) {
    const patterns = ['RiskPathCollectibles'];

    if (unlockedHazards.includes('pendulums')) patterns.push('PendulumGauntlet');
    if (unlockedHazards.includes('crushers')) patterns.push('CrusherCorridor');
    if (unlockedHazards.includes('boulders')) patterns.push('BoulderDash');
    if (unlockedHazards.includes('wall_gaps')) patterns.push('WallGapMaze');
    if (unlockedHazards.includes('saw_blades')) patterns.push('SawToJump');
    if (unlockedHazards.includes('spike_balls')) patterns.push('SpikeHallway');
    if (unlockedHazards.includes('rotating_bars') || unlockedHazards.includes('hammers')) {
      patterns.push('CoinsToHammer');
      patterns.push('DoubleHammer');
    }

    return patterns;
  }

  _surfaceY(z) {
    return this._tb ? this._tb.getTrackYAtZ(z) : 0;
  }

  /* ── Surface-snapped helpers ── */

  _spawnPendulumSnapped(x, z, phaseOffset = 0) {
    const y = this._surfaceY(z);
    this._spawnPendulum(x, y, z, phaseOffset);
  }

  _spawnCrusherSnapped(x, z, delay = 0) {
    const y = this._surfaceY(z);
    this._spawnCrusher(x, y, z, delay);
  }

  _spawnBoulderSnapped(z, speed = 14.0) {
    const y = this._surfaceY(z);
    this._spawnBoulder(0, y, z, speed);
  }

  _spawnWallGapSnapped(z, speed = 2.5) {
    const y = this._surfaceY(z);
    this._spawnWallGap(y, z, speed);
  }

  _spawnCatPawSnapped(x, z) {
    const y = this._surfaceY(z);
    this._spawnCatPaw(x, y, z);
  }

  _spawnSpikeBallSnapped(x, z) {
    const y = this._surfaceY(z);
    this._spawnSpikeBall(x, y, z);
  }

  _spawnSawBladeSnapped(x, z) {
    const y = this._surfaceY(z);
    this._spawnSawBlade(x, y, z);
  }

  _spawnRotatingBarSnapped(x, z, speed) {
    const y = this._surfaceY(z);
    this._spawnRotatingBar(x, y, z, speed);
  }

  _spawnCashGridSnapped(startX, startZ, count) {
    for (let i = 0; i < count; i++) {
      const z = startZ + i * 4;
      if (this._tb && this._tb.isInGap && this._tb.isInGap(z)) continue;
      const y = this._surfaceY(z);
      this._spawnCoin(startX, y + 0.5, z);
    }
  }

  _spawnBarrelLineSnapped(x, z, count) {
    for (let i = 0; i < count; i++) {
      const bx = x + (i - (count - 1) / 2) * 2.0;
      const y = this._surfaceY(z);
      this._spawnBarrel(bx, y, z);
    }
  }

  /* ── 1. SWINGING PENDULUM HAMMER ── */
  _spawnPendulum(x, y, z, phaseOffset = 0) {
    const group = new THREE.Group();
    group.position.set(x, y + 5.5, z);

    // Overhead arch frame
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8 });
    const pL = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 6), frameMat);
    pL.position.set(-3.5, -2.5, 0);
    group.add(pL);

    const pR = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 6), frameMat);
    pR.position.set(3.5, -2.5, 0);
    group.add(pR);

    const beam = new THREE.Mesh(new THREE.BoxGeometry(7.4, 0.4, 0.4), frameMat);
    beam.position.set(0, 0.5, 0);
    group.add(beam);

    // Pendulum arm + head
    const armGroup = new THREE.Group();
    armGroup.position.set(0, 0.4, 0);

    const rod = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 4.8),
      new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.9 })
    );
    rod.position.set(0, -2.4, 0);
    armGroup.add(rod);

    // Heavy Hammer Head with Emissive Danger Edge
    const head = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 1.4, 1.4),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.3 })
    );
    head.position.set(0, -4.8, 0);
    armGroup.add(head);

    // Emissive red business face
    const face = new THREE.Mesh(new THREE.BoxGeometry(1.7, 1.5, 0.2), this.dangerMat);
    face.position.set(0, -4.8, 0.7);
    armGroup.add(face);

    armGroup.add(face);

    group.add(armGroup);
    this._ensureMeshVisible(group);
    this.scene.add(group);

    this.pendulums.push({
      group,
      armGroup,
      headWorldPos: new THREE.Vector3(),
      phaseOffset,
      radius: 1.5,
      nearMissTriggered: false
    });
  }

  /* ── 2. SLAM PISTON / CRUSHER ── */
  _spawnCrusher(x, y, z, delay = 0) {
    const group = new THREE.Group();
    group.position.set(x, y + 4.5, z);

    // Gantry Frame
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8 });
    const leftCol = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 5), frameMat);
    leftCol.position.set(-2.8, -2, 0);
    group.add(leftCol);

    const rightCol = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 5), frameMat);
    rightCol.position.set(2.8, -2, 0);
    group.add(rightCol);

    const topBeam = new THREE.Mesh(new THREE.BoxGeometry(6.0, 0.6, 1.2), frameMat);
    topBeam.position.set(0, 0.6, 0);
    group.add(topBeam);

    // Warning Light Lamp on Top Beam
    const warningLamp = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 12, 12),
      this.warningLightMat.clone()
    );
    warningLamp.position.set(0, 1.0, 0);
    group.add(warningLamp);

    // Slam Piston Block
    const pistonGroup = new THREE.Group();
    pistonGroup.position.set(0, 0, 0);

    const shaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.2, 3.5),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.95, roughness: 0.1 })
    );
    shaft.position.set(0, -1.75, 0);
    pistonGroup.add(shaft);

    const block = new THREE.Mesh(
      new THREE.BoxGeometry(5.2, 1.2, 1.6),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7 })
    );
    block.position.set(0, -3.8, 0);
    pistonGroup.add(block);

    // Emissive Danger Bottom Face
    const bottomFace = new THREE.Mesh(
      new THREE.BoxGeometry(5.25, 0.2, 1.65),
      this.dangerMat
    );
    bottomFace.position.set(0, -4.4, 0);
    pistonGroup.add(bottomFace);

    group.add(pistonGroup);
    this._ensureMeshVisible(group);
    this.scene.add(group);

    this.crushers.push({
      group,
      pistonGroup,
      warningLamp,
      delay,
      timer: delay,
      state: 'WAITING', // WAITING | TELEGRAPH | SLAMMING | RETRACTING
      pistonY: 0,
      radiusX: 2.6,
      radiusZ: 0.8,
      baseY: y,
      nearMissTriggered: false
    });
  }

  /* ── 3. ROLLING BOULDER ── */
  _spawnBoulder(x, y, z, speed = 14.0) {
    const radius = 1.4;
    const geo = new THREE.DodecahedronGeometry(radius, 1);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xb91c1c,
      emissive: 0x7f1d1d,
      emissiveIntensity: 0.4,
      roughness: 0.4,
      metalness: 0.6
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y + radius, z);
    mesh.castShadow = true;

    // Glowing magma veins / spikes on boulder surface
    const band = new THREE.Mesh(
      new THREE.TorusGeometry(radius * 1.02, 0.08, 8, 16),
      this.dangerMat
    );
    mesh.add(band);

    this._ensureMeshVisible(mesh);
    this.scene.add(mesh);
    this.boulders.push({
      mesh,
      speed,
      radius,
      startZ: z,
      nearMissTriggered: false
    });
  }

  /* ── 4. SWEEPING WALL GAP ── */
  _spawnWallGap(y, z, speed = 2.5) {
    const group = new THREE.Group();
    group.position.set(0, y + 1.2, z);

    // Wall with a 2.6m gap in center
    const wallHeight = 2.2;
    const sideWidth = 2.5;
    const gapWidth = 2.6;

    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b, metalness: 0.7, roughness: 0.3
    });

    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(sideWidth, wallHeight, 0.6), wallMat);
    leftWall.position.set(-gapWidth / 2 - sideWidth / 2, 0, 0);
    group.add(leftWall);

    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(sideWidth, wallHeight, 0.6), wallMat);
    rightWall.position.set(gapWidth / 2 + sideWidth / 2, 0, 0);
    group.add(rightWall);

    // Emissive danger borders framing the gap
    const leftEdge = new THREE.Mesh(new THREE.BoxGeometry(0.15, wallHeight + 0.1, 0.65), this.dangerMat);
    leftEdge.position.set(-gapWidth / 2, 0, 0);
    group.add(leftEdge);

    const rightEdge = new THREE.Mesh(new THREE.BoxGeometry(0.15, wallHeight + 0.1, 0.65), this.dangerMat);
    rightEdge.position.set(gapWidth / 2, 0, 0);
    group.add(rightEdge);

    this._ensureMeshVisible(group);
    this.scene.add(group);
    this.wallGaps.push({
      group,
      speed,
      gapWidth,
      sideWidth,
      nearMissTriggered: false
    });
  }

  /* ── EXISTING RETUNED HAZARDS ── */

  _ensureMeshVisible(model, hazardType = '') {
    if (!model) return;

    if (hazardType === 'ring' || hazardType === 'circular_arch' || hazardType === 'crusher_portal') {
      model.position.y += 18.0; // Raise ring structure above car roof
    }

    model.traverse((child) => {
      if (child.isMesh) {
        const name = (child.name || '').toLowerCase();
        const matColor = child.material?.color ? child.material.color.getHexString() : '';
        if (
          name.includes('socket') || 
          name.includes('pivot') || 
          name.includes('anchor') || 
          name.includes('placeholder') || 
          name.includes('debug') ||
          name.includes('shadow_plane') ||
          name.includes('laser') ||
          name.includes('beam') ||
          matColor === 'ff69b4'
        ) {
          child.visible = false;
          return;
        }
        child.visible = true;
        child.frustumCulled = false;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    model.visible = true;
    if (this.hazardGroup && !this.hazardGroup.children.includes(model)) {
      this.hazardGroup.add(model);
    }
  }

  _spawnCatPaw(x, y, z) {
    const radius = 1.1;
    const group = new THREE.Group();
    group.position.set(x, y + 1.1, z);

    const padMat = new THREE.MeshStandardMaterial({
      color: 0xec4899,
      emissive: 0xbe185d,
      emissiveIntensity: 0.5,
      roughness: 0.2
    });
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 0.9, 0.4, 16), padMat);
    group.add(pad);

    for (let i = 0; i < 4; i++) {
      const angle = (i - 1.5) * 0.5;
      const toe = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), padMat);
      toe.position.set(Math.sin(angle) * (radius * 1.1), 0.2, Math.cos(angle) * (radius * 0.5) + 0.4);
      group.add(toe);
    }

    this.scene.add(group);
    this.catPaws.push({ mesh: group, position: group.position.clone(), radius, baseY: group.position.y, nearMissTriggered: false });
  }

  _spawnSpikeBall(x, y, z) {
    const radius = 0.9;
    const mesh = new THREE.Group();
    mesh.position.set(x, y + radius, z);

    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0x991b1b,
      emissiveIntensity: 0.5,
      roughness: 0.3,
      metalness: 0.7
    });
    const orb = new THREE.Mesh(new THREE.DodecahedronGeometry(radius, 1), bodyMat);
    orb.castShadow = true;
    mesh.add(orb);

    const spikeGeo = new THREE.ConeGeometry(0.25, 0.6, 6);
    const spikeMat = this.dangerMat;
    const offsets = [
      [1,0,0], [-1,0,0], [0,1,0], [0,-1,0], [0,0,1], [0,0,-1],
      [0.7,0.7,0], [-0.7,0.7,0], [0.7,-0.7,0], [-0.7,-0.7,0]
    ];
    offsets.forEach(([ox, oy, oz]) => {
      const spike = new THREE.Mesh(spikeGeo, spikeMat);
      spike.position.set(ox * radius, oy * radius, oz * radius);
      spike.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(ox, oy, oz).normalize());
      mesh.add(spike);
    });

    this.scene.add(mesh);
    this.spikeBalls.push({ mesh, position: mesh.position.clone(), radius, nearMissTriggered: false });
  }

  _spawnSawBlade(x, y, z) {
    const radius = 1.0;
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(radius, radius, 0.15, 24),
      new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        emissive: 0x0284c7,
        emissiveIntensity: 0.6,
        metalness: 0.9,
        roughness: 0.1
      })
    );
    mesh.position.set(x, y + 0.8, z);
    mesh.rotation.x = Math.PI / 2;
    mesh.castShadow = true;

    const teeth = new THREE.Mesh(
      new THREE.TorusGeometry(radius, 0.08, 8, 24),
      this.dangerMat
    );
    mesh.add(teeth);

    this.scene.add(mesh);
    this.sawBlades.push({ mesh, position: mesh.position.clone(), radius, nearMissTriggered: false });
  }

  _spawnRotatingBar(x, y, z, speed = 4.0) {
    const group = new THREE.Group();
    group.position.set(x, y + 0.6, z);

    const bar = new THREE.Mesh(
      new THREE.BoxGeometry(4.8, 0.4, 0.4),
      this.dangerMat
    );
    group.add(bar);

    const centerCap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.3, 0.5, 16),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.8 })
    );
    group.add(centerCap);

    const radius = 2.0;
    this.scene.add(group);
    this.rotatingBars.push({ group, speed, position: group.position.clone(), radius, nearMissTriggered: false });
  }

  _spawnCoin(x, y, z) {
    let mesh;
    try {
      mesh = AssetLoader.getCollectibleModel('gold_coin');
      AssetLoader.normalizeModel(mesh, 0.9, y + 0.4);
      this._ensureMeshVisible(mesh);
    } catch (e) {
      const cashGeo = new THREE.BoxGeometry(0.8, 0.15, 0.45);
      const cashMat = new THREE.MeshStandardMaterial({
        color: 0x10b981, metalness: 0.4, roughness: 0.2,
        emissive: 0x10b981, emissiveIntensity: 0.3
      });
      mesh = new THREE.Mesh(cashGeo, cashMat);
      mesh.position.set(x, y + 0.4, z);
    }
    mesh.position.set(x, y + 0.5, z);
    this.scene.add(mesh);
    this.collectibles.push({ mesh, position: mesh.position, collected: false, value: 15 });
  }

  _spawnBarrel(x, y, z) {
    const radius = 0.5;
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.4, 0.45, 1.0, 16),
      new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        emissive: 0xd97706,
        emissiveIntensity: 0.4,
        roughness: 0.3
      })
    );
    mesh.position.set(x, y + 0.5, z);
    mesh.castShadow = true;

    const stripe = new THREE.Mesh(
      new THREE.CylinderGeometry(0.46, 0.46, 0.25, 16),
      this.dangerMat
    );
    stripe.position.y = 0;
    mesh.add(stripe);

    this.scene.add(mesh);
    this.destructibleBarrels.push({
      mesh, position: mesh.position.clone(),
      velocity: new THREE.Vector3(), radius, active: true, hitTimer: 0
    });
  }

  /* ── UPDATE LOOP — ALL HAZARD MOTION & TELEGRAPHS ── */

  update(dt, playerPosition, playerRadius, onHitHazard, onCollectCash, onNearMiss) {
    this.time += dt;
    const nearMissMargin = 1.2;

    // 1. SWINGING PENDULUM HAMMERS (Telegraph: peak pause; Safe window: crossing center)
    this.pendulums.forEach(p => {
      // Harmonic pendulum motion with pause at peaks
      const cycle = Math.sin(this.time * 2.2 + p.phaseOffset);
      const swingAngle = Math.atan(cycle * 1.2); // ~50° max angle
      p.armGroup.rotation.z = swingAngle;

      // Track head world position for hit detection
      const headOffsetLocal = new THREE.Vector3(
        -Math.sin(swingAngle) * 4.8,
        -Math.cos(swingAngle) * 4.8,
        0
      );
      p.headWorldPos.copy(p.group.position).add(headOffsetLocal);

      const dist = p.headWorldPos.distanceTo(playerPosition);
      const hitDist = p.radius + playerRadius;

      if (dist < hitDist) {
        sfx.playThud();
        onHitHazard('pendulum');
      } else if (dist < hitDist + nearMissMargin) {
        if (!p.nearMissTriggered) {
          p.nearMissTriggered = true;
          if (onNearMiss) onNearMiss('pendulum');
        }
      } else if (dist > hitDist + nearMissMargin * 3) {
        p.nearMissTriggered = false;
      }
    });

    // 2. SLAM PISTONS / CRUSHERS (Telegraph: yellow glow -> slam -> retract/pause)
    this.crushers.forEach(cr => {
      cr.timer += dt;
      const cycleTime = cr.timer % 2.4; // 2.4s cycle

      if (cycleTime < 0.6) {
        // TELEGRAPH: Warning lamp pulses yellow
        cr.state = 'TELEGRAPH';
        cr.pistonY = 0;
        cr.warningLamp.material.emissiveIntensity = 2.0 + Math.sin(this.time * 20) * 1.5;
      } else if (cycleTime < 0.85) {
        // SLAMMING DOWN
        cr.state = 'SLAMMING';
        const slamT = (cycleTime - 0.6) / 0.25;
        cr.pistonY = -slamT * 3.8;
      } else if (cycleTime < 1.4) {
        // RETRACTING
        cr.state = 'RETRACTING';
        const retractT = (cycleTime - 0.85) / 0.55;
        cr.pistonY = -3.8 * (1 - retractT);
      } else {
        // WAITING (SAFE WINDOW)
        cr.state = 'WAITING';
        cr.pistonY = 0;
        cr.warningLamp.material.emissiveIntensity = 0.2;
      }

      cr.pistonGroup.position.y = cr.pistonY;

      // Hit check: only dangerous during SLAMMING or extended position
      const headY = cr.baseY + 4.5 + cr.pistonY - 3.8;
      const dx = Math.abs(playerPosition.x - cr.group.position.x);
      const dz = Math.abs(playerPosition.z - cr.group.position.z);
      const dy = Math.abs(playerPosition.y - headY);

      if (dx < cr.radiusX && dz < cr.radiusZ && dy < 1.0) {
        sfx.playThud();
        onHitHazard('crusher');
      } else if (dx < cr.radiusX + nearMissMargin && dz < cr.radiusZ + nearMissMargin && dy < 1.6) {
        if (!cr.nearMissTriggered) {
          cr.nearMissTriggered = true;
          if (onNearMiss) onNearMiss('crusher');
        }
      } else {
        cr.nearMissTriggered = false;
      }
    });

    // 3. ROLLING BOULDERS (Rolls along Z, rotates matching velocity)
    this.boulders.forEach(b => {
      // Roll along Z-axis toward negative Z or positive Z
      b.mesh.position.z += b.speed * dt;
      // Rotation around X matches rolling speed
      b.mesh.rotation.x += (b.speed / b.radius) * dt;

      const dist = b.mesh.position.distanceTo(playerPosition);
      const hitDist = b.radius + playerRadius;

      if (dist < hitDist) {
        sfx.playThud();
        onHitHazard('boulder');
      } else if (dist < hitDist + nearMissMargin) {
        if (!b.nearMissTriggered) {
          b.nearMissTriggered = true;
          if (onNearMiss) onNearMiss('boulder');
        }
      } else if (dist > hitDist + nearMissMargin * 3) {
        b.nearMissTriggered = false;
      }
    });

    // 4. SWEEPING WALL GAPS (Slides laterally back and forth)
    this.wallGaps.forEach(w => {
      const shift = Math.sin(this.time * w.speed) * 2.2;
      w.group.position.x = shift;

      // Safe gap check: player is safe if centered in the gap (x relative to wall group)
      const relX = playerPosition.x - w.group.position.x;
      const dz = Math.abs(playerPosition.z - w.group.position.z);

      if (dz < 0.6) {
        // Hitting the wall sides (outside the 2.6m gap)
        if (Math.abs(relX) > w.gapWidth / 2 - 0.2) {
          sfx.playThud();
          onHitHazard('wall_gap');
        } else if (Math.abs(relX) > w.gapWidth / 2 - 0.7) {
          if (!w.nearMissTriggered) {
            w.nearMissTriggered = true;
            if (onNearMiss) onNearMiss('wall_gap');
          }
        }
      } else if (dz > 2.0) {
        w.nearMissTriggered = false;
      }
    });

    // 5. EXISTING HAZARDS WITH RETUNED MOTION
    this.catPaws.forEach(cp => {
      cp.mesh.position.y = cp.baseY + Math.abs(Math.sin(this.time * 3.5)) * 1.5;
      cp.mesh.rotation.y += 1.2 * dt;
      const dist = cp.mesh.position.distanceTo(playerPosition);
      const hitDist = cp.radius + playerRadius;

      if (dist < hitDist) {
        sfx.playThud();
        onHitHazard('cat_paw');
      } else if (dist < hitDist + nearMissMargin) {
        if (!cp.nearMissTriggered) {
          cp.nearMissTriggered = true;
          if (onNearMiss) onNearMiss('cat_paw');
        }
      } else if (dist > hitDist + nearMissMargin * 3) {
        cp.nearMissTriggered = false;
      }
    });

    this.spikeBalls.forEach(sb => {
      sb.mesh.rotation.x += 4.0 * dt;
      const dist = sb.mesh.position.distanceTo(playerPosition);
      const hitDist = sb.radius + playerRadius;

      if (dist < hitDist) {
        sfx.playThud();
        onHitHazard('spikeball');
      } else if (dist < hitDist + nearMissMargin) {
        if (!sb.nearMissTriggered) {
          sb.nearMissTriggered = true;
          if (onNearMiss) onNearMiss('spikeball');
        }
      } else if (dist > hitDist + nearMissMargin * 3) {
        sb.nearMissTriggered = false;
      }
    });

    this.sawBlades.forEach(s => {
      s.mesh.rotation.z += 15.0 * dt;
      const dist = s.position.distanceTo(playerPosition);
      const hitDist = s.radius + playerRadius;

      if (dist < hitDist) {
        sfx.playSawBuzz();
        onHitHazard('saw');
      } else if (dist < hitDist + nearMissMargin) {
        if (!s.nearMissTriggered) {
          s.nearMissTriggered = true;
          if (onNearMiss) onNearMiss('saw');
        }
      } else if (dist > hitDist + nearMissMargin * 3) {
        s.nearMissTriggered = false;
      }
    });

    this.rotatingBars.forEach(r => {
      r.group.rotation.y += r.speed * dt;
      const d2 = Math.sqrt(
        (playerPosition.x - r.position.x) ** 2 +
        (playerPosition.z - r.position.z) ** 2
      );
      const hitDist = r.radius;
      if (d2 < hitDist && Math.abs(playerPosition.y - r.position.y) < 1.5) {
        sfx.playThud();
        onHitHazard('rotating_bar');
      } else if (d2 < hitDist + nearMissMargin && Math.abs(playerPosition.y - r.position.y) < 2.0) {
        if (!r.nearMissTriggered) {
          r.nearMissTriggered = true;
          if (onNearMiss) onNearMiss('rotating_bar');
        }
      } else if (d2 > hitDist + nearMissMargin * 3) {
        r.nearMissTriggered = false;
      }
    });

    this.destructibleBarrels.forEach(b => {
      if (!b.active) {
        b.hitTimer += dt;
        b.mesh.position.addScaledVector(b.velocity, dt);
        b.velocity.y -= 15 * dt;
        b.mesh.rotation.x += 5 * dt;
        if (b.hitTimer > 2.0) b.mesh.visible = false;
        return;
      }
      const dist = b.position.distanceTo(playerPosition);
      if (dist < b.radius + playerRadius + 0.5) {
        b.active = false;
        const push = new THREE.Vector3().subVectors(b.position, playerPosition).normalize();
        b.velocity.set(push.x * 8, 5 + Math.random() * 3, push.z * 8);
        sfx.playThud();
        onCollectCash(10);
      }
    });

    this.collectibles.forEach(c => {
      if (c.collected) return;
      c.mesh.rotation.y += 3.0 * dt;
      const dist = c.position.distanceTo(playerPosition);
      if (dist < 6.0) c.position.lerp(playerPosition, 0.15);
      if (dist < 1.4) {
        c.collected = true;
        c.mesh.visible = false;
        sfx.playCoin();
        onCollectCash(c.value);
      }
    });

    this._renderDebugHitboxes();
  }

  _renderDebugHitboxes() {
    if (!this.scene) return;
    if (!this._debugGroup) {
      this._debugGroup = new THREE.Group();
      this.scene.add(this._debugGroup);
    }

    // Clear previous debug meshes
    while (this._debugGroup.children.length > 0) {
      const child = this._debugGroup.children[0];
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
      this._debugGroup.remove(child);
    }

    if (!window.SHOW_HAZARD_HITBOXES) return;

    const wireMat = new THREE.MeshBasicMaterial({ color: 0xff0044, wireframe: true });

    // Render spheres for spikeBalls, sawBlades, barrels, boulders, catPaws
    const allSpheres = [
      ...this.spikeBalls, ...this.sawBlades, ...this.destructibleBarrels,
      ...this.boulders, ...this.catPaws
    ];
    allSpheres.forEach(item => {
      if (!item || (!item.mesh && !item.position)) return;
      const sphere = new THREE.Mesh(new THREE.SphereGeometry(item.radius || 1.0, 12, 12), wireMat);
      const pos = item.mesh ? item.mesh.position : item.position;
      sphere.position.copy(pos);
      this._debugGroup.add(sphere);
    });

    this.pendulums.forEach(p => {
      if (!p || !p.headWorldPos) return;
      const sphere = new THREE.Mesh(new THREE.SphereGeometry(p.radius || 1.5, 12, 12), wireMat);
      sphere.position.copy(p.headWorldPos);
      this._debugGroup.add(sphere);
    });

    this.crushers.forEach(c => {
      if (!c || !c.group) return;
      const box = new THREE.Mesh(new THREE.BoxGeometry(c.radiusX * 2, 1.2, c.radiusZ * 2), wireMat);
      box.position.set(c.group.position.x, c.baseY + c.pistonY + 0.6, c.group.position.z);
      this._debugGroup.add(box);
    });
  }
}
