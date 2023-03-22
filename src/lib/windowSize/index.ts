import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

interface windowDimen {
  width: Writable<number>;
  height: Writable<number>;
}

export function windowSize(): windowDimen {
  let width: Writable<number>= writable(window.innerWidth);
  let height: Writable<number> = writable(window.innerHeight);

  window.addEventListener('resize', () => {
    width.set(window.innerWidth);
    height.set(window.innerHeight);
  })

  return { width, height };
}