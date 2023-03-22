import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

type isOutsideVar = Writable<boolean>;

export function isOutside(node: HTMLElement): isOutsideVar {

  let outside: Writable<boolean> = writable(true);
  node.addEventListener('mouseover', () => {
    outside.set(false);
  })
  node.addEventListener('mouseleave', () => {
    outside.set(true);
  })

  return outside;
}