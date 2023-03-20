let history = [];
let maxStorage = 10;
export function useHistory(value) {
  if(history.length === 10) {
    history.pop();
  }
  history.unshift(value);

  return history;
}