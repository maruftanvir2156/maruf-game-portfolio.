// CameraController — Third-Person Chase Camera
//
// Architecture:
//   - ONE authoritative camera. No competing update paths.
//   - Velocity-driven look-ahead so the upcoming track is always visible.
//   - Frame-rate-independent exponential damping via:
//       alpha = 1 − Math.exp(−damping × dt)
//   - Camera follows ball's actual XZ movement direction, not a fixed world axis.
//   - Y-velocity excluded from direction so jumps / falls don't tilt the camera.
//   - Automatic recovery: if camera drifts > 2× follow distance, damping is tripled.
//   - reset() hard-snaps camera with zero lerp — safe to call on respawn or level load.
//
// Constants tuned to actual game scale:
//   ball radius 1 m · track width 12–16 m · max speed 44 m/s · gravity −28 m/s²
//
import * as THREE from 'three';

// ── Tuning ────────────────────────────────────────────────────────────────────
const FOLLOW_DIST   = 9.0;   // m behind ball along its movement direction
const HEIGHT_OFFSET = 5.5;   // m above ball centre
const LOOK_AHEAD    = 7.0;   // m ahead of ball for look-at target (shows upcoming track)
const LOOK_Y_OFFSET = 1.8;   // look-at Y above ball centre (keeps ball lower on screen)
const POS_DAMPING   = 7.0;   // position follow strength  (exp-decay base)
const ROT_DAMPING   = 9.0;   // look-at follow strength   (exp-decay base)
const RECOVERY_MULT = 3.0;   // multiplier applied when camera has drifted too far
const RECOVERY_DIST = FOLLOW_DIST * 2.0; // distance that triggers recovery mode
const FOV           = 65;    // degrees — wider than original 60 for better track visibility
const MIN_SPEED_SQ  = 0.64;  // 0.8 m/s dead-zone below which direction is not updated

export class CameraController {
  constructor(camera) {
    this.camera = camera;
    this.camera.fov  = FOV;
    this.camera.near = 0.1;
    this.camera.far  = 1500.0;
    this.camera.updateProjectionMatrix();

    // Persistent velocity direction memory (XZ plane only)
    // Kept between frames so camera stays stable when ball idles or is airborne.
    this._velDir    = new THREE.Vector3(0, 0, 1);   // normalised forward direction
    this._behindDir = new THREE.Vector3(0, 0, -1);  // −velDir (used for camera placement)

    // Smoothed camera state — lerped toward desired each frame
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

  // ── Public API — identical signatures to original for GameApp.js compat ─────
  setTrackCenterX(x)  { this.trackCenterX = x; }
  setEnvironment()    {}   // intentional no-op (API stub)
  setTrackColliders() {}   // intentional no-op (API stub)

  // Hard-snap camera to correct position — NO interpolation.
  // Call on level load, respawn, or any discontinuous ball teleport.
  reset(ballPos) {
    // Default: ball rolling in +Z direction
    this._velDir.set(0, 0, 1);
    this._behindDir.set(0, 0, -1);

    // Camera: directly behind and above
    this._smoothedPos.set(
      ballPos.x,
      ballPos.y + HEIGHT_OFFSET,
      ballPos.z - FOLLOW_DIST
    );

    // Look target: ahead and slightly above ball
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

    // Dismiss respawn fade overlay (preserved from original)
    const fade = document.getElementById('screen-fade');
    if (fade) fade.style.opacity = '0';
  }

  // Called every gameplay frame AFTER physics.update() has run.
  // Parameters match original GameApp.js call-site exactly.
  update(dt, ballPos, ballVel, isGrounded) {
    // Safety: if reset() has never been called, snap first
    if (!this._initialized) {
      this.reset(ballPos);
      return;
    }

    // Clamp dt so a single huge spike (tab-switch, GC pause) doesn't catapult the camera
    const safeDt = Math.min(dt, 0.05);

    // ── 1. Update velocity direction from XZ movement ─────────────────────────
    //
    // We project onto the XZ plane and ignore Y intentionally:
    //   - Prevents camera from pitching down when ball falls
    //   - Prevents camera from pitching up on ramps (camera stays level, ball rises)
    //   - Loops: horizontal component of velocity still points forward along track
    //
    const speedSq = ballVel.x * ballVel.x + ballVel.z * ballVel.z;
    if (speedSq > MIN_SPEED_SQ) {
      const speed = Math.sqrt(speedSq);
      // Compute normalised direction directly into pre-allocated vectors (zero GC)
      this._velDir.set(ballVel.x / speed, 0, ballVel.z / speed);
      this._behindDir.set(-ballVel.x / speed, 0, -ballVel.z / speed);
    }
    // Below threshold: retain last known direction.
    // This keeps the camera stable when ball is idle, landing, or bouncing.

    // ── 2. Desired camera position ────────────────────────────────────────────
    //
    // Place camera FOLLOW_DIST behind the ball in its actual movement direction
    // and HEIGHT_OFFSET above its centre.  This works correctly on straight
    // sections, curves (camera rotates with the turn), ramps (camera climbs with
    // ball Y), and loops (camera stays outside the loop looking at ball).
    //
    this._desiredPos.set(
      ballPos.x + this._behindDir.x * FOLLOW_DIST,
      ballPos.y + HEIGHT_OFFSET,
      ballPos.z + this._behindDir.z * FOLLOW_DIST
    );

    // ── 3. Look-ahead target ──────────────────────────────────────────────────
    //
    // Camera does NOT look directly at the ball.  It looks AHEAD of the ball
    // so the player always sees the upcoming track section in the upper portion
    // of the screen.  The ball therefore sits in the lower-middle of the frame.
    //
    //   [UPCOMING TRACK  ← upper screen]
    //   [BALL            ← lower-middle]
    //   [camera is below / behind all of this]
    //
    this._lookTarget.set(
      ballPos.x + this._velDir.x * LOOK_AHEAD,
      ballPos.y + LOOK_Y_OFFSET,
      ballPos.z + this._velDir.z * LOOK_AHEAD
    );

    // ── 4. Recovery system ────────────────────────────────────────────────────
    //
    // If the smoothed camera has drifted more than RECOVERY_DIST from the ball
    // (e.g. after a very fast nitro boost or a large respawn displacement),
    // multiply damping by RECOVERY_MULT so the camera snaps back quickly.
    // Once it recovers, damping returns to normal and motion is smooth again.
    //
    const dx = this._smoothedPos.x - ballPos.x;
    const dy = this._smoothedPos.y - ballPos.y;
    const dz = this._smoothedPos.z - ballPos.z;
    const distSq = dx * dx + dy * dy + dz * dz;
    const inRecovery = distSq > RECOVERY_DIST * RECOVERY_DIST;
    const posDamping = inRecovery ? POS_DAMPING * RECOVERY_MULT : POS_DAMPING;

    // ── 5. Frame-rate-independent exponential damping ─────────────────────────
    //
    // alpha = 1 − e^(−damping × dt)
    //
    // At 60 fps (dt≈0.0167): posAlpha ≈ 0.110  (~11 % per frame)
    // At 30 fps (dt≈0.0333): posAlpha ≈ 0.208  (~21 % per frame)
    // At 120 fps(dt≈0.0083): posAlpha ≈ 0.056  (~ 6 % per frame)
    // The real-time lag is identical regardless of frame rate.
    //
    const posAlpha = 1.0 - Math.exp(-posDamping * safeDt);
    const rotAlpha = 1.0 - Math.exp(-ROT_DAMPING * safeDt);

    this._smoothedPos.lerp(this._desiredPos, posAlpha);
    this._smoothedLook.lerp(this._lookTarget, rotAlpha);

    // ── 6. Apply to camera ────────────────────────────────────────────────────
    this.camera.position.copy(this._smoothedPos);
    this.camera.up.copy(this._up);                   // enforce horizon lock every frame
    this.camera.lookAt(this._smoothedLook);           // uses WORLD position, always current
    // Note: updateProjectionMatrix() is NOT called here — only needed on FOV/near/far changes
  }
}
