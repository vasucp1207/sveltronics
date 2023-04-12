<script>
  import { writable } from "svelte/store";
  import { useHistory } from "./index";

  let count = writable(0);
  
  let { history, undo, redo } = {};
  $: {
    ({ history, undo, redo } = useHistory(count));
  }
</script>

<div class="m-5 flex justify-center items-center flex-col">
  <div>{$count}</div>
  <div>
    <button
      on:click={() => (count.update(val => val + 1))}
      class="bg-[#ff3e00] p-1 text-white rounded border-2 w-20 h-10"
    >
      Increase
    </button>
    <button
      on:click={undo}
      class={`bg-[#ff3e00] p-1 text-white rounded border-2 w-16 h-10`}
    >
      Undo
    </button>
    <button
      on:click={redo}
      class="bg-[#ff3e00] p-1 text-white rounded border-2 w-16 h-10"
    >
      Redo
    </button>
  </div>

  <div>History: {$history}</div>
  <div>[Max default storage is 10]</div>
</div>
