import { writable } from 'svelte/store';

type ValueType = string | number | boolean | null | undefined | object | any[];
export function useSessionStorage<T extends ValueType>(key: string, initialValue: T): { subscribe: any; set: (value: T) => void; update: (fn: (value: T) => T) => void } {
  let storeValue: T;

  try {
    const currentValue = sessionStorage.getItem(key);
    storeValue = currentValue ? JSON.parse(currentValue) : initialValue;
  } catch (e) {
    console.error(`Error retrieving ${key} from sessionStorage`, e);
    storeValue = initialValue;
  }

  const store = writable<T>(storeValue);

  store.subscribe((value) => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error storing ${key} to sessionStorage`, e);
    }
  });

  return store;
}
