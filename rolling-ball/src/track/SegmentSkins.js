// SegmentSkins — Data-Driven Track Surface Skin System for Skyway Stunt Driver
import * as THREE from 'three';

// ── Texture Generators ───────────────────────────────────────────────────────
function makeWoodCautionTexture() {
  const W = 512, H = 512;
  const cv  = document.createElement('canvas');
  cv.width  = W; cv.height = H;
  const ctx = cv.getContext('2d');

  // Base wood fill
  ctx.fillStyle = '#6b4423';
  ctx.fillRect(0, 0, W, H);

  // Wood planks
  ctx.fillStyle = '#543418';
  for (let y = 0; y < H; y += 64) {
    ctx.fillRect(0, y, W, 4);
    for (let x = (y % 128 === 0 ? 0 : 128); x < W; x += 256) {
      ctx.fillRect(x, y, 4, 64);
    }
  }

  // Wood grain lines
  ctx.strokeStyle = 'rgba(40, 20, 5, 0.25)';
  ctx.lineWidth = 2;
  for (let i = 0; i < 24; i++) {
    const y = Math.random() * H;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y + (Math.random() - 0.5) * 15);
    ctx.stroke();
  }

  // Yellow/black caution hazard edging along left (0-48px) and right (464-512px)
  const stripeW = 48;
  const drawCautionEdging = (xOffset) => {
    ctx.fillStyle = '#ffcc00';
    ctx.fillRect(xOffset, 0, stripeW, H);
    ctx.fillStyle = '#111111';
    for (let y = -stripeW; y < H + stripeW; y += 32) {
      ctx.beginPath();
      ctx.moveTo(xOffset, y);
      ctx.lineTo(xOffset + stripeW, y + stripeW);
      ctx.lineTo(xOffset + stripeW, y + stripeW + 16);
      ctx.lineTo(xOffset, y + 16);
      ctx.closePath();
      ctx.fill();
    }
  };

  drawCautionEdging(0);
  drawCautionEdging(W - stripeW);

  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1, 4);
  return tex;
}

function makeBrickChevronTexture() {
  const W = 512, H = 512;
  const cv  = document.createElement('canvas');
  cv.width  = W; cv.height = H;
  const ctx = cv.getContext('2d');

  // Left lane (0-256): Yellow Brick Road
  ctx.fillStyle = '#e6b800';
  ctx.fillRect(0, 0, W / 2, H);

  ctx.strokeStyle = '#997a00';
  ctx.lineWidth = 3;
  for (let y = 0; y < H; y += 32) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W / 2, y); ctx.stroke();
    const xOff = (y % 64 === 0) ? 0 : 32;
    for (let x = xOff; x < W / 2; x += 64) {
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 32); ctx.stroke();
    }
  }

  // Right lane (256-512): Striped Chevron Boost Lane
  ctx.fillStyle = '#0a1628';
  ctx.fillRect(W / 2, 0, W / 2, H);

  // Chevron arrows pointing forward (upward on canvas)
  ctx.fillStyle = '#00f0ff';
  ctx.shadowColor = '#00f0ff';
  ctx.shadowBlur = 12;

  for (let y = 60; y < H; y += 128) {
    const cx = (W * 3) / 4;
    ctx.beginPath();
    ctx.moveTo(cx, y - 40);
    ctx.lineTo(cx + 80, y + 20);
    ctx.lineTo(cx + 50, y + 20);
    ctx.lineTo(cx, y - 20);
    ctx.lineTo(cx - 50, y + 20);
    ctx.lineTo(cx - 80, y + 20);
    ctx.closePath();
    ctx.fill();
  }

  ctx.shadowBlur = 0; // reset shadow

  // Middle divider line
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(W / 2 - 4, 0, 8, H);

  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1, 4);
  return tex;
}

function makeVoxelGrassTexture() {
  const W = 256, H = 256;
  const cv  = document.createElement('canvas');
  cv.width  = W; cv.height = H;
  const ctx = cv.getContext('2d');

  // Voxel green grid fill
  const colors = ['#44aa33', '#389928', '#55bb44', '#2d8020', '#4dbd3b'];
  const pSize = 16;
  for (let y = 0; y < H; y += pSize) {
    for (let x = 0; x < W; x += pSize) {
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      ctx.fillRect(x, y, pSize, pSize);
    }
  }

  // Dark border grid lines for blocky voxel effect
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
  ctx.lineWidth = 2;
  for (let y = 0; y <= H; y += pSize) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }
  for (let x = 0; x <= W; x += pSize) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1, 2);
  return tex;
}

// ── Segment Skins Registry ──────────────────────────────────────────────────
export const SEGMENT_SKINS = {
  WOOD_CAUTION: {
    id: 'WOOD_CAUTION',
    name: 'Wood Plank Caution',
    getMaterial: () => new THREE.MeshStandardMaterial({
      map: makeWoodCautionTexture(),
      roughness: 0.45,
      metalness: 0.15
    })
  },
  BRICK_CHEVRON: {
    id: 'BRICK_CHEVRON',
    name: 'Yellow Brick Chevron Boost',
    getMaterial: () => new THREE.MeshStandardMaterial({
      map: makeBrickChevronTexture(),
      roughness: 0.25,
      metalness: 0.50,
      emissive: 0x004466,
      emissiveIntensity: 0.30
    })
  },
  VOXEL_GRASS: {
    id: 'VOXEL_GRASS',
    name: 'Voxel Grass Dirt',
    getMaterial: () => new THREE.MeshStandardMaterial({
      map: makeVoxelGrassTexture(),
      roughness: 0.70,
      metalness: 0.05
    })
  }
};
