import { writable } from "svelte/store";
export function mouseInElement(node) {
    const containerRect = node.getBoundingClientRect();
    let elementX = writable(0);
    let elementY = writable(0);
    node.addEventListener('mouseover', (e) => {
        elementX.set(e.clientX - containerRect.left);
        elementY.set(e.clientY - containerRect.top);
    });
    node.addEventListener('mousemove', (e) => {
        elementX.set(e.clientX - containerRect.left);
        elementY.set(e.clientY - containerRect.top);
    });
    return { elementX, elementY };
}
