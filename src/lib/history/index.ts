import { writable } from "svelte/store";

let arr = [];
let deleted = [];
let history = writable([]);
let maxStorage = 10;
export function useHistory(value) {
  function undo() {
    if(arr.length) {
      let face = arr[0];
      arr.shift();
      deleted.unshift(face);
    }
    history.set(arr);
  }

  function redo() {
    if(deleted.length) {
      arr.unshift(deleted[0]);
      deleted.shift();
    }
    history.set(arr);
  }

  if(arr.length > maxStorage) {
    arr.pop();
  }
  arr.unshift(value);

  history.set(arr);

  return { history, undo, redo };
}