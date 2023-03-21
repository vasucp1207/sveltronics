<script>
  import { geoLocation } from "./index";
  import { onMount } from "svelte";
  let { latitude, longitude, watch, stop } = {};

  onMount(() => {
    ({ latitude, longitude, watch, stop } = geoLocation())
  })

</script>

<div class="m-5">
  <div>Latitude: {$latitude}</div>
  <div>Longitude: {$longitude}</div>

  <div class="mt-3 -ml-1">
    <button
      on:click={watch}
      class="bg-[#ff3e00] p-1 text-white rounded border-2 w-20 h-10"
    >
      watch
    </button>
    <button
      on:click={stop}
      class="bg-[#ff3e00] p-1 text-white rounded border-2 w-20 h-10"
    >
      stop
    </button>
  </div>
</div>
