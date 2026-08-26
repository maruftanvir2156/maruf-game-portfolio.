// Self-contained Node environment mocks for Three.js canvas textures & math
const noop = () => {};
global.document = {
  createElement: (tag) => {
    if (tag === 'canvas') {
      return {
        width: 512,
        height: 512,
        style: {},
        getContext: () => ({
          fillRect: noop,
          clearRect: noop,
          getImageData: () => ({ data: new Uint8ClampedArray(4) }),
          putImageData: noop,
          createImageData: () => ([]),
          setTransform: noop,
          drawImage: noop,
          save: noop,
          fillText: noop,
          restore: noop,
          beginPath: noop,
          moveTo: noop,
          lineTo: noop,
          closePath: noop,
          stroke: noop,
          translate: noop,
          scale: noop,
          rotate: noop,
          arc: noop,
          fill: noop,
          measureText: () => ({ width: 0 }),
          transform: noop,
          rect: noop,
          clip: noop,
          bezierCurveTo: noop,
          quadraticCurveTo: noop,
          ellipse: noop,
          createLinearGradient: () => ({ addColorStop: noop }),
          createRadialGradient: () => ({ addColorStop: noop })
        }),
        addEventListener: noop,
        removeEventListener: noop
      };
    }
    return {};
  }
};

global.window = {
  document: global.document,
  addEventListener: noop,
  removeEventListener: noop
};
global.performance = { now: () => Date.now() };

// Import test runner module
const { AutomatedLevelTest } = await import('../src/tests/AutomatedLevelTest.js');

console.log('[Runner] Executing Automated Level Audit across 100 Levels x 7 Environments (700 combinations)...');
const report = AutomatedLevelTest.runAllTests(100);

process.exit(0);
