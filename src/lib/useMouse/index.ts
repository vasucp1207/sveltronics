import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

interface mousePos {
  x: Writable<number>;
  y: Writable<number>;
}

export function useMouse(): mousePos {
  const x: Writable<number> = writable(0);
  const y: Writable<number> = writable(0);

  const handleMouseMove = (e: MouseEvent) => {
    x.set(e.clientX);
    y.set(e.clientY);
  }

  onMount(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  });

  return { x, y };
}
