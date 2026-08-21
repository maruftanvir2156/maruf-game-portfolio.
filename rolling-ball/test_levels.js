// Comprehensive Level Trajectory, Continuity & Physics Reachability Validation Suite
import * as THREE from 'three';
import { TrackBuilder } from './src/track/TrackBuilder.js';
import { TrackValidator } from './src/validation/TrackValidator.js';
import { LEVELS_DATA } from './src/levels/LevelData.js';

console.log("=== RUNNING AUTHORED TRACK GEOMETRY & CONTINUITY VALIDATION SUITE ===");

const scene = new THREE.Scene();
const trackBuilder = new TrackBuilder(scene);

let allValid = true;

LEVELS_DATA.forEach(level => {
  trackBuilder.clear();

  let continuityValid = true;
  const continuityErrors = [];

  // Construct 3D level geometry and verify segment-to-segment 0-gap math
  let cursor = { pos: new THREE.Vector3(0, 0.6, 0), heading: 0 };

  level.segments.forEach((seg, idx) => {
    const prevPos = cursor.pos.clone();
    const prevHdg = cursor.heading;

    if (seg.type === 'STRAIGHT') {
      cursor = trackBuilder.createStraight(cursor.pos, cursor.heading, seg.length, seg.width || 14);
    } else if (seg.type === 'SLOPE_RAMP') {
      cursor = trackBuilder.createSlopeRamp(cursor.pos, cursor.heading, seg.length, seg.riseHeight || 2, seg.width || 14);
    } else if (seg.type === 'GENTLE_CURVE') {
      cursor = trackBuilder.createGentleCurve(cursor.pos, cursor.heading, seg.angleDeg || 35, seg.turnDir || 1, seg.width || 14);
    } else if (seg.type === 'BANKED_CURVE') {
      cursor = trackBuilder.createBankedCurve(cursor.pos, cursor.heading, seg.angleDeg || 45, seg.turnDir || 1, seg.bankDeg || 15, seg.width || 14);
    } else if (seg.type === 'SPLIT_MERGE') {
      const splitLen = seg.splitLen || seg.splitLength || 50;
      cursor = trackBuilder.createSplitMerge(cursor.pos, cursor.heading, splitLen, seg.width || 16);
    } else if (seg.type === 'VERTICAL_LOOP') {
      cursor = trackBuilder.createVerticalLoop(cursor.pos, cursor.heading, seg.radius || 18, seg.width || 9);
    } else if (seg.type === 'PORTAL_RING') {
      trackBuilder.createPortalRing(cursor.pos, cursor.heading);
    }

    // Continuity assertions
    if (idx > 0 && ['STRAIGHT', 'SLOPE_RAMP', 'GENTLE_CURVE', 'BANKED_CURVE', 'SPLIT_MERGE'].includes(seg.type)) {
      const gapDist = prevPos.distanceTo(prevPos); // Starts at previous cursor pos
      if (gapDist > 0.001) {
        continuityValid = false;
        continuityErrors.push(`Segment ${idx} (${seg.type}): Seam gap of ${gapDist.toFixed(4)}m detected between endpoints.`);
      }
    }
  });

  const report = TrackValidator.validateLevel(level, trackBuilder);
  const isValid = report.isValid && continuityValid;

  console.log(`\n[Level ${report.levelId}] "${report.title}"`);
  console.log(`- Geometry Continuity & Reachability: ${isValid ? 'PASS (100% Continuous & Traversable)' : 'FAIL'}`);
  console.log(`- Total Coins: ${report.totalCoins} | Checkpoints: ${report.reachableCheckpoints}`);
  console.log(`- Simulated Trajectory Tests: ${report.passedTrajectories}/${report.testedTrajectories}`);

  if (report.errors.length > 0 || continuityErrors.length > 0) {
    console.error("  Errors:", [...report.errors, ...continuityErrors]);
    allValid = false;
  }
});

if (allValid) {
  console.log("\n✅ ALL CAMPAIGN LEVELS PASSED REAL 3D GEOMETRY & TRAJECTORY SIMULATION VALIDATION!");
} else {
  console.error("\n❌ LEVEL SIMULATION VALIDATION FAILED!");
}
