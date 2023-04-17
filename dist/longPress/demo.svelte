<script>
  import { onMount } from "svelte";
  import { longPress } from "./index";

  /**
     * @type {HTMLElement}
     */
  let currVal = false;

  const toogle = () => {
    currVal = !currVal;
  }

</script>

<div class="ml-7 mt-5">{currVal}</div>
<button 
  use:longPress={1000}
  on:longPressCallback={toogle}
  class="ml-5 bg-[#ff3e00] text-white rounded border-2 p-2"
>
  Press(1000ms default)
</button>
