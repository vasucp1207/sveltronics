export function draggable(node: HTMLElement) {
  let initialX: number;
  let initialY: number;
  let xOffset: number = 0;
  let yOffset: number = 0;
  let drag: boolean = false;
  
  node.addEventListener("mousedown", (event: MouseEvent) => {
    initialX = event.clientX - xOffset;
    initialY = event.clientY - yOffset;

    if (event.target === node) {
      drag = true;
    }
  })
  document.addEventListener("mouseup", () => {
    drag = false;
  });

  document.addEventListener("mousemove", (event: MouseEvent) => {
    if (drag) {
      xOffset = event.clientX - initialX;
      yOffset = event.clientY - initialY;
      node.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
    }
  });
}
