// Automated Level Geometry & Physics Reachability Validator
export class LevelValidator {
  static validate(levelData) {
    const report = {
      levelId: levelData.id,
      levelTitle: levelData.title,
      isValid: true,
      errors: [],
      warnings: [],
      totalLength: 0,
      reachableCheckpoints: 0,
      reachableCoins: 0
    };

    if (!levelData.segments || levelData.segments.length === 0) {
      report.isValid = false;
      report.errors.push("Level data contains no track segments.");
      return report;
    }

    let currentPos = { x: 0, y: 0, z: 0 };
    let expectedVelocity = 28.0; // Standard ball rolling speed

    levelData.segments.forEach((seg, idx) => {
      // 1. Validate Jump Distance vs Launch Ramp Velocity
      if (seg.type === 'JUMP_GAP') {
        const gapLength = seg.gapLength || 15;
        const heightDrop = seg.heightDrop || 0;
        const gravity = 24.0;

        // Trajectory math: t_air = sqrt(2 * (h_launch - h_land) / g)
        const airTime = Math.sqrt(Math.max(0.1, (2 * Math.abs(heightDrop + 4)) / gravity));
        const maxReachableGap = expectedVelocity * airTime + 8.0; // 8 units safety margin

        if (gapLength > maxReachableGap) {
          report.isValid = false;
          report.errors.push(`Segment ${idx} (${seg.type}): Gap length ${gapLength}m exceeds maximum jump reachability ${maxReachableGap.toFixed(1)}m.`);
        }
      }

      // 2. Validate Split & Merge Path Consistency
      if (seg.type === 'SPLIT_MERGE') {
        if (!seg.splitLength || seg.splitLength <= 0) {
          report.isValid = false;
          report.errors.push(`Segment ${idx} (SPLIT_MERGE): Missing split length attribute.`);
        }
      }

      // 3. Count Checkpoints & Collectibles
      if (seg.checkpoint) report.reachableCheckpoints++;
      if (seg.coins) report.reachableCoins += seg.coins;
    });

    return report;
  }
}
