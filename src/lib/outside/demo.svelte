<script>
  import { onMount } from "svelte";
  import { isOutside } from "./index";

  let myEle;
  let outside;

  onMount(() => {
    outside = isOutside(myEle);
  })
</script>

<div
  bind:this={myEle}
  class="m-52 w-36 h-36 bg-[#ff3e02] text-white flex justify-center items-center"
>
Hover Me
</div>
<div>{$outside}</div>