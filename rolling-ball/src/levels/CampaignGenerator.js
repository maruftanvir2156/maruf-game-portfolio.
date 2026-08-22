// CampaignGenerator — Hybrid Deterministic Procedural + Authored 250 Level Campaign Generator
// Generates 250 physically valid, progressively challenging levels across 7 unique worlds.

function mulberry32(a) {
  return function() {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 8), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class CampaignGenerator {
  static generate250Levels() {
    const levels = [];

    for (let id = 0; id <= 250; id++) {
      if (id === 0) {
        // Level 0: Physics Test Bench
        levels.push({
          id: 0,
          title: 'PHYSICS TEST BENCH',
          subtitle: 'Mechanical Verification Course',
          targetTime: 90,
          totalCoins: 25,
          initialZone: 'WORLD_1_SKY_HAVEN',
          segments: [
            { type: 'STRAIGHT',     length: 50, width: 16, coins: 4 },
            { type: 'SLOPE_RAMP',   length: 25, riseHeight: 2.0, width: 16 },
            { type: 'SLOPE_RAMP',   length: 20, riseHeight: 4.5, width: 16 },
            { type: 'GENTLE_CURVE', angleDeg: 40, turnDir: 1, width: 16 },
            { type: 'BANKED_CURVE', angleDeg: 45, turnDir: -1, bankDeg: 15, width: 16 },
            { type: 'CHECKPOINT',   index: 1 },
            { type: 'SLOPE_RAMP',   length: 18, riseHeight: 3.0, width: 16 },
            { type: 'STRAIGHT',     length: 60, width: 20, coins: 8 },
            { type: 'STRAIGHT',     length: 40, width: 16, coins: 5 },
            { type: 'STRAIGHT',     length: 35, width: 8, coins: 8 },
            { type: 'FINISH_GATE' }
          ]
        });
        continue;
      }

      if (id === 1) {
        // Level 1: First Roll - Onboarding (World 1: Sky Haven)
        levels.push({
          id: 1,
          title: 'FIRST ROLL',
          subtitle: 'World 1: Sky Haven — Onboarding Track',
          targetTime: 50,
          totalCoins: 15,
          initialZone: 'WORLD_1_SKY_HAVEN',
          segments: [
            { type: 'STRAIGHT',     length: 40, width: 12, coins: 5 },
            { type: 'SLOPE_RAMP',   length: 25, riseHeight: 1.5, width: 12, nitroBoost: true },
            { type: 'STRAIGHT',     length: 45, width: 12, coins: 5 },
            { type: 'CHECKPOINT',   index: 1 },
            { type: 'GENTLE_CURVE', angleDeg: 15, turnDir: 1, width: 12 },
            { type: 'STRAIGHT',     length: 35, width: 12, coins: 5 },
            { type: 'PORTAL_RING',  targetZone: 'WORLD_1_SKY_HAVEN' },
            { type: 'FINISH_GATE' }
          ]
        });
        continue;
      }

      if (id === 2) {
        // Level 2: Cloud Curves (World 1: Sky Haven)
        // Fix: landing strips after boost ramps are wider (16) and longer (+15 units)
        // so a nitro-launched ball always lands on solid track, not in empty sky.
        levels.push({
          id: 2,
          title: 'CLOUD CURVES',
          subtitle: 'World 1: Sky Haven — Sweeping Turns & Launch Ramps',
          targetTime: 65,
          totalCoins: 25,
          initialZone: 'WORLD_1_SKY_HAVEN',
          segments: [
            { type: 'STRAIGHT',     length: 35,  width: 12, coins: 5 },
            { type: 'GENTLE_CURVE', angleDeg: 15, turnDir: -1, width: 12 },
            // Ramp 1: boost launch — landing is now 55 units long and 16 wide
            { type: 'SLOPE_RAMP',   length: 22,  riseHeight: 2.0, width: 12, nitroBoost: true },
            { type: 'STRAIGHT',     length: 55,  width: 16, coins: 8 },
            { type: 'GENTLE_CURVE', angleDeg: 15, turnDir: 1, width: 14 },
            { type: 'CHECKPOINT',   index: 1 },
            // Ramp 2: boost launch — landing is now 60 units long and 16 wide
            { type: 'SLOPE_RAMP',   length: 24,  riseHeight: 2.5, width: 12, nitroBoost: true },
            { type: 'STRAIGHT',     length: 60,  width: 16, coins: 12 },
            // Buffer straight before portal prevents gap at end of level
            { type: 'STRAIGHT',     length: 25,  width: 14 },
            { type: 'PORTAL_RING',  targetZone: 'WORLD_1_SKY_HAVEN' },
            { type: 'FINISH_GATE' }
          ]
        });
        continue;
      }

      // Procedurally Authored Hybrid for Levels 3–250
      const rand = mulberry32(id * 1000 + 42);

      // Map World Theme to 3 Stylized Reference Biomes
      const biomes = ['WORLD_1_AUTUMN_FOREST', 'WORLD_2_DESERT_CANYON', 'WORLD_3_LUSH_RIVER'];
      let worldTier = Math.min(7, Math.floor((id - 1) / 35) + 1);
      let worldKey  = biomes[(worldTier - 1) % biomes.length];

      // Scaled Difficulty Progression Parameters:
      // Level 1-5: 16m wide (Beginner)
      // Level 6-20: 12m wide (Intermediate)
      // Level 21-50: 8m wide (Advanced)
      // Level 51-250: 6m wide (Master)
      let trackWidth = 16;
      if (id >= 6 && id <= 20) trackWidth = 12;
      else if (id >= 21) trackWidth = 10;

      const segCount   = Math.min(16, 6 + Math.floor(worldTier * 1.2) + Math.floor(rand() * 3));
      const targetTime = 45 + segCount * 5;

      const segments = [];
      let currentCoins = 0;
      let checkpointIndex = 1;

      // Start runway
      segments.push({ type: 'STRAIGHT', length: 40 + Math.floor(rand() * 15), width: trackWidth, coins: 3 });
      currentCoins += 3;

      for (let s = 0; s < segCount; s++) {
        const typeRoll = rand();

        if (typeRoll < 0.30) {
          // Straight connector
          const len = 35 + Math.floor(rand() * 25);
          const coins = rand() > 0.4 ? 4 : 0;
          const pusher = worldTier >= 3 && rand() < 0.25;
          segments.push({ type: 'STRAIGHT', length: len, width: trackWidth, coins, pusherObstacle: pusher });
          currentCoins += coins;

        } else if (typeRoll < 0.52) {
          // Curve or Banked Curve
          const turnDir = rand() > 0.5 ? 1 : -1;
          const angle = 30 + Math.floor(rand() * 25);
          if (worldTier >= 2 && rand() > 0.4) {
            const bank = 10 + Math.floor(rand() * 10);
            segments.push({ type: 'BANKED_CURVE', angleDeg: angle, turnDir, bankDeg: bank, width: trackWidth });
          } else {
            segments.push({ type: 'GENTLE_CURVE', angleDeg: angle, turnDir, width: trackWidth });
          }

        } else if (typeRoll < 0.72) {
          // Slope Ramp
          const rise = 1.5 + Math.floor(rand() * (1.2 + worldTier * 0.4));
          const len = 20 + Math.floor(rand() * 10);
          const nitro = worldTier >= 3 && rand() < 0.3;
          segments.push({ type: 'SLOPE_RAMP', length: len, riseHeight: rise, width: trackWidth, nitroBoost: nitro });

          // Safe wide landing straight after ramp
          segments.push({ type: 'STRAIGHT', length: 50, width: Math.min(20, trackWidth + 4), coins: 4 });
          currentCoins += 4;

        } else if (typeRoll < 0.88 && worldTier >= 2) {
          // Split & Merge
          const splitLen = 40 + Math.floor(rand() * 20);
          const sweeper = worldTier >= 4 && rand() < 0.3;
          segments.push({ type: 'SPLIT_MERGE', splitLen, width: trackWidth, coins: 6, sweeperObstacle: sweeper });
          currentCoins += 6;

        } else if (worldTier >= 4 && rand() < 0.4) {
          // Vertical Loop
          segments.push({ type: 'VERTICAL_LOOP', radius: 18, width: Math.max(8, trackWidth - 4) });
        }

        // Add Checkpoint at ~50% progress
        if (s === Math.floor(segCount / 2)) {
          segments.push({ type: 'CHECKPOINT', index: checkpointIndex++ });
        }
      }

      // Portal Ring transition before end for end-of-world levels
      if (id % 35 === 0 && id < 245) {
        const nextWorlds = ['WORLD_2_GOLDEN_RIDGE', 'WORLD_3_RURAL_VALLEY', 'WORLD_4_CYBERPUNK', 'WORLD_5_MISTY_PEAKS', 'WORLD_6_VOLCANIC', 'WORLD_7_COSMIC_AURORA'];
        const targetZone = nextWorlds[Math.floor(id / 35) - 1] || 'WORLD_2_GOLDEN_RIDGE';
        segments.push({ type: 'PORTAL_RING', targetZone });
        segments.push({ type: 'STRAIGHT', length: 25, width: trackWidth });
      }

      // Finish Gate
      segments.push({ type: 'FINISH_GATE' });

      // Generate Level Title
      const titles = [
        'SKY RUNWAY', 'SUNSET DASH', 'CLOUD CRUISE', 'NEON SPEEDWAY',
        'STORM CHASER', 'COSMIC RIDGE', 'CELESTIAL PEAK', 'HYPER HEIGHTS',
        'VELOCITY WAY', 'WARP CITADEL', 'LIGHTNING STRIP', 'AURORA DRIFT'
      ];
      const titleName = `${titles[id % titles.length]} ${Math.floor(id / 10) + 1}`;

      levels.push({
        id,
        title: titleName,
        subtitle: `World ${worldTier} — Course ${id}`,
        targetTime,
        totalCoins: currentCoins,
        initialZone: worldKey,
        segments
      });
    }

    return levels;
  }
}
