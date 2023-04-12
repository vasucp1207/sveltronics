type asyncRequest = Promise<Response>;
export declare function asyncState(request: asyncRequest): Promise<{
    state: import("svelte/store").Writable<string>;
    value: import("svelte/store").Writable<string>;
    isLoading: import("svelte/store").Writable<boolean>;
}>;
export {};
