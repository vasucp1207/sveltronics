export function scrollToBottom(node: HTMLElement) {
  node.addEventListener('DOMNodeInserted', () => {
    node.scrollTo({
      top: node.scrollHeight,
      behavior: "smooth"
    });
  })

  node.scrollTo({
    top: node.scrollHeight,
    behavior: "smooth"
  });
}