import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

type ValueType = string | number | boolean | null | undefined | object | any[];

interface Store<T extends ValueType> {
  subscribe: any;
  set: (value: T) => void;
  update: (fn: (value: T) => T) => void;
}

export function useSessionStorage<T extends ValueType>(key: string, initialValue: T): Store<T> {
  let storeValue: T;

  try {
    const currentValue: string | null = sessionStorage.getItem(key);
    storeValue = currentValue ? JSON.parse(currentValue) : initialValue;
  } catch (e) {
    console.error(`Error retrieving ${key} from sessionStorage`, e);
    storeValue = initialValue;
  }

  let store: Writable<T> = writable(storeValue);

  store.subscribe((value) => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error storing ${key} to sessionStorage`, e);
    }
  });

  return store;
}
