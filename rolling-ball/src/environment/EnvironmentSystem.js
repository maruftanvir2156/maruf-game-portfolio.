// EnvironmentSystem v15 — ALL 7 WORLD WORLDS COMPLETE (WORLD 1 TO WORLD 7)
import * as THREE from 'three';

export const ENV_WORLDS = {
  WORLD_1_SKY_HAVEN: {
    id: 'WORLD_1_SKY_HAVEN',
    name: 'SKY HAVEN',
    skyTop: '#1e90ff', skyBot: '#87ceeb',
    fogColor: 0x87ceeb, fogNear: 150, fogFar: 900,
    sunColor: 0xffffff, sunIntensity: 1.3, sunPos: [100, 200, 50],
    ambColor: 0xb0e0e6, ambIntensity: 0.5,
    trackColor: 0xf0f4f8, railColor: 0x00f0ff
  },
  WORLD_2_RURAL_VALLEY: {
    id: 'WORLD_2_RURAL_VALLEY',
    name: 'LUSH RURAL VALLEY',
    skyTop: '#4ac5d8', skyBot: '#7ed6df',
    fogColor: 0xa3e2c9, fogNear: 120, fogFar: 850,
    sunColor: 0xfff5e6, sunIntensity: 1.2, sunPos: [120, 180, -60],
    ambColor: 0xd1f2eb, ambIntensity: 0.6,
    trackColor: 0xf39c12, railColor: 0x4e342e
  },
  WORLD_3_CYBERPUNK: {
    id: 'WORLD_3_CYBERPUNK',
    name: 'NEON METROPOLIS',
    skyTop: '#05050a', skyBot: '#0a0f24',
    fogColor: 0x0a0f24, fogExp2: 0.003,
    sunColor: 0x1a237e, sunIntensity: 0.6, sunPos: [0, 150, -50],
    ambColor: 0x0d1b2a, ambIntensity: 0.3,
    trackColor: 0x111118, railColor: 0x00f0ff, railRightColor: 0xff007f
  },
  WORLD_4_VOLCANIC: {
    id: 'WORLD_4_VOLCANIC',
    name: 'VOLCANIC WASTELAND',
    skyTop: '#1a0505', skyBot: '#3a0a05',
    fogColor: 0x2b0d0d, fogExp2: 0.004,
    sunColor: 0xff5500, sunIntensity: 0.8, sunPos: [0, 160, -50],
    ambColor: 0x2b0a0a, ambIntensity: 0.4,
    trackColor: 0x1f1a1a, railColor: 0xff3300
  },
  WORLD_5_MISTY_PEAKS: {
    id: 'WORLD_5_MISTY_PEAKS',
    name: 'ANCIENT MISTY PEAKS',
    skyTop: '#7a8b9e', skyBot: '#b0c4de',
    fogColor: 0xc2d1e0, fogExp2: 0.005,
    sunColor: 0xe6f2ff, sunIntensity: 1.0, sunPos: [80, 160, 40],
    ambColor: 0x8c9eff, ambIntensity: 0.5,
    trackColor: 0x4a525d, railColor: 0x8b0000
  },
  WORLD_6_GOLDEN_DESERT: {
    id: 'WORLD_6_GOLDEN_DESERT',
    name: 'GOLDEN CANYON',
    skyTop: '#4a154b', skyBot: '#ff6600',
    fogColor: 0xdba24a, fogExp2: 0.0035,
    sunColor: 0xffaa33, sunIntensity: 1.4, sunPos: [150, 100, -80],
    ambColor: 0xcc6633, ambIntensity: 0.5,
    trackColor: 0xba683c, railColor: 0x5c3a21
  },
  WORLD_7_COSMIC_VOID: {
    id: 'WORLD_7_COSMIC_VOID',
    name: 'COSMIC AURORA VOID',
    skyTop: '#020208', skyBot: '#050212',
    fogColor: null,
    sunColor: 0x7fffd4, sunIntensity: 1.2, sunPos: [100, 200, 100],
    ambColor: 0x4b0082, ambIntensity: 0.5,
    trackColor: 0x2e0854, railColor: 0x00ffff, railRightColor: 0xff00ff
  }
};

function makeVolumetricCloudTexture() {
  const SIZE = 512;
  const c = document.createElement('canvas');
  c.width = c.height = SIZE;
  const ctx = c.getContext('2d');

  const puffs = [
    { x: 256, y: 280, r: 180, a: 0.90 },
    { x: 160, y: 260, r: 130, a: 0.85 },
    { x: 350, y: 250, r: 120, a: 0.85 },
    { x: 220, y: 190, r: 110, a: 0.90 },
    { x: 300, y: 200, r: 100, a: 0.85 }
  ];

  for (const p of puffs) {
    const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
    g.addColorStop(0,   `rgba(255, 255, 255, ${p.a})`);
    g.addColorStop(0.5, `rgba(240, 248, 255, ${p.a * 0.6})`);
    g.addColorStop(1,   'rgba(255, 255, 255, 0.0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

function makeNeonWindowTexture() {
  const SIZE = 256;
  const c = document.createElement('canvas');
  c.width = c.height = SIZE;
  const ctx = c.getContext('2d');

  ctx.fillStyle = '#121218';
  ctx.fillRect(0, 0, SIZE, SIZE);

  const colors = ['#00f0ff', '#ff007f', '#ffaa00', '#121218', '#121218'];
  const cols = 8, rows = 16;
  const w = SIZE / cols, h = SIZE / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const col = colors[Math.floor(Math.random() * colors.length)];
      ctx.fillStyle = col;
      ctx.fillRect(c * w + 4, r * h + 4, w - 8, h - 8);
    }
  }
  return new THREE.CanvasTexture(c);
}

export class EnvironmentSystem {
  constructor(scene, renderer) {
    this.scene    = scene;
    this.renderer = renderer;

    this.currentZone = ENV_WORLDS.WORLD_1_SKY_HAVEN;
    this.cloudTex    = makeVolumetricCloudTexture();
    this.windowTex   = makeNeonWindowTexture();

    // Environment root groups
    this.envGroup   = new THREE.Group();
    this.cloudDeck  = new THREE.Group();
    this.propsGroup = new THREE.Group();
    this.billboards = [];
    this.windmills  = [];
    this.lanterns   = [];
    this.asteroids  = [];
    this.auroraRibbons = [];

    this.scene.add(this.envGroup);
    this.envGroup.add(this.cloudDeck);
    this.envGroup.add(this.propsGroup);

    // Directional Sunlight & Accent Lights
    this.dirLight = new THREE.DirectionalLight(0xffffff, 1.3);
    this.dirLight.position.set(100, 200, 50);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width  = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
    this.dirLight.shadow.bias = -0.0001;
    this.scene.add(this.dirLight);

    this.ambLight = new THREE.AmbientLight(0xb0e0e6, 0.5);
    this.scene.add(this.ambLight);

    // Accent Lights
    this.cyanPointLight = new THREE.PointLight(0x00f0ff, 2.5, 500);
    this.cyanPointLight.position.set(100, -50, -200);
    this.scene.add(this.cyanPointLight);

    this.magentaPointLight = new THREE.PointLight(0xff007f, 2.5, 500);
    this.magentaPointLight.position.set(-100, -50, -500);
    this.scene.add(this.magentaPointLight);

    this.lavaPointLight = new THREE.PointLight(0xff3300, 3.0, 600);
    this.lavaPointLight.position.set(0, -80, -200);
    this.scene.add(this.lavaPointLight);

    this._applyZone(this.currentZone);
  }

  _applyZone(zone) {
    this.currentZone = zone;
    while (this.propsGroup.children.length) {
      const c = this.propsGroup.children[0];
      if (c.geometry) c.geometry.dispose();
      this.propsGroup.remove(c);
    }
    this.billboards = [];
    this.windmills  = [];
    this.lanterns   = [];
    this.asteroids  = [];
    this.auroraRibbons = [];

    // Sky & Fog
    this._buildSkyDome(zone);
    if (zone.fogColor === null) {
      this.scene.fog = null;
    } else {
      this.scene.fog = new THREE.Fog(zone.fogColor, zone.fogNear || 200, zone.fogFar || 1000);
    }

    this.dirLight.color.set(zone.sunColor);
    this.dirLight.intensity = zone.sunIntensity;
    this.dirLight.position.set(...zone.sunPos);
    this.ambLight.color.set(zone.ambColor);
    this.ambLight.intensity = zone.ambIntensity;

    if (zone.id === 'WORLD_7_COSMIC_VOID') {
      this.cyanPointLight.visible = true;
      this.magentaPointLight.visible = true;
      this.lavaPointLight.visible = false;
      this._buildCosmicVoid();
    } else if (zone.id === 'WORLD_6_GOLDEN_DESERT') {
      this.cyanPointLight.visible = false;
      this.magentaPointLight.visible = false;
      this.lavaPointLight.visible = false;
      this._buildGoldenDesert();
    } else if (zone.id === 'WORLD_5_MISTY_PEAKS') {
      this.cyanPointLight.visible = false;
      this.magentaPointLight.visible = false;
      this.lavaPointLight.visible = false;
      this._buildMistyPeaks();
    } else if (zone.id === 'WORLD_4_VOLCANIC') {
      this.cyanPointLight.visible = false;
      this.magentaPointLight.visible = false;
      this.lavaPointLight.visible = true;
      this._buildVolcanicWasteland();
    } else if (zone.id === 'WORLD_3_CYBERPUNK') {
      this.cyanPointLight.visible = true;
      this.magentaPointLight.visible = true;
      this.lavaPointLight.visible = false;
      this._buildCyberpunkMetropolis();
    } else if (zone.id === 'WORLD_2_RURAL_VALLEY') {
      this.cyanPointLight.visible = false;
      this.magentaPointLight.visible = false;
      this.lavaPointLight.visible = false;
      this._buildRuralValley();
    } else {
      this.cyanPointLight.visible = false;
      this.magentaPointLight.visible = false;
      this.lavaPointLight.visible = false;
      this._buildSkyHaven();
    }
  }

  _buildSkyDome(zone) {
    if (this.skyMesh) {
      this.scene.remove(this.skyMesh);
      this.skyMesh = null;
    }
    this.scene.background = new THREE.Color(zone.skyBot || 0x87ceeb);
  }

  // ── WORLD 1: SKY HAVEN BUILDER ────────────────────────────────────────────
  _buildSkyHaven() {
    const cloudMat = new THREE.MeshBasicMaterial({
      map: this.cloudTex, transparent: true, opacity: 0.85, depthWrite: false, fog: true
    });
    const planeGeo = new THREE.PlaneGeometry(80, 80);

    for (let i = 0; i < 36; i++) {
      const cluster = new THREE.Group();
      for (let p = 0; p < 3; p++) {
        const cloud = new THREE.Mesh(planeGeo, cloudMat);
        cloud.rotation.x = -Math.PI / 2;
        cloud.position.set((Math.random() - 0.5) * 40, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 40);
        cluster.add(cloud);
      }
      const ang = (i / 36) * Math.PI * 2;
      const r   = 180 + (i % 6) * 70;
      cluster.position.set(Math.cos(ang) * r, -85 - (i % 4) * 10, Math.sin(ang) * r + i * 25);
      this.propsGroup.add(cluster);
    }

    const spireMat = new THREE.MeshStandardMaterial({ color: 0xf0f4f8, roughness: 0.25, metalness: 0.4 });
    for (let i = 0; i < 14; i++) {
      const h = 180 + (i % 5) * 35;
      const spire = new THREE.Mesh(new THREE.CylinderGeometry(2, 8, h, 8), spireMat);
      const ang = (i / 14) * Math.PI * 2 + 0.2;
      const r   = 350 + (i % 3) * 120;
      spire.position.set(Math.cos(ang) * r, h / 2 - 90, Math.sin(ang) * r);
      this.propsGroup.add(spire);
    }
  }

  // ── WORLD 2: LUSH RURAL VALLEY BUILDER ─────────────────────────────────────
  _buildRuralValley() {
    const hillGeo = new THREE.PlaneGeometry(1200, 1200, 32, 32);
    hillGeo.rotateX(-Math.PI / 2);

    const posAttr = hillGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const z = posAttr.getZ(i);
      const h = Math.sin(x * 0.01) * Math.cos(z * 0.01) * 25 + Math.sin(x * 0.03) * 10;
      posAttr.setY(i, h);
    }
    hillGeo.computeVertexNormals();

    const hillMat = new THREE.MeshStandardMaterial({ color: 0x419d78, flatShading: true, roughness: 0.8 });
    const hills = new THREE.Mesh(hillGeo, hillMat);
    hills.position.y = -105;
    this.propsGroup.add(hills);

    const riverGeo = new THREE.PlaneGeometry(80, 1200, 8, 32);
    riverGeo.rotateX(-Math.PI / 2);
    const riverMat = new THREE.MeshStandardMaterial({
      color: 0x2980b9, metalness: 0.6, roughness: 0.1, opacity: 0.85, transparent: true
    });
    const river = new THREE.Mesh(riverGeo, riverMat);
    river.position.set(-60, -104, 0);
    this.propsGroup.add(river);

    const trunkMat   = new THREE.MeshStandardMaterial({ color: 0x4e342e, roughness: 0.9 });
    const foliageMat1 = new THREE.MeshStandardMaterial({ color: 0x1b5e20, flatShading: true, roughness: 0.8 });
    const foliageMat2 = new THREE.MeshStandardMaterial({ color: 0x33691e, flatShading: true, roughness: 0.8 });

    for (let i = 0; i < 84; i++) {
      const tree = new THREE.Group();
      const fMat = i % 2 === 0 ? foliageMat1 : foliageMat2;
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.2, 10, 6), trunkMat);
      trunk.position.y = 5;
      tree.add(trunk);

      for (let t = 0; t < 3; t++) {
        const cone = new THREE.Mesh(new THREE.ConeGeometry(7 - t * 1.5, 12, 6), fMat);
        cone.position.y = 10 + t * 6;
        tree.add(cone);
      }

      const ang = (i / 84) * Math.PI * 2;
      const r   = 160 + (i % 6) * 55;
      tree.position.set(Math.cos(ang) * r, -95, Math.sin(ang) * r + i * 20);
      tree.scale.setScalar(1.0 + Math.random() * 0.6);
      this.propsGroup.add(tree);
    }

    // 3D Mountain Boulders
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x6c7a89, flatShading: true, roughness: 0.9 });
    const rockGeo = new THREE.DodecahedronGeometry(12, 0);
    for (let i = 0; i < 30; i++) {
      const rock = new THREE.Mesh(rockGeo, rockMat);
      const ang = (i / 30) * Math.PI * 2 + 0.3;
      const r = 220 + (i % 4) * 80;
      rock.position.set(Math.cos(ang) * r, -98, Math.sin(ang) * r + i * 30);
      rock.scale.set(1 + Math.random(), 0.8 + Math.random(), 1 + Math.random());
      rock.rotation.set(Math.random() * 3, Math.random() * 3, 0);
      this.propsGroup.add(rock);
    }
  }

  // ── WORLD 3: CYBERPUNK NEON METROPOLIS BUILDER ────────────────────────────
  _buildCyberpunkMetropolis() {
    const buildingMat = new THREE.MeshStandardMaterial({
      color: 0x121218, map: this.windowTex, metalness: 0.9, roughness: 0.2
    });

    for (let i = 0; i < 64; i++) {
      const w = 25 + (i % 4) * 10;
      const d = 25 + (i % 3) * 10;
      const h = 140 + (i % 6) * 30;

      const building = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), buildingMat);
      const ang = (i / 64) * Math.PI * 2;
      const r   = 180 + (i % 5) * 60;
      building.position.set(Math.cos(ang) * r, -110 + h / 2, Math.sin(ang) * r + i * 20);
      this.propsGroup.add(building);
    }

    const bbMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false
    });
    const bbGeo = new THREE.PlaneGeometry(35, 18);

    for (let i = 0; i < 14; i++) {
      const bb = new THREE.Mesh(bbGeo, bbMat);
      const ang = (i / 14) * Math.PI * 2 + 0.3;
      const r   = 220 + (i % 3) * 70;
      bb.position.set(Math.cos(ang) * r, -20 + (i % 4) * 20, Math.sin(ang) * r + i * 25);
      bb.rotation.y = ang;
      this.propsGroup.add(bb);
      this.billboards.push(bb);
    }
  }

  // ── WORLD 4: APOCALYPTIC VOLCANIC WASTELAND BUILDER ───────────────────────
  _buildVolcanicWasteland() {
    const basaltMat = new THREE.MeshStandardMaterial({
      color: 0x181414, flatShading: true, roughness: 0.9, metalness: 0.2
    });
    const cliffGeo = new THREE.BoxGeometry(60, 200, 100);

    for (let i = 0; i < 24; i++) {
      const cliffLeft  = new THREE.Mesh(cliffGeo, basaltMat);
      cliffLeft.position.set(-130, -50, -400 + i * 80);
      cliffLeft.rotation.y = (i * 0.3);
      this.propsGroup.add(cliffLeft);

      const cliffRight = new THREE.Mesh(cliffGeo, basaltMat);
      cliffRight.position.set(130, -50, -400 + i * 80);
      cliffRight.rotation.y = -(i * 0.3);
      this.propsGroup.add(cliffRight);
    }

    const lavaGeo = new THREE.PlaneGeometry(160, 1200);
    lavaGeo.rotateX(-Math.PI / 2);
    const lavaMat = new THREE.MeshStandardMaterial({
      color: 0xff3300, emissive: 0xff2200, emissiveIntensity: 1.5, roughness: 0.2
    });
    const lavaRiver = new THREE.Mesh(lavaGeo, lavaMat);
    lavaRiver.position.set(0, -120, 0);
    this.propsGroup.add(lavaRiver);
  }

  // ── WORLD 5: ANCIENT MISTY PEAKS BUILDER ──────────────────────────────────
  _buildMistyPeaks() {
    const graniteMat = new THREE.MeshStandardMaterial({ color: 0x3a4146, flatShading: true, roughness: 0.8 });
    for (let i = 0; i < 28; i++) {
      const h = 160 + (i % 5) * 35;
      const spire = new THREE.Mesh(new THREE.CylinderGeometry(4, 16, h, 6), graniteMat);
      const ang = (i / 28) * Math.PI * 2 + 0.1;
      const r   = 140 + (i % 4) * 45;
      spire.position.set(Math.cos(ang) * r, h / 2 - 120, Math.sin(ang) * r + i * 20);
      this.propsGroup.add(spire);
    }
  }

  // ── WORLD 6: SUNSET SANDSTONE CANYON BUILDER ──────────────────────────────
  _buildGoldenDesert() {
    const mesaMat = new THREE.MeshStandardMaterial({ color: 0xba683c, flatShading: true, roughness: 0.85 });
    for (let i = 0; i < 36; i++) {
      const w = 40 + (i % 4) * 15;
      const d = 50 + (i % 3) * 20;
      const h = 120 + (i % 5) * 25;
      const mesa = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mesaMat);
      const ang = (i / 36) * Math.PI * 2 + 0.2;
      const r   = 150 + (i % 4) * 50;
      mesa.position.set(Math.cos(ang) * r, -100 + h / 2, Math.sin(ang) * r + i * 20);
      this.propsGroup.add(mesa);
    }
  }

  // ── WORLD 7: COSMIC AURORA VOID BUILDER (THE CAMPAIGN FINALE) ──────────────
  _buildCosmicVoid() {
    // 1. Shimmering Aurora Ribbon Meshes (Purple & Emerald Green)
    const auroraMat = new THREE.MeshBasicMaterial({
      color: 0x8a2be2, transparent: true, opacity: 0.65, side: THREE.DoubleSide, depthWrite: false
    });
    const ribbonGeo = new THREE.PlaneGeometry(1200, 150, 32, 16);

    for (let i = 0; i < 4; i++) {
      const ribbon = new THREE.Mesh(ribbonGeo, auroraMat);
      ribbon.rotation.x = Math.PI / 4;
      ribbon.position.set((i % 2 === 0 ? -120 : 120), 40 + i * 30, i * 250);
      this.propsGroup.add(ribbon);
      this.auroraRibbons.push(ribbon);
    }

    // 2. 50+ Floating Crystalline Asteroids
    const asteroidMat = new THREE.MeshStandardMaterial({
      color: 0x1a102f, roughness: 0.4, metalness: 0.8, flatShading: true
    });

    for (let i = 0; i < 52; i++) {
      const r = 8 + (i % 5) * 6;
      const ast = new THREE.Mesh(new THREE.DodecahedronGeometry(r, 1), asteroidMat);
      const ang = (i / 52) * Math.PI * 2;
      const dist = 160 + (i % 4) * 50;
      ast.position.set(Math.cos(ang) * dist, (i % 3) * 40 - 50, Math.sin(ang) * dist + i * 20);
      this.propsGroup.add(ast);
      this.asteroids.push(ast);
    }

    // 3. 250+ Stardust Particles
    const starGeo = new THREE.BufferGeometry();
    const posArr  = new Float32Array(250 * 3);

    for (let i = 0; i < 250; i++) {
      posArr[i * 3 + 0] = (Math.random() - 0.5) * 500;
      posArr[i * 3 + 1] = (Math.random() - 0.5) * 200;
      posArr[i * 3 + 2] = (Math.random() - 0.5) * 1200;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));

    const starMat = new THREE.PointsMaterial({
      color: 0xe0b0ff, size: 2.5, transparent: true, opacity: 0.8
    });
    const stardust = new THREE.Points(starGeo, starMat);
    this.propsGroup.add(stardust);
  }

  setEnvironment(worldId) {
    const keyMap = {
      'sky_haven': 'WORLD_1_SKY_HAVEN',
      'rural_valley': 'WORLD_2_RURAL_VALLEY',
      'neon_city': 'WORLD_3_CYBERPUNK',
      'volcanic_wasteland': 'WORLD_4_VOLCANIC',
      'misty_peaks': 'WORLD_5_MISTY_PEAKS',
      'golden_canyon': 'WORLD_6_GOLDEN_DESERT',
      'cosmic_aurora': 'WORLD_7_COSMIC_VOID',
      'WORLD_1_SKY_HAVEN': 'WORLD_1_SKY_HAVEN',
      'WORLD_2_RURAL_VALLEY': 'WORLD_2_RURAL_VALLEY',
      'WORLD_3_CYBERPUNK': 'WORLD_3_CYBERPUNK',
      'WORLD_4_VOLCANIC': 'WORLD_4_VOLCANIC',
      'WORLD_5_MISTY_PEAKS': 'WORLD_5_MISTY_PEAKS',
      'WORLD_6_GOLDEN_DESERT': 'WORLD_6_GOLDEN_DESERT',
      'WORLD_7_COSMIC_VOID': 'WORLD_7_COSMIC_VOID'
    };
    const targetKey = keyMap[worldId] || 'WORLD_1_SKY_HAVEN';
    this.transitionToZone(targetKey);
  }

  transitionToZone(zoneId, trackBuilder = null) {
    const target = ENV_WORLDS[zoneId] || Object.values(ENV_WORLDS).find(w => w.id === zoneId);
    if (!target) return;

    this._applyZone(target);
    if (trackBuilder) trackBuilder.setWorldTheme(target);
  }

  update(dt, cameraPos) {
    this.envGroup.position.z = cameraPos.z;
    if (this.skyMesh) {
      this.skyMesh.position.copy(cameraPos);
    }

    const time = performance.now() * 0.002;

    // Slowly rotate crystalline asteroids
    this.asteroids.forEach((ast, i) => {
      ast.rotation.x += 0.003;
      ast.rotation.y += 0.005;
    });

    // Animate aurora ribbon waving
    this.auroraRibbons.forEach((r, i) => {
      r.rotation.z = Math.sin(time + i) * 0.05;
    });
  }

  _buildSky() {}
  _buildClouds() {}
  _buildDistantLandscapes() {}
}
