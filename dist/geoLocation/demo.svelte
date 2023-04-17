<script>
  import { geoLocation } from "./index";
  import { onMount } from "svelte";
  
  let coords, watch, stop;

  onMount(() => {
    ({ coords, watch, stop } = geoLocation());
  })
</script>

<div class="m-5">
  <div>Accuracy: {$coords?.accuracy}</div>
  <div>Latitude: {$coords?.latitude}</div>
  <div>Longitude: {$coords?.longitude}</div>
  <div>Altitude: {$coords?.altitude}</div>
  <div>AltitudeAccuracy: {$coords?.altitudeAccuracy}</div>
  <div>Heading: {$coords?.heading}</div>
  <div>Speed: {$coords?.speed}</div>

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
