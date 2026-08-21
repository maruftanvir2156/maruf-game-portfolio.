// Main Application Entry Point for Sphere Velocity
import { GameApp } from './game/GameApp.js';

window.addEventListener('DOMContentLoaded', () => {
  const game = new GameApp();
  window.gameApp = game; // Exposed for debugging / verification
});
