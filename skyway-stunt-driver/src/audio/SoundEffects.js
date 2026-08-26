class SoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.engineOsc = null;
    this.engineGain = null;
    this.engineFilter = null;
    this.isEngineRunning = false;

    // Volume Sliders (Section 7.1)
    this.masterVolume = 1.0;
    this.sfxVolume = 1.0;
    this.bgmVolume = 0.8;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    if (!this.enabled && this.isEngineRunning) {
      this.stopEngineSound();
    }
    return this.enabled;
  }

  setMasterVolume(val) {
    this.masterVolume = Math.max(0, Math.min(1, val));
  }

  startEngineSound() {
    if (!this.enabled) return;
    this.init();
    if (this.isEngineRunning) return;

    try {
      this.engineOsc = this.ctx.createOscillator();
      this.engineGain = this.ctx.createGain();
      this.engineFilter = this.ctx.createBiquadFilter();

      this.engineOsc.type = 'sawtooth';
      this.engineOsc.frequency.setValueAtTime(65, this.ctx.currentTime);

      this.engineFilter.type = 'lowpass';
      this.engineFilter.frequency.setValueAtTime(450, this.ctx.currentTime);

      this.engineGain.gain.setValueAtTime(0.08 * this.masterVolume * this.sfxVolume, this.ctx.currentTime);

      this.engineOsc.connect(this.engineFilter);
      this.engineFilter.connect(this.engineGain);
      this.engineGain.connect(this.ctx.destination);

      this.engineOsc.start();
      this.isEngineRunning = true;
    } catch (e) {
      console.warn("Audio init deferred", e);
    }
  }

  updateEnginePitch(speedRatio) {
    if (!this.enabled || !this.isEngineRunning || !this.engineOsc) return;
    const clampedRatio = Math.max(0, Math.min(1.5, speedRatio));
    const targetFreq = 65 + clampedRatio * 240;
    const targetFilter = 450 + clampedRatio * 2000;

    this.engineOsc.frequency.setTargetAtTime(targetFreq, this.ctx.currentTime, 0.05);
    this.engineFilter.frequency.setTargetAtTime(targetFilter, this.ctx.currentTime, 0.05);
  }

  stopEngineSound() {
    if (this.engineOsc) {
      try {
        this.engineOsc.stop();
        this.engineOsc.disconnect();
      } catch (e) { }
      this.engineOsc = null;
    }
    this.isEngineRunning = false;
  }

  playCoin() {
    if (!this.enabled) return;
    this.init();

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'sine';

    osc1.frequency.setValueAtTime(987.77, this.ctx.currentTime);
    osc1.frequency.setValueAtTime(1318.51, this.ctx.currentTime + 0.08);

    osc2.frequency.setValueAtTime(1318.51, this.ctx.currentTime);
    osc2.frequency.setValueAtTime(1760.00, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.15 * this.masterVolume * this.sfxVolume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(this.ctx.currentTime + 0.3);
    osc2.stop(this.ctx.currentTime + 0.3);
  }

  playNitro() {
    if (!this.enabled) return;
    this.init();

    const bufferSize = this.ctx.sampleRate * 0.4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(3200, this.ctx.currentTime + 0.4);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.25 * this.masterVolume * this.sfxVolume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
  }

  playThud() {
    if (!this.enabled) return;
    this.init();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.2);

    gain.gain.setValueAtTime(0.3 * this.masterVolume * this.sfxVolume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }

  playSawBuzz() {
    if (!this.enabled) return;
    this.init();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(350, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(150, this.ctx.currentTime + 0.25);

    gain.gain.setValueAtTime(0.2 * this.masterVolume * this.sfxVolume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }

  playVictory() {
    if (!this.enabled) return;
    this.init();

    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + index * 0.1);

      gain.gain.setValueAtTime(0.2 * this.masterVolume * this.sfxVolume, this.ctx.currentTime + index * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + index * 0.1 + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + index * 0.1);
      osc.stop(this.ctx.currentTime + index * 0.1 + 0.35);
    });
  }

  playFail() {
    if (!this.enabled) return;
    this.init();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(300, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.6);

    gain.gain.setValueAtTime(0.25 * this.masterVolume * this.sfxVolume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.6);
  }

  playClick() {
    if (!this.enabled) return;
    this.init();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.15 * this.masterVolume * this.sfxVolume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  /** Crash Explosion SFX — low boom + harsh noise explosion burst */
  playExplosion() {
    if (!this.enabled) return;
    this.init();

    const vol = this.masterVolume * this.sfxVolume;

    // Sub bass boom
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(25, this.ctx.currentTime + 0.4);
    g.gain.setValueAtTime(0.5 * vol, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.45);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.45);

    // Blast noise
    const bufLen = Math.floor(this.ctx.sampleRate * 0.4);
    const buf = this.ctx.createBuffer(1, bufLen, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) data[i] = (Math.random() * 2 - 1);
    const noise = this.ctx.createBufferSource();
    noise.buffer = buf;
    const lpf = this.ctx.createBiquadFilter();
    lpf.type = 'lowpass';
    lpf.frequency.setValueAtTime(2500, this.ctx.currentTime);
    lpf.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.4);
    const nGain = this.ctx.createGain();
    nGain.gain.setValueAtTime(0.4 * vol, this.ctx.currentTime);
    nGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
    noise.connect(lpf);
    lpf.connect(nGain);
    nGain.connect(this.ctx.destination);
    noise.start();
  }

  /** Near-miss whoosh — pitched oscillator sweep + noise burst */
  playNearMiss() {
    if (!this.enabled) return;
    this.init();

    const vol = this.masterVolume * this.sfxVolume;

    // Swooping oscillator
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.15);
    oscGain.gain.setValueAtTime(0.12 * vol, this.ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);
    osc.connect(oscGain);
    oscGain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);

    // Noise burst (air cut)
    const bufLen = Math.floor(this.ctx.sampleRate * 0.12);
    const buf = this.ctx.createBuffer(1, bufLen, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) data[i] = (Math.random() * 2 - 1);
    const noise = this.ctx.createBufferSource();
    noise.buffer = buf;
    const bpf = this.ctx.createBiquadFilter();
    bpf.type = 'bandpass';
    bpf.frequency.setValueAtTime(2000, this.ctx.currentTime);
    bpf.Q.setValueAtTime(1.5, this.ctx.currentTime);
    const nGain = this.ctx.createGain();
    nGain.gain.setValueAtTime(0.18 * vol, this.ctx.currentTime);
    nGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
    noise.connect(bpf);
    bpf.connect(nGain);
    nGain.connect(this.ctx.destination);
    noise.start();
  }

  /** Launch ramp boost whoosh — deeper and longer than near-miss */
  playLaunch() {
    if (!this.enabled) return;
    this.init();

    const vol = this.masterVolume * this.sfxVolume;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.15);
    osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.5);
    gain.gain.setValueAtTime(0.2 * vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(3000, this.ctx.currentTime + 0.15);
    filter.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.5);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.55);
  }

  /** Combo break — descending dissonant buzz */
  playComboBreak() {
    if (!this.enabled) return;
    this.init();

    const vol = this.masterVolume * this.sfxVolume;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.25);
    gain.gain.setValueAtTime(0.12 * vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.28);
  }

  /**
   * Milestone chime — rising pitched arpeggio.
   * pitchIndex: 0=25%, 1=50%, 2=75%, 3=100% (each higher pitched)
   */
  playMilestoneChime(pitchIndex = 0) {
    if (!this.enabled) return;
    this.init();

    const vol = this.masterVolume * this.sfxVolume;
    const baseFreqs = [
      [440, 554, 659],       // 25% — A4 C#5 E5
      [523, 659, 784],       // 50% — C5 E5 G5
      [659, 784, 988],       // 75% — E5 G5 B5
      [784, 988, 1175, 1568] // 100% — G5 B5 D6 G6 (triumphant)
    ];
    const notes = baseFreqs[Math.min(pitchIndex, 3)];

    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.08);
      g.gain.setValueAtTime(0.18 * vol, this.ctx.currentTime + i * 0.08);
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.08 + 0.35);
      osc.connect(g);
      g.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.08);
      osc.stop(this.ctx.currentTime + i * 0.08 + 0.4);
    });
  }
}

export const sfx = new SoundEffects();

