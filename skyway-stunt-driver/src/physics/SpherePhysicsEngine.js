import * as THREE from 'three';
import { CAR_MANIFEST } from '../graphics/AssetLoader.js';

function buildProfiles() {
  const profiles = {};
  for (const [key, m] of Object.entries(CAR_MANIFEST)) {
    profiles[key] = {
      id: key,
      name: m.name,
      tag: m.tag,
      description: m.description,
      radius: 0.22,
      mass: 10.0,
      topSpeed: m.topSpeed,
      nitroSpeed: m.nitroSpeed,
      acceleration: m.acceleration,
      braking: m.braking,
      handling: m.handling,
      centerOfMassY: -0.4,
      jumpStability: 0.95,
      bounce: 0.15,
      liquidWobble: 0.0,
      statSpeed: m.statSpeed,
      statHandling: m.statHandling,
      statStability: m.statStability
    };
  }
  return profiles;
}

export const VEHICLE_PROFILES = buildProfiles();

export class SpherePhysicsEngine {
  constructor() {
    this.profile = Object.values(VEHICLE_PROFILES)[0];

    // Physics State
    this.position = new THREE.Vector3(0, 3, 0);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.quaternion = new THREE.Quaternion();

    // Gravity & Grounding
    this.gravity = new THREE.Vector3(0, -25.0, 0);
    this.surfaceNormal = new THREE.Vector3(0, 1, 0);
    this.isGrounded = false;
    this.isAirborne = false;
    this.isFalling = false;       // NEW: True when falling into the void
    this.fallStartY = 0;          // NEW: Y position when fall began
    this.inAntiGravZone = false;
    this.inSpeedBoostZone = false;
    this.speedBoostMultiplier = 1.0;
    this.barrierHitThisFrame = false;
    this.launchPadHit = false;    // NEW: True on the frame a launch pad triggers

    // Throttle & Steering
    this.forwardSpeed = 0;
    this.lateralSteer = 0;
    this.currentSteer = 0;
    this.isAccelerating = false;
    this.isNitroActive = false;
    this.isBraking = false;

    // Tumble rotation for falling animation
    this._tumblePitch = 0;
    this._tumbleRoll = 0;

    // Temporary math vectors (zero Garbage Collection overhead)
    this._tempRay = new THREE.Raycaster();
    this._tempDir = new THREE.Vector3();
    this._playerSphere = new THREE.Sphere();
    this._tempNormal = new THREE.Vector3(0, 1, 0);
    this._tempTargetPos = new THREE.Vector3();
    this._tempTrackFwd = new THREE.Vector3(0, 0, 1);
    this._tempRight = new THREE.Vector3();
    this._tempForward = new THREE.Vector3();
    this._tempLatVel = new THREE.Vector3();
    this._tempFwdVel = new THREE.Vector3();
    // Reusable quaternion/matrix scratch objects (prevent per-frame heap allocations)
    this._tempMat4 = new THREE.Matrix4();
    this._tempQuat = new THREE.Quaternion();
    this._tempPitchQuat = new THREE.Quaternion();
    this._tempPitchAxis = new THREE.Vector3(1, 0, 0);
    this._tempXDir = new THREE.Vector3();
    this._tempUp = new THREE.Vector3();
    this._tempZDir = new THREE.Vector3();
    this._tempClosest = new THREE.Vector3();
    this._tempPushDir = new THREE.Vector3();
    this._tumblePitchAxis = new THREE.Vector3(1, 0, 0);
    this._tumbleRollAxis = new THREE.Vector3(0, 0, 1);
    this._tumblePitchQuat = new THREE.Quaternion();
    this._tumbleRollQuat = new THREE.Quaternion();
  }

  setProfile(profileKey) {
    if (VEHICLE_PROFILES[profileKey]) {
      this.profile = VEHICLE_PROFILES[profileKey];
    }
  }

  setColliders(colliders) {
    this.colliders = colliders;
    console.warn(`[PHYSICS DIAGNOSTIC] Engine reset. Tracking ${this.colliders ? this.colliders.length : 0} colliders.`);
  }

  reset(position = new THREE.Vector3(0, 3, 0)) {
    this.position.copy(position);
    this.velocity.set(0, 0, 0);
    this.quaternion.identity();
    this.surfaceNormal.set(0, 1, 0);
    this.gravity.set(0, -25.0, 0);
    this.forwardSpeed = 0;
    this.lateralSteer = 0;
    this.currentSteer = 0;
    this.isGrounded = true;
    this.isAirborne = false;
    this.isFalling = false;
    this.fallStartY = 0;
    this.fallImmunityTimer = 2.0;
    this.freezeFrames = 10;
    this.isFrozen = false;
    this.hasHitOceanFloor = false;
    this.inAntiGravZone = false;
    this.inSpeedBoostZone = false;
    this.speedBoostMultiplier = 1.0;
    this.barrierHitThisFrame = false;
    this.launchPadHit = false;
    this._tumblePitch = 0;
    this._tumbleRoll = 0;
    console.warn(`[PHYSICS DIAGNOSTIC] Engine reset. Tracking ${this.colliders ? this.colliders.length : 0} colliders.`);
  }

  update(dt, trackColliders, antiGravZones = [], barrierColliders = [], speedBoostZones = [], launchPadTriggers = []) {
    dt = Math.min(dt, 0.033);
    this.barrierHitThisFrame = false;
    this.launchPadHit = false;

    // ─── NaN / Infinity Shield ───
    // Passing NaN or Infinity to Three.js matrix math causes an instant WebGL
    // shader panic that crashes the Android WebView process silently.
    const px = this.position.x, py = this.position.y, pz = this.position.z;
    if (!isFinite(px) || !isFinite(py) || !isFinite(pz)) {
      console.error('[Physics Shield] Position NaN/Inf detected — resetting to spawn.', px, py, pz);
      if (window._debugOverlay) window._debugOverlay('Physics NaN detected! Pos: ' + px + ',' + py + ',' + pz, 'SpherePhysicsEngine.js', '');
      this.position.set(0, 5, 0);
      this.velocity.set(0, 0, 0);
      this.forwardSpeed = 0;
    }
    const vx = this.velocity.x, vy = this.velocity.y, vz = this.velocity.z;
    if (!isFinite(vx) || !isFinite(vy) || !isFinite(vz)) {
      console.error('[Physics Shield] Velocity NaN/Inf detected — zeroing.', vx, vy, vz);
      this.velocity.set(0, 0, 0);
      this.forwardSpeed = 0;
    }
    const nx = this.surfaceNormal.x, ny = this.surfaceNormal.y, nz = this.surfaceNormal.z;
    if (!isFinite(nx) || !isFinite(ny) || !isFinite(nz)) {
      console.error('[Physics Shield] Surface normal NaN/Inf detected — resetting to up.');
      this.surfaceNormal.set(0, 1, 0);
    }

    if (this._debugFrameCount === undefined) this._debugFrameCount = 0;
    if (this._debugFrameCount < 3) {
      this._debugFrameCount++;
      console.log(`[SpherePhysicsEngine] Active trackColliders count: ${trackColliders?.length || 0}`);
    }

    const downDir = this._tempDir.copy(this.surfaceNormal).negate();
    this._tempRay.set(this.position, downDir);
    this._tempRay.far = this.profile.radius + 3.0;

    const hits = (trackColliders && trackColliders.length > 0)
      ? this._tempRay.intersectObjects(trackColliders, true)
      : [];

    this._tempNormal.set(0, 1, 0);
    if (hits.length > 0) {
      const hit = hits[0];
      if (hit.distance <= this.profile.radius + 0.15) {
        this.isGrounded = true;
        this.isAirborne = false;
        this.isFalling = false;
        this._tempNormal.copy(hit.face.normal).transformDirection(hit.object.matrixWorld);

        this._tempTargetPos.copy(hit.point).addScaledVector(this._tempNormal, this.profile.radius);
        this.position.lerp(this._tempTargetPos, 0.65);
      } else {
        this.isGrounded = false;
        this.isAirborne = true;
      }
    } else {
      this.isGrounded = false;
      this.isAirborne = true;
    }

    // ─── VOID FALL DETECTION ───
    if (this.fallImmunityTimer > 0) {
      this.fallImmunityTimer -= dt;
    } else if (this.isAirborne && !this.isFalling) {
      // Check if we're well below where we should be
      if (this.position.y < -5.0) {
        this.isFalling = true;
        this.fallStartY = this.position.y;
      }
    }

    // If falling, apply tumble physics and skip normal movement
    if (this.isFalling) {
      this._updateFallingPhysics(dt);
      return;
    }

    // ─── 2. Anti-Gravity & Speed Boost Zones ───
    this.inAntiGravZone = false;
    for (const zone of antiGravZones) {
      if (zone.box.containsPoint(this.position)) {
        this.inAntiGravZone = true;
        this._tempNormal.copy(zone.normal);
        break;
      }
    }

    this.surfaceNormal.lerp(this._tempNormal, 0.2);

    if (this.inAntiGravZone || (this.isGrounded && this.surfaceNormal.y < 0.7)) {
      this.gravity.copy(this.surfaceNormal).multiplyScalar(-25.0);
    } else {
      this.gravity.set(0, -25.0, 0);
    }

    this.inSpeedBoostZone = false;
    this.speedBoostMultiplier = 1.0;
    for (const boost of speedBoostZones) {
      if (boost.box.containsPoint(this.position)) {
        this.inSpeedBoostZone = true;
        this.speedBoostMultiplier = boost.multiplier || 1.35;
        break;
      }
    }

    // ─── 2b. LAUNCH PAD TRIGGER CHECK ───
    for (const pad of launchPadTriggers) {
      if (pad.used) continue;
      if (pad.box.containsPoint(this.position)) {
        // Apply deterministic upward + forward impulse (Asphalt 8-style)
        this.velocity.y = pad.upForce;
        this.velocity.z += pad.fwdForce;
        this.forwardSpeed = Math.max(this.forwardSpeed, pad.fwdForce * 0.8);
        pad.used = true;
        this.launchPadHit = true;
        this.isGrounded = false;
        this.isAirborne = true;
        break;
      }
    }

    // ─── 3. Smooth Exponential Throttle & Drag ───
    this.currentSteer = THREE.MathUtils.lerp(this.currentSteer, this.lateralSteer, 0.16);

    let targetSpeed = 0;
    if (this.isNitroActive || this.inSpeedBoostZone) {
      targetSpeed = (this.isNitroActive ? this.profile.nitroSpeed : this.profile.topSpeed) * this.speedBoostMultiplier;
    } else if (this.isAccelerating) {
      targetSpeed = this.profile.topSpeed * this.speedBoostMultiplier;
    }

    if (this.isAccelerating || this.isNitroActive || this.inSpeedBoostZone) {
      const accelRate = (this.isNitroActive ? this.profile.acceleration * 1.6 : this.profile.acceleration) * this.speedBoostMultiplier;
      this.forwardSpeed = THREE.MathUtils.damp(this.forwardSpeed, targetSpeed, accelRate * 0.12, dt);
    } else if (this.isBraking) {
      this.forwardSpeed = THREE.MathUtils.damp(this.forwardSpeed, 0, this.profile.braking * 0.25, dt);
    } else {
      this.forwardSpeed *= Math.pow(0.95, dt * 60);
      if (this.forwardSpeed < 0.05) this.forwardSpeed = 0;
    }

    // Tangent vectors — reuse pre-allocated scratch objects
    const trackForward = this._tempTrackFwd.set(0, 0, 1);
    const right = this._tempRight.crossVectors(trackForward, this.surfaceNormal).normalize();
    const forward = this._tempForward.crossVectors(this.surfaceNormal, right).normalize();

    const steerForce = this.currentSteer * this.profile.handling * (1 + this.forwardSpeed * 0.015);
    const lateralVelocity = this._tempLatVel.copy(right).multiplyScalar(steerForce * 16.0);
    const forwardVelocity = this._tempFwdVel.copy(forward).multiplyScalar(this.forwardSpeed);

    if (this.isGrounded) {
      this.velocity.copy(forwardVelocity).add(lateralVelocity);
    } else {
      const centerPullX = -this.position.x * 0.05;
      this.velocity.x += centerPullX;

      this.velocity.addScaledVector(this.gravity, dt);
      this.velocity.x += lateralVelocity.x * dt * 1.5;
    }

    this.position.addScaledVector(this.velocity, dt);

    // ─── 4. Barrier AABB Collisions ───
    this._resolveBarrierCollisions(barrierColliders);

    // ─── 5. Quaternion Alignment & Mid-Air Pitch ───
    const up = this._tempUp.copy(this.surfaceNormal);
    const zDir = this._tempZDir.copy(forward);
    const xDir = this._tempXDir.crossVectors(up, zDir).normalize();
    this._tempMat4.makeBasis(xDir, up, zDir);

    this._tempQuat.setFromRotationMatrix(this._tempMat4);

    // Mid-air nose pitch up for dramatic effect
    if (this.isAirborne && this.position.y > 0) {
      const pitchAngle = this.launchPadHit ? -0.35 : -0.2;
      this._tempPitchQuat.setFromAxisAngle(this._tempPitchAxis, pitchAngle);
      this._tempQuat.multiply(this._tempPitchQuat);
    }

    this.quaternion.slerp(this._tempQuat, 0.2);
  }

  /**
   * Organic falling/tumbling physics when vehicle has left the track
   * and is falling into the void.
   */
  _updateFallingPhysics(dt) {
    if (this.hasHitOceanFloor) return;

    // Stronger gravity during fall
    this.velocity.y -= 35.0 * dt;

    // Subtle forward drift deceleration
    this.velocity.x *= 0.99;
    this.velocity.z *= 0.98;

    this.position.addScaledVector(this.velocity, dt);

    // Death plane impact at y = -149.0 (Stage 5 requirement)
    if (this.position.y <= -149.0) {
      this.position.y = -149.0;
      this.velocity.set(0, 0, 0);
      this.hasHitOceanFloor = true;
      return;
    }

    // Organic tumble rotation — accelerating spin
    this._tumblePitch += (3.5 + Math.abs(this.velocity.y) * 0.05) * dt;
    this._tumbleRoll += (2.2 + Math.abs(this.velocity.x) * 0.1) * dt;

    // Build tumble quaternion using pre-allocated scratch objects
    this._tumblePitchQuat.setFromAxisAngle(this._tumblePitchAxis, this._tumblePitch);
    this._tumbleRollQuat.setFromAxisAngle(this._tumbleRollAxis, this._tumbleRoll);
    this.quaternion.copy(this._tumblePitchQuat).multiply(this._tumbleRollQuat);
  }

  _resolveBarrierCollisions(barrierColliders) {
    if (!barrierColliders || barrierColliders.length === 0) return;

    this._playerSphere.center.copy(this.position);
    this._playerSphere.radius = this.profile.radius;

    for (const barrier of barrierColliders) {
      const box = barrier.box;
      if (!box.intersectsSphere(this._playerSphere)) continue;

      this.barrierHitThisFrame = true;

      // Reuse pre-allocated scratch vector instead of allocating new THREE.Vector3 per barrier
      this._tempClosest.copy(this.position).clamp(box.min, box.max);

      const pushDir = this._tempPushDir.subVectors(this.position, this._tempClosest);
      const dist = pushDir.length();

      if (dist < this.profile.radius && dist > 0.001) {
        pushDir.normalize();
        const penetration = this.profile.radius - dist;
        this.position.addScaledVector(pushDir, penetration + 0.05);

        const velDot = this.velocity.dot(pushDir);
        if (velDot < 0) {
          this.velocity.addScaledVector(pushDir, -velDot * 1.1);
        }
        this.forwardSpeed *= 0.85;
      }
    }
  }
}
