# useCounter

Basic counter with utility functions.

## Usage
```js
<script>
  import { useCounter } from "sveltronics";

  let { count, inc, dec, set, reset } = useCounter(1);

</script>

<div>
  <div>{$count}</div>
  <button  on:click={inc}>
    Increase
  </button>
  <button on:click={dec}>
    Decrease
  </button>
  <button on:click={() => set(10)}>
    Set(10)
  </button>
  <button on:click={reset}>
    Reset
  </button>
</div>

```