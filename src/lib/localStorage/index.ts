import { writable } from 'svelte/store';

type ValueType = string | number | boolean | null | undefined | object | any[];
export function useLocalStorage<T extends ValueType>(key: string, initialValue: T): { subscribe: any; set: (value: T) => void; update: (fn: (value: T) => T) => void } {
  let storeValue: T;

  try {
    const currentValue = localStorage.getItem(key);
    storeValue = currentValue ? JSON.parse(currentValue) : initialValue;
  } catch (e) {
    console.error(`Error retrieving ${key} from localStorage`, e);
    storeValue = initialValue;
  }

  const store = writable<T>(storeValue);

  store.subscribe((value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error storing ${key} to localStorage`, e);
    }
  });

  return store;
}
