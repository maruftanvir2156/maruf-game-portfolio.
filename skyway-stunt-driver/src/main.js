import * as THREE from 'three';
import { AssetLoader, disposeObject, disposeHierarchy, disposeMaterial } from './graphics/AssetLoader.js';
import { SpherePhysicsEngine } from './physics/SpherePhysicsEngine.js';
import { Vehicle3DModels } from './graphics/Vehicle3DModels.js';
import { HDRIEnvironment } from './graphics/HDRIEnvironment.js';
import { TrackBuilder } from './graphics/TrackBuilder.js';
import { HazardManager } from './entities/Hazards.js';
import { ParticleFXEngine } from './graphics/ParticleFXEngine.js';
import { CinemachineCamera } from './camera/CinemachineCamera.js';
import { GarageShowcase } from './graphics/GarageShowcase.js';
import { InputManager } from './input/InputManager.js';
import { UIManager } from './ui/UIManager.js';
import { sfx } from './audio/SoundEffects.js';
import { SaveSystem } from './game/SaveSystem.js';
import { PostProcessingManager } from './graphics/PostProcessingManager.js';
import { AdManager } from './ads/AdManager.js';
import { DeviceTier } from './graphics/DeviceTier.js';
import { PerfMonitor } from './graphics/PerfMonitor.js';

class SkywayGameEngine {
  constructor() {
    // Clear broken cached car states
    const SAVED_VERSION = 'v2_locked_economy';
    if (localStorage.getItem('game_version') !== SAVED_VERSION) {
      localStorage.removeItem('unlocked_cars');
      localStorage.removeItem('unlockedCars');
      localStorage.removeItem('skyway_driver_save');
      localStorage.setItem('unlockedCars', JSON.stringify(['nissan_s15']));
      localStorage.setItem('game_version', SAVED_VERSION);
    }

    this.canvas = document.getElementById('game-canvas');
    this.deviceTier = DeviceTier;

    // 1. Three.js Tier-Driven Renderer Setup (Desktop: 1:1 original, Mobile: Tier-optimized)
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000);

    const tierSettings = DeviceTier.settings;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: tierSettings.antialias,
      powerPreference: 'high-performance',
      alpha: false
    });
    this.renderer.setPixelRatio(tierSettings.pixelRatioCap);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.renderer.shadowMap.enabled = tierSettings.shadowMapEnabled;
    this.renderer.shadowMap.type = tierSettings.shadowMapType;
    this._lastRenderError = 0;

    // Stage 0: Performance & Instrumentation Monitor
    this.perfMonitor = new PerfMonitor(this.renderer, DeviceTier);

    // 2. Visual Vehicle Container & 3D Pedestal
    this.vehicleGroup = new THREE.Group();
    this.scene.add(this.vehicleGroup);
    this.currentMesh = null;
    this.selectedVehicleKey = 'nissan_s15';

    // 3. Systems Initializers
    this.environment = new HDRIEnvironment(this.scene, this.renderer);
    this.trackBuilder = new TrackBuilder(this.scene);
    this.hazards = new HazardManager(this.scene);
    this.particles = new ParticleFXEngine(this.scene);
    this.physics = new SpherePhysicsEngine();
    this.cinemachine = new CinemachineCamera(this.camera);
    this.postProcessing = new PostProcessingManager(this.renderer, this.scene, this.camera);
    this.garageShowcase = new GarageShowcase(this.scene, this.camera, this.canvas);
    this.input = new InputManager();
    this.ui = new UIManager(this);

    // 4. Game State Vars
    this.gameState = 'LOADING'; // LOADING | MENU_SHOWCASE | PLAYING | FREE_FALL | VICTORY | FAIL
    this.currentLevel = 1;
    this.runTime = 0;
    this.cashCollected = 0;
    this.nitroFuel = 1.0;
    this.fallTimer = 0;
    this.clock = new THREE.Clock();

    // Feedback & Engagement State (Near-miss time dilation, Combo, Milestones, Airtime)
    this.timeScale = 1.0;
    this.comboCount = 0;
    this.comboMultiplier = 1;
    this.lastCollectTime = 0;
    this.milestonesFired = new Set();
    this.airtimeTimer = 0;
    this.wasAirborneFromLaunch = false;

    window.addEventListener('resize', () => this.onWindowResize());

    // Global Debug Hook (Step 3 Requirement)
    window.debugSkybox = () => {
      console.log("Current Skybox Mesh in Scene:", this.environment?.skyboxMesh);
      console.log("Active Theme:", this.environment?.currentTheme);
    };

    // WebGL Context Lost & Restored Protection (Stage F)
    if (this.canvas) {
      this.canvas.addEventListener('webglcontextlost', (event) => {
        event.preventDefault();
        console.warn('[WebGL] Context lost! Recovering gracefully...');
      }, false);

      this.canvas.addEventListener('webglcontextrestored', () => {
        console.log('[WebGL] Context restored. Re-initializing renderer.');
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      }, false);
    }

    // Screen Orientation API Landscape Lock (Stage F)
    try {
      if (window.screen?.orientation?.lock) {
        window.screen.orientation.lock('landscape').catch(() => {});
      }
    } catch (e) {}

    // Boot Asset Pipeline
    this.bootAsync();
  }

  async bootAsync() {
    let started = false;

    const forceStart = () => {
      if (started) return;
      started = true;
      console.warn('[System] Bypassing loading screen and starting UI menu...');
      this.gameState = 'MENU_SHOWCASE';
      try {
        this.updateShowcaseVehicle(this.selectedVehicleKey);
      } catch (e) {
        console.error("Non-fatal startup error in vehicle setup:", e);
      }
      if (this.ui?.hideLoadingScreen) {
        this.ui.hideLoadingScreen();
      }
      if (this.ui?.showScreen) {
        this.ui.showScreen('main-menu');
      }
      this.animate();
    };

    // Hard 2-second timeout guarantee
    const loadingTimeout = setTimeout(forceStart, 2000);

    try {
      console.log('[SkywayGameEngine] Booting Asset Pipeline...');

      // Decoupled, non-blocking background AdMob initialization
      AdManager.initialize().catch(e => console.warn('[AdManager] Background init notice:', e));

      await AssetLoader.loadAll((percent, status) => {
        if (this.ui?.updateLoadingProgress) {
          this.ui.updateLoadingProgress(percent, status);
        }
      });

      clearTimeout(loadingTimeout);
      forceStart();
    } catch (err) {
      console.error('[Init Error]:', err);
      clearTimeout(loadingTimeout);
      forceStart();
    }
  }

  updateShowcaseVehicle(vehicleKey) {
    if (!this.scene || !this.vehicleGroup) return;

    this.selectedVehicleKey = vehicleKey;
    SaveSystem.saveGameData({ selectedVehicleKey: vehicleKey });
    if (this.physics?.setProfile) {
      this.physics.setProfile(vehicleKey);
    }

    if (this.garageShowcase) {
      this.garageShowcase.selectVehicle(vehicleKey);
    }

    // Attach gameplay vehicle mesh to this.vehicleGroup
    if (this.currentMesh) {
      this.vehicleGroup.remove(this.currentMesh);
      disposeObject(this.currentMesh);
      this.currentMesh = null;
    }

    this.currentMesh = Vehicle3DModels.createVehicleMesh(vehicleKey);
    if (this.currentMesh) {
      this.currentMesh.visible = true;

      // Apply dynamic bounding box grounding to active gameplay mesh
      const box = new THREE.Box3().setFromObject(this.currentMesh);
      this.currentMesh.position.y = -box.min.y;

      this.vehicleGroup.add(this.currentMesh);
    }
    if (this.gameState === 'MENU_SHOWCASE' || this.gameState === 'LOADING') {
      this.vehicleGroup.visible = false; // Hide gameplay physics car while in menu showcase
      if (this.physics?.reset) this.physics.reset(new THREE.Vector3(0, 1.5, 0));
      if (this.cinemachine?.reset && this.physics?.position) this.cinemachine.reset(this.physics.position);
      if (this.environment?.setTheme) this.environment.setTheme('golden_bay');
    } else {
      this.vehicleGroup.visible = true;
    }
    this.vehicleGroup.scale.set(1, 1, 1);
    this._impactExplosionFired = false;
  }

  purgeLevelVRAM() {
    if (this.trackBuilder) this.trackBuilder.clear();
    if (this.hazards) this.hazards.clear();
    if (this.particles) this.particles.clear();
    if (this.renderer && this.renderer.renderLists) {
      this.renderer.renderLists.dispose();
    }
  }

  disposeMatTextures(mat) {
    if (!mat) return;
    Object.keys(mat).forEach((key) => {
      const val = mat[key];
      if (val && typeof val === 'object' && val.isTexture && typeof val.dispose === 'function') {
        val.dispose();
      }
    });
    if (typeof mat.dispose === 'function') mat.dispose();
  }

  startRun(vehicleKey, levelNumber, envKey = 'golden_bay') {
    const t0 = performance.now();
    console.log(`[startRun] ▶ Initiating transition to Level ${levelNumber} (${envKey})...`);

    // 1. Set LOADING state during transition so render loop does NOT draw an empty scene
    this.gameState = 'LOADING';

    // Show clean transition spinner / overlay
    if (this.ui?.showLoadingTransition) {
      this.ui.showLoadingTransition();
    }

    try {
      const t1 = performance.now();
      // Step 1: Purge previous level resources
      this.purgeLevelVRAM();
      if (this.garageShowcase) {
        this.garageShowcase.setVisible(false);
        this.garageShowcase.update(0, false);
      }
      const t2 = performance.now();
      console.log(`[startRun] Step 1 (Purge & Showcase Hide): ${(t2 - t1).toFixed(1)}ms`);

      // Step 2: Ensure Groups are attached and build new level track
      const trackGroup = this.trackBuilder ? (this.trackBuilder.trackGroup || this.trackBuilder.group) : null;
      if (trackGroup && !this.scene.children.includes(trackGroup)) {
        this.scene.add(trackGroup);
      }
      if (this.vehicleGroup && !this.scene.children.includes(this.vehicleGroup)) {
        this.scene.add(this.vehicleGroup);
      }

      this.selectedVehicleKey = vehicleKey || 'nissan_s15';
      this.currentLevel = levelNumber;
      this.currentEnvKey = envKey;
      this.runTime = 0;
      this.cashCollected = 0;
      this.nitroFuel = 1.0;
      this.fallTimer = 0;
      this._levelCoinsAwarded = false;
      this.timeScale = 1.0;
      this.comboCount = 0;
      this.comboMultiplier = 1;
      this.lastCollectTime = 0;
      this.milestonesFired.clear();
      this.airtimeTimer = 0;
      this.wasAirborneFromLaunch = false;

      this.trackBuilder.buildLevel(levelNumber);
      const colliderCount = this.trackBuilder.colliders ? this.trackBuilder.colliders.length : 0;
      const t3 = performance.now();
      console.log(`[startRun] Step 2 (Track Build): ${(t3 - t2).toFixed(1)}ms | Colliders: ${colliderCount}`);

      if (colliderCount === 0) {
        console.error(`[startRun] Fatal: Level ${levelNumber} generated 0 colliders! Aborting run.`);
        if (this.ui?.showToast) this.ui.showToast('⚠️ Track generation error! Returning to menu...', 'boost');
        if (this.ui?.showScreen) this.ui.showScreen('level-select');
        return;
      }

      // Step 3: Spawn Hazards & Environment Theme
      this.hazards.spawnLevelHazards(levelNumber, this.trackBuilder);
      const activeEnv = localStorage.getItem('selectedEnvironment') || envKey || 'golden_bay';
      this.environment.setTheme(activeEnv);
      const t4 = performance.now();
      console.log(`[startRun] Step 3 (Environment & Hazards): ${(t4 - t3).toFixed(1)}ms | Theme: ${activeEnv}`);

      // Step 4: Vehicle Placement & Physics Reset
      this.vehicleGroup.clear();
      const carMesh = Vehicle3DModels.createVehicleMesh(this.selectedVehicleKey);
      if (carMesh) {
        this.currentMesh = carMesh;
        this.vehicleGroup.add(carMesh);
        this.vehicleGroup.visible = true;
      }

      const startPos = this.trackBuilder.getStartPoint();
      this.physics.reset(startPos);
      this.physics.position.set(startPos.x, startPos.y, startPos.z);
      this.physics.velocity.set(0, 0, 0);
      if (this.physics.angularVelocity) this.physics.angularVelocity.set(0, 0, 0);
      this.physics.quaternion.set(0, 0, 0, 1);
      this.vehicleGroup.position.copy(startPos);
      this.vehicleGroup.visible = true;
      this.cinemachine.reset(this.physics.position);
      this.particles.clear();
      const t5 = performance.now();
      console.log(`[startRun] Step 4 (Vehicle & Physics): ${(t5 - t4).toFixed(1)}ms`);

      // Warm-up render frame to compile shaders and upload VRAM before enabling PLAYING state
      this.renderer.render(this.scene, this.camera);

      // Step 5: Transition to PLAYING state and reveal HUD
      this.gameState = 'PLAYING';
      this.ui.showScreen('hud');
      this.ui.updateHUDLevel(levelNumber);
      if (this.ui.updateSaveUI) this.ui.updateSaveUI();
      sfx.startEngineSound();

      // Check for New Hazard Unlock Toast
      this.checkNewHazardUnlockToast(levelNumber);

      if (this.ui?.hideLoadingTransition) {
        this.ui.hideLoadingTransition();
      }

      const totalTime = (performance.now() - t0).toFixed(1);
      console.log(`[startRun] ✅ Level ${levelNumber} Transition COMPLETE in ${totalTime}ms`);
    } catch (err) {
      console.error('[startRun] Fatal error during level transition:', err);
      if (this.ui?.showToast) this.ui.showToast('⚠️ Level transition failed. Returning to menu...', 'boost');
      if (this.ui?.showScreen) this.ui.showScreen('level-select');
    }
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    if (this.postProcessing) {
      this.postProcessing.onResize();
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    try {
      const dt = Math.min(this.clock.getDelta(), 0.033);

      // Time Dilation decay back to 1.0 (Section 1)
      if (this.timeScale < 1.0) {
        this.timeScale = Math.min(1.0, this.timeScale + 0.5 * dt);
      }
      const scaledDt = dt * this.timeScale;

      switch (this.gameState) {
        case 'MENU_SHOWCASE':
          // Asphalt 9-style floating bob, idle/drag rotation & camera push-in
          if (this.garageShowcase) {
            this.garageShowcase.update(dt, true);
          }
          break;

        case 'PLAYING':
          if (this.garageShowcase) this.garageShowcase.update(dt, false);
          this.updatePlayingState(scaledDt, dt);

          // STAGE 1 & STAGE 4: Update Motion Blur Pass & High-Speed Air Streaks
          if (this.postProcessing && this.physics) {
            this.postProcessing.update(
              this.physics.forwardSpeed,
              this.physics.profile.topSpeed || 30.0,
              this.physics.isNitroActive,
              this.physics.inSpeedBoostZone
            );
          }
          if (this.particles && this.physics) {
            const speedRatio = this.physics.forwardSpeed / (this.physics.profile.topSpeed || 30.0);
            this.particles.spawnAirStreaks(this.physics.position, this.camera.position, speedRatio, this.physics.isNitroActive);
          }
          break;

        case 'FREE_FALL':
          if (this.garageShowcase) this.garageShowcase.update(dt, false);
          this.updateFreeFallState(dt);
          break;
      }

      this.particles.update(dt);

      if (this.perfMonitor) {
        this.perfMonitor.update();
      }

      if (this.postProcessing) {
        this.postProcessing.render();
      } else {
        this.renderer.render(this.scene, this.camera);
      }
    } catch (err) {
      // Throttled error logging — only emit once per 3 seconds to prevent console spam
      if (!this._lastRenderError || Date.now() - this._lastRenderError > 3000) {
        console.error('[RENDER-LOOP-FAIL]:', err);
        this._lastRenderError = Date.now();
      }
    }
  }

  updatePlayingState(dt, rawDt = dt) {
    this.runTime += dt;

    // Combo timeout check (2.5s window since last coin collection) (Section 2)
    if (this.comboCount > 0 && Date.now() - this.lastCollectTime > 2500) {
      this.comboCount = 0;
      this.comboMultiplier = 1;
      if (this.ui?.updateCombo) this.ui.updateCombo(1, 0, false);
    }

    // Camera mode toggle requested via 'C' key
    if (this.input.cameraToggleRequested) {
      this.input.cameraToggleRequested = false;
      const mode = this.cinemachine.cycleCameraMode();
      const modeLabels = ['📷 CAM: ARCADE TPP', '📷 CAM: CLOSE TPP', '📷 CAM: COCKPIT FPP', '📷 CAM: ACTION'];
      if (this.ui?.btnCamToggle) this.ui.btnCamToggle.textContent = modeLabels[mode];
    }

    // 1. Steering & Driving Input Mapping
    this.physics.lateralSteer = this.input.steer;
    this.physics.isAccelerating = this.input.isAccelerating;
    this.physics.isBraking = this.input.isBraking;

    // Nitro Boost Fuel Consumption & Particles
    if (this.input.isNitroActive && this.nitroFuel > 0.05) {
      this.physics.isNitroActive = true;
      this.nitroFuel = Math.max(0, this.nitroFuel - 0.3 * dt);
      sfx.playNitro();
      this.particles.spawnBoostTrail(this.physics.position, 0x06b6d4);
    } else {
      this.physics.isNitroActive = false;
      this.nitroFuel = Math.min(1.0, this.nitroFuel + 0.15 * dt);
    }

    // Tire Smoke on sharp turns
    if (Math.abs(this.input.steer) > 0.6 && this.physics.forwardSpeed > 15) {
      this.particles.spawnTireSmoke(this.physics.position);
    }

    // 2. Physics Engine Step — 3-step Continuous Sub-stepping (Anti-tunneling net)
    const SUBSTEPS = 3;
    const subDt = dt / SUBSTEPS;
    for (let i = 0; i < SUBSTEPS; i++) {
      this.physics.update(
        subDt,
        this.trackBuilder.colliders,
        this.trackBuilder.antiGravZones,
        this.trackBuilder.barrierColliders,
        this.trackBuilder.speedBoostZones,
        this.trackBuilder.launchPadTriggers
      );
    }

    // Mid-air wind-streak particles (Section 2.2)
    if (this.physics.isAirborne) {
      this.particles.spawnBoostTrail(this.physics.position, 0xffffff);
    }

    // Launch pad hit FX — wind burst + camera FOV explosion
    if (this.physics.launchPadHit) {
      this.particles.spawnBoostTrail(this.physics.position, 0xfbbf24);
      this.particles.spawnBoostTrail(this.physics.position, 0xf97316);
      if (this.ui?.showToast) this.ui.showToast('LAUNCH!');
    }

    // Barrier Hit Feedback
    if (this.physics.barrierHitThisFrame) {
      sfx.playThud();
      this.particles.spawnSparks(this.physics.position);
      this.cinemachine.triggerShake(0.35, 0.2);
    }

    // Speed Boost FX
    if (this.physics.inSpeedBoostZone) {
      this.particles.spawnBoostTrail(this.physics.position, 0xfbbf24);
    }

    // 3. Snap Visual Mesh to Physics Body Position/Quaternion
    this.vehicleGroup.position.copy(this.physics.position);
    this.vehicleGroup.quaternion.copy(this.physics.quaternion);

    // 4. Rotate Circular Platform Wooden Hammers & Detect Collision
    if (this.trackBuilder.trackGroup.userData && this.trackBuilder.trackGroup.userData.hammers) {
      this.trackBuilder.trackGroup.userData.hammers.forEach(hammer => {
        hammer.rotation.y += 2.5 * dt;
        const hammerHeadWorld = new THREE.Vector3();
        if (hammer.children[2]) {
          hammer.children[2].getWorldPosition(hammerHeadWorld);
          if (hammerHeadWorld.distanceTo(this.physics.position) < 1.8) {
            sfx.playThud();
            this.onHitHazard('hammer');
          }
        }
      });
    }

    this.hazards.update(
      dt,
      this.physics.position,
      this.physics.profile.radius,
      (hazardType) => this.onHitHazard(hazardType),
      (cashVal) => this.onCollectCash(cashVal),
      (hazardType) => this.onNearMiss(hazardType)
    );

    // 5. Update Cinemachine 4-Camera System
    let steerVal = 0;
    if (this.input) {
      if (typeof this.input.getSteerInput === 'function') steerVal = this.input.getSteerInput();
      else if (typeof this.input.getSteer === 'function') steerVal = this.input.getSteer();
      else if (this.input.steer !== undefined) steerVal = this.input.steer;
    }

    const isFalling = this.physics.isFalling;
    this.cinemachine.update(
      dt,
      this.physics.position,
      this.physics.quaternion,
      this.physics.isNitroActive,
      isFalling,
      this.physics.inSpeedBoostZone,
      this.physics.isAirborne,
      this.physics.forwardSpeed,
      this.physics.launchPadHit,
      steerVal,
      this.physics.profile ? (this.physics.profile.topSpeed || 30.0) : 30.0
    );

    // Launch Pad SFX & Airtime Tracking (Section 5)
    if (this.physics.launchPadHit) {
      sfx.playLaunch();
      this.wasAirborneFromLaunch = true;
      this.airtimeTimer = 0;
    }

    if (this.physics.isAirborne && this.wasAirborneFromLaunch) {
      this.airtimeTimer += rawDt;
      this.ui.updateAirtime(this.airtimeTimer, false);
    } else if (!this.physics.isAirborne && this.wasAirborneFromLaunch) {
      this.ui.updateAirtime(this.airtimeTimer, true);
      this.wasAirborneFromLaunch = false;
      setTimeout(() => {
        if (this.ui) this.ui.updateAirtime(0, false);
      }, 1500);
    }

    // 6. Audio Engine Pitch Tuning
    const speedRatio = this.physics.forwardSpeed / this.physics.profile.topSpeed;
    sfx.updateEnginePitch(speedRatio);

    // 7. Update HUD & Milestone Progress Bursts (Section 3)
    const finishZ = Math.max(10, this.trackBuilder.finishZ);
    const progressRatio = Math.max(0, Math.min(1, this.physics.position.z / finishZ));
    this.ui.updateHUD(
      this.physics.forwardSpeed,
      progressRatio,
      this.cashCollected,
      this.physics.inAntiGravZone,
      this.nitroFuel,
      this.physics.inSpeedBoostZone
    );

    this.checkProgressMilestones(progressRatio);

    // 8. Update Sunlight & Skybox Parallax Position
    this.environment.updateLightPosition(this.physics.position);
    if (this.environment && typeof this.environment.updateCityPosition === 'function') {
      const carZ = this.physics ? this.physics.position.z : 0;
      this.environment.updateCityPosition(carZ, this.camera.position, steerVal);
    }

    // 9. Win & Loss Check
    if (isFalling) {
      this.gameState = 'FREE_FALL';
      this.fallTimer = 0;
      sfx.stopEngineSound();
    } else if (this.physics.position.z >= finishZ - 1.5) {
      this.gameState = 'VICTORY';
      this.physics.forwardSpeed = 0; // Freeze vehicle controls immediately on 100% progress
      this.physics.isAccelerating = false;
      this.physics.velocity.set(0, 0, 0);
      this.physics.position.z = Math.min(this.physics.position.z, finishZ + 0.5);
      sfx.stopEngineSound();

      if (!this._levelCoinsAwarded) {
        this._levelCoinsAwarded = true;

        // Calculate stars based on runTime
        let stars = 3;
        if (this.runTime > 45) stars = 2;
        if (this.runTime > 60) stars = 1;

        // 1 Star = 250 Coins, 2 Stars = 400 Coins, 3 Stars = 600 Coins
        let completionReward = 600;
        if (stars === 2) completionReward = 400;
        else if (stars === 1) completionReward = 250;

        const totalEarned = completionReward + this.cashCollected;
        this.cashCollected = totalEarned;

        // Persist progress to localStorage on victory (Stage 7)
        SaveSystem.saveEnvProgress(this.currentEnvKey || 'fairy_forest', this.currentLevel + 1, totalEarned);
      }

      this.ui.showVictory(this.runTime, this.cashCollected);
    }
  }

  checkNewHazardUnlockToast(levelNumber) {
    const unlocks = {
      2: 'SAW BLADES UNLOCKED!',
      4: 'SWINGING PENDULUMS UNLOCKED!',
      6: 'BOUNCING CAT PAWS UNLOCKED!',
      8: 'SLAM CRUSHERS UNLOCKED!',
      10: 'SPIKE BALLS UNLOCKED!',
      12: 'ROLLING BOULDERS UNLOCKED!',
      15: 'SWEEPING WALL GAPS UNLOCKED!',
      18: 'ROTATING SWEEPERS UNLOCKED!',
      22: 'WOODEN HAMMER PLATFORMS UNLOCKED!'
    };

    if (unlocks[levelNumber] && this.ui?.showToast) {
      setTimeout(() => {
        if (this.ui?.showToast) this.ui.showToast(unlocks[levelNumber]);
      }, 500);
    }
  }

  getVisualBandForLevel(levelNumber) {
    if (levelNumber <= 10) return 'sunny';      // Band 1: Dawn / Bright Sunny
    if (levelNumber <= 20) return 'sunset';     // Band 2: Midday / Warm Sunset
    if (levelNumber <= 30) return 'cyberpunk';  // Band 3: Neon Cyberpunk Night
    return ['sunny', 'sunset', 'cyberpunk'][(levelNumber - 1) % 3];
  }

  checkProgressMilestones(progressRatio) {
    const thresholds = [
      { ratio: 0.25, index: 0, label: '25% MILESTONE!' },
      { ratio: 0.50, index: 1, label: 'HALF WAY!' },
      { ratio: 0.75, index: 2, label: '75% MILESTONE!' },
      { ratio: 1.00, index: 3, label: 'FINAL SPRINT!' }
    ];

    thresholds.forEach(m => {
      if (progressRatio >= m.ratio && !this.milestonesFired.has(m.ratio)) {
        this.milestonesFired.add(m.ratio);
        sfx.playMilestoneChime(m.index);
        this.particles.spawnCoinBurst(this.physics.position);
        if (this.ui?.showToast) this.ui.showToast(m.label);
        if (this.ui?.pulseProgress) this.ui.pulseProgress();
      }
    });
  }

  onNearMiss(hazardType) {
    // 1. Time Dilation: slow down time to 0.85x
    this.timeScale = 0.85;

    // 2. Camera FOV punch-in (-5° FOV) + quick shake
    if (this.cinemachine?.triggerNearMissPunch) {
      this.cinemachine.triggerNearMissPunch();
    }

    // 3. Audio swoosh/whoosh SFX
    sfx.playNearMiss();

    // 4. UI Toast non-blocking popup
    if (this.ui?.showToast) {
      this.ui.showToast('CLOSE CALL!');
    }
  }

  updateFreeFallState(dt) {
    this.fallTimer += dt;
    this.physics._updateFallingPhysics(dt);

    // STAGE 5: Death plane check at Y <= -149
    if ((this.physics.hasHitOceanFloor || this.physics.position.y <= -149) && !this._impactExplosionFired) {
      this._impactExplosionFired = true;
      this.physics.velocity.set(0, 0, 0);
      sfx.playExplosion();
      this.particles.spawnExplosion(this.physics.position);
      this.cinemachine.triggerShake(0.6, 0.4);
      if (this.vehicleGroup) {
        this.vehicleGroup.visible = false; // Hide car mesh instantly on ground impact
      }
      const finishZ = Math.max(10, this.trackBuilder.finishZ);
      const progressRatio = Math.max(0, Math.min(1, this.physics.position.z / finishZ));
      this.gameState = 'FAIL';

      if (!this._levelCoinsAwarded) {
        this._levelCoinsAwarded = true;
        // Persist coins collected during run to global total balance on fail
        SaveSystem.saveEnvProgress(this.currentEnvKey || 'golden_bay', this.currentLevel, this.cashCollected);
      }

      this.ui.showFail(progressRatio, this.cashCollected);
      return;
    }

    // Snap visual mesh to physics tumble
    if (this.vehicleGroup) {
      this.vehicleGroup.position.copy(this.physics.position);
      this.vehicleGroup.quaternion.copy(this.physics.quaternion);
    }

    // Cinematic fall camera tracking
    this.cinemachine.update(dt, this.physics.position, this.physics.quaternion, false, true);
  }

  onHitHazard(hazardType) {
    this.physics.forwardSpeed *= 0.35;
    this.physics.velocity.x += (Math.random() - 0.5) * 8;
    this.particles.spawnSparks(this.physics.position);
    this.cinemachine.triggerShake(0.5, 0.3);

    // Reset Combo on hazard hit (Section 2)
    if (this.comboCount > 0 || this.comboMultiplier > 1) {
      this.comboCount = 0;
      this.comboMultiplier = 1;
      sfx.playComboBreak();
      if (this.ui?.updateCombo) this.ui.updateCombo(1, 0, true);
    }
  }

  onCollectCash(cashVal) {
    this.lastCollectTime = Date.now();
    this.comboCount++;

    // +1x multiplier every 5 coins, capped at 5x
    const newMultiplier = Math.min(5, 1 + Math.floor(this.comboCount / 5));
    if (newMultiplier !== this.comboMultiplier) {
      this.comboMultiplier = newMultiplier;
    }

    const totalVal = cashVal * this.comboMultiplier;
    this.cashCollected += totalVal;
    this.particles.spawnCoinBurst(this.physics.position);

    if (this.ui?.updateCombo) {
      this.ui.updateCombo(this.comboMultiplier, this.comboCount, false);
    }
  }
}

// Start Game Engine when DOM Ready
function initGame() {
  if (!window.gameEngine) {
    window.gameEngine = new SkywayGameEngine();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGame);
} else {
  initGame();
}
