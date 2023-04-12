type ValueType = string | number | boolean | null | undefined | object | any[];
interface Store<T extends ValueType> {
    subscribe: any;
    set: (value: T) => void;
    update: (fn: (value: T) => T) => void;
}
export declare function useSessionStorage<T extends ValueType>(key: string, initialValue: T): Store<T>;
export {};
