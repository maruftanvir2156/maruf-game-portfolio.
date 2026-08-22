// FinishGate — Heading-Aware Arch aligned to track direction
import * as THREE from 'three';

export class FinishGate {
  constructor(scene, pos, heading = 0) {
    this.scene   = scene;
    this.pos     = pos.clone();
    this.heading = heading;
    this.triggered = false;

    this.group = new THREE.Group();
    this.group.position.copy(pos);
    // Rotate the whole group to match the track segment's heading.
    // The torus lies in the XY plane by default, so after rotation.y = heading
    // it stands upright across the track width facing the oncoming ball.
    this.group.rotation.y = heading;

    // ── Visual arch ───────────────────────────────────────────────────────
    const archGeo = new THREE.TorusGeometry(5.0, 0.6, 16, 32);
    const archMat = new THREE.MeshStandardMaterial({
      color: 0xffb700,
      emissive: new THREE.Color(0xff6600),
      emissiveIntensity: 0.8,
      metalness: 0.9
    });
    const archMesh = new THREE.Mesh(archGeo, archMat);
    archMesh.position.y = 5.0;
    this.group.add(archMesh);

    // ── Spinning star portal interior ─────────────────────────────────────
    const starGeo = new THREE.OctahedronGeometry(2.5, 0);
    const starMat = new THREE.MeshBasicMaterial({
      color: 0xffffff, transparent: true, opacity: 0.85
    });
    this.starMesh = new THREE.Mesh(starGeo, starMat);
    this.starMesh.position.y = 5.0;
    this.group.add(this.starMesh);

    // ── Trigger box — full track width × height, invisible ────────────────
    // Width 12, Height 8, Depth 4 — ball triggers level completion reliably
    // even at high speed. The box is oriented with the group so it spans
    // the track cross-section perpendicular to the ball's direction of travel.
    const trigGeo = new THREE.BoxGeometry(12, 8, 4);
    const trigMat = new THREE.MeshBasicMaterial({ visible: false });
    this._triggerBox = new THREE.Mesh(trigGeo, trigMat);
    this._triggerBox.position.y = 4.0; // centre at 4m above track surface
    this.group.add(this._triggerBox);

    // Precompute the trigger box OBB (Oriented Bounding Box) in world space
    // so the check works correctly even when heading ≠ 0.
    this._triggerBox.updateWorldMatrix(true, false);
    this._trigBox3 = new THREE.Box3().setFromObject(this._triggerBox);

    scene.add(this.group);
  }

  update(dt, ballPos) {
    if (this.starMesh) {
      this.starMesh.rotation.y += 2.0 * dt;
    }

    if (this.triggered) return false;

    // Refresh world-space AABB each frame (group may have moved with env system)
    this._trigBox3.setFromObject(this._triggerBox);

    // Check if ball centre is inside the trigger box
    if (this._trigBox3.containsPoint(ballPos)) {
      this.triggered = true;
      return true;
    }

    // Fallback sphere check for very-high-speed tunneling protection
    if (this.pos.distanceTo(ballPos) < 3.5) {
      this.triggered = true;
      return true;
    }

    return false;
  }
}
