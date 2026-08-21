// Web Audio API Procedural Synthesizer for Sphere Velocity

class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.rollOsc = null;
    this.rollGain = null;
    this.isRolling = false;
  }

  init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      this.ctx = new AudioCtx();
      this._initRollingHum();
    }
  }

  _ensureContext() {
    if (!this.ctx) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  _initRollingHum() {
    if (!this.ctx) return;
    try {
      this.rollOsc = this.ctx.createOscillator();
      this.rollGain = this.ctx.createGain();

      this.rollOsc.type = 'triangle';
      this.rollOsc.frequency.setValueAtTime(40, this.ctx.currentTime);
      this.rollGain.gain.setValueAtTime(0, this.ctx.currentTime);

      // Lowpass filter for deep hum
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(120, this.ctx.currentTime);

      this.rollOsc.connect(filter);
      filter.connect(this.rollGain);
      this.rollGain.connect(this.ctx.destination);

      this.rollOsc.start();
      this.isRolling = true;
    } catch (e) {
      console.warn("Audio rolling hum init failed", e);
    }
  }

  updateRoll(speed, isGrounded) {
    if (!this.enabled || !this.ctx || !this.rollGain) return;
    
    if (!isGrounded || speed < 0.5) {
      this.rollGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.05);
      return;
    }

    const freq = 40 + Math.min(speed * 3.5, 180);
    const volume = Math.min(speed / 45, 0.25);

    this.rollOsc.frequency.setTargetAtTime(freq, this.ctx.currentTime, 0.05);
    this.rollGain.gain.setTargetAtTime(volume, this.ctx.currentTime, 0.05);
  }

  playJump() {
    if (!this.enabled) return;
    this._ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(450, this.ctx.currentTime + 0.18);

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }

  playLand(impactVelocity = 10) {
    if (!this.enabled) return;
    this._ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const baseFreq = Math.max(60, 140 - impactVelocity * 3);
    osc.frequency.setValueAtTime(baseFreq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.15);

    const volume = Math.min(0.1 + impactVelocity * 0.02, 0.4);
    gain.gain.setValueAtTime(volume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }

  playCoin() {
    if (!this.enabled) return;
    this._ensureContext();
    if (!this.ctx) return;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'sine';

    osc1.frequency.setValueAtTime(987.77, this.ctx.currentTime); // B5
    osc1.frequency.setValueAtTime(1318.51, this.ctx.currentTime + 0.08); // E6

    osc2.frequency.setValueAtTime(1318.51, this.ctx.currentTime);
    osc2.frequency.setValueAtTime(1760.00, this.ctx.currentTime + 0.08); // A6

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(this.ctx.currentTime + 0.25);
    osc2.stop(this.ctx.currentTime + 0.25);
  }

  playCheckpoint() {
    if (!this.enabled) return;
    this._ensureContext();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);

      gain.gain.setValueAtTime(0.25, this.ctx.currentTime + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.06 + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + idx * 0.06);
      osc.stop(this.ctx.currentTime + idx * 0.06 + 0.3);
    });
  }

  playBoost() {
    if (!this.enabled) return;
    this._ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }

  playWarpPortal() {
    if (!this.enabled) return;
    this._ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(1200, this.ctx.currentTime + 0.4);
    osc.frequency.linearRampToValueAtTime(400, this.ctx.currentTime + 0.6);

    gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.65);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.65);
  }

  playCrash() {
    if (!this.enabled) return;
    this._ensureContext();
    if (!this.ctx) return;

    // Noise buffer for explosion/crash sound
    const bufferSize = this.ctx.sampleRate * 0.3;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.3);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
  }

  playVictory() {
    if (!this.enabled) return;
    this._ensureContext();
    if (!this.ctx) return;

    const arpeggio = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
    arpeggio.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.1);

      gain.gain.setValueAtTime(0.3, this.ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.1 + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + i * 0.1);
      osc.stop(this.ctx.currentTime + i * 0.1 + 0.4);
    });
  }

  toggleAudio(enable) {
    this.enabled = enable;
    if (!enable && this.rollGain && this.ctx) {
      this.rollGain.gain.setValueAtTime(0, this.ctx.currentTime);
    }
  }
}

export const soundManager = new SoundManager();
