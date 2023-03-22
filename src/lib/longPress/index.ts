let down: boolean = false;

export function longPress(target: HTMLElement, callback: (e: MouseEvent) => void) {
  let timer: any = null;

  target.addEventListener('mousedown', (e: MouseEvent) => {
    down = true;
    if(e.target === target && down) {
      timer = setTimeout(() => {
        if(down)
          callback(e);
      }, 1000);
    }
  })

  document.addEventListener('mouseup', () => {
    down = false;
    clearTimeout(timer);
  })
}