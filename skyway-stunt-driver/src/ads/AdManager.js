/**
 * SKY TRACK RACING: STUNT CAR 3D — ADMANAGER & CAPACITOR ADMOB INTEGRATION
 *
 * Supports @capacitor-community/admob plugin for Capacitor native builds,
 * with web fallback for browser testing. Uses Google AdMob official TEST Unit IDs.
 */

import { AdMob, BannerAdSize, BannerAdPosition, RewardAdPluginEvents } from '@capacitor-community/admob';
import { SaveSystem } from '../game/SaveSystem.js';

export const AD_CONFIG = {
  adsEveryNLevels: 2,
  // Google AdMob Official Android Test Unit IDs
  bannerAdId: 'ca-app-pub-3940256099942544/6300978111',
  interstitialAdId: 'ca-app-pub-3940256099942544/1033173712',
  rewardedAdId: 'ca-app-pub-3940256099942544/5224354917'
};

export class AdManager {
  static isInitialized = false;
  static isBannerShowing = false;
  static levelCompletionsCount = 0;

  static isCapacitorAvailable() {
    return typeof window !== 'undefined' && window.Capacitor && window.Capacitor.isPluginAvailable('AdMob');
  }

  static async initialize() {
    try {
      if (window.Capacitor && window.Capacitor.isPluginAvailable('AdMob')) {
        await AdMob.initialize({ requestTrackingAuthorization: true });
        this.isInitialized = true;
        console.log('[AdManager] Capacitor AdMob SDK initialized successfully ✓');

        // Pre-load Interstitial and Rewarded Video Ads asynchronously
        this.prepareInterstitial().catch(e => console.warn('[AdManager] prepareInterstitial skipped:', e));
        this.prepareRewardedAd().catch(e => console.warn('[AdManager] prepareRewardedAd skipped:', e));
        this.showBanner().catch(e => console.warn('[AdManager] showBanner skipped:', e));
      } else {
        console.log('[AdManager] Web mode active (Capacitor AdMob inactive). Ads simulated.');
      }
    } catch (err) {
      console.warn('[AdManager] AdMob init skipped or failed non-fatally:', err);
    }
  }

  static async prepareInterstitial() {
    if (!this.isCapacitorAvailable()) return;
    try {
      await AdMob.prepareInterstitial({
        adId: AD_CONFIG.interstitialAdId
      });
      console.log('[AdManager] Interstitial ad pre-loaded ✓');
    } catch (e) {
      console.warn('[AdManager] prepareInterstitial error:', e);
    }
  }

  static async prepareRewardedAd() {
    if (!this.isCapacitorAvailable()) return;
    try {
      await AdMob.prepareRewardVideoAd({
        adId: AD_CONFIG.rewardedAdId
      });
      console.log('[AdManager] Rewarded Video ad pre-loaded ✓');
    } catch (e) {
      console.warn('[AdManager] prepareRewardVideoAd error:', e);
    }
  }

  static async showBanner() {
    if (!this.isCapacitorAvailable()) {
      console.log('📺 [SIMULATED BANNER AD] Banner displayed at bottom.');
      return;
    }

    const saveData = SaveSystem.loadSaveData();
    if (saveData?.isNoAds) return;

    try {
      await AdMob.showBanner({
        adId: AD_CONFIG.bannerAdId,
        position: BannerAdPosition.BOTTOM_CENTER,
        size: BannerAdSize.BANNER,
        isTesting: true
      });
      this.isBannerShowing = true;
      console.log('[AdManager] Bottom Banner displayed ✓');
    } catch (e) {
      console.warn('[AdManager] showBanner error:', e);
    }
  }

  static async hideBanner() {
    if (!this.isCapacitorAvailable()) return;
    try {
      await AdMob.hideBanner();
      this.isBannerShowing = false;
      console.log('[AdManager] Bottom Banner hidden ✓');
    } catch (e) {
      console.warn('[AdManager] hideBanner error:', e);
    }
  }

  /**
   * Shows pre-loaded interstitial ad after every 2 level completions.
   */
  static async showLevelCompleteInterstitial(levelNumber) {
    const saveData = SaveSystem.loadSaveData();

    if (saveData?.isNoAds) {
      console.log('[AdManager] Interstitial skipped: VIP No-Ads Pass Active.');
      return false;
    }

    this.levelCompletionsCount++;
    console.log(`[AdManager] Level completions count: ${this.levelCompletionsCount}`);

    if (this.levelCompletionsCount % AD_CONFIG.adsEveryNLevels !== 0) {
      console.log(`[AdManager] Skipping interstitial (${this.levelCompletionsCount % AD_CONFIG.adsEveryNLevels}/${AD_CONFIG.adsEveryNLevels} until next ad).`);
      return false;
    }

    if (this.isCapacitorAvailable()) {
      try {
        await AdMob.showInterstitial();
        console.log('[AdManager] Interstitial Ad Displayed ✓');
        // Immediately re-prepare next interstitial
        await this.prepareInterstitial();
        return true;
      } catch (e) {
        console.warn('[AdManager] Interstitial display failed (re-preparing):', e);
        await this.prepareInterstitial();
        return false;
      }
    } else {
      console.log('📺 [SIMULATED ADMOB TEST INTERSTITIAL] Ad shown after level completion.');
      return true;
    }
  }

  /**
   * Shows rewarded video ad for 2X Coins, Revive, or Custom Paint/Wheels.
   */
  static async showRewardedAd(onSuccess, onFailure) {
    if (this.isCapacitorAvailable()) {
      let rewardListener = null;
      try {
        if (onSuccess) {
          rewardListener = await AdMob.addListener(RewardAdPluginEvents.Rewarded, (rewardItem) => {
            console.log('[AdManager] Reward video item granted:', rewardItem);
            onSuccess(rewardItem);
            if (rewardListener) rewardListener.remove();
          });
        }

        await AdMob.showRewardVideoAd();
        console.log('[AdManager] Rewarded Video launched ✓');
        // Immediately re-prepare next reward video ad
        await this.prepareRewardedAd();
      } catch (e) {
        console.warn('[AdManager] Rewarded Video failed/cancelled:', e);
        if (rewardListener) rewardListener.remove();
        if (onFailure) onFailure();
        await this.prepareRewardedAd();
      }
    } else {
      console.log('📺 [SIMULATED REWARDED AD] Rewarded Video Completed!');
      if (onSuccess) onSuccess({ type: 'coins', amount: 100 });
    }
  }
}
