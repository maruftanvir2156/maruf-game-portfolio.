import * as THREE from 'three';

/**
 * DEVICE TIER DETECTION & QUALITY MANAGER
 *
 * Guarantees zero visual regression on Desktop while providing
 * optimized mobile tiers (MOBILE_HIGH / MOBILE_LOW) for Android and iOS.
 */
class DeviceTierDetector {
  constructor() {
    this.tier = this._detectTier();
    this.settings = this._getSettingsForTier(this.tier);
    console.log(`[DeviceTier] Active Quality Profile: ${this.tier}`, this.settings);
  }

  _detectTier() {
    // Check URL force override for testing (e.g. ?tier=desktop, ?tier=mobile_high, ?tier=mobile_low)
    if (typeof window !== 'undefined' && window.location) {
      const params = new URLSearchParams(window.location.search);
      const forced = params.get('tier');
      if (forced) {
        const upper = forced.toUpperCase();
        if (['DESKTOP', 'MOBILE_HIGH', 'MOBILE_LOW'].includes(upper)) {
          return upper;
        }
      }
    }

    const ua = (typeof navigator !== 'undefined' ? navigator.userAgent : '') || '';
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(ua);
    const maxTouchPoints = (typeof navigator !== 'undefined' ? navigator.maxTouchPoints : 0) || 0;
    const isTouchDevice = maxTouchPoints > 1;

    // Check Capacitor native environment
    const isCapacitor = typeof window !== 'undefined' && !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());

    const isMobile = isMobileUA || (isTouchDevice && /Macintosh/i.test(ua)) || isCapacitor;

    if (!isMobile) {
      return 'DESKTOP';
    }

    // Hardware capability probing for Mobile
    const cores = (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) || 4;
    const memory = (typeof navigator !== 'undefined' && navigator.deviceMemory) || 4; // in GB

    // GPU Probe via WebGL
    let isHighEndGPU = false;
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          const rendererStr = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '';
          // Check for high-end Adreno 7xx/8xx (Poco F5 / Snapdragon 7+ Gen 2 is Adreno 725), Apple A15+, Mali-G7xx+
          if (/Adreno\s*(?:[7-9]\d\d|6[6-9]\d)|Apple\s*GPU|Mali-G7\d|Mali-G9\d/i.test(rendererStr)) {
            isHighEndGPU = true;
          }
        }
        const maxTexSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
        if (maxTexSize >= 8192) {
          isHighEndGPU = isHighEndGPU || (cores >= 8);
        }
      }
    } catch (e) {
      // Ignore probe error
    }

    if ((cores >= 8 && memory >= 6) || (isHighEndGPU && cores >= 6)) {
      return 'MOBILE_HIGH';
    }

    // Default safe tier for broad Play Store Android compatibility
    return 'MOBILE_LOW';
  }

  _getSettingsForTier(tier) {
    switch (tier) {
      case 'DESKTOP':
        // Exact 1:1 match with original desktop experience (HARD CONSTRAINT)
        return {
          tierName: 'DESKTOP',
          isMobile: false,
          pixelRatioCap: Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2.0),
          shadowMapEnabled: true,
          shadowMapType: THREE.PCFSoftShadowMap,
          shadowMapSize: 2048,
          hdriResolution: '8k',
          antialias: true,
          postProcessingEnabled: true,
          particleBudget: 1.0,
          frustumCullingMode: 'standard',
          dracoEnabled: true
        };

      case 'MOBILE_HIGH':
        return {
          tierName: 'MOBILE_HIGH',
          isMobile: true,
          pixelRatioCap: Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 1.25),
          shadowMapEnabled: true,
          shadowMapType: THREE.PCFShadowMap,
          shadowMapSize: 512,
          hdriResolution: '2k',
          antialias: true,
          postProcessingEnabled: true,
          particleBudget: 0.75,
          frustumCullingMode: 'optimized',
          dracoEnabled: true
        };

      case 'MOBILE_LOW':
      default:
        return {
          tierName: 'MOBILE_LOW',
          isMobile: true,
          pixelRatioCap: 1.0,
          shadowMapEnabled: false,
          shadowMapType: THREE.BasicShadowMap,
          shadowMapSize: 512,
          hdriResolution: '2k',
          antialias: false,
          postProcessingEnabled: false,
          particleBudget: 0.5,
          frustumCullingMode: 'optimized',
          dracoEnabled: true
        };
    }
  }

  isMobile() {
    return this.settings.isMobile;
  }

  isDesktop() {
    return !this.settings.isMobile;
  }
}

export const DeviceTier = new DeviceTierDetector();
