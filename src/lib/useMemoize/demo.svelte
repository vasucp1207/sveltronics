<script>
  import { useMemoize } from './index';

  const add = (a, b) => {
    console.log('Adding:', a, b);
    return a + b;
  };

  const memoizedAdd = useMemoize(add);
</script>

<div>
  {memoizedAdd(1, 2)}
  {memoizedAdd(1, 2)}
  {memoizedAdd(2, 3)}
  {memoizedAdd(1, 2)}
  {memoizedAdd(2, 3)}
</div>
