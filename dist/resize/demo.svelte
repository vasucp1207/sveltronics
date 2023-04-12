<script>
  import { resizeable } from "./index";
  import { elementSize } from "../elementSize/index";
  import { onMount } from "svelte";

  /**
     * @type {HTMLElement}
     */
  let myEle;
  let { height, width } = {};
  onMount(() => {
    ({ height, width } = elementSize(myEle));
  })

</script>

<div 
  bind:this={myEle}
  use:resizeable
  class="m-5 w-36 h-36 bg-[#ff3e02] text-white flex justify-center items-center"
>
  Resizeable
</div>

<div class="m-5">Height: {$height}</div>
<div class="m-5">Width: {$width}</div>