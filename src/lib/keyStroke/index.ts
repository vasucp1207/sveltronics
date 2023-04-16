export function keyStroke(node: HTMLElement, moveBy: number) {
  let parent = node.parentElement;
  parent.style.overflow = 'hidden';
  node.style.position = 'absolute';

  node.style.left = '0px';
  node.style.top = '0px';
  window.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowDown') {
      node.style.top = parseInt(node.style.top) + moveBy + 'px';
    } else if(e.key === 'ArrowUp') {
      node.style.top = parseInt(node.style.top) - moveBy + 'px';
    } else if(e.key === 'ArrowLeft') {
      node.style.left = parseInt(node.style.left) - moveBy + 'px';
    } else if(e.key === 'ArrowRight') {
      node.style.left = parseInt(node.style.left) + moveBy + 'px';
    }
  })
}