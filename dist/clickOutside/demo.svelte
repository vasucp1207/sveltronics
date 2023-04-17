<script>
  import { clickOutside } from "./index";

  let show = false;

  function toogle() {
    show = !show;
  }
</script>

<button
  on:click={() => show = true}
  class="bg-[#ff3e00] m-5 text-white p-2 rounded border-2"
>
  Show Modal
</button>

{#if show}
  <div
    use:clickOutside
    on:clickOutsideDispatch={toogle}
    class="absolute top-[30%] left-[30%] border-2 w-48 h-40 flex justify-center 
    border-[#363535] rounded items-center"
  >
    Modal
  </div>
{/if}
