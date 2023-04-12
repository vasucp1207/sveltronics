<script>
    import { onMount } from "svelte";
  import { longPress } from "./index";

  /**
     * @type {HTMLElement}
     */
  let tarEle;
  let currVal = false;

  const onLongPressCallback = (e) => {
    currVal = !currVal;
  }

  onMount(() => {
    const hold = longPress(tarEle, onLongPressCallback);
  })
</script>

<div class="ml-7 mt-5">{currVal}</div>
<button bind:this={tarEle} class="ml-5 bg-[#ff3e00] text-white rounded border-2 w-32 h-10">
  Press(1000ms)
</button>
