/**
 * CONTINUOUS UNBOUNDED DIFFICULTY PROGRESSION SYSTEM
 *
 * Provides a single mathematical progression model for Levels 1 to 100+.
 * Smoothly scales track length, gap distances, obstacle density, hazard variety,
 * speed multipliers, and ramp frequencies with no abrupt cliff.
 */

export function difficultyForLevel(levelNumber) {
  const lvl = Math.max(1, Math.floor(levelNumber));

  // Normalized progression curve (0.0 at lvl 1 to 1.0 at lvl 100)
  // Easy band (1-33): 0.0 to 0.44 with gentle start (lvl 1-10 exponent 1.2)
  let norm = 0;
  if (lvl <= 33) {
    const t = (lvl - 1) / 32; // 0..1 across Easy
    norm = Math.pow(t, 1.2) * 0.44; // gentle early ramp (1-10), noticeable late Easy ramp (11-33)
  } else if (lvl <= 66) {
    const t = (lvl - 34) / 32; // 0..1 across Medium
    norm = 0.44 + t * 0.29; // 0.44 to 0.73
  } else {
    const t = Math.min(1.0, (lvl - 67) / 33); // 0..1 across Hard
    norm = 0.73 + Math.pow(t, 0.9) * 0.27; // 0.73 to 1.00
  }

  // 1. Track Length: 120m at Level 1 up to 350m at L33, 500m at L66, 650m at L100
  const trackLength = Math.round(120 + norm * 530);

  // 2. Gap Width / Jump Distance: 10m at L1 up to 17m at L33, 22m at L66, 26m max at L100
  const gapWidth = Number((10.0 + norm * 16.0).toFixed(1));

  // 3. Obstacle Density: Hazards per 100m (1.8 at L1 up to 4.8 at L33, 6.7 at L66, 8.5 at L100)
  const obstacleDensity = Number((1.8 + norm * 6.7).toFixed(1));

  // 4. Obstacle Variety: Progressive hazard unlocks
  const unlockedHazards = ['barrels'];
  if (lvl >= 3) unlockedHazards.push('saw_blades');
  if (lvl >= 7) unlockedHazards.push('pendulums');
  if (lvl >= 12) unlockedHazards.push('cat_paws');
  if (lvl >= 18) unlockedHazards.push('crushers');
  if (lvl >= 25) unlockedHazards.push('spike_balls');
  if (lvl >= 34) unlockedHazards.push('boulders');
  if (lvl >= 45) unlockedHazards.push('wall_gaps');
  if (lvl >= 58) unlockedHazards.push('rotating_bars');
  if (lvl >= 72) unlockedHazards.push('hammers');

  // 5. Speed Multiplier & Booster Frequency
  const speedMultiplier = Number((1.00 + norm * 0.60).toFixed(2));
  const boosterFrequency = Number((0.20 + norm * 0.40).toFixed(2));

  // 6. Ramp & Launch Frequency
  const rampFrequency = Number((0.12 + norm * 0.28).toFixed(2));
  const launchRampFrequency = lvl === 1 ? 0 : Number((0.08 + norm * 0.24).toFixed(2));
  const platformFrequency = Number((0.15 + norm * 0.20).toFixed(2));

  return {
    levelNumber: lvl,
    trackLength,
    gapWidth,
    obstacleDensity,
    unlockedHazards,
    speedMultiplier,
    boosterFrequency,
    rampFrequency,
    launchRampFrequency,
    platformFrequency,
    progressFactor: Number(norm.toFixed(3))
  };
}
