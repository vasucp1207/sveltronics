import { writable } from "svelte/store";
export function counter(initialValue) {
    let count = writable(initialValue);
    return {
        count,
        inc: () => count.update(c => c + 1),
        dec: () => count.update(c => c - 1),
        set: (value) => count.set(value),
        reset: () => count.set(initialValue)
    };
}
