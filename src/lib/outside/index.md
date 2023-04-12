# outside

Reactive function for telling that mouse is inside or outside of an element.

## Usage

```js
<script>
  import { onMount } from "svelte";
  import { isOutside } from "sveltronics";

  let myEle;
  let outside;

  onMount(() => {
    outside = isOutside(myEle);
  })
</script>

<div bind:this={myEle}>
  Hover Me
</div>
<div>{$outside}</div>
```