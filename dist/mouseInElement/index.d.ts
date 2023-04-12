import type { Writable } from "svelte/store";
interface relativeElementPos {
    elementX: Writable<number>;
    elementY: Writable<number>;
}
export declare function mouseInElement(node: HTMLElement): relativeElementPos;
export {};
