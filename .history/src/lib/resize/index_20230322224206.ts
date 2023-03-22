import { onMount } from "svelte";

let down: boolean = false;
export function resizeable(node: HTMLElement) {
  node.style.position = 'relative';

  let initialHeight: number = node.offsetHeight;
  let initialWidth: number = node.offsetWidth;

  let right:  = document.createElement('div');

  right.style.width = '10px';
  right.style.height = '10px';
  right.style.background = "transparent";
  right.style.position = 'absolute';
  right.style.right = '0';
  right.style.bottom = '0';
  right.style.cursor = 'se-resize';

  let startPos = { x: 0, y: 0 };

  node.appendChild(right);

  onMount(() => {
    right.addEventListener('mouseover', (e) => {
      right.style.background = "blue";
    });

    right.addEventListener('mouseleave', (e) => {
      right.style.background = "transparent";
    });

    right.addEventListener('mousedown', (e) => {
      down = true;
      startPos.x = e.clientX;
      startPos.y = e.clientY;
    });

    document.addEventListener('mousemove', (e) => {
      if (down) {
        const dx = e.clientX - startPos.x;
        const dy = e.clientY - startPos.y;

        if (node.offsetWidth + dx > initialWidth) {
          node.style.width = `${node.offsetWidth + dx}px`;
          startPos.x = e.clientX;
        }
        if(node.offsetHeight + dy > initialHeight) {
          node.style.height = `${node.offsetHeight + dy}px`;
          startPos.y = e.clientY;
        }
      }
    });
    document.addEventListener('mouseup', () => {
      down = false;
    });
  })
}