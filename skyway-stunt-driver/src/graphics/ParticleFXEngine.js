import * as THREE from 'three';

export class ParticleFXEngine {
  constructor(scene) {
    this.scene = scene;
    this.systems = [];
    this.lastBoostSpawnTime = 0;
    // Pre-baked soft-circle texture — prevents black square artifact
    this._circleTex = this._createCircleTexture();
  }

  /**
   * Bake a radial gradient onto a canvas so THREE.Points renders round glowing
   * dots instead of hard pixel squares.
   */
  _createCircleTexture(size = 64) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const half = size / 2;
    const grad = ctx.createRadialGradient(half, half, 0, half, half, half);
    grad.addColorStop(0,   'rgba(255,255,255,1)');
    grad.addColorStop(0.4, 'rgba(255,200,100,0.8)');
    grad.addColorStop(1,   'rgba(255,100,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(canvas);
  }

  _capSystemsLimit(maxAllowed = 10) {
    while (this.systems.length > maxAllowed) {
      const sys = this.systems.shift();
      if (sys && sys.mesh) {
        this.scene.remove(sys.mesh);
        sys.mesh.geometry.dispose();
        sys.mesh.material.dispose();
      }
    }
  }

  // ─── Boost Trail Particles ───
  spawnBoostTrail(position, color = 0x06b6d4) {
    const now = performance.now();
    if (now - this.lastBoostSpawnTime < 60) return; // Throttle to max ~16 spawns per sec
    this.lastBoostSpawnTime = now;

    this._capSystemsLimit(10);

    const count = 6;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = [];
    const lifetimes = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = position.x + (Math.random() - 0.5) * 0.4;
      positions[i * 3 + 1] = position.y + Math.random() * 0.2;
      positions[i * 3 + 2] = position.z - 0.4 - Math.random() * 0.6;
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 1.5,
        Math.random() * 2.0,
        -Math.random() * 4.0
      ));
      lifetimes.push(0.25 + Math.random() * 0.25);
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color,
      size: 0.18,
      map: this._circleTex,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    const points = new THREE.Points(geo, mat);
    this.scene.add(points);

    this.systems.push({
      mesh: points,
      velocities,
      lifetimes,
      maxLife: lifetimes.map(l => l),
      age: 0
    });
  }

  // ─── Collision Sparks ───
  spawnSparks(position) {
    this._capSystemsLimit(10);

    const count = 15;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = [];
    const lifetimes = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = position.x;
      positions[i * 3 + 1] = position.y + 0.3;
      positions[i * 3 + 2] = position.z;
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        Math.random() * 6,
        (Math.random() - 0.5) * 8
      ));
      lifetimes.push(0.2 + Math.random() * 0.3);
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xffaa00,
      size: 0.22,
      map: this._circleTex,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    const points = new THREE.Points(geo, mat);
    this.scene.add(points);

    this.systems.push({
      mesh: points,
      velocities,
      lifetimes,
      maxLife: lifetimes.map(l => l),
      age: 0
    });
  }

  // ─── Tire Burnout Smoke ───
  spawnTireSmoke(position) {
    this._capSystemsLimit(10);

    const count = 5;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = [];
    const lifetimes = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = position.x + (Math.random() - 0.5) * 0.6;
      positions[i * 3 + 1] = position.y;
      positions[i * 3 + 2] = position.z - Math.random() * 0.4;
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.4,
        0.4 + Math.random() * 1.0,
        -0.2 - Math.random() * 0.4
      ));
      lifetimes.push(0.4 + Math.random() * 0.4);
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.3,
      transparent: true,
      opacity: 0.35,
      depthWrite: false
    });

    const points = new THREE.Points(geo, mat);
    this.scene.add(points);

    this.systems.push({
      mesh: points,
      velocities,
      lifetimes,
      maxLife: lifetimes.map(l => l),
      age: 0
    });
  }

  // ─── Coin/Cash Collection Burst ───
  spawnCoinBurst(position) {
    this._capSystemsLimit(10);

    const count = 12;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = [];
    const lifetimes = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = position.x;
      positions[i * 3 + 1] = position.y + 0.5;
      positions[i * 3 + 2] = position.z;
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        2 + Math.random() * 4,
        (Math.random() - 0.5) * 4
      ));
      lifetimes.push(0.3 + Math.random() * 0.4);
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 0.2,
      map: this._circleTex,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    const points = new THREE.Points(geo, mat);
    this.scene.add(points);

    this.systems.push({
      mesh: points,
      velocities,
      lifetimes,
      maxLife: lifetimes.map(l => l),
      age: 0
    });
  }

  // ─── Fire & Fiery Explosion Burst ───
  spawnExplosion(position) {
    this._capSystemsLimit(10);

    const count = 25;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = [];
    const lifetimes = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = position.x + (Math.random() - 0.5) * 1.0;
      positions[i * 3 + 1] = position.y + 0.5 + Math.random() * 0.5;
      positions[i * 3 + 2] = position.z + (Math.random() - 0.5) * 1.0;
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        3 + Math.random() * 8,
        (Math.random() - 0.5) * 10
      ));
      lifetimes.push(0.4 + Math.random() * 0.5);
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xf97316,
      size: 0.3,
      map: this._circleTex,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    const points = new THREE.Points(geo, mat);
    this.scene.add(points);

    this.systems.push({
      mesh: points,
      velocities,
      lifetimes,
      maxLife: lifetimes.map(l => l),
      age: 0
    });
  }

  // ─── STAGE 4: High-Speed Air Streaks (Speed Lines) ───
  spawnAirStreaks(playerPosition, cameraPosition, speedRatio = 0, isNitroActive = false) {
    if (speedRatio < 0.55 && !isNitroActive) return;

    const now = performance.now();
    if (this._lastStreakSpawn && now - this._lastStreakSpawn < 70) return;
    this._lastStreakSpawn = now;

    this._capSystemsLimit(12);

    const count = Math.floor(8 + speedRatio * 12);
    const positions = new Float32Array(count * 6); // 2 vertices per line segment

    const posZ = playerPosition ? playerPosition.z : 0;
    const posX = playerPosition ? playerPosition.x : 0;
    const posY = playerPosition ? playerPosition.y : 2;

    for (let i = 0; i < count; i++) {
      const idx = i * 6;
      const rx = posX + (Math.random() - 0.5) * 16;
      const ry = posY + (Math.random() - 0.5) * 10;
      const rz = posZ + (Math.random() - 0.5) * 12;

      const lineLen = 3.5 + speedRatio * 6.0;

      positions[idx]     = rx;
      positions[idx + 1] = ry;
      positions[idx + 2] = rz;

      positions[idx + 3] = rx;
      positions[idx + 4] = ry;
      positions[idx + 5] = rz - lineLen;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: Math.min(0.75, (speedRatio - 0.5) * 1.5),
      blending: THREE.AdditiveBlending
    });

    const streakMesh = new THREE.LineSegments(geo, mat);
    this.scene.add(streakMesh);

    this.systems.push({
      mesh: streakMesh,
      customUpdate: true,
      age: 0,
      maxAge: 0.2,
      update: (dt, sys) => {
        sys.mesh.position.z -= (50 + speedRatio * 50) * dt;
        mat.opacity *= 0.82;
      }
    });
  }

  // ─── Update all particle systems ───
  update(dt) {
    for (let i = this.systems.length - 1; i >= 0; i--) {
      const sys = this.systems[i];
      sys.age += dt;

      if (sys.customUpdate && sys.update) {
        sys.update(dt, sys);
        if (sys.age > (sys.maxAge || 0.3)) {
          this.scene.remove(sys.mesh);
          sys.mesh.geometry.dispose();
          sys.mesh.material.dispose();
          this.systems.splice(i, 1);
        }
        continue;
      }

      const posAttr = sys.mesh.geometry.getAttribute('position');
      let allDead = true;

      for (let j = 0; j < sys.velocities.length; j++) {
        sys.lifetimes[j] -= dt;

        if (sys.lifetimes[j] > 0) {
          allDead = false;
          posAttr.array[j * 3] += sys.velocities[j].x * dt;
          posAttr.array[j * 3 + 1] += sys.velocities[j].y * dt;
          posAttr.array[j * 3 + 2] += sys.velocities[j].z * dt;
          sys.velocities[j].y -= 9.8 * dt; // gravity on particles
        }
      }

      posAttr.needsUpdate = true;

      const lifeRatio = Math.max(0, 1 - sys.age / 0.6);
      sys.mesh.material.opacity = lifeRatio * 0.7;

      if (allDead || sys.age > 0.8) {
        this.scene.remove(sys.mesh);
        sys.mesh.geometry.dispose();
        sys.mesh.material.dispose();
        this.systems.splice(i, 1);
      }
    }
  }

  clear() {
    for (const sys of this.systems) {
      this.scene.remove(sys.mesh);
      sys.mesh.geometry.dispose();
      sys.mesh.material.dispose();
    }
    this.systems = [];
  }
}
