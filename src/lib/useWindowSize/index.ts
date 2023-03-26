import { writable, type Writable } from "svelte/store"

interface windowDimen {
  width: Writable<number>;
  height: Writable<number>;
}

export function usedWindowSize(): windowDimen {

  let width = writable<number>(window.innerWidth);
  let height = writable<number>(window.innerHeight);

  window.addEventListener('resize', () => {
    width.set(window.innerWidth);
    height.set(window.innerHeight);
  })

  return {
    width,
    height
  }
}