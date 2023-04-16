export function clickOutside(node: HTMLElement) {
  const handleClick = (event: MouseEvent) => {
    if(node && (!node.contains(event.target))) {
      node.dispatchEvent(
        new CustomEvent('clickOutsideDispatch')
      )
    }
  }

  document.addEventListener("click", handleClick, true);

  return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		}
	};
}