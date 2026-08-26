import * as THREE from 'three';
import { Vehicle3DModels } from './Vehicle3DModels.js';
import { AssetLoader, CAR_MANIFEST, disposeObject } from './AssetLoader.js';

/**
 * ASPHALT 9-STYLE GARAGE SHOWCASE
 *
 * Exact Interaction Model:
 * 1. Dark, animated/gradient backdrop with floating hero car.
 * 2. Continuous slow Y-axis idle rotation + subtle vertical floating bob (sine wave).
 * 3. Mouse / Touch drag manual rotation around Y-axis, resuming idle after 2 sec.
 * 4. Hover / Long-press camera push-in + glowing rim-light highlight.
 * 5. Quick model swap transitions under 400ms with scale/fade.
 */
export class GarageShowcase {
  constructor(scene, camera, canvas) {
    this.scene = scene;
    this.camera = camera;
    this.canvas = canvas;

    // Master garage group
    this.garageGroup = new THREE.Group();
    this.scene.add(this.garageGroup);

    // Floating car pivot container
    this.carPivot = new THREE.Group();
    this.carPivot.position.set(0, 0.2, 0);
    this.garageGroup.add(this.carPivot);

    this.currentMesh = null;
    this.selectedKey = 'nissan_s15';
    this.loadRequestId = 0;

    // Hover / Push-in state
    this.isHovered = false;
    if (this.camera) {
      this.camera.fov = 55;
      this.camera.updateProjectionMatrix();
    }
    this.cameraDefaultPos = new THREE.Vector3(0, 2.2, 5.2);
    this.cameraHoverPos = new THREE.Vector3(0, 1.6, 4.1);
    this.cameraCurrentPos = this.cameraDefaultPos.clone();
    this.cameraLookTarget = new THREE.Vector3(0, 0.8, 0);

    // Create 3D pedestal & glowing ring
    this._createPedestal();

    // Interactive Rim Light for hover push-in
    this.rimLight = new THREE.SpotLight(0x06b6d4, 0.8, 25, Math.PI / 3, 0.4);
    this.rimLight.position.set(0, 6, -4);
    this.garageGroup.add(this.rimLight);
    this.garageGroup.add(this.rimLight.target);
    this.rimLight.target.position.set(0, 0.2, 0);
    // Set up lights, camera positions, orbit parameters
    this._setupLights();
    this._setupCamera();

    // Mouse / Touch Drag and Sweep parameters
    this.currentYRotation = Math.PI * 0.25;
    this.targetYRotation = this.currentYRotation;
    this.rotationDamping = 0.08;
    this.idleRotationSpeed = 0.12; // Slow aesthetic spin when untouched
    this.idleResumeTimer = 0;      // Delays autoplay spin when user drags

    // Model swap transition (<400ms)
    this.isTransitioning = false;
    this.transitionTime = 0;
    this.transitionDuration = 0.35; // 350ms transition
    this.pendingKey = null;
    this.transitionPhase = 'OUT'; // 'OUT' | 'IN'

    // Time accumulator for sine wave bobbing
    this.time = 0;

    this._setupPointerEvents();

    // Explicitly create and add initial car mesh on mount (fixes invisible car bug)
    this._swapMesh(this.selectedKey);
  }

  /* ───────────────────── PEDESTAL ───────────────────── */

  _createPedestal() {
    // 3D Dark Metallic Stage Pedestal
    const pedGeo = new THREE.CylinderGeometry(2.8, 3.2, 0.4, 32);
    const pedMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.25,
      metalness: 0.85
    });
    const pedMesh = new THREE.Mesh(pedGeo, pedMat);
    pedMesh.position.set(0, 0, 0);
    pedMesh.receiveShadow = true;
    this.garageGroup.add(pedMesh);

    // Glowing Neon Ring around pedestal edge
    const ringGeo = new THREE.TorusGeometry(2.82, 0.05, 16, 64);
    this.ringMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 1.5,
      roughness: 0.1
    });
    const ringMesh = new THREE.Mesh(ringGeo, this.ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.set(0, 0.2, 0);
    this.garageGroup.add(ringMesh);

    // Inner Reflection Disc
    const discGeo = new THREE.CircleGeometry(2.7, 32);
    const discMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.6
    });
    const discMesh = new THREE.Mesh(discGeo, discMat);
    discMesh.rotation.x = -Math.PI / 2;
    discMesh.position.set(0, 0.21, 0);
    this.garageGroup.add(discMesh);
  }

  _setupLights() {
    // Dedicated Directional Sun Light (Bright key lighting)
    this.sunLight = new THREE.DirectionalLight(0xffffff, 2.5);
    this.sunLight.position.set(5.0, 10.0, 5.0);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.bias = -0.0005;
    this.garageGroup.add(this.sunLight);

    // Stage Area Spot Light (Dynamic fill)
    const spot = new THREE.SpotLight(0xffffff, 3.0, 18, Math.PI / 4, 0.5, 1.0);
    spot.position.set(1.5, 6.0, 3.0);
    spot.castShadow = true;
    this.garageGroup.add(spot);

    // Bright White Ambient fill so car materials render bright & reflective
    this.ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    this.garageGroup.add(this.ambientLight);

    // Directional Rim Highlight Light (Cyberpunk neon cyan rim)
    this.rimLight = new THREE.DirectionalLight(0x06b6d4, 1.2);
    this.rimLight.position.set(-3.0, 2.5, -4.0);
    this.garageGroup.add(this.rimLight);
  }

  _setupCamera() {
    const defaultPos = this.cameraDefaultPos || new THREE.Vector3(0, 2.2, 5.2);
    const targetVector = (this.selectedCar && this.selectedCar.position) 
      ? this.selectedCar.position 
      : (this.cameraLookTarget || new THREE.Vector3(0, 0.9, 0));
    this.camera.position.copy(defaultPos);
    this.camera.lookAt(targetVector);
  }

  /* ──────────────── INTERACTION DRAG & HOVER ──────────────── */

  _setupPointerEvents() {
    if (!this.canvas) return;

    let startX = 0;
    let isPointerDown = false;

    // Pointer Down (Mouse / Touch Drag Start)
    const onDown = (e) => {
      isPointerDown = true;
      this.isDragging = true;
      startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      this.idleResumeTimer = 99999; // Lock autoplay spin during drag
    };

    // Pointer Move (Drag Rotation & Hover Push-in)
    const onMove = (e) => {
      if (!isPointerDown) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const deltaX = clientX - startX;
      startX = clientX;

      // Rotate car stage based on drag offset
      this.currentYRotation += deltaX * 0.007;
      this.targetYRotation = this.currentYRotation;
    };

    // Pointer Up / Cancel
    const onUp = () => {
      isPointerDown = false;
      this.isDragging = false;
      this.idleResumeTimer = 2.0; // Wait 2s after drag release to resume idle spin
    };

    // Hover Enter / Leave for Desktop
    const onEnter = () => { this.isHovered = true; };
    const onLeave = () => {
      this.isHovered = false;
      this.isDragging = false;
      this.idleResumeTimer = 2.0;
    };

    this.canvas.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    this.canvas.addEventListener('pointerenter', onEnter);
    this.canvas.addEventListener('pointerleave', onLeave);
  }

  /* ──────────────── MODEL SELECTION & SWAP (<400ms) ──────────────── */

  updateCarDisplay(carId) {
    this.selectVehicle(carId);
  }

  selectVehicle(vehicleKey) {
    if (this.selectedKey === vehicleKey && this.currentMesh && !this.isTransitioning) return;
    if (this.isTransitioning && this.pendingKey === vehicleKey) return;

    this.pendingKey = vehicleKey;
    this.isTransitioning = true;
    this.transitionTime = 0;
    this.transitionPhase = 'OUT';
  }

  async _swapMesh(vehicleKey) {
    const reqId = ++this.loadRequestId;
    this.selectedKey = vehicleKey;
    this.currentYRotation = Math.PI * 0.25;
    this.targetYRotation = this.currentYRotation;

    // Load car model asynchronously with AssetLoader
    const rawModel = await AssetLoader.getCarModelAsync(vehicleKey);

    // RACE CONDITION GUARD: Drop stale async load if user swiped to another car!
    if (reqId !== this.loadRequestId) {
      if (rawModel) disposeObject(rawModel);
      return;
    }

    // Explicitly clear and dispose all previous car models from pivot (VRAM Optimization)
    while (this.carPivot.children.length > 0) {
      const child = this.carPivot.children[0];
      this.carPivot.remove(child);
      disposeObject(child);
    }
    this.currentMesh = null;

    this.currentMesh = Vehicle3DModels.createVehicleMeshFromModel(vehicleKey, rawModel);
    if (this.currentMesh) {
      this.currentMesh.visible = true;
      // Prepped mesh is pre-scaled to 4.2m and normalized with tire bottoms at y=0
      // carPivot is at y=0.2 (platform disc surface is y=0.21)
      this.currentMesh.position.set(0, 0.01, 0);

      this.carPivot.add(this.currentMesh);
      this.carPivot.visible = true;
      this.carPivot.scale.set(1, 1, 1);

      // Color-code glowing pedestal ring to match car theme
      const carInfo = CAR_MANIFEST[vehicleKey];
      if (carInfo && carInfo.primaryColor && this.ringMat) {
        this.ringMat.color.setStyle(carInfo.primaryColor);
        this.ringMat.emissive.setStyle(carInfo.primaryColor);
      }
      console.log(`[GarageShowcase] Successfully mounted ${vehicleKey} to turntable at y=0.21 ✓`);
    }
  }

  setVisible(visible) {
    if (this.garageGroup) {
      this.garageGroup.visible = Boolean(visible);
    }
  }

  update(dt, isActiveState = true) {
    if (!isActiveState) {
      this.garageGroup.visible = false;
      return;
    }

    this.garageGroup.visible = true;
    dt = Math.min(dt, 0.033);
    this.time += dt;

    // ── 1. Floating Bobbing (Sine Wave: subtle vertical float) ──
    const bobY = Math.sin(this.time * 2.2) * 0.07;
    this.carPivot.position.y = 0.2 + bobY;

    // ── 2. Idle vs Drag Y-Axis Rotation ──
    if (this.isDragging) {
      // Rotation driven by user drag
    } else if (this.idleResumeTimer > 0) {
      this.idleResumeTimer -= dt;
    } else {
      // Continuous slow idle rotation
      this.currentYRotation += this.idleRotationSpeed * dt;
    }

    this.carPivot.rotation.y = this.currentYRotation;

    // ── 3. Hover / Long-press Camera Push-In & Rim Light Highlight ──
    const targetCamPos = this.isHovered ? this.cameraHoverPos : this.cameraDefaultPos;
    this.cameraCurrentPos.lerp(targetCamPos, 0.1);
    this.camera.position.copy(this.cameraCurrentPos);
    this.camera.lookAt(this.cameraLookTarget);

    // Rim light intensity brightens on hover
    const targetRim = this.isHovered ? 4.5 : 0.8;
    this.rimLight.intensity = THREE.MathUtils.lerp(this.rimLight.intensity, targetRim, 0.12);

    // ── 4. Quick Model Swap Transition (<400ms scale/fade) ──
    if (this.isTransitioning) {
      this.transitionTime += dt;
      const halfDur = this.transitionDuration / 2;

      if (this.transitionPhase === 'OUT') {
        const progress = Math.min(1.0, this.transitionTime / halfDur);
        const scale = 1.0 - progress;
        this.carPivot.scale.set(scale, scale, scale);

        if (progress >= 1.0) {
          this._swapMesh(this.pendingKey);
          this.transitionPhase = 'IN';
          this.transitionTime = 0;
        }
      } else if (this.transitionPhase === 'IN') {
        const progress = Math.min(1.0, this.transitionTime / halfDur);
        const scale = progress;
        this.carPivot.scale.set(scale, scale, scale);

        if (progress >= 1.0) {
          this.carPivot.scale.set(1, 1, 1);
          this.isTransitioning = false;
        }
      }
    }
  }
}
