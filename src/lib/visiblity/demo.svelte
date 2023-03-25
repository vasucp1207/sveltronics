<script>
  import { useElementVisibility } from "./index";
  import { onMount } from "svelte";

  /**
     * @type {HTMLElement}
     */
  let myEle;
  let isVisible;

  onMount(() => {
    isVisible = useElementVisibility(myEle);
  })
  
</script>

<div class="h-[50vh] flex items-center justify-center">
  <div
    class="w-60 h-20 border-2 rounded flex items-center justify-center bg-[#ff3e00] text-white"
    bind:this={myEle}
  >
    Visible
  </div>

  <div class="fixed right-2 bottom-2">Visible: {$isVisible}</div>
</div>
