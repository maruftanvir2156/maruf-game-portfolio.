// Mobile Touch Input Manager - Pure Touch Controls, Gyroscope Permanently Disabled
import * as THREE from 'three';

export class InputManager {
  constructor(touchZoneElem, joystickKnobElem) {
    this.touchZone = touchZoneElem;
    this.joystickKnob = joystickKnobElem;

    this.steerInput = 0.0;
    this.forwardInput = 1.0; // Always roll forward
    this.isJumpPressed = false;

    // Gyroscope permanently disabled
    this.gyroEnabled = false;

    // Touch drag state
    this.isTouching = false;
    this.touchStartX = 0;
    this.currentTouchX = 0;
    this.touchStartY = 0;
    this.lastTapTime = 0;

    this.keys = {};

    this._bindEvents();
  }

  reset() {
    this.steerInput = 0.0;
    this.forwardInput = 1.0;
    this.isJumpPressed = false;
    this.isTouching = false;
    this.touchStartX = 0;
    this.currentTouchX = 0;
    this.lastTapTime = 0;
    this.keys = {};
    if (this.joystickKnob) {
      this.joystickKnob.style.transform = 'translate(-50%, -50%)';
    }
  }

  triggerJump() {
    this.isJumpPressed = true;
  }

  enableGyro() {
    // Permanently disabled — no-op
    this.gyroEnabled = false;
  }

  calibrateGyro() {
    // Permanently disabled — no-op
  }

  _bindEvents() {
    // ── Touch listeners on window so they fire even when UI is on top ──────────
    window.addEventListener('touchstart', (e) => {
      // Ignore taps on actual UI buttons
      if (e.target.closest('button, .btn, .interactive-ui, .level-card, .tab-btn, .skin-card')) return;

      if (e.touches.length > 0) {
        this.isTouching = true;
        this.touchStartX = e.touches[0].clientX;
        this.currentTouchX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
        this.forwardInput = 1.0;

        // Double-tap jump detection (< 300ms between taps)
        const now = performance.now();
        if (now - this.lastTapTime < 300) {
          this.triggerJump();
        }
        this.lastTapTime = now;
      }
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      if (!this.isTouching) return;
      e.preventDefault(); // Block browser scroll / pull-to-refresh

      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;

      // ── Horizontal drag steering ──────────────────────────────────────────
      const deltaX = touchX - this.currentTouchX;
      const sensitivity = 2.5;
      const normalizedDelta = (deltaX / window.innerWidth) * sensitivity;
      this.steerInput = THREE.MathUtils.clamp(normalizedDelta * 10.0, -1.0, 1.0);
      this.currentTouchX = touchX;

      // ── Forward swipe boost (no accidental jump) ──────────────────────────
      const swipeDeltaY = this.touchStartY - touchY;
      this.forwardInput = swipeDeltaY > 20 ? 2.0 : 1.0;

      // Update visual joystick knob position
      if (this.joystickKnob) {
        this.joystickKnob.style.transform = `translate(calc(-50% + ${this.steerInput * 35}px), -50%)`;
      }
    }, { passive: false });

    window.addEventListener('touchend', () => {
      this.isTouching = false;
      this.steerInput = 0.0;
      this.forwardInput = 1.0;
      if (this.joystickKnob) {
        this.joystickKnob.style.transform = 'translate(-50%, -50%)';
      }
    }, { passive: true });

    window.addEventListener('touchcancel', () => {
      this.isTouching = false;
      this.steerInput = 0.0;
      this.forwardInput = 1.0;
      if (this.joystickKnob) {
        this.joystickKnob.style.transform = 'translate(-50%, -50%)';
      }
    }, { passive: true });

    // ── Keyboard events ───────────────────────────────────────────────────────
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (e.code === 'Space') this.triggerJump();
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      if (e.code === 'Space') this.isJumpPressed = false;
    });

    // ── Mouse drag fallback (desktop) ─────────────────────────────────────────
    let isMouseDown = false;
    let mouseStartX = 0;
    let mouseCurX = 0;

    window.addEventListener('mousedown', (e) => {
      if (e.target.closest('#hud, button, .btn, .interactive-ui, .screen-overlay')) return;
      isMouseDown = true;
      mouseStartX = e.clientX;
      mouseCurX = e.clientX;
      this.forwardInput = 1.0;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      const deltaX = e.clientX - mouseCurX;
      const normalizedDelta = (deltaX / window.innerWidth) * 2.5;
      this.steerInput = THREE.MathUtils.clamp(normalizedDelta * 10.0, -1.0, 1.0);
      mouseCurX = e.clientX;
    });

    window.addEventListener('mouseup', () => {
      isMouseDown = false;
      this.steerInput = 0.0;
      this.forwardInput = 1.0;
    });
  }

  update() {
    // Keyboard steering override (desktop testing)
    if (!this.isTouching) {
      let kSteer = 0.0;
      let kForward = 1.0;

      if (this.keys['KeyA'] || this.keys['ArrowLeft'])  kSteer -= 1.0;
      if (this.keys['KeyD'] || this.keys['ArrowRight']) kSteer += 1.0;
      if (this.keys['KeyW'] || this.keys['ArrowUp'])    kForward = 2.0;
      if (this.keys['KeyS'] || this.keys['ArrowDown'])  kForward = 0.5;

      if (kSteer !== 0) this.steerInput = kSteer;
      if (this.keys['KeyW'] || this.keys['ArrowUp'] || this.keys['KeyS'] || this.keys['ArrowDown']) {
        this.forwardInput = kForward;
      }
    }
  }

  consumeJump() {
    const jump = this.isJumpPressed;
    this.isJumpPressed = false;
    return jump;
  }
}
