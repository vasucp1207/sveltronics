import { writable } from 'svelte/store';

export function useLocalStorage(key, initialValue) {
  const currentValue = localStorage.getItem(key);
  const initial = currentValue ? JSON.parse(currentValue) : initialValue;

  const store = writable(initial);

  store.subscribe((value) => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  return store;
}
