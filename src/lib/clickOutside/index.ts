export function clickOutside(node: HTMLElement) {
  const handleClick = (event: MouseEvent) => {
    if(node !== event.target) {
      alert("outside click 🥳");
    }
  }

  document.addEventListener("click", handleClick, true);

  return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		}
	};
}