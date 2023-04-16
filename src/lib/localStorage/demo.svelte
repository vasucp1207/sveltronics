<script>
  import { useLocalStorage } from "./index";

  let count = useLocalStorage('array', [0, 1]);
</script>

<div class="flex justify-center items-center h-96 gap-4">
  <p class="text-3xl">{$count}</p>
  <button
    on:click={() => count.update(val => [...val, $count.length])}
    class="bg-[#ff3e00] p-1 text-white rounded border-2 w-20 h-10"
  >
    Increase
  </button>
  <button
    on:click={() => count.set([0, 1])}
    class="text-[#ff3e00] bg-white rounded border-2 w-20 h-10"
  >
    Reset
  </button>
</div>
