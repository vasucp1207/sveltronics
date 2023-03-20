<script>
  import { useHistory } from "./index";

  let count = 0;
  
  let history;
  $: {
    history = useHistory(count);
  }
</script>

<div class="m-5 flex justify-center items-center flex-col">
  <div>{count}</div>
  <button
    on:click={() => (count += 1)}
    class="bg-[#ff3e00] p-1 text-white rounded border-2 w-20 h-10"
  >
    Increase
  </button>

  <div>History: {history}</div>
  <div>[Max default storage is 10]</div>
</div>
