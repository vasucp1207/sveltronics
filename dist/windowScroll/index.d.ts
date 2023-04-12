import type { Writable } from "svelte/store";
interface scrollPos {
    x: Writable<number>;
    y: Writable<number>;
}
export declare function windowScroll(): scrollPos;
export {};
