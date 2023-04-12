import type { Writable } from 'svelte/store';
interface mousePos {
    x: Writable<number>;
    y: Writable<number>;
}
export declare function useMouse(): mousePos;
export {};
