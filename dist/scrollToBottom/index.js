import { onMount } from "svelte";
export function scrollToBottom(node) {
    node.addEventListener('DOMNodeInserted', () => {
        node.lastChild.scrollIntoView({ behavior: 'smooth' });
    });
    onMount(() => {
        node.lastChild.scrollIntoView({ behavior: 'smooth' });
    });
}
