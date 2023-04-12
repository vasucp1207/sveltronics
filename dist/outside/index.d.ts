import type { Writable } from "svelte/store";
type isOutsideVar = Writable<boolean>;
export declare function isOutside(node: HTMLElement): isOutsideVar;
export {};
