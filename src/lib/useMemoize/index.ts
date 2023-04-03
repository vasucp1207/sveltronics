export function useMemoize(fn) {
  const cache = new Map();
  let result;

  return (...args) => {
    const cacheKey = args.join('-');
    if (cache.has(cacheKey)) {
      result = (cache.get(cacheKey));
    } else {
      const value = fn(...args);
      console.log(value, 'value')
      cache.set(cacheKey, value);
      result = (value);
    }
    return result;
  };
}