import * as THREE from 'three';

/**
 * HANDCRAFTED SEGMENT MODULES & STRUCTURAL DECORATORS
 *
 * Provides architectural support pillars, cross braces, LED neon strips,
 * glass bridges, and steel truss structures extending to the ocean floor (y = -60).
 */
export class TrackModules {
  /**
   * Adds structural steel support pillars beneath a track segment extending to ocean floor (y = -60).
   */
  static addSupportPillars(group, x, y, z, width = 6.0) {
    const groundY = -250.0;
    const deckBottomY = y - 0.6; // Stop pillar top cap at bottom of track deck
    const pillarHeight = deckBottomY - groundY;
    if (pillarHeight <= 1.0) return;

    const pillarGeo = new THREE.CylinderGeometry(0.35, 0.45, pillarHeight, 12);
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.3
    });

    // Left & Right Support Legs anchored underneath track deck
    const legL = new THREE.Mesh(pillarGeo, pillarMat);
    legL.position.set(x - width * 0.4, groundY + pillarHeight / 2, z);
    legL.castShadow = true;
    group.add(legL);

    const legR = new THREE.Mesh(pillarGeo, pillarMat);
    legR.position.set(x + width * 0.4, groundY + pillarHeight / 2, z);
    legR.castShadow = true;
    group.add(legR);

    // Cross Brace Beam underneath road
    const braceGeo = new THREE.BoxGeometry(width + 0.6, 0.3, 0.4);
    const braceMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.9 });
    const brace = new THREE.Mesh(braceGeo, braceMat);
    brace.position.set(x, y - 0.5, z);
    group.add(brace);
  }

  /**
   * Adds LED Neon Edge Strips along track borders.
   */
  static addLEDNeonStrips(group, x, y, startZ, length, width = 6.0, colorHex = 0x06b6d4) {
    const stripGeo = new THREE.BoxGeometry(0.12, 0.12, length);
    const stripMat = new THREE.MeshStandardMaterial({
      color: colorHex,
      emissive: colorHex,
      emissiveIntensity: 1.5,
      roughness: 0.1
    });

    const leftStrip = new THREE.Mesh(stripGeo, stripMat);
    leftStrip.position.set(x - width / 2 + 0.1, y + 0.05, startZ + length / 2);
    group.add(leftStrip);

    const rightStrip = new THREE.Mesh(stripGeo, stripMat);
    rightStrip.position.set(x + width / 2 - 0.1, y + 0.05, startZ + length / 2);
    group.add(rightStrip);
  }

  /**
   * Creates a Glass Bridge deck with translucent material.
   */
  static createGlassBridgeMat() {
    return new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.05,
      metalness: 0.9,
      transparent: true,
      opacity: 0.65
    });
  }
}
