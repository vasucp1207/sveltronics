<script>
  import { onMount } from "svelte";
  import { windowScroll } from "./index";

  let x, y;
  
  onMount(() => {
    ({ x, y } = windowScroll());
  })
</script>

<div class="m-7 fixed bottom-0 right-0">
  <div>ScrollX: {$x}</div>
  <div>ScrollY: {$y}</div>
</div>
