<img width="1000" alt="lib-icon" src="https://user-images.githubusercontent.com/85363195/231576778-4db4f8fc-6fe3-4234-869a-6898f5f4cacf.png">

<h1 align="center">Sveltronics</h1>
<h2 align="center">Svelte utility functions for your project</h2>

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

