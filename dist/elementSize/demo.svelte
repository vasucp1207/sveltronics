<script>
  import { onMount } from "svelte";
  import { elementSize } from "./index";

  /**
     * @type {HTMLElement}
     */
  let myEle;
  let { height, width } = {};
  onMount(() => {
    ({ height, width } = elementSize(myEle));
  })

</script>

<textarea bind:this={myEle} class="m-5 border-2" />
<div class="m-5">Height: {$height}</div>
<div class="m-5">Width: {$width}</div>
