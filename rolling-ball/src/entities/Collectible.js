// Commercial-Grade 3D Metallic Gold Coin Collectible Entity with Embossed Rim & Magnetism
import * as THREE from 'three';

const MAGNET_RADIUS = 6.0;

export class Collectible {
  constructor(scene, pos) {
    this.scene = scene;
    this.initialPos = pos.clone();
    this.collected = false;

    // Create 3D Metallic Gold Coin Compound Group
    this.meshGroup = new THREE.Group();

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0xffaa00,
      emissiveIntensity: 0.35
    });

    const darkGoldMat = new THREE.MeshStandardMaterial({
      color: 0xb8860b,
      metalness: 0.90,
      roughness: 0.25,
      emissive: 0x8b6508,
      emissiveIntensity: 0.20
    });

    // 1. Coin Main Body Disk
    const coinBody = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.14, 24), goldMat);
    coinBody.rotation.x = Math.PI / 2;
    this.meshGroup.add(coinBody);

    // 2. Embossed Outer Rim
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.68, 0.05, 12, 24), goldMat);
    this.meshGroup.add(rim);

    // 3. Center Star Emblem
    const emblem = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.18, 5), darkGoldMat);
    emblem.rotation.x = Math.PI / 2;
    this.meshGroup.add(emblem);

    this.meshGroup.position.copy(pos);
    this.meshGroup.position.y += 1.2;

    this.scene.add(this.meshGroup);
  }

  update(dt, elapsed, ballPos) {
    if (this.collected) return false;

    // Continuous rotation animation (2.5 rad/s)
    this.meshGroup.rotation.y += 2.5 * dt;

    const dist = this.meshGroup.position.distanceTo(ballPos);

    // Magnetic Attraction: Pull coin smoothly towards ball when within 6.0m
    if (dist < MAGNET_RADIUS) {
      const pullDir = ballPos.clone().sub(this.meshGroup.position).normalize();
      const pullSpeed = (1.0 - (dist / MAGNET_RADIUS)) * 28.0;
      this.meshGroup.position.addScaledVector(pullDir, pullSpeed * dt);
    } else {
      this.meshGroup.position.y = this.initialPos.y + 1.2 + Math.sin(elapsed * 3.0) * 0.25;
    }

    // Proximity Pickup Check (within 1.8m of ball center)
    if (dist < 1.8) {
      this.collected = true;
      this.scene.remove(this.meshGroup);
      return true;
    }
    return false;
  }
}
