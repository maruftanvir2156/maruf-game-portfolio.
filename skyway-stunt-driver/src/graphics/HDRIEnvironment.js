import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { DeviceTier } from './DeviceTier.js';

const BASE = import.meta.env.BASE_URL || './';

export function resolveAssetPath(rawPath) {
  if (!rawPath) return rawPath;
  if (rawPath.startsWith('http://') || rawPath.startsWith('https://') || rawPath.startsWith('data:')) return rawPath;
  const clean = rawPath.startsWith('/') ? rawPath.slice(1) : rawPath;
  const prefix = BASE.endsWith('/') ? BASE : `${BASE}/`;
  return `${prefix}${clean}`;
}

export const ENVIRONMENTS = {
  golden_bay: {
    id: 'golden_bay',
    name: 'Golden Bay Coast',
    file: 'assets/golden_bay.jpg',
    sunColor: 0xffd1a4,
    sunIntensity: 2.2,
    ambientColor: 0xffe4ca,
    fogColor: 0x161b26,
    fogDensity: 0.0055,
    cloudBase: 0x0f172a,
    cloudWave: 0x38bdf8
  },
  rooftop: {
    id: 'rooftop',
    name: 'Metropolis Rooftop',
    file: 'assets/homecoming_center_rooftop.jpg',
    sunColor: 0xffffff,
    sunIntensity: 2.5,
    ambientColor: 0xdbeafe,
    fogColor: 0x161b26,
    fogDensity: 0.0055,
    cloudBase: 0x0f172a,
    cloudWave: 0x60a5fa
  },
  lakeside_sunrise: {
    id: 'lakeside_sunrise',
    name: 'Lakeside Sunrise',
    file: 'assets/lakeside_sunrise.jpg',
    sunColor: 0xffb700,
    sunIntensity: 2.0,
    ambientColor: 0xfed7aa,
    fogColor: 0x221a28,
    fogDensity: 0.0055,
    cloudBase: 0x181222,
    cloudWave: 0xfb923c
  },
  clear_night: {
    id: 'clear_night',
    name: 'Midnight Starlight',
    file: 'assets/rogland_clear_night.jpg',
    sunColor: 0x38bdf8,
    sunIntensity: 0.8,
    ambientColor: 0x0f172a,
    fogColor: 0x090e1a,
    fogDensity: 0.0055,
    cloudBase: 0x020617,
    cloudWave: 0x6366f1
  },
  alpine_hill: {
    id: 'alpine_hill',
    name: 'Alpine Ridge',
    file: 'assets/spaichingen_hill.jpg',
    sunColor: 0xfffaed,
    sunIntensity: 2.4,
    ambientColor: 0xe0f2fe,
    fogColor: 0x141e2e,
    fogDensity: 0.0055,
    cloudBase: 0x0b1322,
    cloudWave: 0x38bdf8
  },
  skyline_sunset: {
    id: 'skyline_sunset',
    name: 'Skyline Sunset',
    file: 'assets/sunset_jhbcentral.jpg',
    sunColor: 0xf97316,
    sunIntensity: 2.1,
    ambientColor: 0xfde047,
    fogColor: 0x24121d,
    fogDensity: 0.0055,
    cloudBase: 0x180c14,
    cloudWave: 0xf43f5e
  },
  venice_twilight: {
    id: 'venice_twilight',
    name: 'Venice Twilight',
    file: 'assets/venice_sunset.jpg',
    sunColor: 0xf43f5e,
    sunIntensity: 1.9,
    ambientColor: 0xfae8ff,
    fogColor: 0x1e1022,
    fogDensity: 0.0055,
    cloudBase: 0x120a16,
    cloudWave: 0xa855f7
  }
};

// Backwards compatibility alias
export const ENVIRONMENT_CONFIGS = ENVIRONMENTS;

export class HDRIEnvironment {
  constructor(scene, renderer = null) {
    this.scene = scene;
    this.renderer = renderer;
    this.currentTheme = 'golden_bay';

    this.sunLight = null;
    this.ambientLight = null;
    this.hemiLight = null;
    this.fillLight = null;

    this.cloudPlaneMesh = null;
    this.cloudMaterial = null;
    this.groundPlaneMesh = null;

    // PMREMGenerator & Environment Caching for Zero-Stall Level Transitions
    this.pmremGenerator = null;
    this._currentEnvMap = null;
    this._textureCache = new Map();
    this._envMapCache = new Map();

    if (this.renderer) {
      this.renderer.setClearColor(0x161b26, 1);
      this.pmremGenerator = new THREE.PMREMGenerator(this.renderer);
      this.pmremGenerator.compileEquirectangularShader();
    }

    this.initLights();
    this.initCloudSeaFloor();
    this.setTheme('golden_bay');
  }

  initLights() {
    this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x1e293b, 1.3);
    this.scene.add(this.hemiLight);

    this.sunLight = new THREE.DirectionalLight(0xfff7ed, 2.5);
    this.sunLight.position.set(50, 90, 50);
    this.sunLight.castShadow = DeviceTier.settings.shadowMapEnabled;
    const shadowRes = DeviceTier.settings.shadowMapSize;
    this.sunLight.shadow.mapSize.width = shadowRes;
    this.sunLight.shadow.mapSize.height = shadowRes;
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 350;
    this.sunLight.shadow.camera.left = -60;
    this.sunLight.shadow.camera.right = 60;
    this.sunLight.shadow.camera.top = 60;
    this.sunLight.shadow.camera.bottom = -60;
    this.sunLight.shadow.bias = -0.0003;
    this.sunLight.shadow.normalBias = 0.03;
    this.scene.add(this.sunLight);

    this.fillLight = new THREE.DirectionalLight(0x38bdf8, 0.9);
    this.fillLight.position.set(-50, 45, -50);
    this.scene.add(this.fillLight);

    // Warm white ambient light at 0.85 intensity for proper GLTF material illumination
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.scene.add(this.ambientLight);
  }

  initCloudSeaFloor() {
    // Procedural infinite atmospheric cloud / sea floor at Y = -60
    const cloudGeo = new THREE.PlaneGeometry(3500, 3500, 40, 40);

    this.cloudMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uColorBase: { value: new THREE.Color(0x0f172a) },
        uColorWave: { value: new THREE.Color(0x38bdf8) },
        uColorFog: { value: new THREE.Color(0x161b26) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        uniform float uTime;

        void main() {
          vUv = uv;
          vec3 pos = position;
          // Rolling atmospheric cloud wave ripples
          float wave = sin(pos.x * 0.006 + uTime * 0.3) * cos(pos.y * 0.006 + uTime * 0.25) * 8.0;
          pos.z += wave;
          vWorldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        uniform float uTime;
        uniform vec3 uColorBase;
        uniform vec3 uColorWave;
        uniform vec3 uColorFog;

        void main() {
          float dist = length(vUv - 0.5) * 2.0;
          float alpha = smoothstep(1.0, 0.15, dist);

          float ripple = sin(vWorldPosition.x * 0.012 + uTime * 0.4) * cos(vWorldPosition.z * 0.012 + uTime * 0.3);
          ripple = ripple * 0.5 + 0.5;

          // Stylized glowing grid coordinates
          vec2 gridUv = fract(vWorldPosition.xz * 0.02);
          float grid = (step(0.97, gridUv.x) + step(0.97, gridUv.y)) * 0.12;

          vec3 col = mix(uColorBase, uColorWave, ripple * 0.5);
          col += uColorWave * grid;
          col = mix(col, uColorFog, clamp((vWorldPosition.y + 70.0) / 30.0, 0.0, 0.6));

          gl_FragColor = vec4(col, alpha * 0.92);
        }
      `
    });

    this.cloudPlaneMesh = new THREE.Mesh(cloudGeo, this.cloudMaterial);
    this.cloudPlaneMesh.rotation.x = -Math.PI / 2;
    this.cloudPlaneMesh.position.set(0, -60.0, 0);
    this.scene.add(this.cloudPlaneMesh);

    // Deep lower bedrock plane at Y = -120 to eliminate pitch black abyss
    const deepGeo = new THREE.PlaneGeometry(5000, 5000);
    const deepMat = new THREE.MeshBasicMaterial({ color: 0x0b0f19 });
    this.groundPlaneMesh = new THREE.Mesh(deepGeo, deepMat);
    this.groundPlaneMesh.rotation.x = -Math.PI / 2;
    this.groundPlaneMesh.position.set(0, -120.0, 0);
    this.scene.add(this.groundPlaneMesh);
  }

  setTheme(themeKey) {
    const config = ENVIRONMENTS[themeKey] || ENVIRONMENTS.golden_bay;

    // Update cloud floor colors
    if (this.cloudMaterial && this.cloudMaterial.uniforms) {
      if (config.cloudBase) this.cloudMaterial.uniforms.uColorBase.value.setHex(config.cloudBase);
      if (config.cloudWave) this.cloudMaterial.uniforms.uColorWave.value.setHex(config.cloudWave);
      if (config.fogColor) this.cloudMaterial.uniforms.uColorFog.value.setHex(config.fogColor);
    }

    if (this.renderer) {
      this.renderer.setClearColor(config.fogColor || 0x161b26, 1);
    }
    this.scene.fog = new THREE.FogExp2(config.fogColor || 0x161b26, config.fogDensity || 0.0055);

    // Fast-path: if already on this theme and environment is active, return in 0ms
    if (this.currentTheme === themeKey && this.scene.background && (this.scene.background.isTexture || this.scene.background.isColor)) {
      if (this.sunLight) {
        this.sunLight.color.setHex(config.sunColor);
        this.sunLight.intensity = config.sunIntensity;
      }
      if (this.ambientLight) {
        this.ambientLight.color.setHex(config.ambientColor);
      }
      return;
    }

    this.currentTheme = themeKey;

    // Fast-path: Instant cache hit for previously loaded themes
    if (this._textureCache.has(config.file)) {
      const cachedTexture = this._textureCache.get(config.file);
      const cachedEnvMap = this._envMapCache.get(config.file);
      this.scene.background = cachedTexture;
      this.scene.environment = cachedEnvMap || cachedTexture;
      this._currentEnvMap = cachedEnvMap;

      if (this.sunLight) {
        this.sunLight.color.setHex(config.sunColor);
        this.sunLight.intensity = config.sunIntensity;
      }
      if (this.ambientLight) {
        this.ambientLight.color.setHex(config.ambientColor);
      }
      console.log(`[HDRIEnvironment] Theme '${config.name}' restored INSTANTLY from cache ✓`);
      return;
    }

    // Set immediate sky background color & fog so screen is NEVER blank white
    const skyColor = new THREE.Color(config.fogColor || 0x161b26);
    this.scene.background = skyColor;

    if (this.sunLight) {
      this.sunLight.color.setHex(config.sunColor);
      this.sunLight.intensity = config.sunIntensity;
    }
    if (this.ambientLight) {
      this.ambientLight.color.setHex(config.ambientColor);
    }

    const envPath = resolveAssetPath(config.file);
    const isHDR = envPath.toLowerCase().endsWith('.hdr');
    console.log(`[HDRIEnvironment] Loading Environment [${config.name}]:`, envPath);

    const onTextureLoaded = (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      if (!isHDR) {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.center.set(0.5, 0.5);
        texture.rotation = 0;
        texture.offset.set(0, 0);
      }

      this.scene.background = texture;
      this._textureCache.set(config.file, texture);

      if (this.renderer) {
        try {
          const tempGenerator = new THREE.PMREMGenerator(this.renderer);
          tempGenerator.compileEquirectangularShader();
          const envMap = tempGenerator.fromEquirectangular(texture).texture;
          this.scene.environment = envMap;
          this._envMapCache.set(config.file, envMap);
          this._currentEnvMap = envMap;
          tempGenerator.dispose();
        } catch (e) {
          console.warn('[HDRIEnvironment] PMREM generation fallback:', e);
          this.scene.environment = texture;
          this._envMapCache.set(config.file, texture);
        }
      } else {
        this.scene.environment = texture;
        this._envMapCache.set(config.file, texture);
      }

      if (this.sunLight) {
        this.sunLight.color.setHex(config.sunColor);
        this.sunLight.intensity = config.sunIntensity;
      }
      if (this.ambientLight) {
        this.ambientLight.color.setHex(config.ambientColor);
      }
      this.scene.fog = new THREE.FogExp2(config.fogColor, config.fogDensity);

      console.log(`✅ 360° Panorama HDRI ACTIVE & CACHED: ${config.name}`);
    };

    const onError = (err) => {
      console.warn(`[HDRIEnvironment] Notice: HDRI image load warning for ${config.file} (using atmospheric fallback):`, err);
    };

    if (isHDR) {
      const rgbeLoader = new RGBELoader();
      rgbeLoader.load(envPath, onTextureLoaded, undefined, onError);
    } else {
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(envPath, onTextureLoaded, undefined, onError);
    }
  }

  updateCityPosition(playerZ, cameraPosition, playerSteerAngle = 0) {
    if (this.cloudPlaneMesh) {
      this.cloudPlaneMesh.position.z = playerZ;
      if (cameraPosition) {
        this.cloudPlaneMesh.position.x = cameraPosition.x;
      }
    }
    if (this.groundPlaneMesh) {
      this.groundPlaneMesh.position.z = playerZ;
      if (cameraPosition) {
        this.groundPlaneMesh.position.x = cameraPosition.x;
      }
    }
    if (this.cloudMaterial && this.cloudMaterial.uniforms?.uTime) {
      this.cloudMaterial.uniforms.uTime.value += 0.016;
    }
  }

  update(dt = 0.016) {
    if (this.cloudMaterial && this.cloudMaterial.uniforms?.uTime) {
      this.cloudMaterial.uniforms.uTime.value += dt;
    }
  }

  updateLightPosition(targetPosition) {
    if (this.sunLight) {
      this.sunLight.position.x = targetPosition.x + 40;
      this.sunLight.position.z = targetPosition.z + 40;
      this.sunLight.target.position.copy(targetPosition);
      this.sunLight.target.updateMatrixWorld();
    }
  }

  dispose() {
    if (this._currentEnvMap) {
      this._currentEnvMap.dispose();
      this._currentEnvMap = null;
    }
    if (this.pmremGenerator) {
      this.pmremGenerator.dispose();
      this.pmremGenerator = null;
    }
  }
}
