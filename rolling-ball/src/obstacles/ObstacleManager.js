// Premium Architectural Obstacle Manager & Interactive Hazards
import * as THREE from 'three';

export class ObstacleManager {
  constructor(scene) {
    this.scene = scene;
    this.obstaclesGroup = new THREE.Group();
    this.scene.add(this.obstaclesGroup);

    this.obstacles = [];
    this.colliders = [];
  }

  clear() {
    this.scene.remove(this.obstaclesGroup);
    this.obstaclesGroup = new THREE.Group();
    this.scene.add(this.obstaclesGroup);
    this.obstacles = [];
    this.colliders = [];
  }

  // 1. Rotating Sweeper Arm with Overhead Truss & Neon Tips
  createSweeperBar(pos, length = 7.5, speed = 2.2) {
    const group = new THREE.Group();
    group.position.copy(pos);

    // Track Mounting Base Collar
    const baseGeo = new THREE.CylinderGeometry(1.2, 1.4, 0.4, 16);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x1f2838, metalness: 0.9, roughness: 0.2 });
    group.add(new THREE.Mesh(baseGeo, baseMat));

    // Central Spindle
    const pillarGeo = new THREE.CylinderGeometry(0.55, 0.55, 3.2, 16);
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x334455, metalness: 0.8 });
    const pillar = new THREE.Mesh(pillarGeo, pillarMat);
    pillar.position.y = 1.6;
    group.add(pillar);

    // Hazard Sweeper Arm
    const armGeo = new THREE.BoxGeometry(length, 0.7, 0.7);
    const armMat = new THREE.MeshStandardMaterial({
      color: 0xff0055, emissive: 0xff0033, emissiveIntensity: 0.75, metalness: 0.7
    });
    const arm = new THREE.Mesh(armGeo, armMat);
    arm.position.y = 1.9;
    arm.castShadow = true;
    group.add(arm);

    // Glowing Neon Endcaps
    const capGeo = new THREE.BoxGeometry(0.3, 0.8, 0.8);
    const capMat = new THREE.MeshStandardMaterial({ color: 0x00f0ff, emissive: 0x00f0ff, emissiveIntensity: 1.5 });
    const capL = new THREE.Mesh(capGeo, capMat); capL.position.set(-length/2 - 0.15, 1.9, 0); group.add(capL);
    const capR = new THREE.Mesh(capGeo, capMat); capR.position.set(length/2 + 0.15, 1.9, 0); group.add(capR);

    this.obstaclesGroup.add(group);
    this.colliders.push(arm);

    this.obstacles.push({ type: 'SWEEPER', group: arm, speed });
  }

  // 2. Sliding Pusher Block with Hazard Stripes & Mounting Frame
  createPusherBlock(pos, distance = 6.0, speed = 3.0) {
    const group = new THREE.Group();
    group.position.copy(pos);

    // Frame Track Guide
    const guideGeo = new THREE.BoxGeometry(distance + 4, 0.2, 3.2);
    const guideMat = new THREE.MeshStandardMaterial({ color: 0x1f2838, metalness: 0.85 });
    const guide = new THREE.Mesh(guideGeo, guideMat);
    guide.position.y = 0.1;
    group.add(guide);

    // Main Pusher Block
    const blockGeo = new THREE.BoxGeometry(3.6, 2.8, 2.8);
    const blockMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00, emissive: 0x994400, emissiveIntensity: 0.4, metalness: 0.6
    });
    const block = new THREE.Mesh(blockGeo, blockMat);
    block.position.y = 1.5;
    block.castShadow = true;
    group.add(block);

    this.obstaclesGroup.add(group);
    this.colliders.push(block);

    this.obstacles.push({
      type: 'PUSHER',
      mesh: block,
      baseX: pos.x,
      distance,
      speed,
      timeOffset: Math.random() * Math.PI
    });
  }

  // 3. Overhead Vertical Crusher Stomper
  createCrusherStomper(pos, speed = 2.5) {
    const group = new THREE.Group();
    group.position.copy(pos);

    // Support Girders
    const girderGeo = new THREE.CylinderGeometry(0.3, 0.3, 9.0, 8);
    const girderMat = new THREE.MeshStandardMaterial({ color: 0x223344, metalness: 0.8 });
    const gL = new THREE.Mesh(girderGeo, girderMat); gL.position.set(-5, 4.5, 0); group.add(gL);
    const gR = new THREE.Mesh(girderGeo, girderMat); gR.position.set( 5, 4.5, 0); group.add(gR);

    // Stomper Head Block
    const headGeo = new THREE.BoxGeometry(8.0, 2.5, 3.5);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xff2200, emissive: 0xaa1100, emissiveIntensity: 0.5, metalness: 0.7
    });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 7.0;
    head.castShadow = true;
    group.add(head);

    this.obstaclesGroup.add(group);
    this.colliders.push(head);

    this.obstacles.push({
      type: 'CRUSHER',
      mesh: head,
      baseY: 7.0,
      minY: 1.6,
      speed
    });
  }

  // 4. Swinging Pendulum Hammer
  createPendulum(pos, height = 12.0, speed = 2.5) {
    const group = new THREE.Group();
    group.position.copy(pos);

    // Gantry Mount Frame
    const frameGeo = new THREE.BoxGeometry(10.0, 0.4, 1.0);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x223344, metalness: 0.8 });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.y = height;
    group.add(frame);

    // Heavy Hammer Head
    const ballGeo = new THREE.SphereGeometry(1.6, 24, 24);
    const ballMat = new THREE.MeshStandardMaterial({
      color: 0xff0044, emissive: 0x880022, emissiveIntensity: 0.4, metalness: 0.95, roughness: 0.1
    });
    const pendulumBall = new THREE.Mesh(ballGeo, ballMat);

    const rodGeo = new THREE.CylinderGeometry(0.12, 0.12, height);
    const rodMat = new THREE.MeshStandardMaterial({ color: 0x778899, metalness: 0.9 });
    const rod = new THREE.Mesh(rodGeo, rodMat);
    rod.position.y = -height / 2;

    const pendulumGroup = new THREE.Group();
    pendulumGroup.position.y = height;
    pendulumGroup.add(rod);

    pendulumBall.position.y = -height;
    pendulumGroup.add(pendulumBall);

    group.add(pendulumGroup);
    this.obstaclesGroup.add(group);
    this.colliders.push(pendulumBall);

    this.obstacles.push({ type: 'PENDULUM', group: pendulumGroup, speed });
  }

  // 5. Nitro Speed Boost Chevron Pad
  createBoostPad(pos, width = 6.5, length = 8.5) {
    const group = new THREE.Group();
    group.position.copy(pos);

    const padGeo = new THREE.BoxGeometry(width, 0.12, length);
    const padMat = new THREE.MeshStandardMaterial({
      color: 0x00ff88, emissive: 0x00cc66, emissiveIntensity: 0.9, roughness: 0.2
    });
    const pad = new THREE.Mesh(padGeo, padMat);
    pad.position.y = 0.65;
    group.add(pad);

    // Glowing Arrow Chevrons
    const chevGeo = new THREE.ConeGeometry(1.2, 2.0, 3);
    const chevMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const chev1 = new THREE.Mesh(chevGeo, chevMat); chev1.rotation.x = -Math.PI / 2; chev1.position.set(0, 0.72, -1.8); group.add(chev1);
    const chev2 = new THREE.Mesh(chevGeo, chevMat); chev2.rotation.x = -Math.PI / 2; chev2.position.set(0, 0.72,  1.8); group.add(chev2);

    this.obstaclesGroup.add(group);

    this.obstacles.push({ type: 'BOOST_PAD', mesh: pad, pos: pos.clone() });
  }

  update(dt, elapsed) {
    for (const obs of this.obstacles) {
      if (obs.type === 'SWEEPER') {
        obs.group.rotation.y += obs.speed * dt;
      } else if (obs.type === 'PUSHER') {
        const offset = Math.sin(elapsed * obs.speed + obs.timeOffset) * (obs.distance / 2);
        obs.mesh.position.x = offset;
      } else if (obs.type === 'CRUSHER') {
        const t = (Math.sin(elapsed * obs.speed) + 1.0) / 2.0;
        obs.mesh.position.y = THREE.MathUtils.lerp(obs.minY, obs.baseY, t);
      } else if (obs.type === 'PENDULUM') {
        obs.group.rotation.z = Math.sin(elapsed * obs.speed) * 0.85;
      }
    }
  }

  getColliders() {
    return this.colliders;
  }
}
