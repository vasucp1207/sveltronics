import { writable } from "svelte/store"

export function mouseInElement(node: HTMLElement) {
  const containerRect = node.getBoundingClientRect();

  let elementX = writable<number>(0);
  let elementY = writable<number>(0);

  node.addEventListener('mouseover', (e) => {
    elementX.set(e.clientX - containerRect.left);
    elementY.set(e.clientY - containerRect.top);
  })

  node.addEventListener('mousemove', (e) => {
    elementX.set(e.clientX - containerRect.left);
    elementY.set(e.clientY - containerRect.top);
  })

  return { elementX, elementY };
}