import type { Writable } from "svelte/store";
interface returnGeoArgs {
    latitude: Writable<number | null>;
    longitude: Writable<number | null>;
    watch: () => void;
    stop: () => void;
}
export declare function geoLocation(): returnGeoArgs;
export {};
