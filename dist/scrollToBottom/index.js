export function scrollToBottom(node) {
    node.addEventListener('DOMNodeInserted', () => {
        node.scrollTo({
            top: node.scrollHeight,
            behavior: "smooth"
        });
    });
    node.scrollTo({
        top: node.scrollHeight,
        behavior: "smooth"
    });
}
