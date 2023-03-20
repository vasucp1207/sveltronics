import { writable } from "svelte/store"

export function isOutside(node: HTMLElement) {

  let outside = writable(true);
  node.addEventListener('mouseover', () => {
    outside.set(true);
  })
  node.addEventListener('mouseleave', () => {
    outside.set(false);
  })

  return outside;
}