export function flip(node) {
    if (node) {
        let content = node.querySelector('.content');
        let front = node.querySelector('.front');
        let back = node.querySelector('.back');
        node.style.perspective = '1000px';
        node.style.backgroundColor = 'transparent';
        content.style.position = 'relative';
        content.style.height = '100%';
        content.style.width = '100%';
        content.style.transition = 'transform 0.6s';
        content.style.transformStyle = 'preserve-3d';
        content.style.boxShadow = '0 14px 18px 0 rgba(0,0,0,0.2)';
        front.style.position = 'absolute';
        front.style.height = '100%';
        front.style.width = '100%';
        front.style.backfaceVisibility = 'hidden';
        back.style.position = 'absolute';
        back.style.height = '100%';
        back.style.width = '100%';
        back.style.color = 'black';
        back.style.backfaceVisibility = 'hidden';
        back.style.transform = `rotateY(${180}deg)`;
        node.addEventListener('mouseover', () => {
            content.style.transform = `rotateY(${180}deg)`;
        });
        node.addEventListener('mouseleave', () => {
            content.style.transform = `rotateY(${0}deg)`;
        });
    }
}
