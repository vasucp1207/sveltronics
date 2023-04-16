let down: boolean = false;

export function longPress(
  target: HTMLElement,
  timer: number
) {
  let watcher: any;
  target.addEventListener('mousedown', (e: MouseEvent) => {
    down = true;
    if(e.target === target && down) {
      watcher = setTimeout(() => {
        if(down) {
          target.dispatchEvent(
            new CustomEvent('longPressCallback')
          )
        }
      }, timer);
    }
  })

  document.addEventListener('mouseup', () => {
    down = false;
    clearTimeout(watcher);
  })
}