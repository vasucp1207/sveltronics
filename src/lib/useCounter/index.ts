import { writable, type Writable } from "svelte/store";

interface returnArgs {
  count: Writable<number>,
  inc: () => void,
  dec: () => void,
  set: (value: number) => void;
  reset: () => void
}

export function useCounter(initialValue: number): returnArgs {
  let count = writable<number>(initialValue);
  
  return {
    count,
    inc: () => count.update(c => c + 1),
    dec: () => count.update(c => c - 1),
    set: (value: number) => count.set(value),
    reset: () => count.set(initialValue)
  }
}