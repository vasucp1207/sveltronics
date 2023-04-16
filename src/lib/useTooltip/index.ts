export function tooltip(node: HTMLElement, content: string) {
  node.style.position = 'relative';

  let tip = document.createElement('div');
  let after = document.createElement('div');
  node.appendChild(tip);

  tip.style.position = 'absolute';
  tip.style.background = '#555';
  tip.style.width = 'max-content';
  tip.style.padding = '5px';
  tip.style.textAlign = 'center';
  tip.style.zIndex = '10';
  tip.style.borderRadius = '5px';
  tip.textContent = content;
  tip.style.top = '-120%';
  tip.style.left = '0%';
  tip.style.visibility = 'hidden';

  after.style.position = 'absolute';
  after.style.background = '#555';
  after.style.top = '-55%';
  after.style.left = '10%';
  after.style.width = '13px';
  after.style.height = '13px';
  after.style.zIndex = '10';
  after.style.transform = `rotateZ(${45}deg)`;
  after.style.visibility = 'hidden';

  tip.after(after);
  
  node.addEventListener('mouseover', () => {
    tip.style.visibility = 'visible';
    after.style.visibility = 'visible';
  })

  node.addEventListener('mouseleave', () => {
    tip.style.visibility = 'hidden';
    after.style.visibility = 'hidden';
  })
}