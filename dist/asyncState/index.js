import { writable } from "svelte/store";
export async function asyncState(request) {
    let state = writable('idle');
    let value = writable();
    let isLoading = writable(true);
    try {
        let res = await request.then(res => res.json());
        state.set('resolved');
        value.set(JSON.stringify(res));
        isLoading.set(false);
    }
    catch (error) {
        state.set(error);
        isLoading.set(false);
    }
    return {
        state,
        value,
        isLoading
    };
}
