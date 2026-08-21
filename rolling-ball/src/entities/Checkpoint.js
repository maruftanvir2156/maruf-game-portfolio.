// Interactive Arch Checkpoint Gate Entity
import * as THREE from 'three';

export class Checkpoint {
  constructor(scene, pos, index = 1) {
    this.scene = scene;
    this.pos = pos.clone();
    this.index = index;
    this.activated = false;

    // Archway Mesh
    this.group = new THREE.Group();
    this.group.position.copy(pos);

    const pillarGeo = new THREE.CylinderGeometry(0.4, 0.4, 6.0, 16);
    this.inactiveMat = new THREE.MeshStandardMaterial({ color: 0x555566, metalness: 0.8 });
    this.activeMat = new THREE.MeshStandardMaterial({ color: 0x00f0ff, emissive: 0x00a0ff, emissiveIntensity: 0.9 });

    const pLeft = new THREE.Mesh(pillarGeo, this.inactiveMat);
    pLeft.position.set(-4, 3, 0);

    const pRight = new THREE.Mesh(pillarGeo, this.inactiveMat);
    pRight.position.set(4, 3, 0);

    const archTopGeo = new THREE.BoxGeometry(8.8, 0.8, 0.8);
    this.topMesh = new THREE.Mesh(archTopGeo, this.inactiveMat);
    this.topMesh.position.set(0, 6, 0);

    this.group.add(pLeft);
    this.group.add(pRight);
    this.group.add(this.topMesh);
    this.scene.add(this.group);
  }

  checkActivation(ballPos) {
    if (this.activated) return false;

    // Pass through arch plane distance check
    if (Math.abs(ballPos.z - this.pos.z) < 2.0 && Math.abs(ballPos.x - this.pos.x) < 5.0) {
      this.activated = true;
      this.topMesh.material = this.activeMat;
      return true;
    }
    return false;
  }
}
