export function cloned(obj) {
    return JSON.stringify(JSON.parse(JSON.stringify(obj)));
}
