import { type Writable } from "svelte/store";
interface returnArgs {
    state: Writable<any>;
    next: () => void;
    prev: () => void;
}
export declare function cycleList(list: any[]): returnArgs;
export {};
