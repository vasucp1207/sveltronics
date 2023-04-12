export function useCloned(obj) {
    return JSON.parse(JSON.stringify(obj));
}
