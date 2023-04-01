export function useCloned(obj: object) {
  return JSON.parse(JSON.stringify(obj));
}