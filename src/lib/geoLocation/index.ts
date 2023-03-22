import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

interface returnGeoArgs {
  latitude: Writable<number | null>;
  longitude: Writable<number | null>;
  watch: () => void;
  stop: () => void;
}

export function geoLocation(): returnGeoArgs {
  let latitude: Writable<number | null> = writable(null);
  let longitude: Writable<number | null> = writable(null);

  const watch = (): void => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        latitude.set(position.coords.latitude);
        longitude.set(position.coords.longitude);
      })
    }
  }

  const stop = (): void => {
    latitude.set(null);
    longitude.set(null);
  }

  return { latitude, longitude, watch, stop };
}