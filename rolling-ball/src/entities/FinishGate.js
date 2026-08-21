// Flagship Finish Portal Gate Entity
import * as THREE from 'three';

export class FinishGate {
  constructor(scene, pos) {
    this.scene = scene;
    this.pos = pos.clone();
    this.triggered = false;

    this.group = new THREE.Group();
    this.group.position.copy(pos);

    // Grand Checkered Finish Archway
    const archGeo = new THREE.TorusGeometry(5.0, 0.6, 16, 32);
    const archMat = new THREE.MeshStandardMaterial({
      color: 0xffb700,
      emissive: 0xff6600,
      emissiveIntensity: 0.8,
      metalness: 0.9
    });
    const archMesh = new THREE.Mesh(archGeo, archMat);
    archMesh.position.y = 5.0;

    // Spinning Star Portal Interior
    const starGeo = new THREE.OctahedronGeometry(2.5, 0);
    const starMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85 });
    this.starMesh = new THREE.Mesh(starGeo, starMat);
    this.starMesh.position.y = 5.0;

    this.group.add(archMesh);
    this.group.add(this.starMesh);
    this.scene.add(this.group);
  }

  update(dt, ballPos) {
    if (this.starMesh) {
      this.starMesh.rotation.y += 2.0 * dt;
    }

    if (this.triggered) return false;

    // Check level completion trigger (within 3.0 units of finish gate center)
    const dist = this.pos.distanceTo(ballPos);
    if (dist < 3.2) {
      this.triggered = true;
      return true;
    }
    return false;
  }
}
