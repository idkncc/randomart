<script lang="ts">
    import * as THREE from "three";

    import { onMount, setContext } from "svelte";

    import RendererControls from "$lib/components/RendererControls.svelte";

    import type { ThreeEnv } from "$lib/typings";

    let threeEnv = $state<ThreeEnv>({
        renderer: undefined!,
        scene: undefined!,
        camera: undefined!,
        clock: undefined!,
        mesh: undefined!,

        uniforms: undefined!,
        flags: {
            stopAnimation: false,
            currentFrame: 50,
        },
    });
    setContext("threeEnv", threeEnv);

    $effect(() => {
        if (threeEnv.uniforms && threeEnv.flags.stopAnimation) {
            threeEnv.uniforms.time.value =
                Math.PI * (threeEnv.flags.currentFrame / 100);
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

        threeEnv.mesh = new THREE.Mesh(geometry);
        threeEnv.scene.add(threeEnv.mesh);

        document.addEventListener("resize", () => {
            threeEnv.renderer.setSize(window.innerWidth, window.innerHeight);

            threeEnv.uniforms.resolution.value.x =
                window.innerWidth * window.devicePixelRatio;
            threeEnv.uniforms.resolution.value.y =
                window.innerHeight * window.devicePixelRatio;
        });

        requestAnimationFrame(animate);
    });

    function animate() {
        if (!threeEnv.flags.stopAnimation) {
            threeEnv.uniforms.time.value = threeEnv.clock.getElapsedTime();
        }
        threeEnv.renderer.render(threeEnv.scene, threeEnv.camera);

        requestAnimationFrame(animate);
    }
</script>

<div class="randomart">
    <div id="canvas-container" class="absolute left-0 top-0"></div>
    <RendererControls />
</div>

<style lang="scss">
    .randomart {
        @apply bg-slate-500;
    }
</style>
