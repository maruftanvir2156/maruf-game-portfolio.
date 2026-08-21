// UI Manager for Menus, Portrait HUD, Gyro Calibration, Debug Overlay & Victory Screen
import confetti from 'canvas-confetti';
import { BALL_SKINS } from '../game/PlayerBall.js';
import { LEVELS_DATA } from '../levels/LevelData.js';

export class UIManager {
  constructor(gameApp) {
    this.gameApp = gameApp;

    // UI Element References
    this.screenMainMenu = document.getElementById('screen-main-menu');
    this.screenLevelSelect = document.getElementById('screen-level-select');
    this.screenSkinCustomizer = document.getElementById('screen-skin-customizer');
    this.screenPause = document.getElementById('screen-pause');
    this.screenVictory = document.getElementById('screen-victory');
    this.hud = document.getElementById('hud');

    this.hudCoinCount = document.getElementById('hud-coin-count');
    this.hudLevelNum = document.getElementById('hud-level-num');
    this.hudSpeedVal = document.getElementById('hud-speed-val');
    this.hudZoneTag = document.getElementById('hud-zone-tag');
    this.hudProgressBar = document.getElementById('hud-progress-bar');

    this.debugSphereOnly = false;

    this._bindEvents();
    this._populateLevelsGrid();
    this._populateSkinsGrid();
  }

  _bindEvents() {
    const bind = (id, handler) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', handler);
      } else {
        console.warn(`[UIManager] Optional UI element '${id}' not found in DOM.`);
      }
    };

    bind('btn-play', () => {
      this.showScreen(null);
      if (this.hud) this.hud.classList.remove('hidden');
      this.gameApp.startLevel(this.gameApp.currentLevelId);
    });

    bind('btn-toggle-debug-sphere', () => {
      this.debugSphereOnly = !this.debugSphereOnly;
      this.gameApp.playerBall.setDebugSphereOnly(this.debugSphereOnly);
      const btn = document.getElementById('btn-toggle-debug-sphere');
      if (btn) btn.innerText = this.debugSphereOnly ? "SPHERE ONLY MODE: ON" : "TOGGLE DEBUG SPHERE ONLY";
    });

    bind('btn-calibrate-gyro', () => {
      this.gameApp.input.enableGyro();
      alert("Gyroscope Enabled & Calibrated to neutral position!");
    });

    bind('btn-level-select', () => {
      if (this.screenLevelSelect) this.screenLevelSelect.classList.remove('hidden');
    });

    bind('btn-close-levels', () => {
      if (this.screenLevelSelect) this.screenLevelSelect.classList.add('hidden');
    });

    // Settings Modal Bindings
    const screenSettings = document.getElementById('screen-settings');
    const openSettingsBtns = ['btn-open-settings', 'btn-pause-settings'];
    openSettingsBtns.forEach(id => {
      bind(id, () => {
        if (screenSettings) screenSettings.classList.remove('hidden');
      });
    });

    bind('btn-close-settings', () => {
      if (screenSettings) screenSettings.classList.add('hidden');
    });

    bind('btn-toggle-audio', () => {
      const sm = this.gameApp.soundManager;
      sm.enabled = !sm.enabled;
      const btn = document.getElementById('btn-toggle-audio');
      if (btn) btn.innerText = sm.enabled ? "SOUND: ON" : "SOUND: OFF";
    });

    bind('btn-gyro-toggle', () => {
      this.gameApp.input.enableGyro();
      alert("Gyroscope Enabled & Calibrated to neutral device tilt!");
    });

    bind('btn-toggle-telemetry', () => {
      const dbg = document.getElementById('debug-overlay');
      if (dbg) {
        const isHidden = dbg.style.display === 'none';
        dbg.style.display = isHidden ? 'block' : 'none';
        const btn = document.getElementById('btn-toggle-telemetry');
        if (btn) btn.innerText = isHidden ? "TELEMETRY: VISIBLE" : "TELEMETRY: HIDDEN";
      }
    });

    bind('btn-open-skins', () => {
      if (this.screenSkinCustomizer) this.screenSkinCustomizer.classList.remove('hidden');
    });

    bind('btn-close-skins', () => {
      if (this.screenSkinCustomizer) this.screenSkinCustomizer.classList.add('hidden');
    });

    bind('btn-pause', () => {
      this.gameApp.pauseGame();
      if (this.screenPause) this.screenPause.classList.remove('hidden');
    });

    bind('btn-resume', () => {
      if (this.screenPause) this.screenPause.classList.add('hidden');
      this.gameApp.resumeGame();
    });

    bind('btn-restart', () => {
      if (this.screenPause) this.screenPause.classList.add('hidden');
      this.gameApp.restartLevel();
    });

    bind('btn-main-menu', () => {
      if (this.screenPause) this.screenPause.classList.add('hidden');
      if (this.hud) this.hud.classList.add('hidden');
      this.showScreen(this.screenMainMenu);
    });

    bind('btn-next-level', () => {
      if (this.screenVictory) this.screenVictory.classList.add('hidden');
      this.gameApp.nextLevel();
    });

    bind('btn-replay', () => {
      if (this.screenVictory) this.screenVictory.classList.add('hidden');
      this.gameApp.restartLevel();
    });

    bind('btn-victory-menu', () => {
      if (this.screenVictory) this.screenVictory.classList.add('hidden');
      if (this.hud) this.hud.classList.add('hidden');
      this.showScreen(this.screenMainMenu);
    });
  }

  _populateLevelsGrid() {
    const grid = document.getElementById('level-grid');
    if (!grid) return;

    // Check or create World Tabs header
    let tabsContainer = document.getElementById('world-tabs-header');
    if (!tabsContainer) {
      tabsContainer = document.createElement('div');
      tabsContainer.id = 'world-tabs-header';
      tabsContainer.style.cssText = 'display:flex; gap:8px; overflow-x:auto; padding:10px 0; margin-bottom:15px; width:100%; border-bottom:1px solid rgba(255,255,255,0.15);';
      grid.parentNode.insertBefore(tabsContainer, grid);
    }

    const worlds = [
      { name: 'WORLD 1', min: 1, max: 10, zone: 'WORLD_1_SKY_HAVEN' },
      { name: 'WORLD 2', min: 11, max: 20, zone: 'WORLD_2_RURAL_VALLEY' },
      { name: 'WORLD 3', min: 21, max: 30, zone: 'WORLD_3_CYBERPUNK' },
      { name: 'WORLD 4', min: 31, max: 40, zone: 'WORLD_4_VOLCANIC' },
      { name: 'WORLD 5', min: 41, max: 50, zone: 'WORLD_5_MISTY_PEAKS' },
      { name: 'WORLD 6', min: 51, max: 60, zone: 'WORLD_6_GOLDEN_DESERT' },
      { name: 'WORLD 7', min: 61, max: 250, zone: 'WORLD_7_COSMIC_VOID' }
    ];

    const renderGridForRange = (minId, maxId) => {
      grid.innerHTML = '';
      const filtered = LEVELS_DATA.filter(l => l.id >= minId && l.id <= maxId);
      filtered.forEach((lvl) => {
        const card = document.createElement('div');
        card.className = `level-card ${lvl.id === this.gameApp.currentLevelId ? 'active-level' : ''}`;
        card.innerHTML = `
          <span class="level-title">${lvl.id === 0 ? 'TEST BENCH' : 'LEVEL ' + lvl.id}</span>
          <span class="level-subtitle">${lvl.title}</span>
          <span class="level-stars">★★★</span>
        `;
        card.addEventListener('click', () => {
          if (this.screenLevelSelect) this.screenLevelSelect.classList.add('hidden');
          if (this.screenMainMenu) this.screenMainMenu.classList.add('hidden');
          if (this.screenPause) this.screenPause.classList.add('hidden');
          if (this.hud) this.hud.classList.remove('hidden');
          this.gameApp.startLevel(lvl.id);
        });
        grid.appendChild(card);
      });
    };

    tabsContainer.innerHTML = '';
    worlds.forEach((w, idx) => {
      const btn = document.createElement('button');
      btn.className = `btn-secondary ${idx === 0 ? 'active-world-tab' : ''}`;
      btn.style.cssText = 'padding:6px 14px; font-size:0.75rem; white-space:nowrap; border-radius:20px; font-weight:700; cursor:pointer;';
      btn.innerText = w.name;
      btn.addEventListener('click', () => {
        tabsContainer.querySelectorAll('button').forEach(b => b.style.opacity = '0.6');
        btn.style.opacity = '1.0';
        if (this.gameApp && this.gameApp.environment) {
          this.gameApp.environment.setEnvironment(w.zone);
        }
        renderGridForRange(w.min, w.max);
      });
      tabsContainer.appendChild(btn);
    });

    renderGridForRange(1, 10);
  }

  _populateSkinsGrid() {
    const grid = document.getElementById('skin-grid');
    if (!grid) return;
    grid.innerHTML = '';

    Object.keys(BALL_SKINS).forEach((key) => {
      const skin = BALL_SKINS[key];
      const card = document.createElement('div');
      card.className = `skin-card ${key === 'CYBER_NEON' ? 'selected-skin' : ''}`;
      card.innerHTML = `
        <div class="skin-sphere" style="background: ${skin.glow}; box-shadow: 0 0 12px ${skin.glow};"></div>
        <span class="skin-title" style="font-weight:700; font-size:0.85rem;">${skin.name}</span>
      `;
      card.addEventListener('click', () => {
        document.querySelectorAll('.skin-card').forEach(c => c.classList.remove('selected-skin'));
        card.classList.add('selected-skin');
        this.gameApp.playerBall.setSkin(key);
        const nameDisp = document.getElementById('skin-name-display');
        if (nameDisp) nameDisp.innerText = skin.name;
        if (this.screenSkinCustomizer) this.screenSkinCustomizer.classList.add('hidden');
      });
      grid.appendChild(card);
    });
  }

  showScreen(screenElem) {
    [this.screenMainMenu, this.screenLevelSelect, this.screenSkinCustomizer, this.screenPause, this.screenVictory].forEach(s => {
      if (s) s.classList.add('hidden');
    });
    if (screenElem) {
      screenElem.classList.remove('hidden');
    }
  }

  updateHUD(coins, levelId, speed, progress, zoneName) {
    if (this.hudCoinCount) this.hudCoinCount.innerText = coins;
    if (this.hudLevelNum) this.hudLevelNum.innerText = levelId;
    if (this.hudSpeedVal) this.hudSpeedVal.innerText = Math.round(speed * 1.8);
    if (this.hudZoneTag) this.hudZoneTag.innerText = zoneName;
    if (this.hudProgressBar) this.hudProgressBar.style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;

    // Tutorial text auto-fade: Hide touch hint after 3s on Level 1, NEVER show on Level 2+
    const touchHint = document.querySelector('.touch-hint');
    if (touchHint) {
      if (levelId > 1) {
        touchHint.style.display = 'none';
      } else {
        if (!this._touchHintTimer) {
          this._touchHintTimer = setTimeout(() => {
            if (touchHint) touchHint.style.display = 'none';
          }, 3000);
        }
      }
    }
  }

  triggerVictory(levelData, timeSec, coinsCollected) {
    if (this.hud) this.hud.classList.add('hidden');
    const lvlName = document.getElementById('victory-level-name');
    if (lvlName) lvlName.innerText = levelData.title;
    const timeVal = document.getElementById('victory-time');
    if (timeVal) timeVal.innerText = `${Math.floor(timeSec)}s`;
    const coinsVal = document.getElementById('victory-coins');
    if (coinsVal) coinsVal.innerText = `${coinsCollected}/${levelData.totalCoins}`;

    const s1 = document.getElementById('star-1');
    const s2 = document.getElementById('star-2');
    const s3 = document.getElementById('star-3');

    if (s1) s1.classList.add('filled');
    if (s2 && coinsCollected >= Math.floor(levelData.totalCoins * 0.5)) s2.classList.add('filled');
    if (s3 && coinsCollected >= Math.floor(levelData.totalCoins * 0.8)) s3.classList.add('filled');

    if (this.screenVictory) this.screenVictory.classList.remove('hidden');

    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch (e) {
      console.warn("Confetti error", e);
    }
  }
}
