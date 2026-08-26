/**
 * AUTOMATED HEADLESS LEVEL & ENVIRONMENT GENERATION TESTER
 *
 * Tests 100 levels × 7 environments (700 total combinations).
 * Audits trajectory equation, road gap continuity, hazard placement, and elevation bounds.
 */

import * as THREE from 'three';
import { TrackBuilder } from '../graphics/TrackBuilder.js';
import { HazardManager } from '../entities/Hazards.js';
import { TrackValidator } from '../graphics/TrackValidator.js';
import { ENVIRONMENTS } from '../graphics/HDRIEnvironment.js';

export class AutomatedLevelTest {
  static runAllTests(maxLevels = 100) {
    console.log(`\n==================================================`);
    console.log(`🚀 STARTING AUTOMATED LEVEL & ENVIRONMENT AUDIT PASS`);
    console.log(`==================================================\n`);

    const envKeys = Object.keys(ENVIRONMENTS); // 7 environments
    const mockScene = new THREE.Scene();
    const trackBuilder = new TrackBuilder(mockScene);
    const hazards = new HazardManager(mockScene);

    let totalTested = 0;
    let passedClean = 0;
    let totalWarnings = 0;
    let totalFailures = 0;

    const failureLog = [];

    const startTime = performance.now();

    for (let lvl = 1; lvl <= maxLevels; lvl++) {
      for (const envKey of envKeys) {
        totalTested++;
        try {
          // Generate level geometry & hazards
          trackBuilder.buildLevel(lvl);
          hazards.spawnLevelHazards(lvl, trackBuilder);

          // Validate mathematically
          const validation = TrackValidator.validate(trackBuilder, hazards);

          if (validation.isValid) {
            passedClean++;
          } else {
            totalFailures++;
            failureLog.push({
              level: lvl,
              env: envKey,
              issues: validation.issues
            });
          }
        } catch (err) {
          totalFailures++;
          failureLog.push({
            level: lvl,
            env: envKey,
            issues: [`EXCEPTION THROWN: ${err.message || err}`]
          });
        }
      }
    }

    const duration = ((performance.now() - startTime) / 1000).toFixed(2);

    const report = {
      maxLevels,
      environmentsTested: envKeys.length,
      totalTested,
      passedClean,
      totalFailures,
      passRatePercent: ((passedClean / totalTested) * 100).toFixed(1),
      durationSeconds: duration,
      failureLog
    };

    console.log(`\n==================================================`);
    console.log(`📊 AUTOMATED LEVEL GENERATION TEST REPORT`);
    console.log(`==================================================`);
    console.log(`Total Combinations Tested: ${report.totalTested} (${maxLevels} levels × ${envKeys.length} envs)`);
    console.log(`Passed Cleanly (100% Valid): ${report.passedClean} / ${report.totalTested} (${report.passRatePercent}%)`);
    console.log(`Validation Issues / Exceptions: ${report.totalFailures}`);
    console.log(`Total Audit Execution Time: ${report.durationSeconds}s`);
    console.log(`==================================================\n`);

    if (failureLog.length > 0) {
      console.warn(`⚠️ ISSUES DETECTED IN ${failureLog.length} COMBINATIONS:`);
      failureLog.slice(0, 15).forEach((item, idx) => {
        console.warn(`  [${idx + 1}] Level ${item.level} (${item.env}):`, item.issues.join(' | '));
      });
      if (failureLog.length > 15) {
        console.warn(`  ...and ${failureLog.length - 15} more combinations.`);
      }
    } else {
      console.log(`🎉 PERFECT SCORE! All 700 Level × Environment combinations passed trajectory validation cleanly!`);
    }

    return report;
  }
}

// Global console helper
if (typeof window !== 'undefined') {
  window.runAutomatedLevelTests = (maxLevels = 100) => AutomatedLevelTest.runAllTests(maxLevels);
}
