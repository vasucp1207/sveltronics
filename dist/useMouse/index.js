import { onMount } from 'svelte';
import { writable } from 'svelte/store';
export function useMouse() {
    const x = writable(0);
    const y = writable(0);
    const handleMouseMove = (e) => {
        x.set(e.clientX);
        y.set(e.clientY);
    };
    onMount(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    });
    return { x, y };
}
