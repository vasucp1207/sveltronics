<script>
  import { cached } from './index';

  const add = (a, b) => {
    console.log('Adding:', a, b);
    return a + b;
  };

  const memoizedAdd = cached(add);

  function clear() {
    memoizedAdd.clearCache(1, 2)
  }
</script>

<div>
  {memoizedAdd(1, 2)}
  {memoizedAdd(1, 2)}
  {memoizedAdd(2, 3)}
  {memoizedAdd(1, 2)}
  {memoizedAdd(2, 3)}
  {memoizedAdd(1, 2)}
  {memoizedAdd(2, 3)}
</div>
