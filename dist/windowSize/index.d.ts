import type { Writable } from "svelte/store";
interface windowDimen {
    width: Writable<number>;
    height: Writable<number>;
}
export declare function windowSize(): windowDimen;
export {};
