export function draggable(node) {
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    let drag = false;
    node.addEventListener("mousedown", (event) => {
        initialX = event.clientX - xOffset;
        initialY = event.clientY - yOffset;
        if (event.target === node) {
            drag = true;
        }
    });
    document.addEventListener("mouseup", () => {
        drag = false;
    });
    document.addEventListener("mousemove", (event) => {
        if (drag) {
            xOffset = event.clientX - initialX;
            yOffset = event.clientY - initialY;
            node.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
        }
    });
}
