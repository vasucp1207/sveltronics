import { writable } from "svelte/store";

export function windowSize() {
  let width = writable<number>(window.innerWidth);
  let height = writable<number>(window.innerHeight);

  window.addEventListener('resize', () => {
    width.set(window.innerWidth);
    height.set(window.innerHeight);
  })

  return { width, height };
}