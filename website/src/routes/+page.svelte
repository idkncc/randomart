<script lang="ts">
    import "./page.scss";

    import * as THREE from "three";

    import { onMount, setContext } from "svelte";

    import RendererControls from "$lib/components/RendererControls.svelte";

    import type { ThreeEnv } from "$lib/typings";
    import { getCanvasDimensions } from "$lib/threeUtils";

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
        const canvasDimensions = getCanvasDimensions();

        threeEnv.renderer = new THREE.WebGLRenderer();

        threeEnv.renderer.setPixelRatio(window.devicePixelRatio);
        threeEnv.renderer.setSize(
            canvasDimensions.width,
            canvasDimensions.height,
        );

        var container = document.querySelector("#canvas-container")!;
        container.appendChild(threeEnv.renderer.domElement);

        threeEnv.renderer.domElement.style.position = "absolute";
        threeEnv.renderer.domElement.style.top = `${canvasDimensions.top}px`;
        threeEnv.renderer.domElement.style.left = `${canvasDimensions.left}px`;

        threeEnv.scene = new THREE.Scene();
        threeEnv.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        threeEnv.clock = new THREE.Clock(true);

        var geometry = new THREE.PlaneGeometry(2, 2);

        threeEnv.uniforms = {
            time: new THREE.Uniform(0.0),
            resolution: new THREE.Uniform(
                new THREE.Vector2(
                    canvasDimensions.width,
                    canvasDimensions.height,
                ).multiplyScalar(window.devicePixelRatio),
            ),
        };

        threeEnv.mesh = new THREE.Mesh(geometry);
        threeEnv.scene.add(threeEnv.mesh);

        function animate() {
            if (!threeEnv.flags.stopAnimation) {
                threeEnv.uniforms.time.value = threeEnv.clock.getElapsedTime();
            }
            threeEnv.renderer.render(threeEnv.scene, threeEnv.camera);

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    });

    function onResize() {
        const innerWidth = document.querySelector("#canvas-size")!.clientWidth;
        const innerHeight =
            document.querySelector("#canvas-size")!.clientHeight;

        threeEnv.renderer.setSize(innerWidth, innerHeight);

        threeEnv.uniforms.resolution.value.x =
            innerWidth * window.devicePixelRatio;
        threeEnv.uniforms.resolution.value.y =
            innerHeight * window.devicePixelRatio;
    }
</script>

<svelte:window onresize={onResize} />

<div class="randomart">
    <div id="canvas-size"></div>
    <RendererControls />
</div>

<div id="canvas-container"></div>
