# elementSize

It is a utility function that takes an HTML element as its argument and returns an object with it's height and width.

## Usage

```js
<script>
  import { onMount } from "svelte";
  import { elementSize } from "sveltronics";

  let myEle;
  let { height, width } = {};
  onMount(() => {
    ({ height, width } = elementSize(myEle));
  })

</script>

<textarea bind:this={myEle} />
<div>Height: {$height}</div>
<div>Width: {$width}</div>
```