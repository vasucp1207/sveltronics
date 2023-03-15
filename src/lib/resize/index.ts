import { onMount } from "svelte";

let downr = false;
let downl = false;
let downt = false;
let downb = false;
export function resizeable(node: HTMLElement) {
  node.style.position = 'relative';

  let initialHeight = node.offsetHeight;
  let initialWidth = node.offsetWidth;

  let right = document.createElement('div');
  let left = document.createElement('div');
  let top = document.createElement('div');
  let bottom = document.createElement('div');

  right.style.width = '5px';
  right.style.height = `${node.offsetHeight}px`;
  right.style.background = "transparent";
  right.style.position = 'absolute';
  right.style.right = '0';
  right.style.cursor = 'col-resize';

  left.style.width = '5px';
  left.style.height = `${node.offsetHeight}px`;
  left.style.background = "transparent";
  left.style.position = 'absolute';
  left.style.left = '0';
  left.style.cursor = 'col-resize';

  top.style.width = `${node.offsetWidth}px`;
  top.style.height = '5px';
  top.style.background = "transparent";
  top.style.position = 'absolute';
  top.style.top = '0';
  top.style.cursor = 'row-resize';

  bottom.style.width = `${node.offsetWidth}px`;
  bottom.style.height = '5px';
  bottom.style.background = "transparent";
  bottom.style.position = 'absolute';
  bottom.style.bottom = '0';
  bottom.style.cursor = 'row-resize';

  let startPos = { x: 0, y: 0 };

  node.appendChild(right);
  node.appendChild(left);
  node.appendChild(top);
  node.appendChild(bottom);

  onMount(() => {
    right.addEventListener('mouseover', (e) => {
      right.style.background = "blue";
    });
    left.addEventListener('mouseover', (e) => {
      left.style.background = "blue";
    });
    top.addEventListener('mouseover', (e) => {
      top.style.background = "blue";
    });
    bottom.addEventListener('mouseover', (e) => {
      bottom.style.background = "blue";
    });

    right.addEventListener('mouseleave', (e) => {
      right.style.background = "transparent";
    });
    left.addEventListener('mouseleave', (e) => {
      left.style.background = "transparent";
    });
    top.addEventListener('mouseleave', (e) => {
      top.style.background = "transparent";
    });
    bottom.addEventListener('mouseleave', (e) => {
      bottom.style.background = "transparent";
    });

    right.addEventListener('mousedown', (e) => {
      downr = true;
      startPos.x = e.clientX;
    });
    left.addEventListener('mousedown', (e) => {
      downl = true;
      startPos.x = e.clientX;
    });
    top.addEventListener('mousedown', (e) => {
      downt = true;
      startPos.y = e.clientY;
    });
    bottom.addEventListener('mousedown', (e) => {
      downb = true;
      startPos.y = e.clientY;
    });

    document.addEventListener('mousemove', (e) => {
      if (downr) {
        const dx = e.clientX - startPos.x;
        if(node.offsetWidth + dx > initialWidth) {
          node.style.width = `${node.offsetWidth + dx}px`;
          top.style.width = `${node.offsetWidth}px`;
          bottom.style.width = `${node.offsetWidth}px`;
          startPos.x = e.clientX;
        }
      } else if (downl) {
        // todo
      } else if (downb) {
        const dy = e.clientY - startPos.y;
        if(node.offsetHeight + dy > initialHeight) {
          node.style.height = `${node.offsetHeight + dy}px`;
          right.style.height = `${node.offsetHeight}px`;
          left.style.height = `${node.offsetHeight}px`;
          startPos.y = e.clientY;
        }
      } else if (downt) {
        // todo
      }
    });
    document.addEventListener('mouseup', () => {
      downr = false;
      downb = false;
      downt = false;
      downl = false;
    });
  })
}