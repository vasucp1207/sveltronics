export function clickOutside(node) {
  const handleClick = (event) => {
    if(!node.contains(event.target)) {
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