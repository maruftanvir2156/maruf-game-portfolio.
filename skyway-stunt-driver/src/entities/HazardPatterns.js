/**
 * HANDCRAFTED HAZARD & COLLECTIBLE PATTERNS v3
 *
 * Structured gameplay patterns:
 *   - CoinsToHammer: 4 coins leading into a sweeping hammer
 *   - SawToJump: Dual saw blades framing a centerline lane
 *   - SpikeHallway: Alternating left/right spiked hazards
 *   - DoubleHammer: Counter-rotating dual sweepers
 *   - RiskPathCollectibles: Edge-line reward vs center safe line
 *   - PendulumGauntlet: 2-3 swinging pendulums in sequence with staggered timing
 *   - CrusherCorridor: Straight stretch with 2 slam-pistons requiring timed dashes
 *   - BoulderDash: Downhill stretch with a rolling boulder chasing down the track
 *   - WallGapMaze: Sliding wall with a dodgeable gap
 */

export class HazardPatterns {
  /**
   * Spawns a structured pattern based on pattern key.
   * surfaceYFunc(z) returns track Y at z.
   * hazardManager exposes all raw spawn methods.
   */
  static spawnPattern(patternKey, startZ, surfaceYFunc, hazardManager) {
    if (!hazardManager) return;

    const isGap = (z) => {
      return hazardManager._tb && hazardManager._tb.isInGap && hazardManager._tb.isInGap(z);
    };

    switch (patternKey) {
      case 'PendulumGauntlet': {
        // 3 pendulums in sequence with staggered phase offsets
        for (let i = 0; i < 3; i++) {
          const z = startZ + i * 9.0;
          if (isGap(z)) continue;
          hazardManager._spawnPendulumSnapped(0, z, i * 1.2);
        }
        break;
      }

      case 'CrusherCorridor': {
        // 2 slam-pistons with staggered delay (0s and 0.8s) + coins between
        for (let i = 0; i < 2; i++) {
          const z = startZ + i * 12.0;
          if (isGap(z)) continue;
          hazardManager._spawnCrusherSnapped(0, z, i * 0.8);
          // Coins in safe zone between pistons
          if (i === 0) {
            const cz = startZ + 6.0;
            if (!isGap(cz)) hazardManager._spawnCoin(0, surfaceYFunc(cz) + 0.5, cz);
          }
        }
        break;
      }

      case 'BoulderDash': {
        // 1 rolling boulder coming down the track + edge coin reward
        if (!isGap(startZ)) {
          hazardManager._spawnBoulderSnapped(startZ, 14.0);
          for (let i = 0; i < 5; i++) {
            const cz = startZ + i * 4.0;
            if (!isGap(cz)) {
              const y = surfaceYFunc(cz);
              hazardManager._spawnCoin(2.0, y + 0.5, cz);
            }
          }
        }
        break;
      }

      case 'WallGapMaze': {
        // Sliding wall gap
        if (!isGap(startZ)) {
          hazardManager._spawnWallGapSnapped(startZ, 2.5);
        }
        break;
      }

      case 'CoinsToHammer': {
        for (let i = 0; i < 4; i++) {
          const z = startZ + i * 3.5;
          if (isGap(z)) continue;
          hazardManager._spawnCoin(0, surfaceYFunc(z) + 0.5, z);
        }
        const hz = startZ + 14.0;
        if (!isGap(hz)) hazardManager._spawnPendulumSnapped(0, hz, 0);
        break;
      }

      case 'SawToJump': {
        if (isGap(startZ)) break;
        const y1 = surfaceYFunc(startZ);
        hazardManager._spawnSawBlade(-1.8, y1, startZ);
        hazardManager._spawnSawBlade(1.8, y1, startZ);
        break;
      }

      case 'SpikeHallway': {
        for (let i = 0; i < 3; i++) {
          const z = startZ + i * 7.0;
          if (isGap(z)) continue;
          const x = (i % 2 === 0) ? -1.5 : 1.5;
          hazardManager._spawnSpikeBall(x, surfaceYFunc(z), z);
        }
        break;
      }

      case 'DoubleHammer': {
        if (isGap(startZ)) break;
        const y2 = surfaceYFunc(startZ);
        hazardManager._spawnRotatingBar(0, y2, startZ, 4.5);
        const z2 = startZ + 15;
        if (!isGap(z2)) {
          hazardManager._spawnRotatingBar(0, surfaceYFunc(z2), z2, -4.5);
        }
        break;
      }

      case 'RiskPathCollectibles':
      default: {
        for (let i = 0; i < 6; i++) {
          const z = startZ + i * 3.5;
          if (isGap(z)) continue;
          const y = surfaceYFunc(z);
          hazardManager._spawnCoin(2.2, y + 0.5, z);
          if (i % 2 === 0) hazardManager._spawnCoin(0, y + 0.5, z);
        }
        break;
      }
    }
  }
}
