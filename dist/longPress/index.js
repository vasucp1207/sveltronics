let down = false;
export function longPress(target, callback) {
    let timer = null;
    target.addEventListener('mousedown', (e) => {
        down = true;
        if (e.target === target && down) {
            timer = setTimeout(() => {
                if (down)
                    callback(e);
            }, 1000);
        }
    });
    document.addEventListener('mouseup', () => {
        down = false;
        clearTimeout(timer);
    });
}
