import * as THREE from "three"

export interface ThreeEnv {
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    clock: THREE.Clock;
    mesh: THREE.Mesh;

    uniforms: {
        time: THREE.Uniform<number>;
        resolution: THREE.Uniform<THREE.Vector2>;
    };
    flags: {
        stopAnimation: boolean,
        currentFrame: number,
    };
}
