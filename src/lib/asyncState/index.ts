import { writable } from "svelte/store";

type asyncRequest = Promise<Response>;

interface Store {
  subscribe: any;
  set: (value: any) => void;
  update: (fn: (value: any) => any) => void;
}

export async function asyncState(request: asyncRequest) {
  let state = writable<string>('idle');
  let value = writable<string>();
  let isLoading = writable<boolean>(true);

  try {
    let res = await request.then(res => res.json());
    state.set('resolved');
    value.set(JSON.stringify(res));
    isLoading.set(false);
  } catch (error) {
    state.set('rejected');
    isLoading.set(false);
  }

  return {
    state,
    value,
    isLoading
  };
}