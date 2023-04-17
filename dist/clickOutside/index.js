export function clickOutside(node) {
    const handleClick = (event) => {
        if (node && (!node.contains(event.target))) {
            node.dispatchEvent(new CustomEvent('clickOutsideDispatch'));
        }
    };
    document.addEventListener("click", handleClick, true);
    return {
        destroy() {
            document.removeEventListener("click", handleClick, true);
        }
    };
}
