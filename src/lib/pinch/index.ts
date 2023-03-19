import { createEventDispatcher } from 'svelte';
import { onMount } from 'svelte';

export function pinch(node: HTMLElement) {
  const dispatch = createEventDispatcher();
  let scale = 1;
  const minScale = 0.5;
  const maxScale = 5;
  const step = 0.05;

  onMount(() => {
    node.addEventListener('wheel', (event) => {
      event.preventDefault();
      const direction = event.deltaY < 0 ? 1 : -1;
      scale = Math.min(maxScale, Math.max(minScale, scale + direction * step));
      node.style.transform = `scale(${scale})`;
      dispatch('scale', { scale });
    });
  })
}