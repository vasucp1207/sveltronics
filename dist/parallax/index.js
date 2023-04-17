export function parallax(node, options) {
    let perspective = options?.length === 2 ? options[0] : 700;
    let delta = options?.length === 2 ? options[1] : 10;
    const parallaxEffect = (e) => {
        const pos = e.currentTarget.getBoundingClientRect();
        const cursPosX = e.pageX - pos.left;
        const cursPosY = e.pageY - pos.top;
        const cursCenterX = pos.width / 2 - cursPosX;
        const cursCenterY = pos.height / 2 - cursPosY;
        const transformString = `perspective(${perspective}px) rotateX(${cursCenterY / delta}deg) rotateY(${-cursCenterX / delta}deg)`;
        e.currentTarget.style.transform = transformString;
    };
    node.addEventListener('mousemove', parallaxEffect);
}
