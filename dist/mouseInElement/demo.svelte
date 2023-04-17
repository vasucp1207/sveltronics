<script>
  import { onMount } from "svelte";
  import { mouseInElement } from "./index";

  /**
     * @type {HTMLElement}
     */
  let myEle;
  let elementX, elementY;
  onMount(() => {
    ({ elementX, elementY } = mouseInElement(myEle));
  })

</script>

<div
  bind:this={myEle}
  class="m-5 h-[300px] w-[300px] bg-[#ff3e00] flex justify-center items-center text-white border-2"
>
  Hover me
</div>
<div class="m-7">
  <div>X: {$elementX}</div>
  <div>Y: {$elementY}</div>
</div>