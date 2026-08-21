// Forensic PlayerBall Controller with Debug "Sphere-Only" Mode & World Scale Invariant Check
import * as THREE from 'three';

export const BALL_SKINS = {
  CYBER_NEON: {
    id: 'CYBER_NEON',
    name: 'Cyber Neon',
    color: 0x00f0ff,
    emissive: 0x0088ff,
    metalness: 0.85,
    roughness: 0.15,
    glow: '#00f0ff'
  },
  METALLIC_CHROME: {
    id: 'METALLIC_CHROME',
    name: 'Chrome Titan',
    color: 0xf0f4ff,
    emissive: 0x334466,
    metalness: 0.98,
    roughness: 0.02,
    glow: '#ffffff'
  },
  DEBUG_SPHERE_ONLY: {
    id: 'DEBUG_SPHERE_ONLY',
    name: 'Debug Sphere Only',
    color: 0x00f0ff,
    emissive: 0x000000,
    metalness: 0.0,
    roughness: 1.0,
    glow: '#00f0ff'
  }
};

export class PlayerBall {
  constructor(scene, physics) {
    this.scene   = scene;
    this.physics = physics;
    this.currentSkin = BALL_SKINS.CYBER_NEON;

    // 1. High-subdivision true sphere — NEVER modify scale
    this.geometry = new THREE.SphereGeometry(1.0, 64, 64);

    // 2. PBR material
    this.texture  = this._generatePBRTexture(this.currentSkin);
    this.material = new THREE.MeshStandardMaterial({
      map:               this.texture,
      color:             this.currentSkin.color,
      emissive:          this.currentSkin.emissive,
      emissiveIntensity: 0.35,
      metalness:         this.currentSkin.metalness,
      roughness:         this.currentSkin.roughness,
      envMapIntensity:   1.4
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.castShadow    = true;
    this.mesh.receiveShadow = false; // ball shouldn't self-shadow
    this.mesh.scale.set(1.0, 1.0, 1.0); // INVARIANT: always 1,1,1
    this.scene.add(this.mesh);

    // 3. Self-illuminating point light (follows ball, gives surface depth)
    // Intensity reduced from 1.8→0.6 and range from 14→8 to prevent camera blowout
    this.ballLight = new THREE.PointLight(this.currentSkin.color, 0.6, 8);
    this.ballLight.position.set(0, 3.0, 0);
    this.scene.add(this.ballLight);

    // Scratch vector for World Scale Assertion
    this._worldScale = new THREE.Vector3();
  }

  setDebugSphereOnly(enable) {
    if (enable) {
      this.mesh.material = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: false });
    } else {
      this.mesh.material = this.material;
    }
  }

  _generatePBRTexture(skin) {
    const SIZE = 1024;
    const cv   = document.createElement('canvas');
    cv.width = cv.height = SIZE;
    const ctx = cv.getContext('2d');

    // Base color fill
    const baseHex = '#' + skin.color.toString(16).padStart(6, '0');
    ctx.fillStyle = baseHex;
    ctx.fillRect(0, 0, SIZE, SIZE);

    // Radial shading overlay (gives spherical depth illusion even on flat UV)
    const shadeGrad = ctx.createRadialGradient(350, 280, 20, 512, 512, 560);
    shadeGrad.addColorStop(0, 'rgba(255,255,255,0.28)');
    shadeGrad.addColorStop(0.5,'rgba(255,255,255,0.05)');
    shadeGrad.addColorStop(1, 'rgba(0,0,0,0.35)');
    ctx.fillStyle = shadeGrad;
    ctx.fillRect(0, 0, SIZE, SIZE);

    // Grid lines (rotation feedback)
    ctx.strokeStyle = 'rgba(255,255,255,0.22)';
    ctx.lineWidth = 8;
    for (let x = 0; x <= SIZE; x += 128) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, SIZE); ctx.stroke();
    }
    for (let y = 0; y <= SIZE; y += 128) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(SIZE, y); ctx.stroke();
    }

    // Equator emissive stripe
    const emissiveHex = '#' + (skin.emissive || 0x334466).toString(16).padStart(6, '0');
    ctx.fillStyle = emissiveHex;
    ctx.globalAlpha = 0.65;
    ctx.fillRect(0, 476, SIZE, 72);
    ctx.globalAlpha = 1.0;

    // Pole circles
    ctx.fillStyle = 'rgba(255,255,255,0.80)';
    for (const py of [192, 832]) {
      ctx.beginPath();
      ctx.arc(512, py, 100, 0, Math.PI * 2);
      ctx.fill();
    }

    const tex = new THREE.CanvasTexture(cv);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    return tex;
  }

  setSkin(skinKey) {
    if (BALL_SKINS[skinKey]) {
      this.currentSkin = BALL_SKINS[skinKey];
      this.texture.dispose();
      this.material.dispose();
      this.texture  = this._generatePBRTexture(this.currentSkin);
      this.material = new THREE.MeshStandardMaterial({
        map:               this.texture,
        color:             this.currentSkin.color,
        emissive:          this.currentSkin.emissive,
        emissiveIntensity: 0.35,
        metalness:         this.currentSkin.metalness,
        roughness:         this.currentSkin.roughness,
        envMapIntensity:   1.4
      });
      this.mesh.material = this.material;
      this.ballLight.color.setHex(this.currentSkin.color);
    }
  }

  update() {
    // 1. Enforce local scale — never stretch or squash
    this.mesh.scale.set(1.0, 1.0, 1.0);

    // 2. Sync position + rotation from physics
    this.mesh.position.copy(this.physics.position);
    this.mesh.quaternion.copy(this.physics.rotation);

    // 3. Self-light follows ball
    this.ballLight.position.copy(this.physics.position);
    this.ballLight.position.y += 3.0;

    // 4. World scale invariant check
    this.mesh.getWorldScale(this._worldScale);
    if (
      Math.abs(this._worldScale.x - 1.0) > 0.001 ||
      Math.abs(this._worldScale.y - 1.0) > 0.001 ||
      Math.abs(this._worldScale.z - 1.0) > 0.001
    ) {
      console.error('WORLD SCALE DEFORMATION DETECTED!', this._worldScale);
      this.mesh.scale.set(1.0, 1.0, 1.0);
    }
  }

  getPosition() {
    return this.mesh.position;
  }
}
