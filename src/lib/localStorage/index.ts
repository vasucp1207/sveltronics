import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

type ValueType = string | number | boolean | object | any[];

interface Store<T extends ValueType> {
  subscribe: any;
  set: (value: T) => void;
  update: (fn: (value: T) => T) => void;
}

export function useLocalStorage<T extends ValueType>(key: string, initialValue: T): Store<T> {
  let storeValue: T;

  try {
    const currentValue = localStorage.getItem(key);
    storeValue = currentValue? JSON.parse(currentValue) : initialValue;
  } catch (e) {
    console.error(`Error retrieving ${key} from localStorage`, e);
    storeValue = initialValue;
  }

  let store: Writable<T> = writable(storeValue);

  store.subscribe((value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error storing ${key} to localStorage`, e);
    }
  });

  return store;
}
