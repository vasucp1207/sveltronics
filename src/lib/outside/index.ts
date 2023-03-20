import { writable } from "svelte/store"

export function isOutside(node: HTMLElement) {

  let outside = writable<boolean>(true);
  node.addEventListener('mouseover', () => {
    outside.set(false);
  })
  node.addEventListener('mouseleave', () => {
    outside.set(true);
  })

  return outside;
}