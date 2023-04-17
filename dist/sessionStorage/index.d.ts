import type { Writable } from 'svelte/store';
type ValueType = string | number | boolean | null | undefined | object | any[];
export declare function useSessionStorage<T extends ValueType>(key: string, initialValue: T): Writable<T>;
export {};
