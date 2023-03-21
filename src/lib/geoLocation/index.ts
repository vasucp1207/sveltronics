import { writable } from "svelte/store";

export function geoLocation() {
  let latitude = writable<number | null>(null), longitude = writable<number | null>(null);

  function watch() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        latitude.set(position.coords.latitude);
        longitude.set(position.coords.longitude);
      })
    }
  }

  function stop() {
    latitude.set(null);
    longitude.set(null);
  }

  return { latitude, longitude, watch, stop };
}