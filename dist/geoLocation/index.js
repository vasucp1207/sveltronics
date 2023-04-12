import { writable } from "svelte/store";
export function geoLocation() {
    let latitude = writable(null);
    let longitude = writable(null);
    const watch = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                latitude.set(position.coords.latitude);
                longitude.set(position.coords.longitude);
            });
        }
    };
    const stop = () => {
        latitude.set(null);
        longitude.set(null);
    };
    return { latitude, longitude, watch, stop };
}
