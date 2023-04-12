import { writable } from 'svelte/store';
export function useSessionStorage(key, initialValue) {
    let storeValue;
    try {
        const currentValue = sessionStorage.getItem(key);
        storeValue = currentValue ? JSON.parse(currentValue) : initialValue;
    }
    catch (e) {
        console.error(`Error retrieving ${key} from sessionStorage`, e);
        storeValue = initialValue;
    }
    let store = writable(storeValue);
    store.subscribe((value) => {
        try {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
        catch (e) {
            console.error(`Error storing ${key} to sessionStorage`, e);
        }
    });
    return store;
}
