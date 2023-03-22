import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

interface Dimen {
  width: Writable<number>;
  height: Writable<number>;
}

export function elementSize(node: HTMLElement): Dimen {

  let width: Writable<number> = writable(node.offsetWidth);
  let height: Writable<number> = writable(node.offsetHeight);

  node.addEventListener('mousedown', () => {
    width.set(node.offsetWidth);
    height.set(node.offsetHeight);
  })

  document.addEventListener('mousemove', () => {
    width.set(node.offsetWidth);
    height.set(node.offsetHeight);
  })

  document.addEventListener('mouseup', () => {
    width.set(node.offsetWidth);
    height.set(node.offsetHeight);
  })

  return { width, height };
}