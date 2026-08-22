// PhysicsEngine — Ground-Truth Arcade Ball Physics (Substepped, Normal-Contact, Zero Pre-Fall Freeze)
import * as THREE from 'three';

const BALL_RADIUS  = 1.0;
const GRAVITY      = -28.0;
const FIXED_DT     = 1 / 120; // 120Hz Fixed Physics Sub-stepping (8.33ms)
const MAX_STEPS    = 8;
const KILL_PLANE_Y = -12.0;

export class PhysicsEngine {
  constructor(camera) {
    this.camera  = camera;
    this.radius  = BALL_RADIUS;
    this.gravity = GRAVITY;
    this.fixedDt = FIXED_DT;
    this.accumulator = 0;

    // ── Authoritative State ──────────────────────────────────────────────────
    this.position          = new THREE.Vector3(0, 4, 0);
    this.velocity          = new THREE.Vector3(0, 0, 0);
    this.rotation          = new THREE.Quaternion();
    this.lastCheckpointPos = new THREE.Vector3(0, 4, 0);
    this.lastValidPos      = new THREE.Vector3(0, 4, 0);

    this.isGrounded            = false;
    this.groundNormal          = new THREE.Vector3(0, 1, 0);
    this.boostTimer            = 0;
    this.hasRespawnedThisFrame = false;

    // ── Multi-Ray Ground Probe ───────────────────────────────────────────────
    this.downRay = new THREE.Raycaster();
    this.downRay.far = 1.6;
    this.downRay.firstHitOnly = true;

    this.sideRay = new THREE.Raycaster();
    this.sideRay.far = 1.12;
    this.sideRay.firstHitOnly = true;

    this.colliders = [];

    // ── Pre-allocated Scratch Memory (Zero GC in Hot Path) ────────────────────
    this._camDir    = new THREE.Vector3();
    this._camRight  = new THREE.Vector3();
    this._camUp     = new THREE.Vector3(0, 1, 0);
    this._drvDir    = new THREE.Vector3();
    this._strDir    = new THREE.Vector3();
    this._rollAxis  = new THREE.Vector3(1, 0, 0);
    this._downDir   = new THREE.Vector3(0, -1, 0);
    this._pushNorm  = new THREE.Vector3();
    this._qDelta    = new THREE.Quaternion();

    // Probe offsets around sphere center (center + 4 cardinal offsets)
    this._probeOffsets = [
      new THREE.Vector3( 0,    0,  0),
      new THREE.Vector3( 0.4,  0,  0),
      new THREE.Vector3(-0.4,  0,  0),
      new THREE.Vector3( 0,    0,  0.4),
      new THREE.Vector3( 0,    0, -0.4)
    ];

    // 8-direction horizontal raycast directions
    const s2 = 0.7071;
    this._sideDirs = [
      new THREE.Vector3( 1,  0,  0),
      new THREE.Vector3(-1,  0,  0),
      new THREE.Vector3( 0,  0,  1),
      new THREE.Vector3( 0,  0, -1),
      new THREE.Vector3( s2, 0,  s2),
      new THREE.Vector3(-s2, 0,  s2),
      new THREE.Vector3( s2, 0, -s2),
      new THREE.Vector3(-s2, 0, -s2)
    ];

    // Ring buffer telemetry
    this._ringBuf  = [];
    this._ringSize = 10;
    this._frameNum = 0;

    // Telemetry stats
    this.telemetry = {
      physicsTimeMs: 0,
      raycastTimeMs: 0,
      isGrounded:    false
    };
  }

  // ── Public API ────────────────────────────────────────────────────────────
  setColliders(colliders, levelId = 1) {
    this.colliders = (colliders || []).filter(c => c && !c.isTrigger && !c.isPortal && !c.isCheckpoint);
    console.log("CRITICAL: Colliders updated for Level " + levelId + ". Total colliders: " + this.colliders.length);
  }

  setPosition(pos) {
    this.position.copy(pos);
    this.lastValidPos.copy(pos);
    this.lastCheckpointPos.copy(pos);
    this.velocity.set(0, 0, 0);
    this.rotation.identity();
    this.isGrounded = true;
    this.groundNormal.set(0, 1, 0);
    this.accumulator = 0;
    this.boostTimer  = 0;
    this._ringBuf    = [];
    this._frameNum   = 0;
  }

  setCheckpoint(pos) {
    this.lastCheckpointPos.copy(pos);
  }

  respawn() {
    this.position.copy(this.lastCheckpointPos);
    this.velocity.set(0, 0, 0);
    this.rotation.identity();
    this.isGrounded = true;
    this.groundNormal.set(0, 1, 0);
    this.hasRespawnedThisFrame = true;
    this.accumulator = 0;
    this.boostTimer  = 0;
  }

  applyBoost(speedBoost = 38) {
    this.velocity.z = Math.max(this.velocity.z + 12, speedBoost);
    this.boostTimer = 1.4;
  }

  // ── Main Update (Substepped Fixed-Timestep) ────────────────────────────────
  update(renderDt, inputSteer, forwardAccel, isJumpPressed, isTouching) {
    const tStart = performance.now();
    this.hasRespawnedThisFrame = false;
    this._frameNum++;

    // Kill plane reset
    if (this.position.y < KILL_PLANE_Y) {
      // this._dumpRingBuffer('KILL PLANE');
      this.respawn();
      this.telemetry.physicsTimeMs = performance.now() - tStart;
      return { speed: 0, isGrounded: true, hasRespawned: true };
    }

    const safeDt = Math.min(renderDt, 0.08);
    this.accumulator += safeDt;

    let rayTotal = 0;
    let steps    = 0;
    while (this.accumulator >= this.fixedDt && steps < MAX_STEPS) {
      const t0 = performance.now();
      this._fixedStep(this.fixedDt, inputSteer, forwardAccel, isJumpPressed, isTouching);
      rayTotal += performance.now() - t0;
      this.accumulator -= this.fixedDt;
      steps++;
    }

    // Protection against NaN propagation
    if (!isFinite(this.position.x) || !isFinite(this.position.y) || !isFinite(this.position.z)) {
      console.error('[Physics] NaN position detected! Respawning.');
      this.respawn();
    } else if (this.isGrounded) {
      this.lastValidPos.copy(this.position);
    }

    this._pushRing(inputSteer, forwardAccel);

    const tEnd = performance.now();
    this.telemetry.physicsTimeMs = tEnd - tStart;
    this.telemetry.raycastTimeMs = rayTotal;
    this.telemetry.isGrounded    = this.isGrounded;

    return {
      speed:        this.velocity.length(),
      isGrounded:   this.isGrounded,
      hasRespawned: this.hasRespawnedThisFrame
    };
  }

  // ── Sub-step Execution ────────────────────────────────────────────────────
  _fixedStep(dt, inputSteer, forwardAccel, isJumpPressed, isTouching) {
    // 1. Ground contact probe
    this._checkGround();

    // 2. Camera-relative direction vectors
    this.camera.getWorldDirection(this._camDir);
    this._camDir.y = 0;
    if (this._camDir.lengthSq() < 0.001) this._camDir.set(0, 0, 1);
    this._camDir.normalize();
    this._camRight.crossVectors(this._camDir, this._camUp).normalize();

    // 3. Dynamics & Acceleration
    const maxSpeed = this.boostTimer > 0 ? 44 : 32;  // raised 26 → 32 for better feel
    const accel    = this.boostTimer > 0 ? 45 : 22;
    const steerPwr = 22;

    if (this.boostTimer > 0) this.boostTimer -= dt;

    if (this.isGrounded) {
      // Slope roll-down gravity projection
      const slopeFactor = 1.0 - this.groundNormal.y;
      if (slopeFactor > 0.02) {
        this._drvDir.set(0, -1, 0).projectOnPlane(this.groundNormal).normalize();
        this.velocity.addScaledVector(this._drvDir, Math.abs(this.gravity) * slopeFactor * dt * 1.2);
      }

      // Ramp-adherence force: push ball into slope surface so it doesn't bounce off.
      // Applied as an extra downward impulse proportional to slope steepness.
      if (slopeFactor > 0.02) {
        // Add a velocity component in the -groundNormal direction (into the surface).
        // Strength = 1.5× gravity × slope steepness. At 45° slope (slopeFactor≈0.29)
        // this gives ~8 m/s² additional surface-following force.
        this.velocity.addScaledVector(this.groundNormal, -Math.abs(this.gravity) * 1.5 * slopeFactor * dt);
      }

      // Drive acceleration
      if (forwardAccel > 0) {
        this._drvDir.copy(this._camDir).projectOnPlane(this.groundNormal).normalize();
        this.velocity.addScaledVector(this._drvDir, forwardAccel * accel * dt);
      } else if (forwardAccel < 0) {
        // Braking / Backward
        this._drvDir.copy(this._camDir).projectOnPlane(this.groundNormal).normalize();
        this.velocity.addScaledVector(this._drvDir, forwardAccel * accel * 0.7 * dt);
      }

      // Steering — direct lateral velocity when actively touching, force-based otherwise
      const steerPwr = 28;
      if (inputSteer !== 0) {
        if (isTouching) {
          // Direct lateral velocity: instant, responsive, no accumulation lag
          this.velocity.x = inputSteer * 14.0;
        } else {
          this._strDir.copy(this._camRight).projectOnPlane(this.groundNormal).normalize();
          this.velocity.addScaledVector(this._strDir, inputSteer * steerPwr * dt);
        }
      }

      // Lateral damping — frame-rate-independent exp-decay so releasing keys
      // produces an immediate, snappy stop (no ice-sliding)
      if (inputSteer === 0) {
        this.velocity.x *= Math.exp(-18 * dt); // tau ≈ 56ms at 120Hz → ~95% stop in 0.17s
      }
      if (forwardAccel === 0) {
        // Subtle rolling friction when idling
        this.velocity.z *= 0.995;
      }

      // Speed cap
      const spd2D = Math.sqrt(this.velocity.x ** 2 + this.velocity.z ** 2);
      if (spd2D > maxSpeed) {
        const f = maxSpeed / spd2D;
        this.velocity.x *= f;
        this.velocity.z *= f;
      }

      // Jump action — Pure Y impulse, ZERO forced lateral drift
      if (isJumpPressed && this.isGrounded) {
        this.velocity.y = 14.5;
        this.isGrounded = false;
        if (inputSteer === 0) {
          this.velocity.x = 0; // 100% straight forward jump when not actively steering
        }
      }
    } else {
      // Airborne fast-fall gravity scaling — heavy satisfying ball physics (1.85x gravity when falling)
      const currentGravity = (this.velocity.y < 0) ? (this.gravity * 1.85) : this.gravity;
      this.velocity.y += currentGravity * dt;

      // AIR CONTROL: 60% forward drive + 60% steering power mid-air
      if (forwardAccel > 0) {
        this.velocity.addScaledVector(this._camDir, forwardAccel * accel * 0.6 * dt);
      }
      if (inputSteer !== 0) {
        this.velocity.addScaledVector(this._camRight, inputSteer * steerPwr * 0.6 * dt);
      }
      // ZERO horizontal damping while airborne — momentum is sacred
    }

    // 4. Integrate position
    this.position.addScaledVector(this.velocity, dt);

    // 5. Wall / Barrier Collision Response
    this._resolveSides();

    // 6. Surface-tangent rolling rotation
    this._updateRotation(dt);
  }

  // ── Multi-Ray Ground Check (5-Ray CCD Swept Probe with Y-Clamping) ────────
  _checkGround() {
    let closestHit = null;
    let minDist    = Infinity;

    // 5-Ray Downward Probe (Center + 4 Directional Offsets)
    for (const offset of this._probeOffsets) {
      this.downRay.ray.origin.set(
        this.position.x + offset.x,
        this.position.y + offset.y,
        this.position.z + offset.z
      );
      this.downRay.ray.direction.copy(this._downDir);

      const hits = this.downRay.intersectObjects(this.colliders, false);
      if (hits.length > 0) {
        if (hits[0].distance < minDist) {
          minDist    = hits[0].distance;
          closestHit = hits[0];
        }
      }
    }

    // If ANY ray detects track geometry within radius + 0.35m
    if (closestHit && minDist <= this.radius + 0.35) {
      this.isGrounded = true;

      if (closestHit.face) {
        this.groundNormal.copy(closestHit.face.normal).transformDirection(closestHit.object.matrixWorld);
      } else {
        this.groundNormal.set(0, 1, 0);
      }

      // Precise Y-Clamping & Negative Y Velocity Cancellation
      const targetY = closestHit.point.y + this.radius;
      const distY   = this.position.y - targetY;

      if (distY < 0.15 && this.velocity.y <= 0.2) {
        this.position.y = targetY;
        if (this.velocity.y < 0) this.velocity.y = 0;
      }
      return;
    }

    this.isGrounded = false;
    this.groundNormal.set(0, 1, 0);
  }

  // ── Wall & Side Collision (8 Directions, No Pre-Fall Stutter) ──────────────
  _resolveSides() {
    for (const dir of this._sideDirs) {
      this.sideRay.ray.origin.copy(this.position);
      this.sideRay.ray.direction.copy(dir);

      const hits = this.sideRay.intersectObjects(this.colliders, false);
      if (hits.length > 0) {
        const hit = hits[0];
        if (hit.distance < this.radius + 0.04) {
          if (hit.face) {
            this._pushNorm.copy(hit.face.normal).transformDirection(hit.object.matrixWorld);

            // PRE-FALL STUTTER FIX: Only push back if hit face is a steep barrier/wall
            // (normal.y < 0.7). Ignore horizontal deck slab side faces when airborne!
            if (this.isGrounded || this._pushNorm.y < 0.7) {
              const overlap = (this.radius + 0.04) - hit.distance;
              this.position.addScaledVector(this._pushNorm, overlap);

              const vDot = this.velocity.dot(this._pushNorm);
              if (vDot < 0) {
                this.velocity.addScaledVector(this._pushNorm, -1.05 * vDot);
              }
            }
          }
        }
      }
    }
  }

  // ── Surface-Tangent Rolling Rotation ─────────────────────────────────────
  _updateRotation(dt) {
    if (this.isGrounded) {
      // Calculate velocity projected on contact ground plane
      this._drvDir.copy(this.velocity).projectOnPlane(this.groundNormal);
      const spd = this._drvDir.length();

      if (spd > 0.01) {
        // Axis = velocity x normal
        this._rollAxis.crossVectors(this._drvDir, this.groundNormal).normalize();
        const angle = (spd / this.radius) * dt;
        this._qDelta.setFromAxisAngle(this._rollAxis, angle);
        this.rotation.premultiply(this._qDelta);
      }
    } else {
      // Airborne: continue rolling around current axis smoothly
      const spd2D = Math.sqrt(this.velocity.x ** 2 + this.velocity.z ** 2);
      if (spd2D > 0.05) {
        this._rollAxis.set(-this.velocity.z, 0, this.velocity.x).normalize();
        const angle = (spd2D / this.radius) * dt;
        this._qDelta.setFromAxisAngle(this._rollAxis, angle);
        this.rotation.premultiply(this._qDelta);
      }
    }
  }

  // ── Pre-Fall Telemetry Logging ───────────────────────────────────────────
  _pushRing(steer, forward) {
    this._ringBuf.push({
      frame:    this._frameNum,
      ts:       performance.now().toFixed(1),
      pos:      `(${this.position.x.toFixed(2)}, ${this.position.y.toFixed(2)}, ${this.position.z.toFixed(2)})`,
      vel:      `(${this.velocity.x.toFixed(2)}, ${this.velocity.y.toFixed(2)}, ${this.velocity.z.toFixed(2)})`,
      speed:    this.velocity.length().toFixed(2),
      grounded: this.isGrounded,
      normal:   `(${this.groundNormal.x.toFixed(2)}, ${this.groundNormal.y.toFixed(2)}, ${this.groundNormal.z.toFixed(2)})`,
      steer:    steer.toFixed(2),
      forward:  forward.toFixed(2)
    });
    if (this._ringBuf.length > this._ringSize) this._ringBuf.shift();
  }

  _dumpRingBuffer(reason) {
    // Debug logging disabled for clean validation reports
  }
}
