<script lang="ts">
    import { onMount } from "svelte";
    import * as THREE from "three";
    import * as randomart from "randomart";

    interface ThreeEnv {
        renderer: THREE.WebGLRenderer;
        scene: THREE.Scene;
        camera: THREE.OrthographicCamera;
        clock: THREE.Clock;
        uniforms: {
            time: THREE.Uniform<number>;
            resolution: THREE.Uniform<THREE.Vector2>;
        };

        mesh: THREE.Mesh;
    }

    let threeEnv = $state<ThreeEnv>({
        renderer: undefined!,
        scene: undefined!,
        camera: undefined!,
        clock: undefined!,
        uniforms: undefined!,
        mesh: undefined!,
    });

    let pauseFrames = $state(false);
    let currentFrame = $state(0);

    $effect(() => {
        if (threeEnv.uniforms && pauseFrames) {
            threeEnv.uniforms.time.value = Math.PI * (currentFrame / 100);
        }
    });

    onMount(() => {
        threeEnv.renderer = new THREE.WebGLRenderer();

        threeEnv.renderer.setPixelRatio(window.devicePixelRatio);
        threeEnv.renderer.setSize(window.innerWidth, window.innerHeight);

        var container = document.querySelector("#canvas-container")!;
        container.appendChild(threeEnv.renderer.domElement);

        threeEnv.scene = new THREE.Scene();
        threeEnv.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        threeEnv.clock = new THREE.Clock(true);

        // Create the plane geometry
        var geometry = new THREE.PlaneGeometry(2, 2);

        // Define the shader uniforms
        threeEnv.uniforms = {
            time: new THREE.Uniform(0.0),
            resolution: new THREE.Uniform(
                new THREE.Vector2(
                    threeEnv.renderer.domElement.offsetWidth,
                    threeEnv.renderer.domElement.offsetHeight,
                ).multiplyScalar(window.devicePixelRatio),
            ),
        };

        threeEnv.mesh = new THREE.Mesh(geometry, getMaterial());
        threeEnv.scene.add(threeEnv.mesh);

        requestAnimationFrame(animate);
    });

    function getMaterial() {
        const fragmentShader = randomart.compile_webgl_fragment_shader();

        return new THREE.ShaderMaterial({
            uniforms: threeEnv.uniforms,
            vertexShader: `#define GLSLIFY 1

            void main() {
                // Vertex shader output
                gl_Position = vec4(position, 1.0);
            }`,
            fragmentShader,
        });
    }

    function animate() {
        if (!pauseFrames) {
            threeEnv.uniforms.time.value = threeEnv.clock.getElapsedTime();
        }
        threeEnv.renderer.render(threeEnv.scene, threeEnv.camera);

        requestAnimationFrame(animate);
    }

    function recompile() {
        threeEnv.mesh.material = getMaterial();
    }

    function download(width: number, height: number) {
        threeEnv.renderer.setSize(width, height);
        threeEnv.uniforms.resolution.value.x = width * window.devicePixelRatio;
        threeEnv.uniforms.resolution.value.y = height * window.devicePixelRatio;

        threeEnv.renderer.render(threeEnv.scene, threeEnv.camera);
        threeEnv.renderer.render(threeEnv.scene, threeEnv.camera);

        var imgData = threeEnv.renderer.domElement.toDataURL();
        var img = new Image();
        img.src = imgData;

        const link = document.createElement("a");
        document.body.appendChild(link);

        link.href = imgData;
        link.target = "_self";
        link.download = "renderer.png";
        link.click();

        // restore back renderer sizes
        threeEnv.renderer.setSize(window.innerWidth, window.innerHeight);
        threeEnv.uniforms.resolution.value.x =
            window.innerWidth * window.devicePixelRatio;
        threeEnv.uniforms.resolution.value.y =
            window.innerHeight * window.devicePixelRatio;
    }
</script>

<div class="randomart">
    <div id="canvas-container" class="absolute left-0 top-0"></div>
    <div class="controls">
        <div>
            <h1>Randomart</h1>
            <p>Reimplementation of tsoding's randomart, but in Rust and Web</p>
        </div>

        <div class="flags">
            <div>
                <input
                    type="checkbox"
                    id="pause-frames-checkbox"
                    bind:checked={pauseFrames}
                />
                <label for="pause-frames-checkbox">Pause frames</label>
            </div>

            <div class:hidden={!pauseFrames}>
                <input
                    type="range"
                    id="frame-range"
                    bind:value={currentFrame}
                />
                <label for="pause-frames-checkbox">Frame</label>
            </div>
        </div>

        <div class="flex-grow"></div>

        <div class="flex flex-col gap-2">
            <button
                class="btn success w-full"
                onclick={() =>
                    download(window.screen.width, window.screen.height)}
            >
                download as wallpapers
            </button>
            <button class="btn primary w-full" onclick={recompile}>
                recompile
            </button>
        </div>
    </div>
</div>

<style lang="scss">
    .controls {
        @apply flex flex-col;

        @apply absolute top-0 right-0 p-2;
        @apply w-[30vw] h-[100dvh] z-10;
        @apply text-stone-700 bg-stone-200/50 backdrop-blur-2xl;

        .flags {
            @apply my-3;
        }
    }
</style>
