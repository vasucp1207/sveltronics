export function cloned(obj: object) {
  return JSON.stringify(JSON.parse(JSON.stringify(obj)));
}