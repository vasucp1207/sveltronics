# useElementVisibility

Checks that an element is in viewport or not.

## Usage

```js
<script>
  import { useElementVisibility } from "sveltronics";
  import { onMount } from "svelte";

  let myEle;
  let isVisible;

  onMount(() => {
    isVisible = useElementVisibility(myEle);
  })
  
</script>

<div>
  <div bind:this={myEle}>
    Visible
  </div>
  <div>Visible: {$isVisible}</div>
</div>
```