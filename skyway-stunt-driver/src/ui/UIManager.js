import { Vehicle3DModels } from '../graphics/Vehicle3DModels.js';
import { CAR_MANIFEST } from '../graphics/AssetLoader.js';
import { sfx } from '../audio/SoundEffects.js';
import { SaveSystem } from '../game/SaveSystem.js';
import { AdManager } from '../ads/AdManager.js';
import confetti from 'canvas-confetti';



export class UIManager {
  constructor(gameEngine) {
    this.game = gameEngine;
    this.vehicleKeys = Vehicle3DModels.getVehicleKeys();
    this.currentVehicleIndex = 0;
    this.selectedLevel = 1;
    this.toastContainer = null;
    this.speedLinesOverlay = null;

    this.selectedEnvKey = 'golden_bay';
    this.selectedTier = 'easy';
    this.lastVictoryCash = 0;

    AdManager.initialize();

    this.initDOMReferences();
    this.setupEventListeners();
    this.updateVehicleCard();
    this.renderLevelGrid();
    this.updateSaveUI();

    // Auto-hide portrait warning on landscape orientation
    this._setupOrientationListener();
  }

  _setupOrientationListener() {
    const portraitWarning = document.getElementById('portrait-orientation-warning');
    if (portraitWarning) {
      portraitWarning.style.display = 'none';
      portraitWarning.style.visibility = 'hidden';
      portraitWarning.style.pointerEvents = 'none';
    }
  }

  updateCurrencyDisplay() {
    if (typeof SaveSystem === 'undefined') return;
    const saveData = SaveSystem.loadSaveData();
    const cash = saveData.totalCash || 0;

    const globalText = document.getElementById('garage-coins-text');
    if (globalText) globalText.textContent = cash.toLocaleString();

    if (this.hudCash) this.hudCash.textContent = cash.toLocaleString();
  }

  updateSaveUI() {
    if (typeof SaveSystem === 'undefined') return;
    const saveData = SaveSystem.loadSaveData ? SaveSystem.loadSaveData() : null;
    const envProgress = saveData?.envProgress?.[this.selectedEnvKey] || { currentLevel: 1, highestLevelReached: 1 };
    if (this.btnContinue && envProgress && envProgress.highestLevelReached > 1) {
      this.btnContinue.classList.remove('hidden');
      this.btnContinue.innerHTML = `<span class="play-icon">▶</span> CONTINUE (LVL ${envProgress.currentLevel})`;
    } else if (this.btnContinue) {
      this.btnContinue.classList.add('hidden');
    }
    this.updateCurrencyDisplay();
  }

  renderLevelGrid() {
    const container = document.getElementById('level-buttons-container');
    if (!container) return;

    container.innerHTML = '';
    const saveData = SaveSystem.loadSaveData();
    const envProgress = saveData.envProgress?.[this.selectedEnvKey] || { currentLevel: 1, highestLevelReached: 1 };
    const highest = envProgress.highestLevelReached || 1;

    let startLvl = 1;
    let endLvl = 33;
    if (this.selectedTier === 'medium') { startLvl = 34; endLvl = 66; }
    if (this.selectedTier === 'hard') { startLvl = 67; endLvl = 100; }

    for (let l = startLvl; l <= endLvl; l++) {
      const btn = document.createElement('button');
      btn.className = `btn-level ${l === this.selectedLevel ? 'active' : ''} ${l > highest ? 'locked' : ''}`;
      btn.setAttribute('data-level', l);
      btn.innerHTML = `
        <span class="lvl-num">LVL ${l}</span>
        <span class="lvl-name">${l <= highest ? 'Available' : '🔒 Locked'}</span>
      `;

      this.addBtnListener(btn, () => {
        if (l > highest) {
          this.showToast && this.showToast(`🔒 Level ${l} Locked! Complete prior levels first.`);
          return;
        }
        document.querySelectorAll('.btn-level').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedLevel = l;
      });

      container.appendChild(btn);
    }
  }

  initDOMReferences() {
    // Screens & Overlays
    this.loadingScreen = document.getElementById('loading-screen');
    this.loadingBarFill = document.getElementById('loading-bar-fill');
    this.loadingPercentText = document.getElementById('loading-percent-text');

    this.screenMainMenu = document.getElementById('screen-main-menu');
    this.screenGarage = document.getElementById('screen-garage');
    this.screenEnvSelect = document.getElementById('screen-env-select');
    this.screenLevelSelect = document.getElementById('screen-level-select');
    this.screenHUD = document.getElementById('screen-hud');
    this.modalVictory = document.getElementById('modal-victory');
    this.modalFail = document.getElementById('modal-fail');
    this.modalSettings = document.getElementById('modal-settings');

    this.toastContainer = document.getElementById('toast-container');
    this.speedLinesOverlay = document.getElementById('speed-lines-overlay');

    // Garage Vehicle Card
    this.vTag = document.getElementById('vehicle-type-tag');
    this.vName = document.getElementById('vehicle-name');
    this.vDesc = document.getElementById('vehicle-desc');
    this.vSpeed = document.getElementById('stat-speed');
    this.vHandling = document.getElementById('stat-handling');
    this.vStability = document.getElementById('stat-stability');
    this.vehicleGridContainer = document.getElementById('vehicle-grid-container');
    this.btnPrevV = document.getElementById('btn-prev-vehicle');
    this.btnNextV = document.getElementById('btn-next-vehicle');

    // Level Selector & Actions
    this.levelButtons = document.querySelectorAll('.btn-level');
    this.btnStart = document.getElementById('btn-start-game');
    this.btnContinue = document.getElementById('btn-continue-game');
    this.btnSound = document.getElementById('btn-toggle-sound');
    this.btnSettings = document.getElementById('btn-open-settings');
    this.btnCamToggle = document.getElementById('hud-cam-toggle');

    // HUD Elements
    this.hudCash = document.getElementById('hud-cash-counter');
    this.hudProgressFill = document.getElementById('hud-progress-fill');
    this.hudProgressMarker = document.getElementById('hud-progress-marker');
    this.hudProgressPercent = document.getElementById('hud-progress-percent');
    this.hudSpeed = document.getElementById('hud-speed-val');
    this.hudNitroFill = document.getElementById('hud-nitro-fill');
    this.hudLevelTitle = document.getElementById('hud-level-title');

    // Modals
    this.vicTime = document.getElementById('vic-time');
    this.vicCash = document.getElementById('vic-cash');
    this.vicStars = document.querySelectorAll('.star');
    this.btnNextLevel = document.getElementById('btn-next-level');
    this.btnRetryVictory = document.getElementById('btn-retry-victory');
    this.btnRetryFail = document.getElementById('btn-retry-fail');
    this.btnMenuFail = document.getElementById('btn-menu-fail');

    // Settings Modal Tabs
    this.settingsTabs = document.querySelectorAll('.tab-btn');
    this.settingsTabContents = document.querySelectorAll('.settings-tab-pane');
    this.btnCloseSettings = document.getElementById('btn-close-settings');
    this.themeSelector = document.getElementById('setting-theme');
    this.masterVolumeSlider = document.getElementById('setting-master-vol');

    // Shop Modal
    this.modalShop = document.getElementById('modal-shop');
    this.btnCloseShop = document.getElementById('btn-close-shop');
    this.btnOpenShopGlobal = document.getElementById('btn-open-shop-global');

    // Combo & Airtime HUD Cards
    this.comboCard = document.getElementById('hud-combo-card');
    this.comboVal = document.getElementById('hud-combo-val');
    this.airtimeCard = document.getElementById('hud-airtime-card');
    this.airtimeVal = document.getElementById('hud-airtime-val');
  }

  // Dynamic Arcade Toast Notifications (Section 3)
  showToast(message, type = 'info') {
    if (!this.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast-msg ${type}`;
    toast.textContent = message;

    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 1500);
  }

  hideLoadingScreen() {
    if (this.loadingScreen) {
      this.loadingScreen.classList.add('hidden');
      this.loadingScreen.style.display = 'none';
      this.loadingScreen.style.opacity = '0';
      this.loadingScreen.style.pointerEvents = 'none';
    }
    if (this.screenMainMenu) {
      this.screenMainMenu.classList.add('active');
    }
  }

  showLoadingTransition() {
    if (this.loadingScreen) {
      this.loadingScreen.classList.remove('hidden');
      this.loadingScreen.style.display = 'flex';
      this.loadingScreen.style.opacity = '1';
      this.loadingScreen.style.pointerEvents = 'auto';
    }
  }

  hideLoadingTransition() {
    if (this.loadingScreen) {
      this.loadingScreen.classList.add('hidden');
      this.loadingScreen.style.display = 'none';
      this.loadingScreen.style.opacity = '0';
      this.loadingScreen.style.pointerEvents = 'none';
    }
  }

  updateLoadingProgress(percent) {
    if (this.loadingBarFill) this.loadingBarFill.style.width = `${percent}%`;
    if (this.loadingPercentText) this.loadingPercentText.textContent = `${percent}%`;

    if (percent >= 100) {
      setTimeout(() => {
        this.hideLoadingScreen();
      }, 400);
    }
  }

  addBtnListener(element, callback) {
    if (!element) return;
    let lastTriggerTime = 0;
    const handleTrigger = (e) => {
      const now = Date.now();
      if (now - lastTriggerTime < 250) return;
      lastTriggerTime = now;

      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      sfx.playClick();
      callback(e);
    };

    element.addEventListener('click', handleTrigger);
  }

  setupEventListeners() {
    // Stage 1 Four Main Menu Navigation Buttons
    const btnGarage = document.getElementById('btn-garage') || document.getElementById('btn-goto-garage');
    const btnEnvironments = document.getElementById('btn-environments');
    const btnLevels = document.getElementById('btn-levels');
    const btnQuickRace = document.getElementById('btn-quick-race') || document.getElementById('btn-main-quick-start');

    const btnBackToMain = document.getElementById('btn-back-to-main');
    const btnGotoEnv = document.getElementById('btn-goto-env');
    const btnBackToGarage = document.getElementById('btn-back-to-garage');
    const btnGotoLevel = document.getElementById('btn-goto-level');
    const btnBackToEnv = document.getElementById('btn-back-to-env');

    if (btnGarage) this.addBtnListener(btnGarage, () => this.enterGarage());
    if (btnEnvironments) this.addBtnListener(btnEnvironments, () => this.showScreen('env-select'));
    if (btnLevels) this.addBtnListener(btnLevels, () => this.showScreen('level-select'));
    if (btnQuickRace) {
      this.addBtnListener(btnQuickRace, () => {
        const selectedKey = this.vehicleKeys[this.currentVehicleIndex] || 'nissan_s15';
        if (!SaveSystem.isCarUnlocked(selectedKey)) {
          if (this.showToast) this.showToast('LOCKED! Purchase car first!', 'boost');
          sfx.playFail();
          return;
        }
        this.game.startRun(selectedKey, this.selectedLevel, this.selectedEnvKey);
      });
    }

    if (btnBackToMain) this.addBtnListener(btnBackToMain, () => this.showScreen('main-menu'));
    
    const btnCloseLevelSelect = document.getElementById('btn-close-level-select');
    if (btnCloseLevelSelect) {
      this.addBtnListener(btnCloseLevelSelect, () => this.showScreen('main-menu'));
    }

    if (this.screenLevelSelect) {
      this.screenLevelSelect.addEventListener('click', (e) => {
        if (e.target === this.screenLevelSelect) {
          this.showScreen('main-menu');
        }
      });
    }
    if (btnGotoEnv) {
      this.addBtnListener(btnGotoEnv, () => {
        const keys = (this.vehicleKeys || []);
        const key = keys[this.currentVehicleIndex] || keys[0] || 'nissan_s15';
        const isUnlocked = SaveSystem.isCarUnlocked(key);

        if (isUnlocked) {
          this.showScreen('env-select');
        } else {
          const CAR_PRICES = {
            'nissan_s15': 0,
            'mercedes_s65': 25000,
            'bentley_gt3': 35000,
            'xiaomi_su7': 50000,
            'lambo_centenario': 75000,
            'pagani_huayra': 100000
          };
          const cost = CAR_PRICES[key] !== undefined ? CAR_PRICES[key] : 999999;
          const liveSave = SaveSystem.loadSaveData();
          const playerCoins = liveSave.totalCash || 0;
          if (playerCoins < cost) {
            btnGotoEnv.classList.add('broken');
            sfx.playFail();
            this.showToast('NOT ENOUGH COINS!', 'boost');
            setTimeout(() => {
              btnGotoEnv.classList.remove('broken');
            }, 500);
            return;
          }

          const res = SaveSystem.unlockCar(key, cost);
          if (res.success) {
            sfx.playVictory();
            confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
            this.showToast(`Unlocked ${profile?.name || key}!`, 'boost');
            this.updateCurrencyDisplay();
            this.updateVehicleCard();
          } else {
            sfx.playFail();
            this.showToast('NOT ENOUGH COINS!', 'boost');
          }
        }
      });
    }
    if (btnBackToGarage) this.addBtnListener(btnBackToGarage, () => this.enterGarage());
    if (btnGotoLevel) this.addBtnListener(btnGotoLevel, () => this.showScreen('level-select'));
    if (btnBackToEnv) this.addBtnListener(btnBackToEnv, () => this.showScreen('env-select'));

    this.addBtnListener(this.btnPrevV, () => {
      this.currentVehicleIndex = (this.currentVehicleIndex - 1 + this.vehicleKeys.length) % this.vehicleKeys.length;
      this.updateVehicleCard();
    });

    this.addBtnListener(this.btnNextV, () => {
      this.currentVehicleIndex = (this.currentVehicleIndex + 1) % this.vehicleKeys.length;
      this.updateVehicleCard();
    });

    // Dynamically render environment buttons with purchasing checks
    this.renderEnvironmentButtons();

    const tierBtns = document.querySelectorAll('.btn-tier');
    tierBtns.forEach(btn => {
      this.addBtnListener(btn, () => {
        tierBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedTier = btn.getAttribute('data-tier');
        this.renderLevelGrid();
      });
    });

    this.addBtnListener(this.btnStart, () => {
      const selectedKey = this.vehicleKeys[this.currentVehicleIndex] || 'nissan_s15';
      if (!SaveSystem.isCarUnlocked(selectedKey)) {
        if (this.showToast) this.showToast('LOCKED! Purchase car first!', 'boost');
        sfx.playFail();
        return;
      }
      this.game.startRun(selectedKey, this.selectedLevel, this.selectedEnvKey);
    });

    this.addBtnListener(this.btnContinue, () => {
      const saveData = SaveSystem.loadSaveData();
      const envProgress = saveData?.envProgress?.[this.selectedEnvKey] || { currentLevel: 1 };
      const lvl = envProgress.currentLevel || 1;
      const selectedKey = saveData.selectedVehicleKey || this.vehicleKeys[this.currentVehicleIndex] || 'nissan_s15';
      if (!SaveSystem.isCarUnlocked(selectedKey)) {
        if (this.showToast) this.showToast('LOCKED! Purchase car first!', 'boost');
        sfx.playFail();
        return;
      }
      this.game.startRun(selectedKey, lvl, this.selectedEnvKey);
    });

    this.addBtnListener(this.btnSound, () => {
      const enabled = sfx.toggleSound();
      this.btnSound.textContent = enabled ? 'Sound: ON' : 'Sound: OFF';
    });

    this.addBtnListener(this.btnCamToggle, () => {
      if (this.game && this.game.cinemachine) {
        const mode = this.game.cinemachine.cycleCameraMode();
        const modeLabels = ['CAM: ARCADE TPP', 'CAM: CLOSE TPP', 'CAM: COCKPIT FPP', 'CAM: ACTION'];
        if (this.btnCamToggle) this.btnCamToggle.textContent = modeLabels[mode];
      }
    });

    this.addBtnListener(this.btnSettings, () => {
      if (this.modalSettings) this.modalSettings.classList.add('active');
    });

    const hudBtnSettings = document.getElementById('hud-btn-settings');
    if (hudBtnSettings) {
      this.addBtnListener(hudBtnSettings, () => {
        if (this.modalSettings) this.modalSettings.classList.add('active');
      });
    }

    this.addBtnListener(this.btnCloseSettings, () => {
      if (this.modalSettings) this.modalSettings.classList.remove('active');
    });

    this.settingsTabs.forEach(tab => {
      this.addBtnListener(tab, () => {
        const tabId = tab.getAttribute('data-tab');
        this.settingsTabs.forEach(t => t.classList.remove('active'));
        this.settingsTabContents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const activePane = document.getElementById(`tab-pane-${tabId}`);
        if (activePane) activePane.classList.add('active');
      });
    });

    if (this.themeSelector) {
      this.themeSelector.addEventListener('change', (e) => {
        const theme = e.target.value;
        if (this.game && this.game.environment) {
          this.game.environment.setTheme(theme);
        }
      });
    }

    if (this.masterVolumeSlider) {
      this.masterVolumeSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        sfx.setMasterVolume(val);
      });
    }

    const selectControlMode = document.getElementById('setting-control-mode');
    const btnCalibrateTilt = document.getElementById('btn-calibrate-tilt');

    if (selectControlMode) {
      const savedMode = localStorage.getItem('controlMode') || 'buttons';
      selectControlMode.value = savedMode;

      selectControlMode.addEventListener('change', (e) => {
        const mode = e.target.value;
        localStorage.setItem('controlMode', mode);
        if (this.game && this.game.input && typeof this.game.input.setControlMode === 'function') {
          this.game.input.setControlMode(mode, (msg) => {
            selectControlMode.value = 'buttons';
            localStorage.setItem('controlMode', 'buttons');
            this.showToast(msg, 'boost');
          });
        }
      });
    }

    if (btnCalibrateTilt) {
      this.addBtnListener(btnCalibrateTilt, () => {
        if (this.game && this.game.input && typeof this.game.input.setNeutralTilt === 'function') {
          this.game.input.setNeutralTilt();
          this.showToast('Neutral Tilt Calibrated!', 'antigrav');
        }
      });
    }

    if (this.btnOpenShopGlobal) {
      this.addBtnListener(this.btnOpenShopGlobal, () => {
        if (this.modalShop) this.modalShop.classList.add('active');
      });
    }

    if (this.btnCloseShop) {
      this.addBtnListener(this.btnCloseShop, () => {
        if (this.modalShop) this.modalShop.classList.remove('active');
      });
    }

    const buyButtons = document.querySelectorAll('.btn-buy-iap');
    buyButtons.forEach(btn => {
      this.addBtnListener(btn, () => {
        const itemKey = btn.getAttribute('data-iap');
        SaveSystem.saveIAPPurchase(itemKey);
        sfx.playMilestoneChime(3);
        this.showToast('Purchase Complete! Item Unlocked.', 'boost');
        this.updateSaveUI();
      });
    });

    // Stage 2 Voluntary Rewarded Ad Buttons
    const btnDoubleCoins = document.getElementById('btn-double-coins');
    if (btnDoubleCoins) {
      this.addBtnListener(btnDoubleCoins, () => {
        if (this._doubleCoinsClaimed) return;
        this._doubleCoinsClaimed = true;
        btnDoubleCoins.disabled = true;

        AdManager.showRewardedAd(() => {
          SaveSystem.addCoins(this.lastVictoryCash || 0);
          this.showToast('2X Cash Claimed!', 'boost');
          btnDoubleCoins.style.display = 'none';
          this.updateCurrencyDisplay();
        });
      });
    }

    const btnReviveContinue = document.getElementById('btn-revive-continue');
    if (btnReviveContinue) {
      this.addBtnListener(btnReviveContinue, () => {
        AdManager.showRewardedAd(() => {
          this.showScreen('hud');
          const selectedKey = this.vehicleKeys[this.currentVehicleIndex] || 'nissan_s15';
          this.game.startRun(selectedKey, this.selectedLevel, this.selectedEnvKey);
          this.showToast('Revived with Boost Immunity!', 'antigrav');
        });
      });
    }

    // Stage 2 Victory Level Advance Button
    this.addBtnListener(this.btnNextLevel, () => {
      this.showScreen('hud');
      this.selectedLevel = this.selectedLevel + 1;
      const selectedKey = this.vehicleKeys[this.currentVehicleIndex] || 'nissan_s15';
      requestAnimationFrame(() => {
        this.game.startRun(selectedKey, this.selectedLevel, this.selectedEnvKey);
      });
    });

    this.addBtnListener(this.btnRetryVictory, () => {
      this.showScreen('hud');
      const selectedKey = this.vehicleKeys[this.currentVehicleIndex] || 'nissan_s15';
      requestAnimationFrame(() => {
        this.game.startRun(selectedKey, this.selectedLevel, this.selectedEnvKey);
      });
    });

    // Stage 1 AdMob Reward Video Trigger Buttons (Paint, Wheels, Upgrade)
    const iconBtns = document.querySelectorAll('.custom-icon-btn');
    const paintBar = document.getElementById('compact-paint-bar');
    iconBtns.forEach(btn => {
      this.addBtnListener(btn, () => {
        iconBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        AdManager.showRewardedAd(() => {
          if (this.showToast) this.showToast('Customization Unlocked!', 'boost');
        });

        const id = btn.id;
        if (id === 'btn-custom-paint') {
          if (paintBar) paintBar.style.display = 'flex';
        } else {
          if (paintBar) paintBar.style.display = 'none';
        }
      });
    });

    // Stage 1 End-State Garage Navigation Buttons
    const btnGarageVictory = document.getElementById('btn-garage-victory');
    if (btnGarageVictory) {
      this.addBtnListener(btnGarageVictory, () => {
        this.enterGarage();
      });
    }

    this.addBtnListener(this.btnRetryFail, () => {
      this.showScreen('hud');
      const selectedKey = this.vehicleKeys[this.currentVehicleIndex] || 'nissan_s15';
      requestAnimationFrame(() => {
        this.game.startRun(selectedKey, this.selectedLevel, this.selectedEnvKey);
      });
    });

    this.addBtnListener(this.btnMenuFail, () => {
      this.game.gameState = 'MENU_SHOWCASE';
      this.game.updateShowcaseVehicle(this.vehicleKeys[this.currentVehicleIndex]);
      this.showScreen('main-menu');
    });



    // Custom Paint Swatch Listeners
    const swatches = document.querySelectorAll('.paint-swatch');
    swatches.forEach(swatch => {
      this.addBtnListener(swatch, () => {
        swatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        const color = swatch.getAttribute('data-color');
        if (this.game && this.game.garageShowcase && this.game.garageShowcase.currentMesh) {
          Vehicle3DModels.setVehiclePaint(this.game.garageShowcase.currentMesh, color);
        }
      });
    });

    this.buildVehicleGrid();
  }

  buildVehicleGrid() {
    if (!this.vehicleGridContainer) return;

    this.vehicleGridContainer.innerHTML = '';
    const iconMap = {
      nissan_s15: '🚗',
      mercedes_s65: '🚘',
      bentley_gt3: '🚙',
      xiaomi_su7: '⚡',
      lambo_centenario: '🏎️',
      pagani_huayra: '💎'
    };

    const keys = (this.vehicleKeys || []).filter(k => k && CAR_MANIFEST[k]);
    const saveData = SaveSystem.loadSaveData();

    keys.forEach((key, idx) => {
      const manifest = CAR_MANIFEST[key];
      if (!manifest) return;

      const isUnlocked = saveData.allCarsUnlocked || saveData.unlockedCars?.includes(key) || key === 'nissan_s15';

      const card = document.createElement('div');
      card.className = `vehicle-card-item ${idx === this.currentVehicleIndex ? 'active' : ''} ${!isUnlocked ? 'locked' : ''}`;
      card.setAttribute('data-key', key);

      const nameStr = (manifest.name || key || 'CAR').toString();
      const firstName = nameStr.includes(' ') ? nameStr.split(' ')[0] : nameStr;

      const CAR_PRICES = {
        'nissan_s15': 0,
        'mercedes_s65': 25000,
        'bentley_gt3': 35000,
        'xiaomi_su7': 50000,
        'lambo_centenario': 75000,
        'pagani_huayra': 100000
      };
      const cost = CAR_PRICES[key] !== undefined ? CAR_PRICES[key] : 999999;
      const tagStr = isUnlocked ? (manifest.tag || manifest.className || manifest.tier || 'HERO').toString() : `🔒 🪙${cost.toLocaleString()}`;
      const firstTag = tagStr.includes(' ') ? tagStr.split(' ')[0] : tagStr;

      card.innerHTML = `
        <div class="vcard-icon">${iconMap[key] || '🏎️'}</div>
        <div class="vcard-name">${firstName}</div>
        <div class="vcard-tag">${firstTag}</div>
      `;

      this.addBtnListener(card, () => {
        this.currentVehicleIndex = idx;
        this.updateVehicleCard();
      });

      this.vehicleGridContainer.appendChild(card);
    });
  }

  updateVehicleCard() {
    const keys = (this.vehicleKeys || []);
    if (keys.length === 0) return;

    const saveData = SaveSystem.loadSaveData();
    const key = keys[this.currentVehicleIndex] || keys[0] || 'nissan_s15';
    const profile = Vehicle3DModels.getProfile(key) || CAR_MANIFEST[key];

    if (!profile) return;

    const isUnlocked = SaveSystem.isCarUnlocked(key);

    const btnGotoEnv = document.getElementById('btn-goto-env');
    if (btnGotoEnv) {
      if (isUnlocked) {
        btnGotoEnv.innerHTML = 'SELECT / DRIVE ▶';
        btnGotoEnv.style.background = 'linear-gradient(135deg, #f5b942, #d97706)';
        btnGotoEnv.style.borderColor = '#fef08a';
        btnGotoEnv.style.opacity = '1.0';
        btnGotoEnv.disabled = false;
      } else {
        const CAR_PRICES = {
            'nissan_s15': 0,
            'mercedes_s65': 25000,
            'bentley_gt3': 35000,
            'xiaomi_su7': 50000,
            'lambo_centenario': 75000,
            'pagani_huayra': 100000
        };
        const cost = CAR_PRICES[key] !== undefined ? CAR_PRICES[key] : 999999;
        const playerCoins = saveData.totalCash || 0;
        const coinSvg = `
          <svg class="gold-coin-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" style="display:inline-block; vertical-align:middle; margin-right:4px;">
            <circle cx="12" cy="12" r="10" fill="url(#goldGrad)" stroke="#FEF08A" stroke-width="1.5"/>
            <circle cx="12" cy="12" r="7.5" stroke="#D97706" stroke-width="1" stroke-dasharray="2 1"/>
            <polygon points="12,6.5 13.5,10 17,10 14,12 15.5,15.5 12,13.5 8.5,15.5 10,12 7,10 10.5,10" fill="#78350F"/>
          </svg>
        `;
        if (playerCoins >= cost) {
          btnGotoEnv.innerHTML = `🛒 BUY — ${coinSvg} ${cost.toLocaleString()} COINS`;
          btnGotoEnv.style.background = 'linear-gradient(135deg, #10b981, #059669)';
          btnGotoEnv.style.borderColor = '#a7f3d0';
          btnGotoEnv.style.opacity = '1.0';
        } else {
          btnGotoEnv.innerHTML = `🔒 LOCKED — ${coinSvg} ${cost.toLocaleString()} COINS`;
          btnGotoEnv.style.background = 'linear-gradient(135deg, #475569, #334155)';
          btnGotoEnv.style.borderColor = '#94a3b8';
          btnGotoEnv.style.opacity = '0.75';
        }
        btnGotoEnv.disabled = false;
      }
    }

    const tagText = (profile.tag || profile.className || profile.tier || 'MUSCLE HERO').toString();
    const nameText = (profile.name || key || 'Vehicle').toString();
    const descText = (profile.description || '').toString();

    if (this.vTag) this.vTag.textContent = isUnlocked ? tagText : `🔒 LOCKED (${profile.tier || 'CAR'})`;
    if (this.vName) this.vName.textContent = nameText;
    if (this.vDesc) this.vDesc.textContent = descText;

    if (this.vSpeed) this.vSpeed.style.width = `${profile.statSpeed || 80}%`;
    if (this.vHandling) this.vHandling.style.width = `${profile.statHandling || 70}%`;
    if (this.vStability) this.vStability.style.width = `${profile.statStability || 80}%`;

    // Highlight active card in grid (avoid infinite loop)
    if (this.vehicleGridContainer) {
      this.vehicleGridContainer.innerHTML = '';
      const iconMap = {
        nissan_s15: '🚗',
        mercedes_s65: '🚘',
        bentley_gt3: '🚙',
        xiaomi_su7: '⚡',
        lambo_centenario: '🏎️',
        pagani_huayra: '💎'
      };
      const keysList = (this.vehicleKeys || []).filter(k => k && CAR_MANIFEST[k]);
      keysList.forEach((k, idx) => {
        const manifest = CAR_MANIFEST[k];
        if (!manifest) return;
        const unlockedCar = saveData.allCarsUnlocked || saveData.unlockedCars?.includes(k) || k === 'nissan_s15';
        const card = document.createElement('div');
        card.className = `vehicle-card-item ${idx === this.currentVehicleIndex ? 'active' : ''} ${!unlockedCar ? 'locked' : ''}`;
        card.setAttribute('data-key', k);
        const nameStr = (manifest.name || k || 'CAR').toString();
        const firstName = nameStr.includes(' ') ? nameStr.split(' ')[0] : nameStr;
        const CAR_PRICES = {
            'nissan_s15': 0,
            'mercedes_s65': 25000,
            'bentley_gt3': 35000,
            'xiaomi_su7': 50000,
            'lambo_centenario': 75000,
            'pagani_huayra': 100000
        };
        const costVal = CAR_PRICES[k] !== undefined ? CAR_PRICES[k] : 999999;
        const tagStr = unlockedCar ? (manifest.tag || manifest.className || manifest.tier || 'HERO').toString() : `🔒 🪙${costVal.toLocaleString()}`;
        const firstTag = tagStr.includes(' ') ? tagStr.split(' ')[0] : tagStr;
        card.innerHTML = `
          <div class="vcard-icon">${iconMap[k] || '🏎️'}</div>
          <div class="vcard-name">${firstName}</div>
          <div class="vcard-tag">${firstTag}</div>
        `;
        this.addBtnListener(card, () => {
          this.currentVehicleIndex = idx;
          this.updateVehicleCard();
        });
        this.vehicleGridContainer.appendChild(card);
      });
    }

    if (this.game) {
      if (this.game.garageShowcase) {
        this.game.garageShowcase.selectVehicle(key);
      } else {
        this.game.updateShowcaseVehicle(key);
      }
    }
  }

  clearStaleHUD() {
    if (this.airtimeCard) {
      this.airtimeCard.classList.remove('active');
      this.airtimeCard.classList.add('hidden');
      this.airtimeCard.style.display = 'none';
    }
    if (this.comboCard) {
      this.comboCard.classList.remove('active', 'pulse', 'broken');
      this.comboCard.classList.add('hidden');
      this.comboCard.style.display = 'none';
    }
  }

  enterGarage() {
    console.log('[UIManager] Entering Garage via consolidated enterGarage()');
    this.clearStaleHUD();
    if (this.game) {
      this.game.gameState = 'MENU_SHOWCASE';
      const currentKey = (this.vehicleKeys && this.vehicleKeys[this.currentVehicleIndex])
        ? this.vehicleKeys[this.currentVehicleIndex]
        : 'nissan_s15';
      this.game.updateShowcaseVehicle(currentKey);
    }
    this.showScreen('garage');
    this.updateCurrencyDisplay();
    this.updateVehicleCard();
  }

  showGarage() {
    this.enterGarage();
  }

  showScreen(screenName) {
    const screens = [
      this.screenMainMenu,
      this.screenGarage,
      this.screenEnvSelect,
      this.screenLevelSelect,
      this.screenHUD,
      this.modalVictory,
      this.modalFail,
      this.modalShop
    ];
    screens.forEach(s => {
      if (s) {
        s.classList.remove('active');
        s.style.display = 'none'; // Explicitly hide inactive UI screens
      }
    });

    const touchControls = document.getElementById('touch-controls') || document.getElementById('mobile-controls');
    if (touchControls) {
      touchControls.style.display = (screenName === 'hud') ? 'flex' : 'none';
    }

    const topGlobalBar = document.querySelector('.top-global-bar');
    if (topGlobalBar) {
      topGlobalBar.style.display = (screenName === 'hud') ? 'none' : 'flex';
    }

    // Toggle body class for garage state-isolation
    if (screenName === 'garage') {
      document.body.classList.add('state-garage');
      if (this.screenMainMenu) {
        this.screenMainMenu.style.display = 'none';
        this.screenMainMenu.classList.remove('active');
      }
      const mainMenuContainer = document.querySelector('.main-menu-container');
      if (mainMenuContainer) mainMenuContainer.style.display = 'none';
      const mainHeroTitle = document.querySelector('.supercell-hero');
      if (mainHeroTitle) mainHeroTitle.style.display = 'none';
    } else {
      document.body.classList.remove('state-garage');
      const mainHeroTitle = document.querySelector('.supercell-hero');
      if (mainHeroTitle && screenName === 'main-menu') mainHeroTitle.style.display = 'block';
    }

    // AdMob Banner Visibility Management
    if (screenName === 'hud') {
      AdManager.hideBanner();
    } else if (['main-menu', 'garage', 'env-select', 'level-select'].includes(screenName)) {
      AdManager.showBanner();
    }

    // Purge and hide non-HUD screens explicitly on HUD transition
    if (screenName === 'hud') {
      const mainMenu = document.querySelector('.main-menu-container') || document.getElementById('screen-main-menu');
      const garageMenu = document.querySelector('.garage-vehicle-info-panel') || document.getElementById('screen-garage');
      if (mainMenu) {
        mainMenu.classList.add('hidden');
        mainMenu.style.display = 'none';
      }
      if (garageMenu) {
        garageMenu.classList.add('hidden');
        garageMenu.style.display = 'none';
      }
      if (this.screenMainMenu) {
        this.screenMainMenu.classList.remove('active');
        this.screenMainMenu.style.display = 'none';
      }
      if (this.screenGarage) {
        this.screenGarage.classList.remove('active');
        this.screenGarage.style.display = 'none';
      }
    }

    const screenMap = {
      'main-menu': this.screenMainMenu,
      'garage': this.screenGarage,
      'env-select': this.screenEnvSelect,
      'level-select': this.screenLevelSelect,
      'hud': this.screenHUD,
      'victory': this.modalVictory,
      'fail': this.modalFail,
      'shop': this.modalShop
    };

    const targetScreen = screenMap[screenName];
    if (targetScreen) {
      targetScreen.style.display = 'flex';
      targetScreen.classList.add('active');
    }

    switch (screenName) {
      case 'garage':
        if (this.game) this.game.gameState = 'MENU_SHOWCASE';
        const garagePanel = document.querySelector('.garage-vehicle-info-panel');
        if (garagePanel) {
          garagePanel.classList.remove('hidden');
          garagePanel.style.display = 'flex';
        }
        if (this.screenGarage) {
          this.screenGarage.classList.remove('hidden');
          this.screenGarage.classList.add('active');
          this.screenGarage.style.display = 'flex';
        }
        this.updateVehicleCard();
        break;

      case 'main-menu':
        if (this.game) this.game.gameState = 'MENU_SHOWCASE';
        const mainMenuContainer = document.querySelector('.main-menu-container');
        if (mainMenuContainer) {
          mainMenuContainer.classList.remove('hidden');
          mainMenuContainer.style.display = 'flex';
        }
        if (this.screenMainMenu) {
          this.screenMainMenu.classList.remove('hidden');
          this.screenMainMenu.classList.add('active');
          this.screenMainMenu.style.display = 'flex';
        }
        break;
        if (this.screenMainMenu) this.screenMainMenu.style.display = 'flex';
        const mmc = document.querySelector('.main-menu-container');
        if (mmc) mmc.style.display = 'flex';
        break;

      case 'level-select':
        const envLabel = document.getElementById('selected-env-label');
        if (envLabel) envLabel.textContent = (this.selectedEnvKey || 'fairy_forest').toUpperCase().replace('_', ' ');
        this.renderLevelGrid();
        break;

      case 'hud':
        if (this.hudLevelTitle) this.hudLevelTitle.textContent = `LVL ${this.selectedLevel}`;
        break;
    }
  }

  updateHUD(speed, progressRatio, cash, isAntiGravActive, nitroLevel, isSpeedBoostActive = false) {
    if (this.hudCash) this.hudCash.textContent = cash.toLocaleString();

    const percent = Math.floor(progressRatio * 100);
    if (this.hudProgressFill) this.hudProgressFill.style.width = `${percent}%`;
    if (this.hudProgressMarker) this.hudProgressMarker.style.left = `${percent}%`;
    if (this.hudProgressPercent) this.hudProgressPercent.textContent = `${percent}%`;

    if (this.hudSpeed) this.hudSpeed.textContent = Math.floor(speed * 3.6);
    if (this.hudNitroFill) this.hudNitroFill.style.width = `${nitroLevel * 100}%`;

    // Speed Lines motion blur overlay (Section 5)
    if (this.speedLinesOverlay) {
      if (speed > 22 || isSpeedBoostActive) {
        this.speedLinesOverlay.classList.add('active');
      } else {
        this.speedLinesOverlay.classList.remove('active');
      }
    }
  }

  updateHUDLevel(levelNumber) {
    this.selectedLevel = levelNumber;
    if (this.hudLevelTitle) {
      this.hudLevelTitle.textContent = `LEVEL ${levelNumber}`;
    }
  }

  updateCombo(multiplier, count, isBroken = false) {
    if (!this.comboCard || !this.comboVal) return;

    if (isBroken) {
      this.comboVal.textContent = 'COMBO BROKEN!';
      this.comboCard.classList.remove('hidden');
      this.comboCard.classList.add('broken');
      setTimeout(() => {
        if (this.comboCard) {
          this.comboCard.classList.remove('broken');
          this.comboCard.classList.add('hidden');
        }
      }, 800);
      return;
    }

    if (multiplier > 1) {
      this.comboCard.classList.remove('hidden', 'broken');
      this.comboVal.textContent = `x${multiplier} COMBO (${count})`;
      this.comboCard.classList.add('pulse');
      setTimeout(() => {
        if (this.comboCard) this.comboCard.classList.remove('pulse');
      }, 200);
    } else {
      this.comboCard.classList.add('hidden');
    }
  }

  updateAirtime(airtimeSec, isFinished = false) {
    if (!this.airtimeCard || !this.airtimeVal) return;

    if (airtimeSec > 0.25) {
      this.airtimeCard.classList.remove('hidden');
      this.airtimeCard.classList.add('active');
      this.airtimeCard.style.display = 'flex';
      this.airtimeVal.textContent = isFinished
        ? `${airtimeSec.toFixed(1)}s AIR!`
        : `${airtimeSec.toFixed(1)}s AIR`;
    } else {
      this.hideAirtime();
    }
  }

  hideAirtime() {
    if (!this.airtimeCard) return;
    this.airtimeCard.classList.add('hidden');
    this.airtimeCard.classList.remove('active');
    this.airtimeCard.style.display = 'none';
  }

  pulseProgress() {
    if (this.hudProgressFill) {
      this.hudProgressFill.style.transform = 'scaleY(1.5)';
      setTimeout(() => {
        if (this.hudProgressFill) this.hudProgressFill.style.transform = 'scaleY(1)';
      }, 300);
    }
  }

  showVictory(timeSeconds, cashCollected) {
    this.clearStaleHUD();
    this.lastVictoryCash = cashCollected;
    this._doubleCoinsClaimed = false;
    this.showScreen('victory');
    sfx.playVictory();

    // Refresh display (already added to wallet via SaveSystem.saveEnvProgress in main.js)
    this.updateCurrencyDisplay();

    const btnDoubleCoins = document.getElementById('btn-double-coins');
    if (btnDoubleCoins) {
      btnDoubleCoins.disabled = false;
      btnDoubleCoins.style.display = 'inline-block';
    }

    AdManager.showLevelCompleteInterstitial(this.selectedLevel);

    confetti({
      particleCount: 140,
      spread: 85,
      origin: { y: 0.6 }
    });

    const mins = Math.floor(timeSeconds / 60);
    const secs = (timeSeconds % 60).toFixed(1);
    if (this.vicTime) this.vicTime.textContent = `${mins.toString().padStart(2, '0')}:${secs.padStart(4, '0')}`;
    if (this.vicCash) this.vicCash.textContent = `+🪙 ${cashCollected.toLocaleString()}`;

    let stars = 3;
    if (timeSeconds > 45) stars = 2;
    if (timeSeconds > 60) stars = 1;

    if (this.vicStars) {
      this.vicStars.forEach((star, idx) => {
        if (idx < stars) star.classList.add('active');
        else star.classList.remove('active');
      });
    }
  }

  showFail(progressRatio, cashCollected) {
    this.clearStaleHUD();
    this.showScreen('fail');
    sfx.playFail();

    // Refresh display (already added to wallet via SaveSystem.saveEnvProgress in main.js)
    this.updateCurrencyDisplay();

    const distElem = document.getElementById('fail-distance');
    const cashElem = document.getElementById('fail-cash');

    if (distElem) distElem.textContent = `${Math.floor(progressRatio * 100)}%`;
    if (cashElem) cashElem.textContent = `+🪙 ${cashCollected.toLocaleString()}`;
  }

  renderEnvironmentButtons() {
    const container = document.querySelector('.env-cards-container');
    if (!container) return;

    container.innerHTML = '';
    const saveData = SaveSystem.loadSaveData();
    const unlocked = saveData.unlockedEnvironments || ['golden_bay'];

    const ENV_PRICES = {
      golden_bay: 0,
      rooftop: 15000,
      lakeside_sunrise: 35000,
      clear_night: 50000,
      alpine_hill: 75000,
      skyline_sunset: 100000,
      venice_twilight: 150000
    };

    const ENV_NAMES = {
      golden_bay: '🏖️ Golden Bay Coast',
      rooftop: '🏙️ Metropolis Rooftop',
      lakeside_sunrise: '🌅 Lakeside Sunrise',
      clear_night: '🌌 Midnight Starlight',
      alpine_hill: '🏔️ Alpine Ridge',
      skyline_sunset: '🌇 Skyline Sunset',
      venice_twilight: '🌆 Venice Twilight'
    };

    Object.entries(ENV_PRICES).forEach(([envKey, price]) => {
      const isUnlocked = unlocked.includes(envKey) || price === 0;
      const btn = document.createElement('button');
      btn.className = `btn-env ${envKey === this.selectedEnvKey ? 'active' : ''} ${!isUnlocked ? 'locked' : ''}`;
      btn.setAttribute('data-env', envKey);

      let text = ENV_NAMES[envKey] || envKey;
      if (!isUnlocked) {
        text = `🔒 ${text} (🪙 ${price.toLocaleString()})`;
      }
      btn.textContent = text;

      this.addBtnListener(btn, () => {
        const freshSave = SaveSystem.loadSaveData();
        const activeUnlocked = freshSave.unlockedEnvironments || ['golden_bay'];

        if (activeUnlocked.includes(envKey) || price === 0) {
          document.querySelectorAll('.btn-env').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.selectedEnvKey = envKey;
          const envProgress = freshSave.envProgress?.[this.selectedEnvKey] || { currentLevel: 1, highestLevelReached: 1 };
          this.selectedLevel = envProgress.currentLevel || 1;
          this.renderLevelGrid();
          this.updateSaveUI();
          if (this.game && this.game.environment) {
            this.game.environment.setTheme(this.selectedEnvKey);
          }
        } else {
          const res = SaveSystem.unlockEnvironment(envKey, price);
          if (res.success) {
            sfx.playVictory();
            confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
            this.showToast(`🎉 Unlocked Environment!`, 'boost');
            this.selectedEnvKey = envKey;
            const envProgress = res.saveData.envProgress?.[this.selectedEnvKey] || { currentLevel: 1, highestLevelReached: 1 };
            this.selectedLevel = envProgress.currentLevel || 1;
            this.renderEnvironmentButtons();
            this.renderLevelGrid();
            this.updateSaveUI();
            if (this.game && this.game.environment) {
              this.game.environment.setTheme(this.selectedEnvKey);
            }
          } else {
            sfx.playFail();
            this.showToast(`🪙 Need ${res.required || price} more coins to unlock environment!`);
          }
        }
      });

      container.appendChild(btn);
    });
  }
}
