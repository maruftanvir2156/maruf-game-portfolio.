// Track-Locked Chase Camera — Rigid horizon, zero orbit, zero tilt
// Camera X stays on track centerline. Ball moves across frame when steering.
import * as THREE from 'three';

export class CameraController {
  constructor(camera) {
    this.camera = camera;
    this.camera.near = 0.1;
    this.camera.far = 1500.0;
    this.camera.fov = 60.0;
    this.camera.updateProjectionMatrix();

    // Track centerline — always X = 0 unless overridden
    this.trackCenterX = 0;

    // Internal smoothed camera state (pre-allocated, zero GC)
    this._pos = new THREE.Vector3();
    this._look = new THREE.Vector3();
    this._up   = new THREE.Vector3(0, 1, 0);
  }

  setTrackCenterX(x) {
    this.trackCenterX = x;
  }

  setEnvironment() {}        // stub — kept for API compatibility
  setTrackColliders() {}     // stub — kept for API compatibility

  reset(ballPos) {
    // Snap camera instantly to correct starting position
    const x = this.trackCenterX;
    this.camera.position.set(x, ballPos.y + 3.8, ballPos.z - 7.0);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(x, ballPos.y + 1.0, ballPos.z + 5.0);
    this.camera.updateProjectionMatrix();

    // Copy to internal smoothed state so lerp doesn't drift from a stale value
    this._pos.copy(this.camera.position);
    this._look.set(x, ballPos.y + 1.0, ballPos.z + 5.0);

    const fade = document.getElementById('screen-fade');
    if (fade) fade.style.opacity = '0';
  }

  update(dt, ballPos, ballVel, isGrounded) {
    const x = this.trackCenterX; // Track roadway centerline — always 0

    // ── 1. Target camera position ─────────────────────────────────────────────
    // X: heavily damped toward track centerline (NOT ball.x) — prevents orbiting
    // Y: fixed 3.8 m above ball
    // Z: fixed 7.0 m behind ball (along world Z, not velocity direction)
    const tX = THREE.MathUtils.lerp(this.camera.position.x, x,                0.05);
    const tY = THREE.MathUtils.lerp(this.camera.position.y, ballPos.y + 3.8,  0.08);
    const tZ = THREE.MathUtils.lerp(this.camera.position.z, ballPos.z - 7.0,  0.15);

    this.camera.position.set(tX, tY, tZ);

    // ── 2. Enforce world horizon lock on every frame ───────────────────────────
    this.camera.up.set(0, 1, 0);

    // ── 3. LookAt: straight down the track roadway ────────────────────────────
    // X = track centerline, Y = just above ball, Z = 5 m ahead
    // This keeps the track running dead-straight up the screen center.
    this.camera.lookAt(x, ballPos.y + 1.0, ballPos.z + 5.0);
  }
}
