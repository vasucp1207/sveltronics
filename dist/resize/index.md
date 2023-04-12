# resize

Makes an element resizable.

## Usage

```js
<script>
  import { resizeable } from "sveltronics";
  import { onMount } from "svelte";

  let myEle;
  let { height, width } = {};
  onMount(() => {
    ({ height, width } = elementSize(myEle));
  })

</script>

<div 
  bind:this={myEle}
  use:resizeable
>
  Resizeable
</div>
```