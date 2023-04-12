/** @typedef {typeof __propDef.props}  DemoProps */
/** @typedef {typeof __propDef.events}  DemoEvents */
/** @typedef {typeof __propDef.slots}  DemoSlots */
export default class Demo extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DemoProps = typeof __propDef.props;
export type DemoEvents = typeof __propDef.events;
export type DemoSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
