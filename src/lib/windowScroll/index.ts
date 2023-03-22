import { writable } from "svelte/store"
import type { Writable } from "svelte/store";

interface scrollPos {
  x: Writable<number>;
  y: Writable<number>;
}

export function windowScroll(): scrollPos {

  const x: Writable<number> = writable(window.scrollX);
  const y: Writable<number> = writable(window.scrollY);

  const handleScroll = () => {
    x.set(window.scrollX);
    y.set(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);

  return { x, y };
}