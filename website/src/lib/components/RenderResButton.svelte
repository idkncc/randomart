<script lang="ts">
    import * as THREE from "three";

    import { getContext } from "svelte";

    import { Button } from "@ui/button";

    import type { ThreeEnv } from "$lib/typings";

    interface Props {
        title: string;
        resolution: [number, number];
    }

    const { title, resolution }: Props = $props();

    const threeEnv = getContext<ThreeEnv>("threeEnv");

    function download() {
        // Copy old sizes
        const ogSizes = new THREE.Vector2();
        const ogResolution = new THREE.Vector2();
        threeEnv.renderer.getSize(ogSizes);
        threeEnv.uniforms.resolution.value.copy(ogResolution);

        // Set target sizes
        threeEnv.renderer.setPixelRatio(1);
        threeEnv.renderer.setSize(resolution[0], resolution[1]);
        threeEnv.uniforms.resolution.value.x = resolution[0];
        threeEnv.uniforms.resolution.value.y = resolution[1];

        // Render (twice, because why not)
        threeEnv.renderer.render(threeEnv.scene, threeEnv.camera);
        threeEnv.renderer.render(threeEnv.scene, threeEnv.camera);

        // Export as image
        var imgData = threeEnv.renderer.domElement.toDataURL();
        var img = new Image();
        img.src = imgData;

        const link = document.createElement("a");
        document.body.appendChild(link);

        link.href = imgData;
        link.target = "_self";
        link.download = `renderer@${resolution[0]}x${resolution[1]}.png`;
        link.click();

        // Restore back sizes
        threeEnv.renderer.setPixelRatio(window.devicePixelRatio);
        threeEnv.renderer.setSize(ogSizes.x, ogSizes.y);
        ogResolution.copy(threeEnv.uniforms.resolution.value);
    }
</script>

<Button variant="outline" onclick={download}>
    {title} ({resolution[0]}x{resolution[1]})
</Button>
