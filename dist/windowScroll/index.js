import { writable } from "svelte/store";
export function windowScroll() {
    const x = writable(window.scrollX);
    const y = writable(window.scrollY);
    const handleScroll = () => {
        x.set(window.scrollX);
        y.set(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return { x, y };
}
