type ValueType = string | number | boolean | object | any[];
interface Store<T extends ValueType> {
    subscribe: any;
    set: (value: T) => void;
    update: (fn: (value: T) => T) => void;
}
export declare function useLocalStorage<T extends ValueType>(key: string, initialValue: T): Store<T>;
export {};
