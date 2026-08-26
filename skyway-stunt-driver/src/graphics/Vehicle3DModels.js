import * as THREE from 'three';
import { AssetLoader, CAR_MANIFEST } from './AssetLoader.js';

export class Vehicle3DModels {
  /**
   * Create a vehicle mesh from a loaded GLB asset.
   * Performs an audit on frustum culling, visibility, bounding boxes,
   * and tire contact normalization (y = -0.9).
   */
  static createVehicleMesh(vehicleKey) {
    const manifest = CAR_MANIFEST[vehicleKey];

    if (!manifest) {
      console.error(`[Vehicle3DModels] Missing manifest for vehicle key: ${vehicleKey}`);
      return this._createFallbackCar();
    }

    try {
      if (!manifest.path) {
        throw new Error(`Path not defined for vehicle key ${vehicleKey}`);
      }
      const model = AssetLoader.getCarModel(vehicleKey);
      if (!model || model.children.length === 0) {
        throw new Error(`Failed to load GLB model at path: ${manifest.path}`);
      }

      const rotY = manifest.rotationY !== undefined ? manifest.rotationY : 0;
      AssetLoader.normalizeModel(model, 4.2, 0, rotY);

      // Snap tire bottoms to chassis zero (y = 0)
      const box = new THREE.Box3().setFromObject(model);
      model.position.y = -box.min.y;

      // ── STAGE 4: VEHICLE BOUNDING VOLUMES & SCOPED CULLING ──
      model.traverse((child) => {
        if (child.isMesh) {
          if (child.geometry) {
            child.geometry.computeBoundingBox();
            child.geometry.computeBoundingSphere();
          }

          // Keep culling enabled on regular detail submeshes for mobile draw call savings;
          // only bypass culling if bounding sphere is degenerate or on primary chassis mesh.
          const isChassis = !child.name || /(body|chassis|car|main|hull)/i.test(child.name);
          child.frustumCulled = isChassis ? false : true;

          child.visible = true;
          child.castShadow = true;
          child.receiveShadow = false; // Disables self-shadowing acne on vehicle geometry

          // Hide any unstyled nitro/flame/spike/exhaust placeholder meshes attached to GLB models
          const meshName = (child.name || '').toLowerCase();
          const matName = (child.material?.name || '').toLowerCase();
          if (
            meshName.includes('spike') ||
            meshName.includes('flame') ||
            meshName.includes('placeholder') ||
            meshName.includes('exhaust_fire') ||
            meshName.includes('nitro_effect') ||
            meshName.includes('headlight_mesh') ||
            matName.includes('placeholder')
          ) {
            child.visible = false;
            if (child.material) {
              child.material.transparent = true;
              child.material.opacity = 0;
            }
          }
        }
      });
      model.visible = true;

      return model;
    } catch (e) {
      console.error(`[Vehicle3DModels] Error loading vehicle ${vehicleKey} (path: ${manifest.path}):`, e);
      return this._createFallbackCar();
    }
  }

  static createVehicleMeshFromModel(vehicleKey, rawModel) {
    const manifest = CAR_MANIFEST[vehicleKey];
    if (!manifest || !rawModel || !rawModel.children || rawModel.children.length === 0) {
      console.warn(`[Vehicle3DModels] Invalid raw model for vehicle ${vehicleKey}`);
      return this._createFallbackCar();
    }

    // 1. Reset transforms
    rawModel.scale.set(1, 1, 1);
    rawModel.position.set(0, 0, 0);
    const rotY = manifest.rotationY !== undefined ? manifest.rotationY : 0;
    rawModel.rotation.set(0, rotY, 0);
    rawModel.updateMatrixWorld(true);

    // 2. Perform sub-mesh shadow and placeholder cleanup
    rawModel.traverse((child) => {
      if (child.isMesh) {
        child.frustumCulled = false;
        child.visible = true;
        child.castShadow = true;
        child.receiveShadow = false;

        const meshName = (child.name || '').toLowerCase();
        const matName = (child.material?.name || '').toLowerCase();
        if (
          meshName.includes('spike') ||
          meshName.includes('flame') ||
          meshName.includes('placeholder') ||
          meshName.includes('exhaust_fire') ||
          meshName.includes('nitro_effect') ||
          meshName.includes('headlight_mesh') ||
          matName.includes('placeholder')
        ) {
          child.visible = false;
          if (child.material) {
            child.material.transparent = true;
            child.material.opacity = 0;
          }
        }

        if (child.geometry) {
          child.geometry.computeBoundingBox();
          child.geometry.computeBoundingSphere();
        }
      }
    });

    // 3. Compute unscaled bounding box and apply uniform scale to 4.2 meters ONCE
    const rawBox = new THREE.Box3().setFromObject(rawModel);
    const rawSize = rawBox.getSize(new THREE.Vector3());
    const maxDim = Math.max(rawSize.x, rawSize.y, rawSize.z);

    let scale = 1.0;
    if (maxDim > 0 && isFinite(maxDim)) {
      scale = 4.2 / maxDim;
    }
    rawModel.scale.set(scale, scale, scale);
    rawModel.updateMatrixWorld(true);

    // 4. Center model horizontally (-center.x, -center.z) and set bottom edge of tire treads at y = 0
    const scaledBox = new THREE.Box3().setFromObject(rawModel);
    const scaledCenter = scaledBox.getCenter(new THREE.Vector3());

    rawModel.position.x = -scaledCenter.x;
    rawModel.position.y = -scaledBox.min.y;
    rawModel.position.z = -scaledCenter.z;
    rawModel.updateMatrixWorld(true);

    rawModel.visible = true;
    console.log(`[Vehicle3DModels] Prepped mesh for ${vehicleKey}: maxDim=${maxDim.toFixed(2)}, scale=${scale.toFixed(4)}, min.y=${scaledBox.min.y.toFixed(2)}`);
    return rawModel;
  }

  /**
   * Dynamically customizes the paint color of a 3D vehicle model without overwriting glass, interior or tire materials.
   */
  static setVehiclePaint(vehicleModel, hexColor) {
    if (!vehicleModel) return;
    vehicleModel.traverse((child) => {
      if (child.isMesh && child.material) {
        const name = child.material.name ? child.material.name.toLowerCase() : '';
        const isExcluded = name.includes('glass') || name.includes('window') || name.includes('tire') || name.includes('wheel') || name.includes('interior') || name.includes('light');
        if (!isExcluded && (name.includes('body') || name.includes('paint') || name.includes('carpaint') || name.includes('coloured'))) {
          child.material.color.setStyle(hexColor);
          child.material.needsUpdate = true;
        }
      }
    });
  }

  static getVehicleKeys() {
    return Object.keys(CAR_MANIFEST);
  }

  static getProfile(vehicleKey) {
    const m = CAR_MANIFEST[vehicleKey];
    if (!m) return null;

    return {
      id: vehicleKey,
      name: m.name,
      manufacturer: m.manufacturer,
      className: m.className,
      tag: m.tag || m.className || 'STREET',
      tier: m.tier,
      description: m.description,
      radius: 0.9,
      mass: 10.0,
      topSpeed: m.topSpeed,
      nitroSpeed: m.nitroSpeed,
      acceleration: m.acceleration,
      braking: m.braking,
      handling: m.handling,
      centerOfMassY: -0.4,
      jumpStability: 0.95,
      bounce: 0.15,
      liquidWobble: 0.0,
      statSpeed: m.statSpeed,
      statHandling: m.statHandling,
      statStability: m.statStability,
      primaryColor: m.primaryColor
    };
  }

  static getVehicleMesh(vehicleKey) {
    return this.createVehicleMesh(vehicleKey);
  }

  static _createFallbackCar(vehicleKey) {
    // Return empty group — real GLB assets must always be loaded and rendered
    return new THREE.Group();
  }
}
