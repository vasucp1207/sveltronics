import { writable } from 'svelte/store';

export function useLocalStorage(key, initialValue) {
  let storeValue;

  try {
    const currentValue = localStorage.getItem(key);
    storeValue = currentValue ? JSON.parse(currentValue) : initialValue;
  } catch (e) {
    console.error(`Error retrieving ${key} from localStorage`, e);
    storeValue = initialValue;
  }

  const store = writable(storeValue);

  store.subscribe((value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error storing ${key} to localStorage`, e);
    }
  });

  return store;
}
