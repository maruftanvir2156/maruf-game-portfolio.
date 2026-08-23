// Main Game Orchestrator & Lifecycle Loop for Sphere Velocity with Forensic Telemetry Timers
import * as THREE from 'three';
import { PhysicsEngine } from './PhysicsEngine.js';
import { PlayerBall } from './PlayerBall.js';
import { CameraController } from './CameraController.js';
import { InputManager } from './InputManager.js';
import { TrackBuilder } from '../track/TrackBuilder.js';
import { ObstacleManager } from '../obstacles/ObstacleManager.js';
import { EnvironmentSystem, ENV_WORLDS } from '../environment/EnvironmentSystem.js';
import { LEVELS_DATA } from '../levels/LevelData.js';
import { ParticleSystem } from '../vfx/ParticleSystem.js';
import { soundManager } from '../audio/SoundManager.js';
import { UIManager } from '../ui/UIManager.js';
import { Collectible } from '../entities/Collectible.js';
import { Checkpoint } from '../entities/Checkpoint.js';
import { FinishGate } from '../entities/FinishGate.js';


export class GameApp {
  constructor() {
    this.container = document.getElementById('game-container');
    
    // State & Persistent Level Progress (Hard reset if corrupted level > 10 or NaN)
    let savedLvl = parseInt(localStorage.getItem('sphere_velocity_level')) || 1;
    if (savedLvl > 10 || isNaN(savedLvl)) {
      savedLvl = 1;
      localStorage.setItem('sphere_velocity_level', '1');
    }
    this.state = 'MENU';
    this.currentLevelId = savedLvl;
    this.levelData = LEVELS_DATA.find(l => l.id === savedLvl) || LEVELS_DATA[0];
    this.coinsCollected = 0;
    this.levelTime = 0;
    this.lastCheckpointPos = new THREE.Vector3(0, 4, 0);

    // 1. Three.js Scene Setup
    this.scene = new THREE.Scene();
    const initW = this.container.clientWidth || 430;
    const initH = this.container.clientHeight || 932;
    this.camera = new THREE.PerspectiveCamera(60, initW / initH, 0.5, 2000);
    
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setSize(initW, initH);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.85;
    this.container.appendChild(this.renderer.domElement);

    // 2. Instantiate Subsystems
    this.soundManager = soundManager;
    this.environment = new EnvironmentSystem(this.scene, this.renderer);
    this.particleSystem = new ParticleSystem(this.scene);
    this.physics = new PhysicsEngine(this.camera);
    this.playerBall = new PlayerBall(this.scene, this.physics);
    this.cameraController = new CameraController(this.camera);
    this.cameraController.setEnvironment(this.environment);

    this.trackBuilder = new TrackBuilder(this.scene);
    this.obstacleManager = new ObstacleManager(this.scene);

    // Clock initialized before UI / startLevel
    this.clock = new THREE.Clock();

    const touchZone = document.getElementById('touch-controls');
    const joystickKnob = document.getElementById('joystick-knob');
    this.input = new InputManager(touchZone, joystickKnob);
    this.ui = new UIManager(this);

    this.collectibles = [];
    this.checkpoints = [];
    this.portals = [];
    this.finishGate = null;

    // Window Resize listener
    window.addEventListener('resize', () => this._onWindowResize());

    // Phase 4 Boot Diagnostic Output
    console.log(`[BOOT]
Renderer: ${this.renderer ? 'OK' : 'FAIL'}
Scene: ${this.scene ? 'OK' : 'FAIL'}
Camera: ${this.camera ? 'OK' : 'FAIL'}
UI: ${this.ui ? 'OK' : 'FAIL'}
Input: ${this.input ? 'OK' : 'FAIL'}
Environment: ${this.environment ? 'OK' : 'FAIL'}
Track: ${this.trackBuilder ? 'OK' : 'FAIL'}
Ball: ${this.playerBall ? 'OK' : 'FAIL'}
Physics: ${this.physics ? 'OK' : 'FAIL'}
Level: ${this.levelData ? 'OK' : 'FAIL'}
Animation Loop: OK`);

    // Start Loop
    this._animate();
  }

  startLevel(levelId = 1) {
    this.currentLevelId = levelId;
    this.levelData = LEVELS_DATA.find(l => l.id === levelId) || LEVELS_DATA[0];
    this.coinsCollected = 0;
    this.levelTime = 0;

    // Build Track Architecture
    this._buildLevelTrack();

    // Reset Ball Position & Input — Spawn safely on top of track deck at Z = 5.0
    this.input.reset();
    this.lastCheckpointPos.set(0, 1.6, 5.0);
    this.physics.setPosition(this.lastCheckpointPos);
    this.cameraController.reset(this.physics.position);

    // Initial Environment Zone — call setEnvironment & setWorldTheme for level world
    const worldKey = this._getWorldKeyForLevel(this.currentLevelId);
    const initZone = ENV_WORLDS[worldKey] || ENV_WORLDS.WORLD_1_SKY_HAVEN;
    this.environment.setEnvironment(worldKey);
    this.trackBuilder.setWorldTheme(initZone);

    this.state = 'PLAYING';
    this.clock.start();
  }

  _getWorldKeyForLevel(levelNum) {
    if (levelNum <= 10) return 'WORLD_1_SKY_HAVEN';
    if (levelNum <= 20) return 'WORLD_2_RURAL_VALLEY';
    if (levelNum <= 30) return 'WORLD_3_CYBERPUNK';
    if (levelNum <= 40) return 'WORLD_4_VOLCANIC';
    if (levelNum <= 50) return 'WORLD_5_MISTY_PEAKS';
    if (levelNum <= 60) return 'WORLD_6_GOLDEN_DESERT';
    return 'WORLD_7_COSMIC_VOID';
  }

  _buildLevelTrack() {
    this.trackBuilder.clear();
    this.obstacleManager.clear();
    this.collectibles = [];
    this.checkpoints = [];
    this.portals = [];
    this.finishGate = null;

    // Cursor tracks both world position (top-surface) AND heading (yaw in radians)
    // All TrackBuilder methods accept (pos, heading, ...) and return {pos, heading}
    let cursor = { pos: new THREE.Vector3(0, 0.6, 0), heading: 0 };

    // Register F4 debug toggle once
    if (!this._f4Registered) {
      this._f4Registered = true;
      window.addEventListener('keydown', (e) => {
        if (e.code === 'F4') this.trackBuilder.setDebugVisible(!this.trackBuilder.debugGroup.visible);
      });
    }

    for (const seg of this.levelData.segments) {

      if (seg.type === 'STRAIGHT') {
        const segStart = cursor.pos.clone();
        const segHdg   = cursor.heading;
        cursor = this.trackBuilder.createStraight(
          cursor.pos, cursor.heading, seg.length, seg.width || 14, seg.skin || null
        );
        if (seg.coins) {
          const fwd = new THREE.Vector3(Math.sin(segHdg), 0, Math.cos(segHdg));
          for (let i = 0; i < seg.coins; i++) {
            const t = (i + 1) / (seg.coins + 1);
            const coinPos = segStart.clone().addScaledVector(fwd, seg.length * t);
            coinPos.y += 1.5;
            coinPos.x += (Math.random() - 0.5) * 3;
            this.collectibles.push(new Collectible(this.scene, coinPos));
          }
        }
        if (seg.pusherObstacle) {
          const fwd = new THREE.Vector3(Math.sin(segHdg), 0, Math.cos(segHdg));
          this.obstacleManager.createPusherBlock(segStart.clone().addScaledVector(fwd, seg.length / 2));
        }
        if (seg.crusherObstacle) {
          const fwd = new THREE.Vector3(Math.sin(segHdg), 0, Math.cos(segHdg));
          this.obstacleManager.createCrusherStomper(segStart.clone().addScaledVector(fwd, seg.length * 0.6));
        }
        if (seg.pendulumObstacle) {
          const fwd = new THREE.Vector3(Math.sin(segHdg), 0, Math.cos(segHdg));
          this.obstacleManager.createPendulum(segStart.clone().addScaledVector(fwd, seg.length * 0.4));
        }

      } else if (seg.type === 'SLOPE_RAMP') {
        const prev = cursor.pos.clone();
        const hdg  = cursor.heading;
        cursor = this.trackBuilder.createSlopeRamp(
          cursor.pos, cursor.heading, seg.length, seg.riseHeight || 2, seg.width || 14, seg.skin || null
        );
        if (seg.nitroBoost) {
          const fwd = new THREE.Vector3(Math.sin(hdg), 0, Math.cos(hdg));
          this.obstacleManager.createBoostPad(prev.clone().addScaledVector(fwd, seg.length / 2));
        }

      } else if (seg.type === 'GENTLE_CURVE') {
        cursor = this.trackBuilder.createGentleCurve(
          cursor.pos, cursor.heading,
          seg.angleDeg || 35, seg.turnDir || 1, seg.width || 14, seg.skin || null
        );

      } else if (seg.type === 'BANKED_CURVE') {
        cursor = this.trackBuilder.createBankedCurve(
          cursor.pos, cursor.heading,
          seg.angleDeg || 45, seg.turnDir || 1, seg.bankDeg || 15, seg.width || 14
        );

      } else if (seg.type === 'VERTICAL_LOOP') {
        cursor = this.trackBuilder.createVerticalLoop(
          cursor.pos, cursor.heading, seg.radius || 18, seg.width || 9
        );

      } else if (seg.type === 'SPLIT_MERGE') {
        const segStart = cursor.pos.clone();
        const segHdg   = cursor.heading;
        const splitLen = seg.splitLen || seg.splitLength || 50;
        cursor = this.trackBuilder.createSplitMerge(
          cursor.pos, cursor.heading, splitLen, seg.width || 16
        );
        if (seg.sweeperObstacle) {
          const fwd = new THREE.Vector3(Math.sin(segHdg), 0, Math.cos(segHdg));
          const rgt = new THREE.Vector3(Math.cos(segHdg), 0, -Math.sin(segHdg));
          const swPos = segStart.clone().addScaledVector(fwd, splitLen / 2).addScaledVector(rgt, -8);
          this.obstacleManager.createSweeperBar(swPos);
        }
        if (seg.coins) {
          const fwd = new THREE.Vector3(Math.sin(segHdg), 0, Math.cos(segHdg));
          const rgt = new THREE.Vector3(Math.cos(segHdg), 0, -Math.sin(segHdg));
          for (let i = 0; i < seg.coins; i++) {
            const t = (i + 1) / (seg.coins + 1);
            const coinPos = segStart.clone().addScaledVector(fwd, splitLen * t).addScaledVector(rgt, 6);
            coinPos.y += 1.5;
            this.collectibles.push(new Collectible(this.scene, coinPos));
          }
        }

      } else if (seg.type === 'CHECKPOINT') {
        this.checkpoints.push(new Checkpoint(this.scene, cursor.pos, seg.index));

      } else if (seg.type === 'PORTAL_RING') {
        const pPos = cursor.pos.clone();
        const pHdg = cursor.heading;
        // Build a solid deck underneath the portal ring
        cursor = this.trackBuilder.createStraight(cursor.pos, cursor.heading, 25, seg.width || 16);
        const portalCenter = pPos.clone().addScaledVector(new THREE.Vector3(Math.sin(pHdg), 0, Math.cos(pHdg)), 12.5);
        const mesh = this.trackBuilder.createPortalRing(portalCenter, pHdg);
        this.portals.push({ mesh, pos: portalCenter, targetZone: seg.targetZone });

      } else if (seg.type === 'FINISH_GATE') {
        this.finishGate = new FinishGate(this.scene, cursor.pos, cursor.heading);
      }
    }

    // Ensure Three.js calculates matrixWorld for all new track segment colliders before physics steps
    this.trackBuilder.trackGroup.updateMatrixWorld(true);
    this.scene.updateMatrixWorld(true);

    const colliders = [
      ...this.trackBuilder.getColliders(),
      ...this.obstacleManager.getColliders()
    ];
    this.physics.setColliders(colliders, this.currentLevelId);
    this.cameraController.setTrackColliders(colliders);
    console.log("LEVEL " + this.currentLevelId + " LOADED WITH " + colliders.length + " SOLID COLLIDERS.");
  }

  pauseGame() {
    this.state = 'PAUSED';
  }

  resumeGame() {
    this.state = 'PLAYING';
  }

  restartLevel() {
    this.startLevel(this.currentLevelId);
  }

  nextLevel() {
    const nextId = this.currentLevelId + 1 > LEVELS_DATA.length ? 1 : this.currentLevelId + 1;
    this.startLevel(nextId);
  }

  _animate() {
    const tFrameStart = performance.now();
    requestAnimationFrame(() => this._animate());

    const dt = Math.min(this.clock.getDelta(), 0.05);
    const elapsed = this.clock.getElapsedTime();

    if (this.state === 'PLAYING') {
      this.levelTime += dt;

      // 1. Process Input & Physics Engine Step
      this.input.update();
      const steer = this.input.steerInput;
      const forward = this.input.forwardInput;
      const jump = this.input.consumeJump();

      const physicsRes = this.physics.update(dt, steer, forward, jump, this.input.isTouching);

      // ── Secondary fall boundary guard ─────────────────────────────────────
      // The physics engine's own kill plane fires at y < -12. This earlier
      // check at y < -1.5 catches the ball the moment it slips below the
      // track plane, giving an instant, visually clean respawn.
      // Uses this.physics.position (authoritative state) NOT the visual mesh
      // (setting the mesh directly would be overwritten next physics frame).
      if (!physicsRes.hasRespawned && this.physics.position.y < -1.5) {
        this.physics.respawn();
        this.input.reset(); // wipe stuck keys / touch drag so grace period is clean
        physicsRes.hasRespawned = true;
      }

      // Track always runs along Z-axis; centerline is X=0
      this.cameraController.setTrackCenterX(0);

      if (physicsRes.hasRespawned) {
        this.input.reset(); // also wipe for kill-plane respawns (idempotent)
        this.cameraController.reset(this.physics.position);
      } else {
        this.cameraController.update(dt, this.physics.position, this.physics.velocity, physicsRes.isGrounded);
      }
      
      // 2. Play Audio Roll Hum
      this.soundManager.updateRoll(physicsRes.speed, physicsRes.isGrounded);
      if (jump) this.soundManager.playJump();

      // 3. Update Visual Ball Mesh
      this.playerBall.update();

      // 4. Update Obstacles & Environment
      this.obstacleManager.update(dt, elapsed);
      this.environment.update(dt, this.camera.position, this.physics.position);
      this.particleSystem.update(dt);

      // 5. Collectible Pickups Check
      for (const coin of this.collectibles) {
        if (coin.update(dt, elapsed, this.physics.position)) {
          this.coinsCollected++;
          this.soundManager.playCoin();
          this.particleSystem.emitCoinBurst(coin.initialPos);
        }
      }

      // 6. Checkpoints Check
      for (const cp of this.checkpoints) {
        if (cp.checkActivation(this.physics.position)) {
          this.lastCheckpointPos.copy(cp.pos);
          this.physics.setCheckpoint(cp.pos);
          this.soundManager.playCheckpoint();
          this.particleSystem.emitCheckpointBeacon(cp.pos);
        }
      }

      // 7. Portal Rings Environment Transition Check
      for (const portal of this.portals) {
        if (portal.pos.distanceTo(this.physics.position) < 4.0) {
          if (portal.targetZone) {
            this.environment.transitionToZone(portal.targetZone, this.trackBuilder);
            this.soundManager.playWarpPortal();
            this.particleSystem.emitPortalWarp(portal.pos);
          }
        }
      }

      // 8. Finish Gate Level Completion Check
      if (this.finishGate && this.finishGate.update(dt, this.physics.position)) {
        this.state = 'VICTORY';
        const nextId = this.currentLevelId >= LEVELS_DATA.length ? 1 : this.currentLevelId + 1;
        localStorage.setItem('sphere_velocity_level', nextId.toString());
        this.soundManager.playVictory();
        this.ui.triggerVictory(this.levelData, this.levelTime, this.coinsCollected);
      }

      // 9. Update HUD Progress & Speedometer
      const progress = Math.min(1.0, Math.max(0, this.physics.position.z / 350.0));
      this.ui.updateHUD(this.coinsCollected, this.currentLevelId, physicsRes.speed, progress, this.environment.currentZone.name);

      const tFrameEnd = performance.now();
      const frameMs = Math.max(0.1, tFrameEnd - tFrameStart);

      // 10. Update Forensic Debug Panel (when visible)
      const overlay = document.getElementById('debug-overlay');
      if (overlay && overlay.style.display !== 'none') {
        const p = this.physics;
        const el = (id) => document.getElementById(id);
        const ef = (id, v) => { const e = el(id); if (e) e.innerText = v; };

        ef('dbg-fps',   Math.round(1000 / Math.max(1, frameMs)));
        ef('dbg-ftime', `${frameMs.toFixed(1)}ms`);
        ef('dbg-ptime', `${p.telemetry.physicsTimeMs.toFixed(2)}ms`);
        ef('dbg-rtime', `${p.telemetry.raycastTimeMs.toFixed(2)}ms`);
        ef('dbg-steer', steer.toFixed(2));
        ef('dbg-fwd',   forward.toFixed(2));
        ef('dbg-vel',   `[${p.velocity.x.toFixed(1)},${p.velocity.y.toFixed(1)},${p.velocity.z.toFixed(1)}]`);
        ef('dbg-pos',   `[${p.position.x.toFixed(1)},${p.position.y.toFixed(1)},${p.position.z.toFixed(1)}]`);
        ef('dbg-gnd',   physicsRes.isGrounded ? 'YES' : 'AIR');
        ef('dbg-norm',  `[${p.groundNormal.x.toFixed(2)},${p.groundNormal.y.toFixed(2)},${p.groundNormal.z.toFixed(2)}]`);
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  _onWindowResize() {
    const w = this.container.clientWidth || 430;
    const h = this.container.clientHeight || 932;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }
}
