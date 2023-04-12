# windowScroll

Scrolling position of window.

## Usage

```js
<script>
  import { onMount } from "svelte";
  import { windowScroll } from "sveltronics";

  let { x, y } = {};
  
  onMount(() => {
    ({ x, y } = windowScroll());
  })
</script>

<div>
  <div>ScrollX: {$x}</div>
  <div>ScrollY: {$y}</div>
</div>
```