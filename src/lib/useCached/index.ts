export function cached(fn: Function) {
  const cache = new Map();
  let result;

  const memoized =  (...args) => {
    const cacheKey = args.join('-');
    if (cache.has(cacheKey)) {
      result = (cache.get(cacheKey));
    } else {
      const value = fn(...args);
      cache.set(cacheKey, value);
      result = (value);
    }
    return result;
  };

  memoized.clearCache = (...args) => {
    const cacheKey = args.join('-');
    cache.delete(cacheKey);
  };

  return memoized;
}