<script lang="ts">
    import * as THREE from "three";
    import * as randomart from "randomart";

    import { getContext } from "svelte";

    import * as Card from "@ui/card";
    import * as Dialog from "@ui/dialog";

    import { Checkbox } from "@ui/checkbox";
    import { Label } from "@ui/label";
    import { Button } from "@ui/button";
    import { Input } from "@ui/input";
    import { Separator } from "@ui/separator";
    import { Badge } from "@ui/badge";

    import type { ThreeEnv } from "$lib/typings";
    import RenderResButton from "./RenderResButton.svelte";

    const threeEnv = getContext<ThreeEnv>("threeEnv");
    let downloadDialogOpened = $state(false);

    function keydown(event: KeyboardEvent) {
        if (event.key === "r") {
            event.preventDefault();
            recompile();
        } else if (event.key === "d") {
            event.preventDefault();
            downloadDialogOpened = true;
        } else if (event.key === "p") {
            event.preventDefault();
            threeEnv.flags.stopAnimation = !threeEnv.flags.stopAnimation;
        }
    }

    function recompile() {
        const fragmentShader = randomart.compile_webgl_fragment_shader();

        threeEnv.mesh.material = new THREE.ShaderMaterial({
            uniforms: threeEnv.uniforms,
            vertexShader: `#define GLSLIFY 1

            void main() {
                // Vertex shader output
                gl_Position = vec4(position, 1.0);
            }`,
            fragmentShader,
        });
    }
</script>

<svelte:window on:keydown={keydown} />

<div class="controls">
    <div>
        <h1>Randomart</h1>
        <p>
            Reimplementation of <a href="https://github.com/tsoding/randomart">
                Tsoding's randomart
            </a>, but in Rust and Web
        </p>

        <ul class="my-2">
            <li>
                <a href="https://github.com/idkncc/randomart">Github repo</a>
            </li>
        </ul>
    </div>

    <div class="flags">
        <div class="flex items-center space-x-2">
            <Checkbox
                id="stop-animation"
                bind:checked={threeEnv.flags.stopAnimation}
            />
            <Label for="stop-animation">
                Pause
                <Badge variant="kbd" class="rounded-sm px-1">p</Badge>
            </Label>
        </div>

        <Card.Root
            class={`${threeEnv.flags.stopAnimation ? "flex" : "hidden"} w-full flex-col gap-1.5`}
        >
            <Card.Header>
                <Card.Title level={2}>
                    <code>t</code> variable (in percents of PI)
                </Card.Title>
            </Card.Header>

            <Card.Content>
                <div class="grid grid-cols-[1fr_3fr_1fr] gap-1">
                    <Button
                        variant="outline"
                        onclick={() => (threeEnv.flags.currentFrame -= 5)}
                    >
                        -5
                    </Button>
                    <Input
                        type="number"
                        id="current-frame"
                        placeholder="0-100"
                        min={0}
                        max={100}
                        bind:value={threeEnv.flags.currentFrame}
                    />
                    <Button
                        variant="outline"
                        onclick={() => (threeEnv.flags.currentFrame += 5)}
                    >
                        +5
                    </Button>
                </div>
            </Card.Content>
        </Card.Root>
    </div>

    <div class="flex-grow"></div>

    <div class="flex flex-col gap-2">
        <Dialog.Root bind:open={downloadDialogOpened}>
            <Dialog.Trigger>
                <Button variant="secondary" class="w-full">
                    Download
                    <Badge variant="kbd" class="rounded-sm px-1">d</Badge>
                </Button>
            </Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Header>
                    <Dialog.Title>Download</Dialog.Title>
                    <Dialog.Description>
                        Select the resolution of render image
                    </Dialog.Description>
                </Dialog.Header>
                <div class="flex flex-col gap-2">
                    <RenderResButton
                        title="Current screen resolution"
                        resolution={[
                            window.screen.width * window.devicePixelRatio,
                            window.screen.height * window.devicePixelRatio,
                        ]}
                    />
                    <Separator />

                    <RenderResButton
                        title="Ultrawide"
                        resolution={[3440, 1440]}
                    />
                    <RenderResButton title="4K UHD" resolution={[3840, 2160]} />
                    <RenderResButton title="QHD" resolution={[2560, 1440]} />
                    <RenderResButton
                        title="Full HD"
                        resolution={[1920, 1080]}
                    />

                    <Button variant="outline" disabled>
                        Custom
                        <Badge variant="outline">SOON</Badge>
                    </Button>
                </div>
            </Dialog.Content>
        </Dialog.Root>
        <!-- <Button -->
        <!-- variant="secondary" -->
        <!-- onclick={() => download(window.screen.width, window.screen.height)} -->
        <!-- ></Button> -->
        <Button onclick={recompile}>
            Recompile
            <Badge variant="kbd" class="rounded-sm px-1">r</Badge>
        </Button>
    </div>
</div>

<style lang="scss">
    .controls {
        @apply flex flex-col;

        @apply absolute top-0 right-0 p-4;
        @apply min-w-[300px] w-[30vw] max-w-[800px] h-[100dvh] z-10;
        @apply bg-background/80 backdrop-blur-3xl;

        .flags {
            @apply my-3;
            @apply flex flex-col gap-2;
        }
    }
</style>
