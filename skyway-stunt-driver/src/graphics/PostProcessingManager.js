import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

const MotionBlurShader = {
  uniforms: {
    'tDiffuse': { value: null },
    'uSpeed': { value: 0.0 }, // 0.0 (still) to 1.0 (max speed)
    'uResolution': { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uSpeed;
    uniform vec2 uResolution;
    varying vec2 vUv;

    void main() {
      vec2 center = vec2(0.5, 0.5);
      vec2 toCenter = center - vUv;
      float dist = length(toCenter);
      
      // Scale blur strength by car speed and distance from center (vignette effect)
      float samples[5] = float[](0.0, 0.01, 0.02, 0.03, 0.04);
      vec4 color = vec4(0.0);
      float blurFactor = uSpeed * 0.6 * (dist * 1.5);

      for (int i = 0; i < 5; i++) {
        vec2 offset = toCenter * samples[i] * blurFactor;
        color += texture2D(tDiffuse, vUv + offset);
      }
      gl_FragColor = color / 5.0;
    }
  `
};

export class PostProcessingManager {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    this.composer = new EffectComposer(this.renderer);
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.renderPass);

    this.motionBlurPass = new ShaderPass(MotionBlurShader);
    this.composer.addPass(this.motionBlurPass);

    this.onResize = this.onResize.bind(this);
    window.addEventListener('resize', this.onResize);
  }

  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.composer.setSize(width, height);
    if (this.motionBlurPass && this.motionBlurPass.uniforms.uResolution) {
      this.motionBlurPass.uniforms.uResolution.value.set(width, height);
    }
  }

  update(currentSpeed, maxSpeed, isNitroActive = false, inSpeedBoost = false) {
    let targetValue = Math.max(0.0, Math.min(1.0, currentSpeed / (maxSpeed || 30.0)));
    if (isNitroActive || inSpeedBoost) {
      targetValue = Math.min(1.0, targetValue + 0.35);
    }
    const currentSpeedVal = this.motionBlurPass.uniforms.uSpeed.value;
    this.motionBlurPass.uniforms.uSpeed.value = THREE.MathUtils.lerp(currentSpeedVal, targetValue, 0.1);
  }

  render() {
    const isMobile = window.innerWidth < 768 || Boolean(window.Capacitor) || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      this.renderer.render(this.scene, this.camera);
    } else {
      this.composer.render();
    }
  }

  dispose() {
    window.removeEventListener('resize', this.onResize);
  }
}
