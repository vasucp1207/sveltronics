import { writable, type Writable } from "svelte/store";

interface returnArgs {
  state: Writable<any>,
  next: () => void,
  prev: () => void
}

export function cycleList(list: any[]): returnArgs {
  let listLength: number = list.length;
  let index = writable<number>(0);
  const state = writable<any>(list[0]);

  index.subscribe((index) => {
    state.set(list[index]);
  })
  return {
    state: state,
    next: () => index.update(p => (p + 1) % listLength),
    prev: () => index.update(p => (p - 1 + listLength) % listLength)
  }
}