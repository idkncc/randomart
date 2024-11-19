interface Dimensions {
    top: number,
    left: number,
    width: number,
    height: number,
}

export function getCanvasDimensions(): Dimensions {
    const top = document.querySelector("#canvas-size")!.clientTop;
    const left = document.querySelector("#canvas-size")!.clientLeft;
    const innerWidth = document.querySelector("#canvas-size")!.clientWidth;
    const innerHeight = document.querySelector("#canvas-size")!.clientHeight;

    return {
        top,
        left,
        width: innerWidth,
        height: innerHeight
    }
}
