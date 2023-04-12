import { writable } from "svelte/store";
export function isOutside(node) {
    let outside = writable(true);
    node.addEventListener('mouseover', () => {
        outside.set(false);
    });
    node.addEventListener('mouseleave', () => {
        outside.set(true);
    });
    return outside;
}
