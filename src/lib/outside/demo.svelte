<script>
  import { onMount } from "svelte";
  import { isOutside } from "./index";

  /**
     * @type {HTMLElement}
     */
  let myEle;
  let outside;

  onMount(() => {
    outside = isOutside(myEle);
  })
</script>

<div
  bind:this={myEle}
  class="m-5 w-36 h-36 bg-[#ff3e02] text-white flex justify-center items-center"
>
Hover Me
</div>
<div class="m-5">{$outside}</div>