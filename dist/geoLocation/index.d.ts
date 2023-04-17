import type { Writable } from "svelte/store";
interface returnGeoArgs {
    coords: Writable<object>;
    watch: () => void;
    stop: () => void;
}
export declare function geoLocation(): returnGeoArgs;
export {};
