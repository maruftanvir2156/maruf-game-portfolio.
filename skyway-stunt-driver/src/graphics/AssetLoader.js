import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';

import { VEHICLE_CATALOG } from '../game/VehicleDatabase.js';

// ─── CAR MANIFEST (Original IP Database) ───
export const CAR_MANIFEST = VEHICLE_CATALOG;

// ─── LEGACY SKYBOX MANIFEST GUARD ───
export const SKYBOX_MANIFEST = {};

// ─── TRACK PIECES MANIFEST (Section 1B) ───
const TRACK_MANIFEST = {
  round_ramp:          { path: '/assets/round_ramp.glb' },
  state_parkour_ramp:  { path: '/assets/state_parkour_ramp.glb' },
  gt_stunt_track:      { path: '/assets/gt_stunt_track.glb' },
  lowpoly_track:       { path: '/assets/lowpoly_track.glb' },
  ramp_lowpoly:        { path: '/assets/ramp_lowpoly.glb' },
  hill_obstacle:       { path: '/assets/hill_obstacle.glb' }
};

// ─── OBSTACLES & HAZARDS MANIFEST (Stage A) ───
const OBSTACLE_MANIFEST = {
  // Impact hazards
  spikeball:            { path: '/assets/spikeball.glb' },
  spike_trap:           { path: '/assets/spike_trap.glb' },
  jagged_rock_cluster:  { path: '/assets/jagged_rock_cluster.glb' },
  explosive_barrel:     { path: '/assets/explosive_barrel.glb' },

  // Moving/timed hazards
  thorny_pendulum:      { path: '/assets/thorny_pendulum.glb' },
  wrecking_ball:        { path: '/assets/wrecking_ball.glb' },
  crusher_portal:       { path: '/assets/crusher_portal.glb' },
  saw_blade:            { path: '/assets/saw_blade.glb' },

  // Rolling/chasing hazards
  boulder:              { path: '/assets/boulder.glb' },
  barrel_roll:          { path: '/assets/barrel_roll.glb' },
  offroad_wheel:        { path: '/assets/offroad_wheel.glb' },

  // Environmental/set-dressing props & hazards
  ice_spikes:           { path: '/assets/ice_spikes.glb' },
  stack_crates:         { path: '/assets/stack_crates.glb' },

  // Retained legacy / custom hazards
  spiked_blades:        { path: '/assets/spiked_blades.glb' },
  cat_paw:              { path: '/assets/cat_paw.glb' },
  pivot_push:           { path: '/assets/pivot_push.glb' },
  cylinder_obstacle:    { path: '/assets/cylinder_obstacle.glb' }
};

// ─── COLLECTIBLES & BONUS MANIFEST (Stage A) ───
const COLLECTIBLE_MANIFEST = {
  gold_coin:            { path: '/assets/gold_coin.glb' },
  green_gem:            { path: '/assets/green_gem.glb' },
  red_gem:              { path: '/assets/red_gem.glb' },
  purple_gem:           { path: '/assets/purple_gem.glb' },
  mystery_box:          { path: '/assets/mystery_box.glb' }
};

// ─── TRACK FEATURE PROPS MANIFEST ───
const PROP_MANIFEST = {
  speed_boost_ramp:     { path: '/assets/speed_boost_ramp.glb' }
};

// ─── 3D CITY ENVIRONMENT MANIFEST (Section 1D & Section 5) ───
const CITY_MANIFEST = {
  ccity_buildings:        { path: '/assets/ccity_buildings.glb' },
  chicken_gun_skyscraper: { path: '/assets/chicken_gun_skyscraper.glb' },
  environment_hongkong:   { path: '/assets/environment_hongkong.glb' },
  environment_station:    { path: '/assets/environment_station.glb' }
};

// ─── BARRIERS MANIFEST ───
const BARRIER_MANIFEST = {
  barrier:           { path: '/assets/barrier.glb' },
  concrete:          { path: '/assets/concrete_barrier.glb' },
  concrete_02:       { path: '/assets/concrete_barrier_02.glb' },
  traffic_barrel:    { path: '/assets/traffic_barrel.glb' },
  barrier_vertical:  { path: '/assets/barrier_vertical.glb' }
};

function fixPath(path) {
  if (!path) return path;
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  // Strip leading slash for relative bundle loading on iOS Capacitor
  return path.startsWith('/') ? path.substring(1) : path;
}

// ─── ASSET LOADER SINGLETON ───
class AssetLoaderClass {
  constructor() {
    this.gltfLoader = new GLTFLoader();

    try {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
      this.gltfLoader.setDRACOLoader(dracoLoader);
    } catch (e) {
      console.warn('[AssetLoader] Draco decoder fallback active');
    }

    this.cache = new Map();
    this.progress = { loaded: 0, total: 0, percent: 0 };
    this.onProgress = null;
    this.ready = false;
  }

  async loadGLB(key, rawPath) {
    const path = fixPath(rawPath);
    if (this.cache.has(key)) return this.cache.get(key);

    const isCar = key.startsWith('car_');
    const carName = isCar ? (CAR_MANIFEST[key.replace('car_', '')]?.name || key) : key;

    return new Promise((resolve) => {
      let settled = false;

      const done = (result, isError = false) => {
        if (settled) return;
        settled = true;
        clearTimeout(assetTimer);
        this.cache.set(key, result);
        this._incrementProgress(key, isError);
        resolve(result);
      };

      try {
        if (isCar) {
          console.log("Attempting to load vehicle:", carName, "at path:", path);
        }
        this.gltfLoader.load(
          path,
          (gltf) => {
            const scene = gltf.scene;
            scene.traverse((child) => {
              if (child.isMesh) {
                // Fallback for unsupported KHR specular materials to standard PBR
                if (!child.material || child.material.type === 'MeshBasicMaterial') {
                  child.material = new THREE.MeshStandardMaterial({
                    color: (child.material && child.material.color) ? child.material.color : 0xcccccc,
                    roughness: 0.3,
                    metalness: 0.8
                  });
                }

                // Proper material and trilinear mipmap setup (eliminates moiré and grid artifacts)
                if (child.material) {
                  const materials = Array.isArray(child.material) ? child.material : [child.material];
                  materials.forEach(mat => {
                    mat.envMapIntensity = 1.0;
                    ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'aoMap', 'emissiveMap', 'envMap'].forEach(texKey => {
                      if (mat[texKey] && mat[texKey].isTexture) {
                        mat[texKey].generateMipmaps = true;
                        mat[texKey].minFilter = THREE.LinearMipmapLinearFilter;
                        mat[texKey].magFilter = THREE.LinearFilter;
                        mat[texKey].needsUpdate = true;
                      }
                    });
                  });
                }

                child.castShadow = true;
                child.receiveShadow = true;
              }
            });
            done(scene, false);
          },
          undefined,
          (error) => {
            console.warn(`[AssetLoader] Non-fatal load warning for ${key} at ${path}:`, error);
            const fallback = this._generateFallback(key);
            done(fallback, true);
          }
        );
      } catch (e) {
        console.warn(`[AssetLoader] Exception loading ${key} at ${path}:`, e);
        const fallback = this._generateFallback(key);
        done(fallback, true);
      }
    });
  }

  _incrementProgress(key = '', isError = false) {
    this.progress.loaded++;
    this.progress.percent = Math.min(100, Math.floor((this.progress.loaded / Math.max(1, this.progress.total)) * 100));
    const statusMsg = isError ? `Skipped ${key}` : `Loaded ${key}`;
    if (this.onProgress) {
      try {
        this.onProgress(this.progress.percent, statusMsg);
      } catch (e) {}
    }
  }

  async loadAll(progressCallback) {
    this.onProgress = progressCallback ?? null;

    // Preload ALL 6 vehicles, track pieces & collectibles for instant garage & gameplay switching
    const essentialItems = [
      ...Object.entries(CAR_MANIFEST).map(([k, v]) => [`car_${k}`, v.path]),
      ...Object.entries(TRACK_MANIFEST).map(([k, v]) => [`track_${k}`, v.path]),
      ...Object.entries(COLLECTIBLE_MANIFEST).map(([k, v]) => [`coll_${k}`, v.path])
    ].filter(([_, path]) => !!path);

    this.progress.total = essentialItems.length;
    this.progress.loaded = 0;

    await Promise.allSettled(
      essentialItems.map(([key, path]) => this.loadGLB(key, path))
    );

    this.ready = true;
    if (this.onProgress) {
      try { this.onProgress(100, 'Complete'); } catch (e) {}
    }
    console.log('[AssetLoader] Asset pipeline complete ✓ (All 6 Vehicles & Props Loaded)');
  }

  async getCarModelAsync(key) {
    const cacheKey = `car_${key}`;
    let cached = this.cache.get(cacheKey);
    if (!cached) {
      const manifest = CAR_MANIFEST[key];
      if (manifest?.path) {
        cached = await this.loadGLB(cacheKey, manifest.path);
      }
    }
    if (cached && cached.children && cached.children.length > 0) {
      return SkeletonUtils.clone(cached);
    }
    return this._generateFallback(cacheKey);
  }

  getCarModel(key) {
    const cacheKey = `car_${key}`;
    const cached = this.cache.get(cacheKey);
    if (cached && cached.children && cached.children.length > 0) {
      const clone = SkeletonUtils.clone(cached);
      // Deep clone materials so disposing or modifying the active vehicle mesh NEVER corrupts the base model in cache
      clone.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material = Array.isArray(child.material)
            ? child.material.map(m => m.clone())
            : child.material.clone();
        }
      });
      return clone;
    }
    const manifest = CAR_MANIFEST[key];
    if (manifest?.path) {
      this.loadGLB(cacheKey, manifest.path);
    }
    return this._generateFallback(cacheKey);
  }

  getTrackModel(key) {
    const cacheKey = `track_${key}`;
    const cached = this.cache.get(cacheKey);
    if (cached) return SkeletonUtils.clone(cached);
    const manifest = TRACK_MANIFEST[key];
    if (manifest?.path) {
      this.loadGLB(cacheKey, manifest.path);
    }
    return this._generateFallback(cacheKey);
  }

  getObstacleModel(key) {
    const cacheKey = `obs_${key}`;
    const cached = this.cache.get(cacheKey);
    if (cached) return SkeletonUtils.clone(cached);
    const manifest = OBSTACLE_MANIFEST[key];
    if (manifest?.path) {
      this.loadGLB(cacheKey, manifest.path);
    }
    return this._generateFallback(cacheKey);
  }

  getCollectibleModel(key) {
    const cacheKey = `coll_${key}`;
    const cached = this.cache.get(cacheKey);
    if (cached) return SkeletonUtils.clone(cached);
    const manifest = COLLECTIBLE_MANIFEST[key];
    if (manifest?.path) {
      this.loadGLB(cacheKey, manifest.path);
    }
    return this._generateFallback(cacheKey);
  }

  getPropModel(key) {
    const cacheKey = `prop_${key}`;
    const cached = this.cache.get(cacheKey);
    if (cached) return SkeletonUtils.clone(cached);
    const manifest = PROP_MANIFEST[key];
    if (manifest?.path) {
      this.loadGLB(cacheKey, manifest.path);
    }
    return this._generateFallback(cacheKey);
  }

  getCityModel(key) {
    const cacheKey = `city_${key}`;
    const cached = this.cache.get(cacheKey);
    if (cached) return SkeletonUtils.clone(cached);
    const manifest = CITY_MANIFEST[key];
    if (manifest?.path) {
      this.loadGLB(cacheKey, manifest.path);
    }
    return this._generateFallback(cacheKey);
  }

  getBarrierModel(key) {
    const cacheKey = `barrier_${key}`;
    const cached = this.cache.get(cacheKey);
    if (cached) return SkeletonUtils.clone(cached);
    const manifest = BARRIER_MANIFEST[key];
    if (manifest?.path) {
      this.loadGLB(cacheKey, manifest.path);
    }
    return this._generateFallback(cacheKey);
  }

  normalizeModel(gltfModel, targetSize = 4.0, offsetY = 0, rotationY = 0) {
    return normalizeModel(gltfModel, targetSize, offsetY, rotationY);
  }

  /**
   * Explicitly unload a car model from the GPU cache to free VRAM.
   * Call when switching vehicles in garage or exiting to main menu.
   */
  unloadCarModel(key) {
    const cacheKey = `car_${key}`;
    const cached = this.cache.get(cacheKey);
    if (cached) {
      disposeObject(cached);
      this.cache.delete(cacheKey);
      console.log(`[AssetLoader] Unloaded car model from VRAM: ${key}`);
    }
  }

  /**
   * Dispose all cached models to free GPU memory.
   * Call on full scene teardown or context loss recovery.
   */
  disposeAll() {
    this.cache.forEach((model, key) => {
      disposeObject(model);
    });
    this.cache.clear();
    console.log('[AssetLoader] All cached models disposed ✓');
  }

  _generateFallback(key) {
    // Return empty container group so missing GLBs do not clutter the 3D scene with debug boxes
    return new THREE.Group();
  }
}

export function normalizeModel(gltfModel, targetSize = 4.0, offsetY = 0, rotationY = 0) {
  if (!gltfModel) return gltfModel;

  // Reset transforms and apply rotation first
  gltfModel.scale.set(1, 1, 1);
  gltfModel.position.set(0, 0, 0);
  gltfModel.rotation.set(0, rotationY, 0);
  gltfModel.updateMatrixWorld(true);

  // Compute unscaled bounding box
  const rawBox = new THREE.Box3().setFromObject(gltfModel);
  const rawSize = rawBox.getSize(new THREE.Vector3());

  // Rescale model uniformly first
  const maxDim = Math.max(rawSize.x, rawSize.y, rawSize.z);
  let scale = 1.0;
  if (maxDim > 0) {
    scale = targetSize / maxDim;
    gltfModel.scale.set(scale, scale, scale);
    gltfModel.updateMatrixWorld(true);
  }

  // Calculate exact Box3 bounds after scaling
  const scaledBox = new THREE.Box3().setFromObject(gltfModel);
  const scaledCenter = scaledBox.getCenter(new THREE.Vector3());

  // Offset child model mesh downward by -scaledBox.min.y so bottom edge of tire treads touches surface at y = 0
  gltfModel.position.x = -scaledCenter.x;
  gltfModel.position.y = -scaledBox.min.y + offsetY;
  gltfModel.position.z = -scaledCenter.z;

  return gltfModel;
}

export function disposeMaterial(mat) {
  if (!mat) return;
  Object.keys(mat).forEach((prop) => {
    if (mat[prop] && mat[prop].isTexture && typeof mat[prop].dispose === 'function') {
      mat[prop].dispose();
    }
  });
  if (typeof mat.dispose === 'function') mat.dispose();
}

export function disposeHierarchy(obj) {
  if (!obj) return;
  obj.traverse((child) => {
    if (child.geometry && typeof child.geometry.dispose === 'function') {
      child.geometry.dispose();
    }
    if (child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach((m) => disposeMaterial(m));
      } else {
        disposeMaterial(child.material);
      }
    }
  });
  if (obj.parent) obj.parent.remove(obj);
}

export const disposeObject = disposeHierarchy;

export const AssetLoader = new AssetLoaderClass();
export { TRACK_MANIFEST, OBSTACLE_MANIFEST, COLLECTIBLE_MANIFEST, PROP_MANIFEST, CITY_MANIFEST, BARRIER_MANIFEST };
