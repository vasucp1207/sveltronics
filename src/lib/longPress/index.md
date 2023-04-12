# longPress

`longPress` is a Svelte custom action that adds long press functionality to an element.

## Usage

```js
<script>
  import { onMount } from "svelte";
  import { longPress } from "sveltronics";

  let tarEle;
  let currVal = false;

  const onLongPressCallback = (e) => {
    currVal = !currVal;
  }

  onMount(() => {
    const hold = longPress(tarEle, onLongPressCallback);
  })
</script>

<div>{currVal}</div>
<button bind:this={tarEle}>
  Press(1000ms)
</button>
```