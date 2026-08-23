// CameraController — Third-Person Chase Camera
//
// Architecture:
//   - ONE authoritative camera. No competing update paths.
//   - Smoothed track-tangent layer: velocity direction is low-pass filtered at
//     TANGENT_DAMPING Hz so the camera rotates GRADUALLY around curves instead
//     of snapping. This prevents the "camera swinging into empty sky" on turns.
//   - Y-velocity excluded from tangent so jumps/falls never tilt the camera.
//   - Frame-rate-independent exponential damping: alpha = 1 − exp(−k × dt)
//   - Automatic recovery: 3× damping when camera drifts > 2× follow distance.
//   - reset() hard-snaps with zero lerp — safe on respawn or level load.
//
// Constants tuned to actual game scale:
//   ball radius 1 m · track width 12–16 m · max speed 32 m/s · gravity −28 m/s²
//
import * as THREE from 'three';

// ── Tuning ────────────────────────────────────────────────────────────────────
const FOLLOW_DIST     = 9.0;   // m behind ball along smoothed tangent
const HEIGHT_OFFSET   = 5.5;   // m above ball centre
const LOOK_AHEAD      = 7.0;   // m ahead of ball for look-at (shows upcoming track)
const LOOK_Y_OFFSET   = 1.8;   // look-at Y above ball (keeps ball lower on screen)
const POS_DAMPING     = 7.0;   // camera position follow strength
const ROT_DAMPING     = 9.0;   // look-at follow strength
const TANGENT_DAMPING = 6.0;   // track-tangent smoothing — lower = smoother curves
const RECOVERY_MULT   = 3.0;   // extra damping when camera has drifted far
const RECOVERY_DIST   = FOLLOW_DIST * 2.0;
const FOV             = 65;
const MIN_SPEED_SQ    = 0.64;  // 0.8 m/s — below this, tangent is not updated

export class CameraController {
  constructor(camera) {
    this.camera = camera;
    this.camera.fov  = FOV;
    this.camera.near = 0.1;
    this.camera.far  = 1500.0;
    this.camera.updateProjectionMatrix();

    // ── Smoothed track tangent ─────────────────────────────────────────────
    // _rawVelDir:    updated each frame from ball XZ velocity (instantaneous)
    // _trackTangent: low-pass filtered version of _rawVelDir
    // _behindDir:    −_trackTangent (used for camera placement)
    //
    // By filtering at TANGENT_DAMPING Hz the camera rotates around curves
    // gradually over ~0.17s (6 Hz → τ = 1/6 s) instead of immediately.
    this._rawVelDir   = new THREE.Vector3(0, 0, 1);
    this._trackTangent = new THREE.Vector3(0, 0, 1);
    this._behindDir    = new THREE.Vector3(0, 0, -1);

    // Smoothed camera state
    this._smoothedPos  = new THREE.Vector3();
    this._smoothedLook = new THREE.Vector3();

    // Pre-allocated scratch vectors (zero heap allocation in hot path)
    this._desiredPos = new THREE.Vector3();
    this._lookTarget = new THREE.Vector3();
    this._up         = new THREE.Vector3(0, 1, 0);

    // API compat
    this.trackCenterX = 0;
    this._initialized = false;
  }

  // ── Public API stubs ────────────────────────────────────────────────────────
  setTrackCenterX(x)  { this.trackCenterX = x; }
  setEnvironment()    {}
  setTrackColliders() {}

  // Hard-snap — NO interpolation. Call on level load, respawn, teleport.
  reset(ballPos) {
    this._rawVelDir.set(0, 0, 1);
    this._trackTangent.set(0, 0, 1);
    this._behindDir.set(0, 0, -1);

    this._smoothedPos.set(
      ballPos.x,
      ballPos.y + HEIGHT_OFFSET,
      ballPos.z - FOLLOW_DIST
    );
    this._smoothedLook.set(
      ballPos.x,
      ballPos.y + LOOK_Y_OFFSET,
      ballPos.z + LOOK_AHEAD
    );

    this.camera.position.copy(this._smoothedPos);
    this.camera.up.copy(this._up);
    this.camera.lookAt(this._smoothedLook);
    this.camera.updateProjectionMatrix();
    this._initialized = true;

    const fade = document.getElementById('screen-fade');
    if (fade) fade.style.opacity = '0';
  }

  // Called every gameplay frame AFTER physics.update() has run.
  // Signature unchanged from GameApp.js call-site.
  update(dt, ballPos, ballVel, isGrounded) {
    if (!this._initialized) {
      this.reset(ballPos);
      return;
    }

    const safeDt = Math.min(dt, 0.05);

    // ── 1. Update raw velocity direction from XZ movement ─────────────────
    // Y component deliberately excluded — no camera tilt on jumps/ramps.
    const speedSq = ballVel.x * ballVel.x + ballVel.z * ballVel.z;
    if (speedSq > MIN_SPEED_SQ) {
      const speed = Math.sqrt(speedSq);
      this._rawVelDir.set(ballVel.x / speed, 0, ballVel.z / speed);
    }
    // Below threshold: rawVelDir retains last known direction.

    // ── 2. Smooth the tangent at TANGENT_DAMPING Hz ───────────────────────
    // This is the key curve-camera fix: instead of using the instantaneous
    // velocity direction, we lerp toward it. The camera turns around bends
    // gradually over ~1/TANGENT_DAMPING seconds instead of snapping.
    // alpha = 1 − exp(−6 × dt):  at 60fps → 0.095/frame, full turn in ~0.5s
    const tangentAlpha = 1.0 - Math.exp(-TANGENT_DAMPING * safeDt);
    this._trackTangent.lerp(this._rawVelDir, tangentAlpha).normalize();
    this._behindDir.set(
      -this._trackTangent.x,
      0,
      -this._trackTangent.z
    );

    // ── 3. Desired camera position ────────────────────────────────────────
    // Y-freeze while falling: camera stays at track level, not void.
    const isFalling = !isGrounded && ballVel.y < -2.0;
    const desiredY  = isFalling
      ? this._smoothedPos.y
      : ballPos.y + HEIGHT_OFFSET;

    this._desiredPos.set(
      ballPos.x + this._behindDir.x * FOLLOW_DIST,
      desiredY,
      ballPos.z + this._behindDir.z * FOLLOW_DIST
    );

    // ── 4. Look-ahead target — ahead along smoothed tangent ───────────────
    // Looking along _trackTangent (not raw velocity) so the look-at also
    // turns gradually around curves, keeping the track corridor centered.
    this._lookTarget.set(
      ballPos.x + this._trackTangent.x * LOOK_AHEAD,
      ballPos.y + LOOK_Y_OFFSET,
      ballPos.z + this._trackTangent.z * LOOK_AHEAD
    );

    // ── 5. Recovery: triple damping if camera drifted too far ─────────────
    const dx = this._smoothedPos.x - ballPos.x;
    const dy = this._smoothedPos.y - ballPos.y;
    const dz = this._smoothedPos.z - ballPos.z;
    const inRecovery = (dx*dx + dy*dy + dz*dz) > RECOVERY_DIST * RECOVERY_DIST;
    const posDamping  = inRecovery ? POS_DAMPING * RECOVERY_MULT : POS_DAMPING;

    // ── 6. Frame-rate-independent exponential damping ─────────────────────
    const posAlpha = 1.0 - Math.exp(-posDamping * safeDt);
    const rotAlpha = 1.0 - Math.exp(-ROT_DAMPING * safeDt);

    this._smoothedPos.lerp(this._desiredPos, posAlpha);
    this._smoothedLook.lerp(this._lookTarget, rotAlpha);

    // ── Hard camera Y-floor clamp ─────────────────────────────────────────
    // Mathematically prevents camera from ever diving below track level,
    // even during extreme ramp launches or physics glitches.
    // Floor = max(ballY + 4.2, 4.2) — identical to user's requested clamp
    // but applied AFTER lerp so all damping math is still respected.
    const yFloor = Math.max(ballPos.y + 4.2, 4.2);
    if (this._smoothedPos.y < yFloor) {
      this._smoothedPos.y = yFloor;
    }

    // ── 7. Apply to camera ────────────────────────────────────────────────
    this.camera.position.copy(this._smoothedPos);
    this.camera.up.copy(this._up);
    this.camera.lookAt(this._smoothedLook);
  }
}
