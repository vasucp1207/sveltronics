<script>
  import { cycleList } from "./index";

  let list = [10, 20, 30, 40, 50];

  let { state, next, prev } = cycleList(list);
  console.log($state)
</script>

<div class="m-5 flex items-center gap-4">
  <div class="text-lg">
    {$state}
  </div>
  <button on:click={next} class="bg-[#ff3e00] p-2 text-white rounded w-14">Next</button>
  <button on:click={prev} class="bg-[#ff3e00] p-2 text-white rounded w-14">Prev</button>
</div>