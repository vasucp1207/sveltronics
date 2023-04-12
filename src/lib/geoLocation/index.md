# geoLocation

It allows the user to provide their location to web applications if they so desire. The user is asked for permission to report location information.

## Usage

```js
<script>
  import { geoLocation } from "sveltronics";
  import { onMount } from "svelte";
  
  let { latitude, longitude, watch, stop } = {};

  onMount(() => {
    ({ latitude, longitude, watch, stop } = geoLocation())
  })

</script>

<div>
  <div>Latitude: {$latitude}</div>
  <div>Longitude: {$longitude}</div>

  <div>
    <button on:click={watch}>
      watch
    </button>
    <button on:click={stop}>
      stop
    </button>
  </div>
</div>
```

- `watch`: Control function to resume updating geolocation.
- `stop`: Control function to pause updating geolocation.