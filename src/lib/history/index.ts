import { writable } from "svelte/store";

let arr = [];
let deleted = [];
let history = writable([]);
let maxStorage = 10;
export function useHistory(store) {
  function undo() {
    if(arr.length) {
      let face = arr[0];
      arr.shift();
      deleted.unshift(face);
    }
    history.set(arr);
    // console.log(arr)
    store.set(arr[0]);
  }

  function redo() {
    if(deleted.length) {
      arr.unshift(deleted[0]);
      deleted.shift();
    }
    history.set(arr);
    store.set(arr[0]);
  }

  if(arr.length > maxStorage) {
    arr.pop();
  }

  store.subscribe((value) => {
    arr.unshift(value);
  })

  history.set(arr);
  store.set(arr[0]);

  return { history, undo, redo };
}