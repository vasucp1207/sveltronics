import type { Writable } from 'svelte/store';
type ValueType = string | number | boolean | object | any[];
export declare function useLocalStorage<T extends ValueType>(key: string, initialValue: T): Writable<T>;
export {};
