<script lang="ts">
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
        threeEnv.renderer.setPixelRatio(1);
        threeEnv.renderer.setSize(resolution[0], resolution[1]);
        threeEnv.uniforms.resolution.value.x = resolution[0];
        threeEnv.uniforms.resolution.value.y = resolution[1];

        threeEnv.renderer.render(threeEnv.scene, threeEnv.camera);
        threeEnv.renderer.render(threeEnv.scene, threeEnv.camera);

        var imgData = threeEnv.renderer.domElement.toDataURL();
        var img = new Image();
        img.src = imgData;

        const link = document.createElement("a");
        document.body.appendChild(link);

        link.href = imgData;
        link.target = "_self";
        link.download = `renderer@${resolution[0]}x${resolution[1]}.png`;
        link.click();

        // restore back renderer sizes
        threeEnv.renderer.setPixelRatio(window.devicePixelRatio);
        threeEnv.renderer.setSize(window.innerWidth, window.innerHeight);
        threeEnv.uniforms.resolution.value.x =
            window.innerWidth * window.devicePixelRatio;
        threeEnv.uniforms.resolution.value.y =
            window.innerHeight * window.devicePixelRatio;
    }
</script>

<Button variant="outline" onclick={download}
    >{title} ({resolution[0]}x{resolution[1]})</Button
>
