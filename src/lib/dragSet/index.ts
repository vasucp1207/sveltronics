export function setDraggable(node: HTMLElement) {
  let initialX: number;
  let initialY: number;
  let xOffset: number = 0;
  let yOffset: number = 0;
  let drag: boolean = false;
  
  const element = document.createElement('div');
  const rect: DOMRect = node.getBoundingClientRect();
  element.style.transform = `translate3d(${rect.x}px, ${rect.y}px, 0)`;
  const elementRect: DOMRect = element.getBoundingClientRect();
  const nodeTop: number = elementRect.x;
  const nodeLeft: number = elementRect.y;

  node.addEventListener("mousedown", (event: MouseEvent) => {
    initialX = event.clientX - xOffset;
    initialY = event.clientY - yOffset;

    if (event.target === node) {
      drag = true;
    }
  })

  document.addEventListener("mouseup", () => {
    node.style.transition = 'all 0.2s ease-in-out';
    xOffset = 0;
    yOffset = 0;
    drag = false;
    node.style.transform = `translate3d(${nodeTop}px, ${nodeLeft}px, 0)`;
  });

  document.addEventListener("mousemove", (event: MouseEvent) => {
    if (drag) {
      node.style.transition = 'none';
      xOffset = event.clientX - initialX;
      yOffset = event.clientY - initialY;
      node.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
    }
  });
}
