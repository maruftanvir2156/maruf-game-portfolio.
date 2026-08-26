import * as THREE from 'three';

/**
 * CinemachineCamera v3 — Sense of Speed Overhaul
 *
 * 4 camera modes + dynamic speed FOV (60° -> 76° -> 84°), steering horizon roll (-1.5°..+1.5°),
 * high-speed micro rumble (>70% speed), and cinematic void-fall tracking.
 */
export class CinemachineCamera {
  constructor(camera) {
    this.camera = camera;
    this.camera.near = 0.1;
    this.camera.updateProjectionMatrix();

    this.cameraMode = 0;

    this.modeOffsets = [
      { target: new THREE.Vector3(0, 3.8, -8.0), look: new THREE.Vector3(0, 1.2, 0.0) },  // 0: Arcade TPP
      { target: new THREE.Vector3(0, 2.5, -5.0), look: new THREE.Vector3(0, 1.2, 5.0) },  // 1: Close TPP
      { target: new THREE.Vector3(0, 1.2, 0.8), look: new THREE.Vector3(0, 1.2, 10.0) }, // 2: FPP Cockpit
      { target: new THREE.Vector3(-4, 2.0, -8.0), look: new THREE.Vector3(0, 1.5, 4.0) }   // 3: Action Cam
    ];

    this.currentPos = new THREE.Vector3();
    this.currentLookAt = new THREE.Vector3();

    this.baseFOV = 60.0;
    this.targetFOV = 60.0;

    // Fall tracking state
    this.isTrackingFall = false;
    this.fallTrackTimer = 0;
    this._vignetteActive = false;

    // Launch burst state
    this._launchBurstTimer = 0;

    // Near-miss FOV punch state
    this._nearMissPunchTimer = 0;

    // Shake
    this.shakeIntensity = 0;
    this.shakeDuration = 0;
    this.shakeTimer = 0;
  }

  cycleCameraMode() {
    this.cameraMode = (this.cameraMode + 1) % 4;
    console.log('[CinemachineCamera] Camera mode switched to:', this.cameraMode);
    return this.cameraMode;
  }

  setCameraMode(modeIndex) {
    this.cameraMode = modeIndex % 4;
  }

  reset(playerPosition) {
    this.isTrackingFall = false;
    this.fallTrackTimer = 0;
    this._launchBurstTimer = 0;
    this.camera.fov = this.baseFOV;
    this.camera.rotation.z = 0;
    this.camera.updateProjectionMatrix();
    this.shakeIntensity = 0;
    this.shakeDuration = 0;
    this.shakeTimer = 0;
    this._setVignette(false);

    const offset = this.modeOffsets[this.cameraMode];
    this.currentPos.copy(playerPosition).add(offset.target);
    this.currentLookAt.copy(playerPosition).add(offset.look);

    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.currentLookAt);
  }

  triggerShake(intensity = 0.3, duration = 0.2) {
    this.shakeIntensity = Math.min(intensity, 0.6);
    this.shakeDuration = duration;
    this.shakeTimer = 0;
  }

  /**
   * Trigger launch pad FOV burst — instant FOV expansion to 85°
   * that smoothly eases back to normal over ~1.5 seconds.
   */
  triggerLaunchBurst() {
    this._launchBurstTimer = 1.5;
    this.triggerShake(0.4, 0.3);
  }

  /**
   * Trigger near-miss camera FOV punch-in (-5° FOV punch easing back over 0.2s)
   */
  triggerNearMissPunch() {
    this._nearMissPunchTimer = 0.2;
    this.triggerShake(0.2, 0.15);
  }

  update(dt, playerPosition, playerQuaternion, isNitroActive, isFallingOff, inSpeedBoost = false, isAirborne = false, forwardSpeed = 0, launchPadHit = false, steerVal = 0, maxSpeed = 30.0) {
    dt = Math.min(dt, 0.033);

    // ── Launch pad FOV burst ──
    if (launchPadHit) {
      this.triggerLaunchBurst();
    }

    // ── STAGE 2: DYNAMIC SPEED FOV ──
    // Base FOV: 60.0°, Max Speed FOV: 76.0°, Nitro Boost FOV: 84.0°
    const speedRatio = Math.min(1.0, Math.max(0.0, forwardSpeed / (maxSpeed || 30.0)));
    let targetFov = 60.0 + speedRatio * 16.0; // 60.0 -> 76.0° at max speed
    if (isNitroActive || inSpeedBoost) {
      targetFov = Math.max(targetFov, 84.0); // 84.0° on Nitro Boost
    }

    // Launch burst override — snap to 85° then ease back
    if (this._launchBurstTimer > 0) {
      this._launchBurstTimer -= dt;
      const burstT = Math.max(0, this._launchBurstTimer / 1.5);
      targetFov = Math.max(targetFov, 60.0 + 25.0 * burstT);
    }

    // Near-miss FOV punch-in (-5° FOV)
    if (this._nearMissPunchTimer > 0) {
      this._nearMissPunchTimer -= dt;
      const punchT = Math.max(0, this._nearMissPunchTimer / 0.2);
      targetFov -= 5.0 * punchT;
    }

    this.targetFOV = Math.min(88, Math.max(45, targetFov));
    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, this.targetFOV, 0.08);
    this.camera.updateProjectionMatrix();

    // ── CINEMATIC FALL TRACKING ──
    if (isFallingOff) {
      this._updateFallCamera(dt, playerPosition);
      return;
    }

    // Reset fall state when not falling
    if (this.isTrackingFall) {
      this.isTrackingFall = false;
      this.fallTrackTimer = 0;
      this._setVignette(false);
    }

    // ── Asphalt 9-style Damped Chase Cam Follow ──
    const activeOffset = this.modeOffsets[this.cameraMode];

    // Camera sits close behind and matches car yaw quaternion
    const rotatedOffsetTarget = activeOffset.target.clone().applyQuaternion(playerQuaternion);
    const rotatedOffsetLook = activeOffset.look.clone().applyQuaternion(playerQuaternion);

    const desiredPos = playerPosition.clone().add(rotatedOffsetTarget);
    const desiredLook = playerPosition.clone().add(rotatedOffsetLook);

    // Dynamic speed-compensated lerp: ramps up lerp factor as speed & boost increase so camera never lags
    const baseLerp = this.cameraMode === 2 ? 0.85 : (this.cameraMode === 1 ? 0.45 : 0.35);
    const speedBoostFactor = Math.min(1.0, forwardSpeed / 35.0);
    const lerpRate = Math.min(0.92, baseLerp + speedBoostFactor * 0.35 + (isNitroActive || inSpeedBoost ? 0.20 : 0));
    const lookLerpRate = Math.min(0.95, lerpRate + 0.08);

    this.currentPos.lerp(desiredPos, lerpRate);
    this.currentLookAt.lerp(desiredLook, lookLerpRate);

    // Camera Shake (Explosions & Impact)
    if (this.shakeTimer < this.shakeDuration) {
      this.shakeTimer += dt;
      const t = 1 - (this.shakeTimer / this.shakeDuration);
      this.currentPos.x += (Math.random() - 0.5) * this.shakeIntensity * t;
      this.currentPos.y += (Math.random() - 0.5) * this.shakeIntensity * t;
    }

    // SPEED MICRO-VIBRATION (Speeds > 70% Max Speed)
    if (speedRatio > 0.7) {
      const rumbleFactor = (speedRatio - 0.7) / 0.3; // 0.0 to 1.0
      this.currentPos.x += (Math.random() - 0.5) * 0.06 * rumbleFactor;
      this.currentPos.y += (Math.random() - 0.5) * 0.06 * rumbleFactor;
    }

    // STAGE 2: Enforce strict vertical camera orientation
    this.camera.up.set(0, 1, 0);
    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.currentLookAt);
  }

  _updateFallCamera(dt, playerPosition) {
    if (!this.isTrackingFall) {
      this.isTrackingFall = true;
      this.fallTrackTimer = 0;
    }

    this.fallTrackTimer += dt;

    const fallLerpSpeed = 0.06;
    const sideOffset = 4.0 + this.fallTrackTimer * 1.5;
    const heightOffset = Math.max(3.0, 12.0 - this.fallTrackTimer * 4);

    const desiredFallPos = new THREE.Vector3(
      playerPosition.x + sideOffset,
      playerPosition.y + heightOffset,
      playerPosition.z - 10 - this.fallTrackTimer * 3
    );

    this.currentPos.lerp(desiredFallPos, fallLerpSpeed);
    this.currentLookAt.lerp(playerPosition, 0.12);

    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.currentLookAt);

    if (this.fallTrackTimer > 0.3 && !this._vignetteActive) {
      this._setVignette(true);
    }
  }

  _setVignette(active) {
    this._vignetteActive = active;
    const overlay = document.getElementById('fall-vignette-overlay');
    if (overlay) {
      overlay.classList.toggle('active', active);
    }
  }
}
