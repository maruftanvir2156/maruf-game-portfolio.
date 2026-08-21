# 🌌 Sphere Velocity — 3D Rolling-Ball Platformer

> **"Sky-High 3D Precision Rolling"** — A portrait-first mobile platformer where you guide a physics-simulated ball across floating sky tracks, through sweeping curves, nitro ramps, and animated hazards, across a 250-level campaign spanning 7 unique worlds.

---

## 📋 Table of Contents

1. [Gameplay Overview](#gameplay-overview)
2. [Controls](#controls)
3. [Game Screens & UI](#game-screens--ui)
4. [Gameplay Mechanics](#gameplay-mechanics)
5. [Level Design & Campaign](#level-design--campaign)
6. [Obstacle System](#obstacle-system)
7. [Technical Architecture](#technical-architecture)
8. [Module Reference](#module-reference)
9. [Development & Build](#development--build)
10. [Debug Tools](#debug-tools)

---

## Gameplay Overview

Sphere Velocity is a **portrait-orientation 3D rolling-ball platformer** designed for mobile-first play. The player controls a ball rolling automatically forward along procedurally-generated sky tracks. The objective is to reach the **Finish Gate** at the end of each level while:

- Collecting **gem coins** scattered along the track
- Activating **checkpoints** to save respawn positions
- Avoiding falling off the track edges or being hit by hazard obstacles
- Aiming to beat the target time for a full star rating

The game runs in the browser (Web) and is packaged as a native Android app via Capacitor.

---

## Controls

### 📱 Mobile (Primary)

| Action | Gesture |
|---|---|
| **Steer Left / Right** | Drag finger horizontally anywhere on screen |
| **Boost Forward** | Swipe upward (>20px vertical delta) — doubles forward acceleration |
| **Jump** | Double-tap anywhere on screen (within 300ms) |
| **Pause** | Tap the pause button (top-left HUD) |

Touch input uses a **relative drag model** — the steer value is derived from the *delta* of the touch position each frame, not an absolute joystick position. This makes steering feel natural regardless of where the finger is placed on screen.

### ⌨️ Keyboard (Desktop / Testing)

| Key | Action |
|---|---|
| `A` / `←` | Steer Left |
| `D` / `→` | Steer Right |
| `W` / `↑` | Accelerate Forward (2× multiplier) |
| `S` / `↓` | Brake / Slow (0.5× multiplier) |
| `Space` | Jump |
| `F3` | Toggle forensic debug telemetry overlay |
| `F4` | Toggle physics collider wireframe visualisation |

### 🖱️ Mouse (Desktop Fallback)

| Action | Input |
|---|---|
| **Steer** | Click and drag horizontally (relative delta model, same as touch) |

> **Gyroscope note:** The settings menu includes a "Calibrate & Enable" gyroscope button, but gyroscope steering is intentionally disabled in the current build. The API hook is preserved for future re-enablement.

---

## Game Screens & UI

```
Main Menu ──► Level Select
     │
     ▼
  Gameplay HUD ──► Pause Menu ──► Settings
     │                               │
     ▼                               └──► Main Menu
  Victory Screen ──► Next Level / Replay / Menu
```

### Main Menu
- Ball skin preview with animated CSS sphere
- **PLAY GAME** — starts from saved progress
- **SELECT LEVEL** — grid of all unlocked levels
- **SETTINGS & GYRO** — audio toggle, gyro toggle, telemetry toggle

### Gameplay HUD (in-game)
- **Level badge** (top-left)
- **Gem coin counter** (top-right)
- **Progress bar** with Start / Checkpoint / Finish nodes
- **Speedometer** (bottom-left, in km/h)
- **Zone tag** (bottom-right, current world biome name)

### Victory Screen
- Level name + star rating (1–3 stars based on time)
- Completion stats: time elapsed, coins collected vs total
- **Next Level**, **Replay**, **Menu** actions

---

## Gameplay Mechanics

### Ball Movement

The ball **always rolls forward automatically** (`forwardInput = 1.0` by default). Player agency is exercised through:

- **Lateral steering** to navigate curves and avoid falling off edges
- **Forward acceleration boosts** via swipe-up or `W` key (`forwardInput = 2.0`)
- **Jumping** to clear obstacles or reach elevated sections

#### Speed
| State | Max Speed | Acceleration |
|---|---|---|
| Normal | 26 units/s | 22 units/s² |
| Boost active | 44 units/s | 45 units/s² |

#### Jump
- **Impulse:** +14.5 m/s vertical velocity
- **Air control:** 60% of ground steering and forward acceleration power remain active mid-air
- **Fast-fall:** When falling (velocity.y < 0), gravity is multiplied by 1.85× for a satisfying heavy-ball feel

### Coin Collection

Gem coins float slightly above the track (`y + 1.5`). When the ball enters a coin's pickup radius, the coin is collected, a burst particle effect plays, and a coin sound fires. The total count is tracked on the HUD and displayed on the victory screen.

### Checkpoints

Checkpoints are glowing ring gates placed at roughly the midpoint of each level. Passing through one saves that position as the ball's respawn origin. A beacon particle burst and checkpoint sound confirm activation.

### Respawning

If the ball falls below the kill plane (`y < -12`), or if a NaN position is detected (physics safety net), the ball instantly teleports back to the last activated checkpoint position with velocity zeroed. The screen fades to black and fades back in over 0.5 seconds.

### Nitro Boost Pads

Green glowing chevron pads placed on ramps trigger an `applyBoost()` call: `velocity.z += 12` clamped to a minimum of 38 units/s, with a 1.4-second boost timer.

### Portal Rings

Decorative glowing ring gates placed near the end of worlds trigger an **environment zone transition**: the sky, lighting colour, fog, and track material theme all crossfade to a new world biome.

### Finish Gate

A glowing golden arch at the end of every level. Entering it triggers the victory sequence, saves progress to `localStorage`, and shows the Victory Screen.

### Star Rating

| Stars | Condition |
|---|---|
| ⭐⭐⭐ | Completed in ≤ target time |
| ⭐⭐ | Completed in ≤ 1.5× target time |
| ⭐ | Completed (any time) |

---

## Level Design & Campaign

### World Structure

The campaign contains **250 levels** spanning **7 world biomes**:

| Levels | World | Theme |
|---|---|---|
| 1–10 | World 1: Sky Haven | Floating cloudscape, pastel sky |
| 11–20 | World 2: Rural Valley | Rolling hills, warm afternoon light |
| 21–30 | World 3: Cyberpunk | Neon-lit urban skyline, rain |
| 31–40 | World 4: Volcanic | Lava glow, dark storm clouds |
| 41–50 | World 5: Misty Peaks | Fog, cool blue mountainscapes |
| 51–60 | World 6: Golden Desert | Sunset dunes, warm amber sky |
| 61–250 | World 7: Cosmic Void | Deep space, aurora nebulae |

### Track Segment Types

Levels are assembled from a vocabulary of **7 segment primitives**:

| Type | Description |
|---|---|
| `STRAIGHT` | Flat rectangular deck, variable length and width |
| `SLOPE_RAMP` | Rising inclined section with configurable height delta |
| `GENTLE_CURVE` | Flat curved turn (configurable angle + direction) |
| `BANKED_CURVE` | Curved turn with lateral banking (configurable bank angle) |
| `VERTICAL_LOOP` | Full 360° loop (available from World 4+) |
| `SPLIT_MERGE` | Track splits into two lanes then rejoins |
| `PORTAL_RING` | Environment transition trigger gate |
| `CHECKPOINT` | Mid-level save point ring |
| `FINISH_GATE` | Level completion arch |

### Difficulty Scaling

| Level Range | Track Width | Notes |
|---|---|---|
| 1–5 | 16 m | Beginner — wide, forgiving |
| 6–20 | 12 m | Intermediate — moderate challenge |
| 21–50 | 10 m | Advanced — tighter margins |
| 51–250 | ~6–10 m | Master — precise steering required |

### Procedural Generation

Levels 3–250 are generated by `CampaignGenerator.generate250Levels()` using a **seeded `mulberry32` PRNG** (seed = `levelId * 1000 + 42`). This guarantees every level is reproducible and deterministic across all devices. The generator uses probability weights per segment type that shift with world tier:

- `0–30%` probability → STRAIGHT connector
- `30–52%` → GENTLE_CURVE or BANKED_CURVE (banked curves unlock at World 2+)
- `52–72%` → SLOPE_RAMP + wide landing straight
- `72–88%` → SPLIT_MERGE (unlocks at World 2+)
- `88%+` → VERTICAL_LOOP (unlocks at World 4+, 40% chance when tier ≥ 4)

Obstacles are probabilistically placed per segment type: pushers unlock at World 3+, sweepers at World 4+.

---

## Obstacle System

Four animated hazard archetypes are managed by `ObstacleManager`. All obstacles are registered as physics colliders and animated every frame in `update(dt, elapsed)`.

### 1. Rotating Sweeper Bar
A horizontal arm rotates continuously around a central spindle mounted on the track surface. The arm has neon-glowing endcaps. It rotates in the Y-axis at a configurable `speed` (default: 2.2 rad/s).

### 2. Sliding Pusher Block
An orange hazard block slides left–right along a track guide using sinusoidal motion:
```
position.x = sin(elapsed × speed + timeOffset) × (distance / 2)
```
Each pusher has a random `timeOffset` so multiple pushers are out of phase.

### 3. Crusher Stomper
A large red block descends from overhead girders and rises back up in a looping vertical oscillation:
```
position.y = lerp(minY=1.6, baseY=7.0, (sin(elapsed × speed) + 1) / 2)
```
The ball must time its passage or boost through before the crusher descends.

### 4. Swinging Pendulum
A heavy sphere on a long rod swings in a sinusoidal arc around its pivot point:
```
rotation.z = sin(elapsed × speed) × 0.85  (radians)
```
The pendulum must be dodged laterally as it sweeps across the track width.

### 5. Nitro Boost Pad *(not an obstacle — pickup)*
A glowing green chevron pad with directional arrow cones. Triggers a velocity burst when the ball passes over it. Does not register as a physics collider — proximity is checked via `distanceTo()` in the `GameApp` game loop.

---

## Technical Architecture

### System Overview

```
GameApp (main orchestrator)
├── THREE.WebGLRenderer        — WebGL canvas, ACES tone mapping, PCF shadows
├── THREE.Scene                — scene graph root
├── THREE.PerspectiveCamera    — FOV 60, near 0.1, far 1500
│
├── PhysicsEngine              — 120Hz fixed-timestep arcade physics
│   ├── 5-ray downward ground probe (centre + 4 offsets)
│   ├── 8-direction side collision resolution
│   ├── Surface-tangent rolling rotation
│   └── Ring-buffer telemetry (10-frame)
│
├── PlayerBall                 — visual ball mesh + PBR texture + point light
├── CameraController           — track-locked chase camera, horizon-stable
├── InputManager               — touch drag, keyboard, mouse drag, double-tap jump
│
├── TrackBuilder               — procedural segment geometry factory
├── ObstacleManager            — animated hazard archetypes + collider registry
├── EnvironmentSystem          — world biomes, dynamic sky, fog, lighting
│
├── Collectible[]              — coin pickup entities
├── Checkpoint[]               — mid-level save ring entities
├── FinishGate                 — level completion arch entity
│
├── ParticleSystem             — GPU-instanced particle bursts (coins, portals, checkpoints)
├── SoundManager               — Web Audio API procedural sounds
└── UIManager                  — HUD, modals, menus, skin selector
```

### Physics Engine (`PhysicsEngine.js`)

The physics engine uses a **fixed-timestep accumulator loop** with up to 8 sub-steps per render frame:

```
accumulator += renderDt
while (accumulator >= fixedDt && steps < MAX_STEPS):
    _fixedStep(fixedDt, ...)
    accumulator -= fixedDt
```

Each fixed step:
1. **Ground detection** — 5 downward raycasts (centre + 4 cardinal offsets at ±0.4m). If any ray hits within `radius + 0.35m`, the ball is grounded and the surface normal is extracted from the face.
2. **Camera-relative acceleration** — forward and steer forces are computed relative to the camera's world direction, projected onto the ground plane.
3. **Jump** — pure Y-axis impulse (`+14.5 m/s`). Zero lateral drift added.
4. **Position integration** — `position += velocity × dt`
5. **Side collision** — 8-direction horizontal raycasts at radius + 0.04m. Pushes the ball back along the face normal and reflects the velocity component into the wall.
6. **Rolling rotation** — quaternion update derived from the velocity vector crossed with the ground normal.

**Key physics constants:**

| Constant | Value |
|---|---|
| Ball radius | 1.0 m |
| Gravity | −28.0 m/s² |
| Fast-fall multiplier | 1.85× |
| Fixed timestep | 1/120 s (8.33 ms) |
| Max sub-steps/frame | 8 |
| Kill plane Y | −12.0 m |
| Jump impulse | +14.5 m/s |
| Normal max speed | 26 m/s |
| Boost max speed | 44 m/s |

**GC optimisation:** All scratch vectors (`_camDir`, `_camRight`, `_drvDir`, `_strDir`, `_rollAxis`, `_pushNorm`, `_qDelta`) and probe offset arrays are pre-allocated in the constructor. Zero `new THREE.Vector3()` calls occur in the physics hot path.

### Camera Controller (`CameraController.js`)

A **track-locked chase camera** with a stable world horizon:

- **X position:** Heavily damped toward track centerline (lerp factor 0.05) — the ball drifts across the frame when steering, the camera does not orbit
- **Y position:** Fixed 3.8 m above the ball (lerp factor 0.08)
- **Z position:** Fixed 7.0 m behind the ball along world Z (lerp factor 0.15)
- **LookAt target:** `(trackCenterX, ball.y + 1.0, ball.z + 5.0)` — 5 m ahead of the ball on the track centerline
- `camera.up` is enforced as `(0, 1, 0)` every frame to prevent roll drift

### Input Manager (`InputManager.js`)

**Touch model:**
- `touchstart` records start position and detects double-tap (< 300ms) for jump
- `touchmove` computes relative horizontal delta → normalized steer in `[−1, +1]`
- Forward boost when swipe delta Y > 20px (`forwardInput = 2.0`)
- Visual joystick knob tracks steer value for UI feedback

**Keyboard override** (only when `!isTouching`):
- WASD / Arrow keys set steer and forward inputs per frame

Touch events are registered on `window` (not the canvas) with `passive: false` on `touchmove` to prevent browser scroll interference.

### Renderer

```javascript
renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.85
renderer.setPixelRatio(Math.min(devicePixelRatio, 2))  // cap at 2× for performance
```

### Player Ball (`PlayerBall.js`)

The ball mesh is a `SphereGeometry(1.0, 64, 64)` with a **PBR canvas texture** generated at runtime (1024×1024):
- Base colour fill
- Radial shading gradient for depth illusion
- Grid lines for rotation visual feedback
- Equatorial emissive stripe
- Pole circles

A `PointLight` (intensity 0.6, range 8m) follows the ball 3m above its centre, giving the surrounding track surface depth and colour from the ball's own emission.

Available skins:
- **Cyber Neon** — cyan/electric blue, high metalness
- **Chrome Titan** — silver/white, near-perfect metallic finish

### Sound Manager (`SoundManager.js`)

Procedural audio using the **Web Audio API** (`AudioContext`). No external audio files required. Sounds are synthesised at runtime:
- **Roll hum** — oscillator frequency mapped to ball speed
- **Jump** — short pitch-shifted tone
- **Coin pickup** — brief ascending chime
- **Checkpoint** — resonant confirmation tone
- **Victory** — multi-note fanfare
- **Warp portal** — whoosh + pitch-shift effect

---

## Module Reference

| File | Responsibility |
|---|---|
| `src/game/GameApp.js` | Main orchestrator, game loop, level loading, state machine |
| `src/game/PhysicsEngine.js` | 120Hz substepped ball physics, raycast collision |
| `src/game/PlayerBall.js` | Ball mesh, PBR texture generation, skin system |
| `src/game/CameraController.js` | Track-locked chase camera |
| `src/game/InputManager.js` | Touch, keyboard, mouse input processing |
| `src/track/TrackBuilder.js` | Procedural segment geometry (straight, curve, ramp, loop, split) |
| `src/track/SegmentSkins.js` | Per-world material themes for track surfaces |
| `src/obstacles/ObstacleManager.js` | Animated hazard creation and update loop |
| `src/levels/CampaignGenerator.js` | 250-level deterministic procedural campaign generator |
| `src/levels/LevelData.js` | Bootstraps and exports the full levels array |
| `src/environment/EnvironmentSystem.js` | 7 world biome configurations, sky, fog, lighting transitions |
| `src/entities/Collectible.js` | Gem coin entity: spawn, animate, pickup detection |
| `src/entities/Checkpoint.js` | Checkpoint ring entity: activation radius check |
| `src/entities/FinishGate.js` | Level completion arch: activation radius check |
| `src/vfx/ParticleSystem.js` | GPU-instanced particle bursts for coins, portals, checkpoints |
| `src/audio/SoundManager.js` | Web Audio API procedural sound synthesiser |
| `src/ui/UIManager.js` | HUD updates, screen transitions, modal management, skin selector |
| `src/main.js` | Entry point — instantiates `GameApp` |
| `src/style.css` | All UI styles (glassmorphism panels, HUD, animations) |

---

## Development & Build

### Prerequisites
- Node.js 18+
- npm 9+

### Local Development

```bash
cd rolling-ball
npm install
npm run dev
# → http://localhost:5173
```

### Production Build

```bash
npm run build
# Output: rolling-ball/dist/
```

### Android (Capacitor)

```bash
npm run build
npx cap sync android
npx cap open android   # Opens in Android Studio
```

**App ID:** `com.spherevelocity3d.app`
**App Name:** `Sphere Velocity 3D`

The Android project is in `rolling-ball/android/`. It uses `viewport-fit=cover` and `apple-mobile-web-app-capable` for edge-to-edge display on modern devices.

### Dependencies

| Package | Version | Purpose |
|---|---|---|
| `three` | ^0.173.0 | 3D rendering engine |
| `@capacitor/core` | ^8.5.0 | Native bridge runtime |
| `@capacitor/android` | ^8.5.0 | Android platform target |
| `canvas-confetti` | ^1.9.4 | Victory celebration effect |
| `vite` | ^6.1.0 | Dev server + bundler |
| `@capacitor/cli` | ^8.5.0 | Capacitor CLI tools |

---

## Debug Tools

### Forensic Telemetry Panel (`F3`)

A fixed overlay panel (top-left) that displays real-time engine diagnostics:

| Field | Description |
|---|---|
| FPS | Instantaneous frames per second |
| Frame time | Milliseconds per render frame |
| Phys time | Physics engine CPU time per frame (ms) |
| Ray time | Raycast CPU time per frame (ms) |
| Steer | Current steer input value [−1, +1] |
| Fwd | Current forward input value |
| Vel | Ball velocity vector [x, y, z] |
| Pos | Ball world position [x, y, z] |
| Grounded | YES / AIR ground contact state |
| Normal | Ground surface normal vector |

Toggle via `F3` key or the Settings menu.

### Collider Wireframes (`F4`)

Toggles Three.js debug visualisation of all solid physics colliders on the current level's track geometry. Useful for diagnosing edge clip or invisible wall issues.

### Ring Buffer

The physics engine maintains a **10-frame rolling telemetry ring buffer** capturing steer, forward, position, velocity, speed, ground state, and surface normal per physics frame. This is dumped to console on a kill-plane respawn event for post-mortem fall analysis.

### localStorage Level Override

```javascript
localStorage.setItem('sphere_velocity_level', '5')  // jump to level 5
```

Level is validated on load — values > 10 or NaN are reset to 1.

---

*Built with Three.js r160, Vite 6, and Capacitor 8 · Maruf Tanvir*
