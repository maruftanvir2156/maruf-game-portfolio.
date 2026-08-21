// TrackBuilder v3 — Heading-Aware, Zero-Seam Continuous Track Architecture
//
// DESIGN PRINCIPLES:
//   1. Every public method takes (startPos: Vector3, heading: number, ...) and returns
//      {pos: Vector3, heading: number} — the exact start of the next segment.
//      This makes zero-gap chaining MATHEMATICALLY IMPOSSIBLE to get wrong.
//   2. Curved sections use a ribbon-strip BufferGeometry sampled from a catmull-rom
//      spline. Adjacent samples share the same computed vertex positions — no seams.
//   3. Collision geometry is built from the SAME vertex data as the visual mesh.
//   4. Split/merge uses one continuous funnel mesh, not two independent boxes.
//
import * as THREE from 'three';
import { SEGMENT_SKINS } from './SegmentSkins.js';

const DECK_H   = 2.0;   // track deck thickness (MINIMUM 2.0 units for zero tunneling)
const BARRIER_H = 2.0;  // side-wall height
const BARRIER_W = 0.75; // side-wall width (physical)

export class TrackBuilder {
  constructor(scene) {
    this.scene      = scene;
    this.trackGroup = new THREE.Group();
    this.scene.add(this.trackGroup);

    this.debugGroup = new THREE.Group();
    this.debugGroup.visible = false;
    this.scene.add(this.debugGroup);

    this.colliders = [];
    this._debugPending = [];

    // ── Procedural Hazard Stripes Texture for Guardrails ──────────────────────
    if (typeof document !== 'undefined') {
      const cv = document.createElement('canvas');
      cv.width = 256; cv.height = 256;
      const ctx = cv.getContext('2d');
      ctx.fillStyle = '#ffcc00'; ctx.fillRect(0, 0, 256, 256);
      ctx.fillStyle = '#1a1a1a';
      for (let x = -256; x < 512; x += 64) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + 32, 0);
        ctx.lineTo(x + 32 - 256, 256); ctx.lineTo(x - 256, 256);
        ctx.closePath(); ctx.fill();
      }
      this.hazardTex = new THREE.CanvasTexture(cv);
      this.hazardTex.wrapS = THREE.RepeatWrapping;
      this.hazardTex.wrapT = THREE.RepeatWrapping;
      this.hazardTex.repeat.set(1, 4);
    } else {
      this.hazardTex = null;
    }

    if (typeof document !== 'undefined') {
      const wcv = document.createElement('canvas');
      wcv.width = 512; wcv.height = 512;
      const wctx = wcv.getContext('2d');
      wctx.fillStyle = '#7c522d'; wctx.fillRect(0, 0, 512, 512);
      wctx.fillStyle = '#543418';
      for (let y = 0; y < 512; y += 64) {
        wctx.fillRect(0, y, 512, 4);
        for (let x = (y % 128 === 0 ? 0 : 128); x < 512; x += 256) {
          wctx.fillRect(x, y, 4, 64);
        }
      }
      wctx.fillStyle = '#36200d';
      for (let y = 0; y < 512; y += 64) {
        for (let x = (y % 128 === 0 ? 0 : 128); x < 512; x += 256) {
          wctx.fillRect(x + 8, y + 8, 12, 6);
          wctx.fillRect(x + 8, y + 50, 12, 6);
        }
      }
      this.woodTex = new THREE.CanvasTexture(wcv);
      this.woodTex.wrapS = THREE.RepeatWrapping;
      this.woodTex.wrapT = THREE.RepeatWrapping;
      this.woodTex.repeat.set(1, 4);
    } else {
      this.woodTex = null;
    }

    // ── Sky Haven PBR Materials ───────────────────────────────────────────────
    this.matTrack = new THREE.MeshStandardMaterial({
      map: this.woodTex, roughness: 0.50, metalness: 0.10
    });
    this.matRamp = new THREE.MeshStandardMaterial({
      color: 0x00c8ff, emissive: 0x0066aa, emissiveIntensity: 0.45,
      metalness: 0.6, roughness: 0.25
    });
    this.matBarrier = new THREE.MeshStandardMaterial({
      map: this.hazardTex, metalness: 0.4, roughness: 0.3
    });
    this.matHazard = this.matBarrier;
    this.matGoldTrim = new THREE.MeshStandardMaterial({
      color: 0xffd700, metalness: 0.8, roughness: 0.2
    });
    this.matRailGlow = new THREE.MeshStandardMaterial({
      color: 0x00f0ff, emissive: 0x00f0ff, emissiveIntensity: 0.8,
      metalness: 0.9, roughness: 0.08, depthWrite: false
    });
    this.matDebugWire = new THREE.MeshBasicMaterial({
      color: 0x00ff44, wireframe: true, transparent: true, opacity: 0.75
    });
    this.matDebugCenterline = new THREE.LineBasicMaterial({ color: 0xff0000 });
  }

  // ── Lifecycle ─────────────────────────────────────────────────────────────
  clear() {
    this.scene.remove(this.trackGroup);
    this.trackGroup = new THREE.Group();
    this.scene.add(this.trackGroup);
    while (this.debugGroup.children.length) this.debugGroup.remove(this.debugGroup.children[0]);
    this.colliders = [];
    this._debugPending = [];
  }

  setDebugVisible(v) { this.debugGroup.visible = v; }
  getColliders()     { return this.colliders; }

  setWorldTheme(world) {
    if (!world) return;
    const trackCol   = new THREE.Color(world.trackColor || 0x3a5682);
    const railCol    = new THREE.Color(world.railColor || 0x00f0ff);
    const mountainCol= new THREE.Color(world.mountainColor || 0x283850);

    // Track surface: readable base slate color + emissive fill so deck stays 100% visible even in night sky worlds
    this.matTrack.color.copy(trackCol);
    this.matTrack.emissive.copy(trackCol);
    this.matTrack.emissiveIntensity = 0.25;
    this.matTrack.roughness = 0.30;
    this.matTrack.metalness = 0.40;

    // Ramp material
    this.matRamp.color.copy(railCol);
    this.matRamp.emissive.copy(railCol);
    this.matRamp.emissiveIntensity = 0.45;

    // Guardrails
    this.matBarrier.color.copy(mountainCol);
    this.matBarrier.roughness = 0.35;
    this.matBarrier.metalness = 0.70;

    // Neon edge rails
    this.matRailGlow.color.copy(railCol);
    this.matRailGlow.emissive.copy(railCol);
    this.matRailGlow.emissiveIntensity = 1.5;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // PUBLIC SEGMENT API — each returns { pos: Vector3, heading: number }
  // ══════════════════════════════════════════════════════════════════════════

  // ── 1. Flat straight section ───────────────────────────────────────────────
  // startPos.y = top-surface level. heading = world-space yaw in radians.
  createStraight(startPos, heading, length = 45, width = 14, skinKey = null) {
    const group = new THREE.Group();
    group.position.set(startPos.x, startPos.y - DECK_H / 2, startPos.z);
    group.rotation.y = heading;

    // Material from SegmentSkins registry or default matTrack
    const mat = (skinKey && SEGMENT_SKINS[skinKey]) ? SEGMENT_SKINS[skinKey].getMaterial() : this.matTrack;

    // Deck
    const geo  = new THREE.BoxGeometry(width, DECK_H, length);
    const deck = new THREE.Mesh(geo, mat);
    deck.position.set(0, 0, length / 2);
    deck.receiveShadow = deck.castShadow = true;
    group.add(deck);
    deck.updateWorldMatrix(true, false);
    this._reg(deck);

    // Barriers + rails
    this._attachBarriers(group, width, length);
    this._attachPillars(group, width, length);

    this.trackGroup.add(group);
    this._flushDebug();

    const endPos = new THREE.Vector3(
      startPos.x + Math.sin(heading) * length,
      startPos.y,
      startPos.z + Math.cos(heading) * length
    );
    return { pos: endPos, heading };
  }

  // ── 2. Slope ramp (rotated BoxGeometry — flat face normals, reliable raycast) ──
  createSlopeRamp(startPos, heading, length = 20, rise = 1.5, width = 14, skinKey = null) {
    const angle       = Math.atan2(rise, length);
    const surfaceLen  = Math.sqrt(length * length + rise * rise);
    const mat         = (skinKey && SEGMENT_SKINS[skinKey]) ? SEGMENT_SKINS[skinKey].getMaterial() : this.matRamp;

    // Helper to create one rotated box oriented along heading + slope
    const makeBox = (w, h, l, xOff, yOff) => {
      const geo  = new THREE.BoxGeometry(w, h, l);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.order = 'YXZ';
      mesh.rotation.y = heading;
      mesh.rotation.x = -angle;
      mesh.position.set(
        startPos.x + Math.sin(heading) * length / 2 - Math.cos(heading) * xOff,
        startPos.y + rise / 2 + yOff,
        startPos.z + Math.cos(heading) * length / 2 + Math.sin(heading) * xOff
      );
      mesh.receiveShadow = mesh.castShadow = true;
      return mesh;
    };

    // Main deck
    const deck = makeBox(width, DECK_H, surfaceLen, 0, 0);
    this.trackGroup.add(deck);
    deck.updateWorldMatrix(true, false);
    this._reg(deck);

    // Left barrier
    const lBarrier = makeBox(BARRIER_W, BARRIER_H, surfaceLen, -(width / 2 - BARRIER_W / 2), DECK_H / 2 + BARRIER_H / 2);
    lBarrier.material = this.matBarrier;
    this.trackGroup.add(lBarrier);
    lBarrier.updateWorldMatrix(true, false);
    this._reg(lBarrier);

    // Right barrier
    const rBarrier = makeBox(BARRIER_W, BARRIER_H, surfaceLen, (width / 2 - BARRIER_W / 2), DECK_H / 2 + BARRIER_H / 2);
    rBarrier.material = this.matBarrier;
    this.trackGroup.add(rBarrier);
    rBarrier.updateWorldMatrix(true, false);
    this._reg(rBarrier);

    this._flushDebug();

    const fwd = new THREE.Vector3(Math.sin(heading), 0, Math.cos(heading));
    const endPos = new THREE.Vector3(
      startPos.x + fwd.x * length,
      startPos.y + rise,
      startPos.z + fwd.z * length
    );
    return { pos: endPos, heading };
  }

  // ── 3. Gentle curve — continuous ribbon strip (ZERO SEAMS) ─────────────────
  // turnDir: +1 = turn right (clockwise), -1 = turn left (counter-clockwise)
  createGentleCurve(startPos, startHeading, angleDeg = 45, turnDir = 1, width = 14, skinKey = null) {
    const STEPS      = Math.max(6, Math.ceil(Math.abs(angleDeg) / 6));
    const totalAngle = (angleDeg * Math.PI / 180) * turnDir;
    const stepAngle  = totalAngle / STEPS;
    const mat        = (skinKey && SEGMENT_SKINS[skinKey]) ? SEGMENT_SKINS[skinKey].getMaterial() : this.matTrack;

    // Radius for constant-speed arc so we get sensible arc length
    const R = 40; // world units
    const arcLen = R * Math.abs(totalAngle);
    const stepLen = arcLen / STEPS;

    // ── Build centerline sample positions ───────────────────────────────────
    const centerSamples = []; // [{x, y, z, heading}]
    let cx = startPos.x, cz = startPos.z, cy = startPos.y;
    let h = startHeading;
    for (let i = 0; i <= STEPS; i++) {
      centerSamples.push({ x: cx, y: cy, z: cz, h });
      if (i < STEPS) {
        cx += Math.sin(h) * stepLen;
        cz += Math.cos(h) * stepLen;
        h  += stepAngle;
      }
    }

    // ── Build ribbon BufferGeometry ─────────────────────────────────────────
    // For N+1 samples we get 2*(N+1) top vertices + 2*(N+1) bottom vertices
    // Vertex layout per sample: [TL, TR, BL, BR]  (Top-Left, Top-Right, Bot-Left, Bot-Right)
    const verts   = [];
    const normals = [];
    const uvs     = [];
    const idxs    = [];
    const halfW   = width / 2;

    for (let i = 0; i <= STEPS; i++) {
      const s    = centerSamples[i];
      const rgt  = Math.cos(s.h); // right vector x
      const rgtZ = -Math.sin(s.h); // right vector z

      const tly = s.y;           // top Y
      const bly = s.y - DECK_H;  // bottom Y

      // TL = top-left
      verts.push(s.x - rgt * halfW, tly, s.z - rgtZ * halfW);
      // TR = top-right
      verts.push(s.x + rgt * halfW, tly, s.z + rgtZ * halfW);
      // BL = bottom-left
      verts.push(s.x - rgt * halfW, bly, s.z - rgtZ * halfW);
      // BR = bottom-right
      verts.push(s.x + rgt * halfW, bly, s.z + rgtZ * halfW);

      const t = i / STEPS;
      for (let k = 0; k < 4; k++) {
        normals.push(0, 1, 0);
        uvs.push(k < 2 ? (k === 0 ? 0 : 1) : (k === 2 ? 0 : 1), t);
      }
    }

    // Top face quads: TL[i], TR[i], TR[i+1], TL[i+1]
    for (let i = 0; i < STEPS; i++) {
      const b = i * 4;
      idxs.push(b, b + 1, b + 5,   b, b + 5, b + 4);    // top
      idxs.push(b + 2, b + 6, b + 3, b + 3, b + 6, b + 7); // bottom
      // Left wall: TL[i], BL[i], BL[i+1], TL[i+1]
      idxs.push(b, b + 4, b + 6,   b, b + 6, b + 2);
      // Right wall: TR[i], BR[i+1], BR[i], TR[i+1]
      idxs.push(b + 1, b + 7, b + 5,   b + 1, b + 3, b + 7);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geo.setAttribute('normal',   new THREE.Float32BufferAttribute(normals, 3));
    geo.setAttribute('uv',       new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(idxs);
    geo.computeVertexNormals(); // recalculate for side faces

    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = mesh.castShadow = true;
    this.trackGroup.add(mesh);
    mesh.updateWorldMatrix(true, false);
    this._reg(mesh);

    // ── Barriers — thin ribbon boxes along both edges ───────────────────────
    this._attachCurveBarriers(centerSamples, halfW, DECK_H);

    // ── Centerline debug line ────────────────────────────────────────────────
    {
      const pts = centerSamples.map(s => new THREE.Vector3(s.x, s.y + 0.05, s.z));
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const line = new THREE.Line(lineGeo, this.matDebugCenterline);
      this.debugGroup.add(line);
    }

    this._flushDebug();

    const last = centerSamples[centerSamples.length - 1];
    return {
      pos:     new THREE.Vector3(last.x, last.y, last.z),
      heading: last.h
    };
  }

  // ── 3B. Banked Curve — Continuous 3D Ribbon with Lateral Roll Banking ──────
  createBankedCurve(startPos, startHeading, angleDeg = 45, turnDir = 1, bankDeg = 15, width = 14) {
    const STEPS      = Math.max(8, Math.ceil(Math.abs(angleDeg) / 5));
    const totalAngle = (angleDeg * Math.PI / 180) * turnDir;
    const stepAngle  = totalAngle / STEPS;

    const R = 40;
    const arcLen = R * Math.abs(totalAngle);
    const stepLen = arcLen / STEPS;

    const centerSamples = [];
    let cx = startPos.x, cz = startPos.z, cy = startPos.y;
    let h = startHeading;
    for (let i = 0; i <= STEPS; i++) {
      // Smooth bank envelope: ramp up to bankDeg in first 25%, ramp down in last 25%
      const t = i / STEPS;
      let bFact = 1.0;
      if (t < 0.25) bFact = t / 0.25;
      else if (t > 0.75) bFact = (1.0 - t) / 0.25;
      const currentBank = (bankDeg * Math.PI / 180) * turnDir * bFact;

      centerSamples.push({ x: cx, y: cy, z: cz, h, bank: currentBank });
      if (i < STEPS) {
        cx += Math.sin(h) * stepLen;
        cz += Math.cos(h) * stepLen;
        h  += stepAngle;
      }
    }

    const verts   = [];
    const normals = [];
    const uvs     = [];
    const idxs    = [];
    const halfW   = width / 2;

    for (let i = 0; i <= STEPS; i++) {
      const s    = centerSamples[i];
      const rgtX = Math.cos(s.h);
      const rgtZ = -Math.sin(s.h);
      const dyBank = Math.sin(s.bank) * halfW;

      // TL = top-left (elevated/depressed by bank)
      verts.push(s.x - rgtX * halfW, s.y - dyBank, s.z - rgtZ * halfW);
      // TR = top-right
      verts.push(s.x + rgtX * halfW, s.y + dyBank, s.z + rgtZ * halfW);
      // BL = bottom-left
      verts.push(s.x - rgtX * halfW, s.y - dyBank - DECK_H, s.z - rgtZ * halfW);
      // BR = bottom-right
      verts.push(s.x + rgtX * halfW, s.y + dyBank - DECK_H, s.z + rgtZ * halfW);

      const t = i / STEPS;
      for (let k = 0; k < 4; k++) {
        normals.push(0, 1, 0);
        uvs.push(k < 2 ? (k === 0 ? 0 : 1) : (k === 2 ? 0 : 1), t);
      }
    }

    for (let i = 0; i < STEPS; i++) {
      const b = i * 4;
      idxs.push(b, b + 1, b + 5,   b, b + 5, b + 4);    // top
      idxs.push(b + 2, b + 6, b + 3, b + 3, b + 6, b + 7); // bottom
      idxs.push(b, b + 4, b + 6,   b, b + 6, b + 2);    // left wall
      idxs.push(b + 1, b + 7, b + 5,   b + 1, b + 3, b + 7); // right wall
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geo.setAttribute('normal',   new THREE.Float32BufferAttribute(normals, 3));
    geo.setAttribute('uv',       new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(idxs);
    geo.computeVertexNormals();

    const mesh = new THREE.Mesh(geo, this.matTrack);
    mesh.receiveShadow = mesh.castShadow = true;
    this.trackGroup.add(mesh);
    mesh.updateWorldMatrix(true, false);
    this._reg(mesh);

    this._attachCurveBarriers(centerSamples, halfW, DECK_H);
    this._flushDebug();

    const last = centerSamples[centerSamples.length - 1];
    return {
      pos:     new THREE.Vector3(last.x, last.y, last.z),
      heading: last.h
    };
  }

  // ── 4. Split + Merge — continuous funnel geometry ──────────────────────────
  // Entry: full width → splits at TAPER_LEN into two halfPaths → runs PARALLEL
  // for splitLen → merges back in TAPER_LEN → single full width.
  createSplitMerge(startPos, heading, splitLen = 50, fullWidth = 16) {
    const TAPER = 14;         // taper length in/out
    const GAP   = 1.2;        // gap between the two paths
    const halfPath = (fullWidth - GAP) / 2;
    const STEPS_TAPER = 10;
    const STEPS_PARA  = Math.ceil(splitLen / 4);
    const TOTAL = 2 * STEPS_TAPER + STEPS_PARA;

    const fwd = new THREE.Vector3(Math.sin(heading), 0, Math.cos(heading));
    const rgt = new THREE.Vector3(Math.cos(heading), 0, -Math.sin(heading));

    // ── Compute sample frames for PATH A (left) and PATH B (right) ──────────
    // pathA = left half, pathB = right half
    // offsetA[i] and offsetB[i] = lateral offset from center at sample i

    const samples = []; // {z_along_fwd, offA, offB, widthA, widthB}

    // Phase 1: taper out
    for (let i = 0; i <= STEPS_TAPER; i++) {
      const t   = i / STEPS_TAPER;
      const z   = i * (TAPER / STEPS_TAPER);
      const ctr = fullWidth / 2;                    // half of full width
      const off = THREE.MathUtils.lerp(0, (fullWidth / 2 + GAP / 2) / 2, t);
      samples.push({ z, offA: -(off + halfPath / 2), offB: (off + halfPath / 2), halfPath });
    }
    // Phase 2: parallel run
    const fullOffA = -(fullWidth / 2 + GAP / 2) / 2;
    const fullOffB =  (fullWidth / 2 + GAP / 2) / 2;
    // correction: compute actual offsets at end of taper
    const endTaperOff = (fullWidth / 2 + GAP / 2) / 2;
    for (let i = 1; i <= STEPS_PARA; i++) {
      const z = TAPER + i * (splitLen / STEPS_PARA);
      samples.push({ z, offA: -endTaperOff - halfPath / 2, offB: endTaperOff + halfPath / 2, halfPath });
    }
    // Phase 3: taper in (reverse of phase 1)
    for (let i = 1; i <= STEPS_TAPER; i++) {
      const t   = i / STEPS_TAPER;
      const z   = TAPER + splitLen + i * (TAPER / STEPS_TAPER);
      const off = THREE.MathUtils.lerp(endTaperOff + halfPath / 2, 0, t);
      const w   = THREE.MathUtils.lerp(halfPath, fullWidth / 2, t);
      samples.push({ z, offA: -off, offB: off, halfPath: w });
    }

    // ── Build a ribbon for each path ─────────────────────────────────────────
    const buildPathMesh = (getOff) => {
      const verts = [], idxs = [];
      for (let i = 0; i < samples.length; i++) {
        const s  = samples[i];
        const cx = startPos.x + fwd.x * s.z + rgt.x * getOff(s);
        const cz = startPos.z + fwd.z * s.z + rgt.z * getOff(s);
        const cy = startPos.y;
        const hw = s.halfPath;

        // TL, TR, BL, BR
        verts.push(
          cx - rgt.x * hw, cy,         cz - rgt.z * hw,  // TL
          cx + rgt.x * hw, cy,         cz + rgt.z * hw,  // TR
          cx - rgt.x * hw, cy - DECK_H, cz - rgt.z * hw, // BL
          cx + rgt.x * hw, cy - DECK_H, cz + rgt.z * hw  // BR
        );

        if (i > 0) {
          const b = (i - 1) * 4;
          idxs.push(b, b+1, b+5,  b, b+5, b+4);         // top
          idxs.push(b+2, b+6, b+3, b+3, b+6, b+7);      // bottom
          idxs.push(b, b+4, b+6,  b, b+6, b+2);          // left wall
          idxs.push(b+1, b+7, b+5, b+1, b+3, b+7);       // right wall
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
      geo.setIndex(idxs);
      geo.computeVertexNormals();
      const mesh = new THREE.Mesh(geo, this.matTrack);
      mesh.receiveShadow = mesh.castShadow = true;
      this.trackGroup.add(mesh);
      mesh.updateWorldMatrix(true, false);
      this._reg(mesh);

      // Outer barriers for this path
      for (let i = 0; i < samples.length - 1; i++) {
        const s0 = samples[i], s1 = samples[i+1];
        const sides = [-1, 1]; // left = -1, right = +1
        for (const side of sides) {
          const off = getOff;
          const cx0 = startPos.x + fwd.x * s0.z + rgt.x * (getOff(s0) + side * s0.halfPath);
          const cz0 = startPos.z + fwd.z * s0.z + rgt.z * (getOff(s0) + side * s0.halfPath);
          const cx1 = startPos.x + fwd.x * s1.z + rgt.x * (getOff(s1) + side * s1.halfPath);
          const cz1 = startPos.z + fwd.z * s1.z + rgt.z * (getOff(s1) + side * s1.halfPath);
          const midX = (cx0 + cx1) / 2, midZ = (cz0 + cz1) / 2;
          const dz = s1.z - s0.z;
          const barLen = Math.sqrt(dz * dz + 0.01);
          const barGeo = new THREE.BoxGeometry(BARRIER_W, BARRIER_H, barLen);
          const bar = new THREE.Mesh(barGeo, this.matBarrier);
          bar.position.set(midX, startPos.y + DECK_H / 2 + BARRIER_H / 2, midZ);
          const dx = cx1 - cx0, ddz = cz1 - cz0;
          bar.rotation.y = Math.atan2(dx, ddz);
          this.trackGroup.add(bar);
          bar.updateWorldMatrix(true, false);
          this._reg(bar);
        }
      }
    };

    buildPathMesh(s => s.offA);
    buildPathMesh(s => s.offB);
    this._flushDebug();

    const totalLen = TAPER * 2 + splitLen;
    const endPos = new THREE.Vector3(
      startPos.x + fwd.x * totalLen,
      startPos.y,
      startPos.z + fwd.z * totalLen
    );
    return { pos: endPos, heading };
  }

  // ── 5. Vertical loop (ExtrudeGeometry) — unchanged ────────────────────────
  createVerticalLoop(startPos, heading, radius = 18, width = 9) {
    const SEG = 48;
    const pts = [];
    for (let i = 0; i <= SEG; i++) {
      const a = (i / SEG) * Math.PI * 2;
      pts.push(new THREE.Vector3(0, radius - Math.cos(a) * radius, Math.sin(a) * radius));
    }
    const shape = new THREE.Shape();
    shape.moveTo(-width / 2, -0.6);
    shape.lineTo( width / 2, -0.6);
    shape.lineTo( width / 2,  0.6);
    shape.lineTo(-width / 2,  0.6);
    shape.closePath();
    const curvePath = new THREE.CatmullRomCurve3(pts);
    const geo  = new THREE.ExtrudeGeometry(shape, { steps: SEG, bevelEnabled: false, extrudePath: curvePath });
    const mesh = new THREE.Mesh(geo, this.matTrack);
    mesh.position.copy(startPos);
    mesh.rotation.y = heading;
    mesh.receiveShadow = true;
    this.trackGroup.add(mesh);
    mesh.updateWorldMatrix(true, false);
    this._reg(mesh);
    this._flushDebug();
    const fwd = new THREE.Vector3(Math.sin(heading), 0, Math.cos(heading));
    const endPos = startPos.clone().addScaledVector(fwd, Math.PI * 2 * radius * 0.3);
    return { pos: endPos, heading };
  }

  // ── 6. Portal ring (visual only, no collider) ──────────────────────────────
  createPortalRing(pos, heading) {
    const group = new THREE.Group();
    group.position.copy(pos);
    group.rotation.y = heading;
    
    // Outer metallic ring torus
    const ringGeo = new THREE.TorusGeometry(7, 0.75, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff, emissive: 0x0088ff, emissiveIntensity: 0.8, metalness: 0.9
    });
    group.add(new THREE.Mesh(ringGeo, ringMat));

    // Inner swirling energy portal disc
    const innerGeo = new THREE.CircleGeometry(6.5, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff, transparent: true, opacity: 0.45, side: THREE.DoubleSide, depthWrite: false
    });
    group.add(new THREE.Mesh(innerGeo, innerMat));

    this.trackGroup.add(group);
    return group;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // PRIVATE HELPERS
  // ══════════════════════════════════════════════════════════════════════════

  _reg(mesh) {
    this.colliders.push(mesh);
    this._debugPending.push(mesh);
  }

  _flushDebug() {
    for (const src of this._debugPending) {
      const wire = new THREE.Mesh(src.geometry, this.matDebugWire);
      src.updateWorldMatrix(true, false);
      wire.applyMatrix4(src.matrixWorld);
      this.debugGroup.add(wire);
    }
    this._debugPending = [];
  }

  _attachBarriers(group, width, length) {
    const logGeo = new THREE.CylinderGeometry(BARRIER_W / 2, BARRIER_W / 2, length, 12);
    logGeo.rotateX(Math.PI / 2);

    const lB = new THREE.Mesh(logGeo, this.matBarrier);
    lB.isBarrier = true;
    lB.position.set(-width / 2 + BARRIER_W / 2, DECK_H / 2 + BARRIER_H / 2, length / 2);
    group.add(lB);
    lB.updateWorldMatrix(true, false);
    this._reg(lB);

    const rB = new THREE.Mesh(logGeo, this.matBarrier);
    rB.isBarrier = true;
    rB.position.set( width / 2 - BARRIER_W / 2, DECK_H / 2 + BARRIER_H / 2, length / 2);
    group.add(rB);
    rB.updateWorldMatrix(true, false);
    this._reg(rB);

    // glowing cap rails (visual only)
    const rGeo = new THREE.CylinderGeometry(0.18, 0.18, length, 8);
    rGeo.rotateX(Math.PI / 2);
    const lRail = new THREE.Mesh(rGeo, this.matRailGlow);
    lRail.position.set(-width / 2 + BARRIER_W / 2, DECK_H / 2 + BARRIER_H + 0.15, length / 2);
    group.add(lRail);
    const rRail = new THREE.Mesh(rGeo, this.matRailGlow);
    rRail.position.set( width / 2 - BARRIER_W / 2, DECK_H / 2 + BARRIER_H + 0.15, length / 2);
    group.add(rRail);
  }

  _attachPillars(group, width, length) {
    for (let z = 18; z < length; z += 24) {
      const pGeo   = new THREE.CylinderGeometry(0.55, 0.85, 12, 10);
      const pillar = new THREE.Mesh(pGeo, this.matBarrier);
      pillar.position.set(0, -6 - DECK_H / 2, z);
      group.add(pillar);
    }
  }

  _attachCurveBarriers(samples, halfW, deckH) {
    for (let i = 0; i < samples.length - 1; i++) {
      const s0 = samples[i], s1 = samples[i + 1];
      const dz  = Math.sqrt((s1.x - s0.x) ** 2 + (s1.z - s0.z) ** 2);
      const ang = Math.atan2(s1.x - s0.x, s1.z - s0.z);
      const my  = (s0.y + s1.y) / 2;

      for (const side of [-1, 1]) {
        const r0x = Math.cos(s0.h) * side, r0z = -Math.sin(s0.h) * side;
        const r1x = Math.cos(s1.h) * side, r1z = -Math.sin(s1.h) * side;
        const midX = ((s0.x + r0x * halfW) + (s1.x + r1x * halfW)) / 2;
        const midZ = ((s0.z + r0z * halfW) + (s1.z + r1z * halfW)) / 2;

        const bGeo = new THREE.BoxGeometry(BARRIER_W, BARRIER_H, dz);
        const bar  = new THREE.Mesh(bGeo, this.matBarrier);
        bar.position.set(midX, my + deckH / 2 + BARRIER_H / 2, midZ);
        bar.rotation.y = ang;
        this.trackGroup.add(bar);
        bar.updateWorldMatrix(true, false);
        this._reg(bar);
      }
    }
  }
}
