<script>
  import { infiniteScroll } from "./index";

  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  $: {
    console.log(items.length)
  }

  const loadMore = () => {
    items = [...items, ...Array.from({ length: 5 }).map((_, i) => items.length + i + 1)];
  }
</script>

<div
  use:infiniteScroll={loadMore}
  class="mt-[100px] ml-[400px] w-36 h-44 border-2 rounded text-center overflow-scroll"
>
  {#each items as item}
    <div class="border-2 h-[29.6px] bg-[#e5e7eb] rounded m-1">{item}</div>
  {/each}
</div>
