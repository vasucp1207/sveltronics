export declare function cached(fn: Function): {
    (...args: any[]): any;
    clearCache(...args: any[]): void;
};
