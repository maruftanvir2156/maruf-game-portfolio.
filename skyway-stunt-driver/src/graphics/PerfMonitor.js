/**
 * PERFORMANCE MONITOR & INSTRUMENTATION OVERLAY (Stage 0)
 *
 * Tracks FPS, frame time, JS heap, draw calls, triangles, textures, and active DeviceTier.
 * Gated behind URL param (?perf=1, ?debug=1) or a 3-tap gesture on the screen.
 */
export class PerfMonitor {
  constructor(renderer, deviceTier) {
    this.renderer = renderer;
    this.deviceTier = deviceTier;

    this.enabled = false;
    this.domElement = null;

    this.frames = 0;
    this.lastTime = performance.now();
    this.fps = 60;
    this.frameTime = 16.6;

    this.tapCount = 0;
    this.lastTapTime = 0;

    this._checkActivation();
  }

  _checkActivation() {
    if (typeof window === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const forceShow = urlParams.has('perf') || urlParams.has('debug');

    if (forceShow) {
      this.show();
    }

    // Double/triple tap top-left corner gesture to toggle
    window.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0 && e.touches[0].clientX < 80 && e.touches[0].clientY < 80) {
        const now = performance.now();
        if (now - this.lastTapTime < 400) {
          this.tapCount++;
          if (this.tapCount >= 3) {
            this.toggle();
            this.tapCount = 0;
          }
        } else {
          this.tapCount = 1;
        }
        this.lastTapTime = now;
      }
    }, { passive: true });
  }

  createDOM() {
    if (this.domElement) return;

    this.domElement = document.createElement('div');
    this.domElement.id = 'perf-monitor-overlay';
    this.domElement.style.cssText = [
      'position: fixed',
      'bottom: 8px',
      'left: 8px',
      'z-index: 99999',
      'background: rgba(15, 23, 42, 0.88)',
      'backdrop-filter: blur(8px)',
      'border: 1px solid rgba(255, 255, 255, 0.2)',
      'border-radius: 8px',
      'color: #38bdf8',
      'font-family: monospace',
      'font-size: 11px',
      'line-height: 1.4',
      'padding: 6px 10px',
      'pointer-events: none',
      'user-select: none',
      'box-shadow: 0 4px 12px rgba(0,0,0,0.5)',
      'display: flex',
      'flex-direction: column',
      'gap: 2px'
    ].join(';');

    document.body.appendChild(this.domElement);
  }

  show() {
    this.createDOM();
    this.enabled = true;
    if (this.domElement) this.domElement.style.display = 'flex';
  }

  hide() {
    this.enabled = false;
    if (this.domElement) this.domElement.style.display = 'none';
  }

  toggle() {
    if (this.enabled) this.hide();
    else this.show();
  }

  update() {
    if (!this.enabled || !this.domElement) return;

    const now = performance.now();
    this.frames++;

    if (now >= this.lastTime + 500) {
      this.fps = Math.round((this.frames * 1000) / (now - this.lastTime));
      this.frameTime = ((now - this.lastTime) / this.frames).toFixed(1);
      this.frames = 0;
      this.lastTime = now;
      this._renderInfo();
    }
  }

  _renderInfo() {
    const info = this.renderer?.info;
    const calls = info?.render?.calls ?? 0;
    const triangles = info?.render?.triangles ?? 0;
    const textures = info?.memory?.textures ?? 0;
    const geometries = info?.memory?.geometries ?? 0;

    let heapStr = 'N/A';
    if (typeof performance !== 'undefined' && performance.memory) {
      const heapMB = (performance.memory.usedJSHeapSize / (1024 * 1024)).toFixed(1);
      heapStr = `${heapMB} MB`;
    }

    const tierName = this.deviceTier?.settings?.tierName || 'UNKNOWN';
    const dpr = this.renderer ? this.renderer.getPixelRatio().toFixed(2) : '1.0';

    this.domElement.innerHTML = `
      <div style="font-weight:bold;color:#f59e0b;">PERF: ${tierName} (DPR: ${dpr})</div>
      <div>FPS: <span style="color:${this.fps >= 50 ? '#4ade80' : this.fps >= 30 ? '#facc15' : '#f87171'}">${this.fps}</span> (${this.frameTime}ms)</div>
      <div>Draw Calls: ${calls} | Triangles: ${triangles.toLocaleString()}</div>
      <div>Textures: ${textures} | Geometries: ${geometries}</div>
      <div>JS Heap: ${heapStr}</div>
    `;
  }
}
