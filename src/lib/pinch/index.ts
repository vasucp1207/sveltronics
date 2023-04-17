export function pinch(node: HTMLElement) {
  let scale: number = 1;
  const minScale: number = 0.5;
  const maxScale: number = 5;
  const step: number = 0.05;

  node.addEventListener('wheel', (event) => {
    event.preventDefault();
    const direction = event.deltaY < 0 ? 1 : -1;
    scale = Math.min(maxScale, Math.max(minScale, scale + direction * step));
    node.style.transform = `scale(${scale})`;
  });
}