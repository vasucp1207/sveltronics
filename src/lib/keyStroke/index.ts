export function keyStroke(node: HTMLElement) {
  node.style.position = 'absolute';

  let currNode = node.getBoundingClientRect();;
  window.addEventListener('keydown', (e) => {
    currNode = node.getBoundingClientRect();
    if(e.key === 'ArrowDown') {
      node.style.top = `${currNode.top - 20}px`;
    } else if(e.key === 'ArrowUp') {
      node.style.top = `${currNode.top - 60}px`;
    } else if(e.key === 'ArrowLeft') {
      node.style.left = `${currNode.left - 60}px`;
    } else if(e.key === 'ArrowRight') {
      node.style.left = `${currNode.left - 20}px`;
    }
  })
}