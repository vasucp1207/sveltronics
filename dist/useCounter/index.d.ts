import { type Writable } from "svelte/store";
interface returnArgs {
    count: Writable<number>;
    inc: () => void;
    dec: () => void;
    set: (value: number) => void;
    reset: () => void;
}
export declare function counter(initialValue: number): returnArgs;
export {};
