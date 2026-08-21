// Particle System Manager for Sphere Velocity (VFX)
import * as THREE from 'three';

export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];

    // Pooled particle meshes/materials
    this.sparkGeo = new THREE.SphereGeometry(0.12, 6, 6);
    this.dustGeo = new THREE.SphereGeometry(0.18, 6, 6);
    
    this.cyanMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.9, depthWrite: false, depthTest: true });
    this.goldMat = new THREE.MeshBasicMaterial({ color: 0xffb700, transparent: true, opacity: 0.9, depthWrite: false, depthTest: true });
    this.magentaMat = new THREE.MeshBasicMaterial({ color: 0xff007f, transparent: true, opacity: 0.9, depthWrite: false, depthTest: true });
    this.dustMat = new THREE.MeshBasicMaterial({ color: 0xcccccc, transparent: true, opacity: 0.4, depthWrite: false, depthTest: true });
    this.boostMat = new THREE.MeshBasicMaterial({ color: 0xff4500, transparent: true, opacity: 0.9, depthWrite: false, depthTest: true });
  }

  emitCoinBurst(pos) {
    const count = 16;
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(this.sparkGeo, this.goldMat.clone());
      mesh.position.copy(pos);
      
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        Math.random() * 8 + 2,
        (Math.random() - 0.5) * 8
      );

      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel,
        life: 1.0,
        maxLife: 1.0 + Math.random() * 0.4,
        scaleSpeed: -0.6
      });
    }
  }

  emitLandingDust(pos, impactSpeed = 10) {
    const count = Math.min(Math.floor(impactSpeed * 1.5), 24);
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(this.dustGeo, this.dustMat.clone());
      mesh.position.copy(pos);
      mesh.position.y += 0.2;

      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.3;
      const speed = 2 + Math.random() * (impactSpeed * 0.4);
      const vel = new THREE.Vector3(
        Math.cos(angle) * speed,
        Math.random() * 1.5 + 0.5,
        Math.sin(angle) * speed
      );

      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel,
        life: 0.6,
        maxLife: 0.6,
        scaleSpeed: 1.2
      });
    }
  }

  emitCheckpointBeacon(pos) {
    const count = 30;
    for (let i = 0; i < count; i++) {
      const mat = i % 2 === 0 ? this.cyanMat.clone() : this.magentaMat.clone();
      const mesh = new THREE.Mesh(this.sparkGeo, mat);
      mesh.position.copy(pos);

      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        Math.random() * 12 + 4,
        (Math.random() - 0.5) * 6
      );

      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel,
        life: 1.2,
        maxLife: 1.2,
        scaleSpeed: -0.5
      });
    }
  }

  emitBoostSparkles(pos, ballVel) {
    const count = 4;
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(this.sparkGeo, this.boostMat.clone());
      mesh.position.copy(pos);

      const vel = ballVel.clone().negate().multiplyScalar(0.4);
      vel.x += (Math.random() - 0.5) * 3;
      vel.y += Math.random() * 2 + 1;
      vel.z += (Math.random() - 0.5) * 3;

      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel,
        life: 0.4,
        maxLife: 0.4,
        scaleSpeed: -1.5
      });
    }
  }

  emitPortalWarp(pos) {
    const count = 40;
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(this.sparkGeo, this.cyanMat.clone());
      mesh.position.copy(pos);

      const angle = Math.random() * Math.PI * 2;
      const radius = 2.5 + Math.random() * 2;
      mesh.position.x += Math.cos(angle) * radius;
      mesh.position.y += Math.sin(angle) * radius;

      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        Math.random() * 10 + 5
      );

      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel,
        life: 0.8,
        maxLife: 0.8,
        scaleSpeed: -0.8
      });
    }
  }

  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;

      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        p.mesh.geometry.dispose();
        p.mesh.material.dispose();
        this.particles.splice(i, 1);
        continue;
      }

      // Physics motion
      p.mesh.position.addScaledVector(p.vel, dt);
      p.vel.y -= 9.8 * dt * 0.4; // Light particle gravity

      // Fade & Scale
      const progress = p.life / p.maxLife;
      if (p.mesh.material) {
        p.mesh.material.opacity = progress;
      }
      
      const newScale = Math.max(0.05, p.mesh.scale.x + p.scaleSpeed * dt);
      p.mesh.scale.set(newScale, newScale, newScale);
    }
  }

  dispose() {
    this.particles.forEach(p => {
      this.scene.remove(p.mesh);
      p.mesh.geometry.dispose();
      p.mesh.material.dispose();
    });
    this.particles = [];
  }
}
