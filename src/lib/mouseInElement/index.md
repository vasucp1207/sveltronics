# mouseInElement

Reactive mouse position related to an element

## Usage

```js
<script>
  import { onMount } from "svelte";
  import { mouseInElement } from "sveltronics";

  let myEle;
  let { elementX, elementY } = {};
  onMount(() => {
    ({ elementX, elementY } = mouseInElement(myEle));
  })

</script>

<div bind:this={myEle}>
  Hover me
</div>
<div>
  <div>X: {$elementX}</div>
  <div>Y: {$elementY}</div>
</div>
```