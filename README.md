![library-icon](/static/icon.png)
<h1 align="center">Sveltronics</h1>
<h2 align="center">Svelte utility functions for your project.</h2>

# 📦Installation

```
npm i sveltronics
```

# 🐰Usage

```svelte
<script>
  import { resizeable, elementSize } from "sveltronics";
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

<div>Height: {$height}</div>
<div>Width: {$width}</div>
```
