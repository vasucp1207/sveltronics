# windowSize

Reactive window size.

## Usage

```js
<script>
  import { windowSize } from "sveltronics";
  import { onMount } from "svelte";

  let { width, height } = {};
  onMount(() => {
    ({ width, height} = windowSize());
  })

</script>

<div>
  <div>Width: {$width}</div>
  <div>Height: {$height}</div>
</div>
```