import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

interface returnGeoArgs {
  coords: Writable<object>;
  watch: () => void;
  stop: () => void;
}

export function geoLocation(): returnGeoArgs {
  const coords: Writable<object> = writable({
    accuracy: 0,
    latitude: null,
    longitude: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null,
  });

  let watcher: any;
  let isSupported: boolean = false;

  const watch = (): void => {
    if ("geolocation" in navigator) {
      isSupported = true;
    }
    if (navigator.geolocation && isSupported) {
      watcher = navigator.geolocation.getCurrentPosition((position) => {
        coords.set({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          altitude: position.coords.altitude,
          accuracy: position.coords.accuracy,
          altitudeAccuracy: position.coords.altitudeAccuracy,
          speed: position.coords.speed,
          heading: position.coords.heading
        });
      })
    }
  }

  const stop = (): void => {
    coords.set({
      latitude: null,
      longitude: null,
      altitude: null,
      accuracy: 0,
      altitudeAccuracy: null,
      speed: null,
      heading: null
    });
    navigator.geolocation.clearWatch(watcher)
  }

  return { coords, watch, stop };
}