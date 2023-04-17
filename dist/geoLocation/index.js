import { writable } from "svelte/store";
export function geoLocation() {
    const coords = writable({
        accuracy: 0,
        latitude: null,
        longitude: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
    });
    let watcher;
    let isSupported = false;
    const watch = () => {
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
            });
        }
    };
    const stop = () => {
        coords.set({
            latitude: null,
            longitude: null,
            altitude: null,
            accuracy: 0,
            altitudeAccuracy: null,
            speed: null,
            heading: null
        });
        navigator.geolocation.clearWatch(watcher);
    };
    return { coords, watch, stop };
}
