export function setDraggable(node) {
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    let drag = false;
    const element = document.createElement('div');
    const rect = node.getBoundingClientRect();
    element.style.transform = `translate3d(${rect.x}px, ${rect.y}px, 0)`;
    const elementRect = element.getBoundingClientRect();
    const nodeTop = elementRect.x;
    const nodeLeft = elementRect.y;
    node.addEventListener("mousedown", (event) => {
        initialX = event.clientX - xOffset;
        initialY = event.clientY - yOffset;
        if (event.target === node) {
            drag = true;
        }
    });
    document.addEventListener("mouseup", () => {
        node.style.transition = 'all 0.2s ease-in-out';
        xOffset = 0;
        yOffset = 0;
        drag = false;
        node.style.transform = `translate3d(${nodeTop}px, ${nodeLeft}px, 0)`;
    });
    document.addEventListener("mousemove", (event) => {
        if (drag) {
            node.style.transition = 'none';
            xOffset = event.clientX - initialX;
            yOffset = event.clientY - initialY;
            node.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
        }
    });
}
