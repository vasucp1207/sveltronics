import type { Writable } from "svelte/store";
interface Dimen {
    width: Writable<number>;
    height: Writable<number>;
}
export declare function elementSize(node: HTMLElement): Dimen;
export {};
