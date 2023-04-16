import { writable } from "svelte/store"
import type { Writable } from "svelte/store";

interface relativeElementPos {
  elementX: Writable<number>;
  elementY: Writable<number>;
}

export function mouseInElement(node: HTMLElement): relativeElementPos {
  const containerRect: DOMRect = node.getBoundingClientRect();

  let elementX: Writable<number> = writable(0);
  let elementY: Writable<number> = writable(0);

  node.addEventListener('mouseover', (e: MouseEvent) => {
    elementX.set(e.pageX - containerRect.left);
    elementY.set(e.pageY - containerRect.top);
  })

  node.addEventListener('mousemove', (e: MouseEvent) => {
    elementX.set(e.pageX - containerRect.left);
    elementY.set(e.pageY - containerRect.top);
  })

  return { elementX, elementY };
}