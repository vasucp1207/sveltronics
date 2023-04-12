import { writable } from "svelte/store";
export function windowSize() {
    let width = writable(window.innerWidth);
    let height = writable(window.innerHeight);
    window.addEventListener('resize', () => {
        width.set(window.innerWidth);
        height.set(window.innerHeight);
    });
    return { width, height };
}
