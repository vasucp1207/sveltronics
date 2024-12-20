import { onDestroy } from "svelte";

type loadFnType = () => void;

export function infiniteScroll(node: HTMLElement, loadFn: loadFnType) {

  let offsetHeight = (node.firstElementChild?.offsetHeight) / 2;
  let nodeRect = node.getBoundingClientRect();
  let nodeTop = nodeRect.top + offsetHeight;

  const watchScrolling = () => {
    let lastChild = node.lastElementChild;
    let rect = lastChild?.getBoundingClientRect();
    if ((rect.bottom - nodeTop) <= (node.offsetHeight)) {
      loadFn();
    }
  }
  node.addEventListener('scroll', watchScrolling);

  return (
    onDestroy(() => {
      node.removeEventListener('scroll', watchScrolling);
    })
  )
}
