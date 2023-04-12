# useCached

Cache results of functions depending on arguments and keep it reactive.

## Usage

```js
<script>
  import { useCached } from 'sveltronics';

  const add = (a, b) => {
    console.log('Adding:', a, b);
    return a + b;
  };

  const memoizedAdd = useCached(add);
</script>

<div>
  {memoizedAdd(1, 2)}
  {memoizedAdd(1, 2)}
  {memoizedAdd(2, 3)}
  {memoizedAdd(1, 2)}
  {memoizedAdd(2, 3)}
</div>
```