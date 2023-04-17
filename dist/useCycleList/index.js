import { writable } from "svelte/store";
export function cycleList(list) {
    let listLength = list.length;
    let index = writable(0);
    const state = writable(list[0]);
    index.subscribe((index) => {
        state.set(list[index]);
    });
    return {
        state: state,
        next: () => index.update(p => (p + 1) % listLength),
        prev: () => index.update(p => (p - 1 + listLength) % listLength)
    };
}
