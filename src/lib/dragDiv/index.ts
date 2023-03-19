import { onMount } from "svelte";

let initialX: number;
let initialY: number;
let xOffset: number = 0;
let yOffset: number = 0;
let drag: boolean = false;
export function draggable(node: HTMLElement) {
  onMount(() => {
    node.addEventListener("mousedown", function (event: MouseEvent) {
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;

      if (event.target === node) {
        drag = true;
      }
    })
    document.addEventListener("mouseup", function (event) {
      drag = false;z
    });

    document.addEventListener("mousemove", function (event: MouseEvent) {
      if (drag) {
        xOffset = event.clientX - initialX;
        yOffset = event.clientY - initialY;
        node.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
      }
    });
  });
}
