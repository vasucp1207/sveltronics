<script>
  import { windowSize } from "./index";
  import { onMount } from "svelte";

  let width, height;
  onMount(() => {
    ({ width, height} = windowSize());
  })

</script>

<div class="m-7">
  <div>Width: {$width}</div>
  <div>Height: {$height}</div>
</div>