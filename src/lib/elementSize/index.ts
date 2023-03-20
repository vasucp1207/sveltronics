import { writable } from "svelte/store";

let donw = false;
export function elementSize(node: HTMLElement) {

  let width = writable<number>(node.offsetWidth);
  let height = writable<number>(node.offsetHeight);

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