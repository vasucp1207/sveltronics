export declare function useHistory(store: any): {
    history: import("svelte/store").Writable<never[]>;
    undo: () => void;
    redo: () => void;
};
