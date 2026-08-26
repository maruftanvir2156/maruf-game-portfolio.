/**
 * SKY TRACK RACING: STUNT CAR 3D — SAVE SYSTEM & PERSISTENCE
 *
 * Manages localStorage saving and loading for:
 *   - currentLevel: active progression level
 *   - highestLevelReached: max level unlocked by player
 *   - totalCash: total currency accumulated across runs
 *   - selectedVehicleKey: last chosen vehicle
 *   - IAP items: isNoAds, vipPaintsUnlocked, allCarsUnlocked
 */

const SAVE_KEY = 'sky_track_racing_3d_save_v3';
const CURRENT_SAVE_VERSION = 'v3.0_master_economy';

export class SaveSystem {
  static loadSaveData() {
    try {
      let raw = localStorage.getItem(SAVE_KEY);
      let parsed = null;
      if (raw) {
        try { parsed = JSON.parse(raw); } catch (e) {}
      }

      // Version check: if save is missing or outdated version, wipe corrupted localStorage state!
      if (!parsed || parsed.version !== CURRENT_SAVE_VERSION) {
        console.warn('[SaveSystem] Outdated or missing save version — purging corrupted localStorage state!');
        localStorage.removeItem(SAVE_KEY);
        localStorage.removeItem('sky_track_racing_3d_save_v2');
        localStorage.removeItem('sky_track_racing_3d_save_v1');
        localStorage.removeItem('nova_race_3d_save_v1');
        localStorage.removeItem('unlockedCars');
        localStorage.removeItem('player_coins');
        parsed = this.getDefaultSave();
        parsed.version = CURRENT_SAVE_VERSION;
        localStorage.setItem(SAVE_KEY, JSON.stringify(parsed));
        localStorage.setItem('player_coins', '0');
      }

      const coins = typeof parsed.totalCash === 'number' ? parsed.totalCash : 0;
      localStorage.setItem('player_coins', coins.toString());

      const defaults = this.getDefaultSave();
      let unlockedCarsList = Array.isArray(parsed.unlockedCars) ? parsed.unlockedCars : defaults.unlockedCars;
      const validCarKeys = ['nissan_s15', 'mercedes_s65', 'bentley_gt3', 'xiaomi_su7', 'lambo_centenario', 'pagani_huayra'];
      unlockedCarsList = unlockedCarsList.filter(carId => validCarKeys.includes(carId));
      if (!unlockedCarsList.includes('nissan_s15')) {
        unlockedCarsList.unshift('nissan_s15');
      }

      return {
        ...defaults,
        ...parsed,
        version: CURRENT_SAVE_VERSION,
        totalCash: coins,
        unlockedCars: unlockedCarsList
      };
    } catch (e) {
      console.warn('[SaveSystem] Error reading save data, resetting to defaults:', e);
      return this.getDefaultSave();
    }
  }

  static isCarOwned(carKey) {
    if (carKey === 'nissan_s15') return true;
    const saveData = this.loadSaveData();
    if (saveData.allCarsUnlocked) return true;
    const unlockedList = saveData.unlockedCars || ['nissan_s15'];
    return unlockedList.includes(carKey);
  }

  static isCarUnlocked(carKey) {
    return this.isCarOwned(carKey);
  }

  static resetCoinBalance() {
    localStorage.setItem('player_coins', '0');
    return this.saveGameData({ totalCash: 0 });
  }

  static saveGameData(data) {
    try {
      const currentSave = this.loadSaveData();

      // Sync player_coins key if totalCash changes
      if (data.totalCash !== undefined) {
        localStorage.setItem('player_coins', data.totalCash.toString());
      } else {
        data.totalCash = currentSave.totalCash;
      }

      const updated = {
        ...currentSave,
        ...data,
        highestLevelReached: Math.max(currentSave.highestLevelReached || 1, data.currentLevel || 1)
      };
      localStorage.setItem(SAVE_KEY, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.warn('[SaveSystem] Error writing save data:', e);
    }
  }

  static addCoins(amount = 0) {
    if (amount <= 0) return this.loadSaveData();
    const currentSave = this.loadSaveData();
    const newTotal = (currentSave.totalCash || 0) + amount;
    const updated = this.saveGameData({ totalCash: newTotal });
    if (window.gameEngine && window.gameEngine.ui && typeof window.gameEngine.ui.updateCurrencyDisplay === 'function') {
      window.gameEngine.ui.updateCurrencyDisplay();
    }
    return updated;
  }

  static saveEnvProgress(envKey, levelNumber, cashToAdd = 0) {
    const currentSave = this.loadSaveData();
    const envs = currentSave.envProgress || this.getDefaultSave().envProgress;
    const currentEnvData = envs[envKey] || { currentLevel: 1, highestLevelReached: 1 };

    envs[envKey] = {
      currentLevel: levelNumber,
      highestLevelReached: Math.max(currentEnvData.highestLevelReached || 1, levelNumber)
    };

    const updated = this.saveGameData({
      selectedEnvKey: envKey,
      envProgress: envs,
      currentLevel: levelNumber,
      totalCash: (currentSave.totalCash || 0) + cashToAdd
    });

    if (window.gameEngine && window.gameEngine.ui && typeof window.gameEngine.ui.updateCurrencyDisplay === 'function') {
      window.gameEngine.ui.updateCurrencyDisplay();
    }

    return updated;
  }

  static saveIAPPurchase(itemKey) {
    try {
      const currentSave = this.loadSaveData();
      if (itemKey === 'no_ads') currentSave.isNoAds = true;
      if (itemKey === 'vip_paints') currentSave.vipPaintsUnlocked = true;
      if (itemKey === 'all_cars') currentSave.allCarsUnlocked = true;
      if (itemKey === 'coin_pack_small') currentSave.totalCash = (currentSave.totalCash || 0) + 10000;
      if (itemKey === 'coin_pack_mega') currentSave.totalCash = (currentSave.totalCash || 0) + 50000;
      localStorage.setItem(SAVE_KEY, JSON.stringify(currentSave));
      return currentSave;
    } catch (e) {
      console.warn('[SaveSystem] Error saving IAP purchase:', e);
    }
  }

  static unlockCar(carKey, cost = 0) {
    try {
      const currentSave = this.loadSaveData();
      const cash = currentSave.totalCash || 0;
      if (cash < cost) {
        return { success: false, reason: 'insufficient_funds', required: cost - cash };
      }

      const unlockedSet = new Set(currentSave.unlockedCars || ['nissan_s15']);
      unlockedSet.add(carKey);

      const updated = this.saveGameData({
        totalCash: cash - cost,
        unlockedCars: Array.from(unlockedSet)
      });
      return { success: true, saveData: updated };
    } catch (e) {
      console.warn('[SaveSystem] Error unlocking car:', e);
      return { success: false, reason: 'error' };
    }
  }

  static unlockEnvironment(envKey, cost = 0) {
    try {
      const currentSave = this.loadSaveData();
      const cash = currentSave.totalCash || 0;
      if (cash < cost) {
        return { success: false, reason: 'insufficient_funds', required: cost - cash };
      }

      const unlockedSet = new Set(currentSave.unlockedEnvironments || ['golden_bay']);
      unlockedSet.add(envKey);

      const updated = this.saveGameData({
        totalCash: cash - cost,
        unlockedEnvironments: Array.from(unlockedSet)
      });
      return { success: true, saveData: updated };
    } catch (e) {
      console.warn('[SaveSystem] Error unlocking environment:', e);
      return { success: false, reason: 'error' };
    }
  }

  static clearSaveData() {
    try {
      localStorage.removeItem(SAVE_KEY);
      localStorage.removeItem('player_coins');
      console.log('[SaveSystem] Save data wiped ✓');
    } catch (e) {
      console.warn('[SaveSystem] Error clearing save data:', e);
    }
  }

  static getDefaultSave() {
    return {
      selectedEnvKey: 'golden_bay',
      envProgress: {
        golden_bay: { currentLevel: 1, highestLevelReached: 1 },
        rooftop: { currentLevel: 1, highestLevelReached: 1 },
        lakeside_sunrise: { currentLevel: 1, highestLevelReached: 1 },
        clear_night: { currentLevel: 1, highestLevelReached: 1 },
        alpine_hill: { currentLevel: 1, highestLevelReached: 1 },
        skyline_sunset: { currentLevel: 1, highestLevelReached: 1 },
        venice_twilight: { currentLevel: 1, highestLevelReached: 1 }
      },
      currentLevel: 1,
      highestLevelReached: 1,
      totalCash: 0,
      unlockedCars: ['nissan_s15'],
      unlockedEnvironments: ['golden_bay'],
      selectedVehicleKey: 'nissan_s15',
      isNoAds: false,
      vipPaintsUnlocked: false,
      allCarsUnlocked: false
    };
  }
}
