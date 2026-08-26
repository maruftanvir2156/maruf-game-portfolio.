export class InputManager {
  constructor() {
    this.steer = 0; // -1 (left) to +1 (right)
    this.isAccelerating = false;
    this.isNitroActive = false;
    this.isBraking = false;
    this.cameraToggleRequested = false;

    // Mobile control scheme: 'buttons' | 'wheel' | 'tilt'
    this.controlMode = 'buttons';
    this.wheelRotation = 0;
    this.touchStartX = 0;
    this.touchStartY = 0;

    this.neutralGamma = 0;
    this.lastRawGamma = 0;

    // Double-tap detection for GAS → Nitro trigger
    this._lastGasTapTime = 0;
    this._doubleTapThreshold = 350; // ms

    this.setupListeners();
    this.setupControlModeListeners();
  }

  getSteerInput() {
    return this.steer || 0;
  }

  setNeutralTilt() {
    this.neutralGamma = this.lastRawGamma || 0;
    console.log("[InputManager] Gyro calibrated to neutral angle:", this.neutralGamma);
  }

  setControlMode(mode, onPermissionDenied) {
    this.controlMode = mode || 'buttons';
    console.log("[InputManager] Control mode set to:", this.controlMode);

    const steerLeftBtn = document.getElementById('touch-steer-left');
    const steerRightBtn = document.getElementById('touch-steer-right');
    const virtualWheel = document.getElementById('virtual-wheel');
    const calibrateRow = document.getElementById('row-calibrate-tilt');

    if (calibrateRow) {
      calibrateRow.style.display = (this.controlMode === 'tilt') ? 'flex' : 'none';
    }

    if (steerLeftBtn && steerRightBtn && virtualWheel) {
      if (this.controlMode === 'wheel') {
        steerLeftBtn.style.display = 'none';
        steerRightBtn.style.display = 'none';
        virtualWheel.style.display = 'flex';
      } else if (this.controlMode === 'tilt') {
        steerLeftBtn.style.display = 'none';
        steerRightBtn.style.display = 'none';
        virtualWheel.style.display = 'none';
        this.requestGyroPermission(onPermissionDenied);
      } else {
        // 'buttons' (default)
        steerLeftBtn.style.display = 'flex';
        steerRightBtn.style.display = 'flex';
        virtualWheel.style.display = 'none';
      }
    }
  }

  requestGyroPermission(onPermissionDenied) {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then(response => {
          if (response === 'granted') {
            console.log("[InputManager] Gyroscope permission granted.");
          } else {
            this.setControlMode('buttons');
            if (onPermissionDenied) onPermissionDenied("Gyroscope permission denied. Falling back to Touch Buttons.");
          }
        })
        .catch(err => {
          console.error(err);
          this.setControlMode('buttons');
          if (onPermissionDenied) onPermissionDenied("Gyroscope sensor error. Falling back to Touch Buttons.");
        });
    }
  }

  setupControlModeListeners() {
    // Gyroscope / Tilt Listener with Calibration
    window.addEventListener('deviceorientation', (e) => {
      if (e.gamma !== null && e.gamma !== undefined) {
        this.lastRawGamma = e.gamma;
        if (this.controlMode === 'tilt') {
          const deltaGamma = e.gamma - (this.neutralGamma || 0);
          const clampedGamma = Math.max(-25, Math.min(25, deltaGamma));
          this.steer = clampedGamma / 25.0;
        }
      }
    });

    // Virtual Steering Wheel Listener
    const wheelElem = document.getElementById('virtual-wheel');
    if (wheelElem) {
      let isDragging = false;
      let startAngle = 0;

      const getAngle = (touch, rect) => {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        return Math.atan2(touch.clientY - centerY, touch.clientX - centerX);
      };

      wheelElem.addEventListener('pointerdown', (e) => {
        isDragging = true;
        const rect = wheelElem.getBoundingClientRect();
        startAngle = getAngle(e, rect);
      });

      window.addEventListener('pointermove', (e) => {
        if (!isDragging || this.controlMode !== 'wheel') return;
        const rect = wheelElem.getBoundingClientRect();
        const currentAngle = getAngle(e, rect);
        let deltaAngle = currentAngle - startAngle;

        // Wrap angle
        if (deltaAngle > Math.PI) deltaAngle -= Math.PI * 2;
        if (deltaAngle < -Math.PI) deltaAngle += Math.PI * 2;

        const maxAngle = Math.PI / 3; // 60 degrees max
        const clampedDelta = Math.max(-maxAngle, Math.min(maxAngle, deltaAngle));
        this.steer = clampedDelta / maxAngle;
        this.wheelRotation = (clampedDelta * 180) / Math.PI;

        const innerWheel = wheelElem.querySelector('.wheel-inner');
        if (innerWheel) {
          innerWheel.style.transform = `rotate(${this.wheelRotation}deg)`;
        }
      });

      const stopWheel = () => {
        if (isDragging) {
          isDragging = false;
          this.steer = 0;
          this.wheelRotation = 0;
          const innerWheel = wheelElem.querySelector('.wheel-inner');
          if (innerWheel) {
            innerWheel.style.transform = 'rotate(0deg)';
          }
        }
      };

      window.addEventListener('pointerup', stopWheel);
      window.addEventListener('pointercancel', stopWheel);
    }
  }

  setupListeners() {
    // ------------------------------------
    // DESKTOP KEYBOARD CONTROLS
    // ------------------------------------
    window.addEventListener('keydown', (e) => {
      switch (e.key.toLowerCase()) {
        case 'a':
        case 'arrowleft':
          this.steer = -1;
          break;
        case 'd':
        case 'arrowright':
          this.steer = 1;
          break;
        case 'w':
        case 'arrowup':
          this.isAccelerating = true;
          break;
        case ' ':
          this.isNitroActive = true;
          break;
        case 's':
        case 'arrowdown':
          this.isBraking = true;
          break;
        case 'c':
          this.cameraToggleRequested = true;
          break;
      }
    });

    window.addEventListener('keyup', (e) => {
      switch (e.key.toLowerCase()) {
        case 'a':
        case 'arrowleft':
          if (this.steer === -1) this.steer = 0;
          break;
        case 'd':
        case 'arrowright':
          if (this.steer === 1) this.steer = 0;
          break;
        case 'w':
        case 'arrowup':
          this.isAccelerating = false;
          break;
        case ' ':
          this.isNitroActive = false;
          break;
        case 's':
        case 'arrowdown':
          this.isBraking = false;
          break;
      }
    });

    // ------------------------------------
    // MOBILE TOUCH ZONE CONTROLS
    // ------------------------------------
    const steerLeftBtn = document.getElementById('touch-steer-left');
    const steerRightBtn = document.getElementById('touch-steer-right');
    const gasBtn = document.getElementById('touch-gas');
    const boostBtn = document.getElementById('touch-boost');

    // ── STEER LEFT ──
    if (steerLeftBtn) {
      steerLeftBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        if (this.controlMode === 'buttons') this.steer = -1;
      });
      steerLeftBtn.addEventListener('pointerup', (e) => {
        e.preventDefault();
        if (this.controlMode === 'buttons') this.steer = 0;
      });
      steerLeftBtn.addEventListener('pointerleave', () => {
        if (this.controlMode === 'buttons') this.steer = 0;
      });
    }

    // ── STEER RIGHT ──
    if (steerRightBtn) {
      steerRightBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        if (this.controlMode === 'buttons') this.steer = 1;
      });
      steerRightBtn.addEventListener('pointerup', (e) => {
        e.preventDefault();
        if (this.controlMode === 'buttons') this.steer = 0;
      });
      steerRightBtn.addEventListener('pointerleave', () => {
        if (this.controlMode === 'buttons') this.steer = 0;
      });
    }

    // ── GAS / ACCELERATE BUTTON (Hold = accelerate, Double-tap = nitro burst) ──
    if (gasBtn) {
      gasBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.isAccelerating = true;

        // Double-tap detection for nitro burst
        const now = Date.now();
        if (now - this._lastGasTapTime < this._doubleTapThreshold) {
          this.isNitroActive = true;
          // Auto-deactivate nitro burst after 1.5 seconds
          setTimeout(() => {
            this.isNitroActive = false;
          }, 1500);
        }
        this._lastGasTapTime = now;
      });
      gasBtn.addEventListener('pointerup', (e) => {
        e.preventDefault();
        this.isAccelerating = false;
      });
      gasBtn.addEventListener('pointerleave', () => {
        this.isAccelerating = false;
      });
    }

    // ── NITRO / BOOST BUTTON (Tap = manual nitro boost) ──
    if (boostBtn) {
      boostBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.isNitroActive = true;
      });
      boostBtn.addEventListener('pointerup', (e) => {
        e.preventDefault();
        this.isNitroActive = false;
      });
      boostBtn.addEventListener('pointerleave', () => {
        this.isNitroActive = false;
      });
    }

    // Swipe Gestures for In-Game Driving ONLY
    window.addEventListener('touchstart', (e) => {
      if (e.target.closest('button, .btn, .btn-level, .btn-tier, .btn-arrow, .btn-primary-play, .btn-primary, .btn-secondary, .btn-icon, .modal-card, .vehicle-info-card, .tab-btn, .modal-tab-content, .touch-zone, .level-buttons, #screen-level-select, #screen-main-menu, #screen-garage, #screen-env-select, .ui-screen, .modal-overlay, #ui-layer')) {
        return;
      }
      if (e.touches.length > 0) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.target.closest('button, .btn, .btn-level, .btn-tier, .btn-arrow, .btn-primary-play, .btn-primary, .btn-secondary, .btn-icon, .modal-card, .vehicle-info-card, .tab-btn, .modal-tab-content, .touch-zone, .level-buttons, #screen-level-select, #screen-main-menu, #screen-garage, #screen-env-select, .ui-screen, .modal-overlay, #ui-layer')) {
        return;
      }
      if (e.touches.length > 0 && this.controlMode === 'buttons') {
        const deltaX = e.touches[0].clientX - this.touchStartX;
        const deltaY = e.touches[0].clientY - this.touchStartY;

        if (Math.abs(deltaX) > 15) {
          this.steer = deltaX > 0 ? 1 : -1;
        }

        if (deltaY > 40) {
          this.isBraking = true;
        } else {
          this.isBraking = false;
        }
      }
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      if (e.target.closest('#screen-level-select, .level-buttons, #ui-layer, .ui-screen')) {
        return;
      }
      if (this.controlMode === 'buttons') {
        this.steer = 0;
      }
      this.isBraking = false;
    }, { passive: true });
  }
}
