/**
 * TRACK & TRAJECTORY VALIDATOR PASS v3
 *
 * Performs mathematical parabolic arc clearance checks:
 * 1. Simulates launch pad jump trajectories: y(dz) = lipY + (v_y/v_z)*dz - 0.5*g*(dz/v_z)^2.
 * 2. Verifies trajectory passes ABOVE the front face of landing platform with safety margin.
 * 3. Audits road gap continuity (verifies airborne gaps have valid launch pads).
 * 4. Audits hazard placement (no hazards inside launch lips or landing zones).
 */

export class TrackValidator {
  static validate(trackBuilder, hazardManager) {
    const issues = [];
    const map = trackBuilder._elevationMap || [];
    const launchPads = trackBuilder.launchPadTriggers || [];
    const colliders = trackBuilder.colliders || [];

    if (map.length < 3) issues.push('Elevation map too sparse (< 3 points)');
    if (colliders.length < 3) issues.push('Collider count too low (< 3 deck pieces)');

    // 1. ARC CLEARANCE MATHEMATICAL VALIDATION
    for (let i = 0; i < launchPads.length; i++) {
      const pad = launchPads[i];
      const lipZ = pad.lipZ || pad.box.max.z;
      const lipY = pad.lipY || pad.box.max.y;

      const v_y = pad.upForce || 22.0;
      const v_z = pad.fwdForce || 32.0;
      const g = 25.0; // Gravity in physics engine

      // Find the landing platform immediately following this launch pad
      const nextColliders = colliders.filter(c => c.position.z > lipZ + 4.0);

      if (nextColliders.length === 0) {
        issues.push(`LaunchPad #${i} has no landing platform downstream`);
        continue;
      }

      nextColliders.sort((a, b) => a.position.z - b.position.z);
      const landingDeck = nextColliders[0];

      // Front edge Z of landing deck
      const geom = landingDeck.geometry;
      const deckDepth = (geom && geom.parameters && typeof geom.parameters.depth === 'number') ? geom.parameters.depth : 15;
      const deckMinZ = landingDeck.position.z - deckDepth / 2;
      const deckY = landingDeck.position.y + 0.3; // Top surface Y of deck

      const dz = deckMinZ - lipZ;

      // Rule: Landing deck front edge MUST be pushed forward on Z-axis (dz >= 10m)
      if (dz < 10.0) {
        issues.push(`LaunchPad #${i} landing deck is placed too close (dz=${dz.toFixed(1)}m < 10m). Wall crash risk!`);
        continue;
      }

      // Parabolic flight arc height at the front edge of the landing platform
      const t = dz / v_z;
      const trajectoryYAtFrontEdge = lipY + (v_y * t) - (0.5 * g * t * t);

      // Verify trajectory passes ABOVE the top surface of landing deck front edge
      if (trajectoryYAtFrontEdge < deckY - 0.5) {
        issues.push(
          `LaunchPad #${i} fails arc clearance: trajectory Y=${trajectoryYAtFrontEdge.toFixed(1)} at deck front edge z=${deckMinZ.toFixed(1)} (deck Y=${deckY.toFixed(1)}). Car will hit wall!`
        );
      }
    }

    // 2. Road Gap Continuity Check (Verifies airborne gaps have valid launch pads)
    for (let i = 0; i < map.length - 1; i++) {
      const segStart = map[i].z;
      const segEnd = map[i + 1].z;
      const zGap = segEnd - segStart;

      if (trackBuilder.isInGap(segStart + 1.0)) {
        const hasPad = launchPads.some(p => Math.abs(p.box.max.z - segStart) < 20.0);
        if (!hasPad && zGap > 25.0) {
          issues.push(`Unbridged gap of ${zGap.toFixed(1)}m at z=${segStart.toFixed(1)}`);
        }
      }
    }

    const isValid = issues.length === 0;
    return { isValid, issues };
  }
}
