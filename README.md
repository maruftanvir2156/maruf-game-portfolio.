# 🎮 Maruf Tanvir — Game Development Portfolio

> A collection of browser-based and mobile-first games built with modern web technologies. Each project demonstrates a different aspect of real-time game engineering — from custom physics simulation and procedural level generation to 3D rendering pipelines and cross-platform mobile packaging.

---

## 👨‍💻 About

I'm a game developer focused on building polished, performant, and visually striking experiences directly in the browser. My work spans custom arcade physics engines, 3D rendering with Three.js, procedural content generation, and native mobile packaging via Capacitor.

I prioritise code architecture that is modular, readable, and extensible — treating each subsystem (physics, input, audio, VFX, UI) as an independent, well-defined unit that composes cleanly with the rest.

---

## 🗂️ Projects

| Project | Genre | Platform | Tech Stack |
|---|---|---|---|
| [Sphere Velocity](./rolling-ball/) | 3D Rolling Platformer | Web + Android | Three.js · Vite · Capacitor |

---

## 🕹️ Sphere Velocity

**A sky-high 3D precision rolling-ball platformer built entirely in vanilla JavaScript.**

The player rolls a physics-simulated ball along floating sky tracks, navigating curves, ramps, split paths, vertical loops, and hazardous obstacles across a 250-level campaign spanning 7 unique worlds.

### Highlights
- Custom **substepped arcade physics engine** running at 120 Hz fixed timestep with multi-ray ground detection
- **Procedural + authored hybrid campaign** generating 250 physically valid, progressively challenging levels from a deterministic seed
- **7 distinct world biomes** with dynamic sky, lighting, and environment transitions via portal rings
- **4 obstacle archetypes**: Rotating Sweeper, Sliding Pusher, Crusher Stomper, Swinging Pendulum
- Dual input model: **touch drag + keyboard** (WASD / Arrow Keys), with a double-tap jump gesture
- **PBR ball skins** with canvas-generated textures and a self-illuminating point light
- Packaged as a native **Android APK** via Capacitor with `viewport-fit=cover` safe area support
- **Forensic debug telemetry panel** (F3) exposing live FPS, physics timings, velocity, ground state, and surface normals

➜ [View Project →](./rolling-ball/)

---

## 🛠️ Tech Stack & Philosophy

### Core Technologies
- **Three.js r160** — 3D scene graph, WebGL renderer (ACES filmic tone mapping, PCF soft shadows)
- **Vite** — lightning-fast ES module dev server and production bundler
- **Capacitor** — cross-platform native packaging for Android (and iOS-ready)
- **Vanilla JavaScript (ES Modules)** — no framework overhead, fully tree-shakeable

### Engineering Principles
- **Zero-allocation hot paths** — pre-allocated scratch vectors and quaternions prevent GC pressure in the physics and rendering loops
- **Fixed-timestep simulation** — physics ticks at 120 Hz independent of render frame rate, with accumulator-based sub-stepping (up to 8 steps/frame)
- **Modular subsystems** — each concern (physics, input, camera, audio, VFX, UI, obstacles, environment) is encapsulated in its own class with a clean public API
- **Deterministic procedural generation** — levels 3–250 use a seeded `mulberry32` PRNG for reproducible, verifiable output

---

## 🚀 Running Locally

Each game is an independent Vite project. To run any of them:

```bash
# Navigate to the game folder
cd rolling-ball

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open `http://localhost:5173` in your browser.

### Android Build

```bash
cd rolling-ball
npm run build
npx cap sync android
npx cap open android
```

---

## 📁 Repository Structure

```
maruf-game-portfolio/
└── rolling-ball/          # Sphere Velocity — 3D Rolling Platformer
    ├── src/
    │   ├── game/          # Core engine (Physics, Input, Camera, GameApp, PlayerBall)
    │   ├── track/         # Procedural track geometry builder
    │   ├── obstacles/     # Animated hazard system
    │   ├── levels/        # Campaign generator & level data
    │   ├── environment/   # World biomes & dynamic sky
    │   ├── entities/      # Collectibles, Checkpoints, Finish Gate
    │   ├── vfx/           # Particle system (coin bursts, portal warps)
    │   ├── audio/         # Web Audio API sound manager
    │   └── ui/            # HUD, menus, modals, skin selector
    ├── android/           # Capacitor Android project
    └── index.html         # Entry point & UI markup
```

---

## 📬 Contact

Feel free to reach out if you'd like to discuss any of the projects, technical decisions, or potential collaborations.

---

*Portfolio maintained by Maruf Tanvir · Built with Three.js, Vite & Capacitor*
