# useCycleList

Cycle through a list of items.

## Usage

```js
<script>
  import { useCycleList } from "sveltronics";

  let list = [1, 2, 3, 4, 5];

  let { state, next, prev } = useCycleList(list);
</script>

<div>
  <div>
    {$state}
  </div>
  <button on:click={next}>Next</button>
  <button on:click={prev}>Prev</button>
</div>
```