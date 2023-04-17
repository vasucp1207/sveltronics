let down = false;
export function longPress(target, timer) {
    let watcher;
    target.addEventListener('mousedown', (e) => {
        down = true;
        if (e.target === target && down) {
            watcher = setTimeout(() => {
                if (down) {
                    target.dispatchEvent(new CustomEvent('longPressCallback'));
                }
            }, timer);
        }
    });
    document.addEventListener('mouseup', () => {
        down = false;
        clearTimeout(watcher);
    });
}
