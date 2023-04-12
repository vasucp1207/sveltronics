import { writable } from "svelte/store";
export function elementSize(node) {
    let width = writable(node.offsetWidth);
    let height = writable(node.offsetHeight);
    node.addEventListener('mousedown', () => {
        width.set(node.offsetWidth);
        height.set(node.offsetHeight);
    });
    document.addEventListener('mousemove', () => {
        width.set(node.offsetWidth);
        height.set(node.offsetHeight);
    });
    document.addEventListener('mouseup', () => {
        width.set(node.offsetWidth);
        height.set(node.offsetHeight);
    });
    return { width, height };
}
