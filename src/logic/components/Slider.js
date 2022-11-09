import { byClass, byClassSimple, from } from '../lib/slfp';

const getExtremeElements = (list) => [
  list.firstElementChild,
  list.lastElementChild,
];

const shiftRight = (list, lifetime = 300) => {
  const [first, last] = getExtremeElements(list);
  const elem = last.cloneNode(true);
  list.insertBefore(elem, first);
  list.removeChild(last);
  list.style.marginLeft = `-${elem.clientWidth}px`;
  window.getComputedStyle(list).marginLeft;
  list.style.cssText = `transition: margin ${lifetime}ms ease;`;
  list.style.marginLeft = '0px';
  setTimeout(function () {
    list.style.cssText = 'transition: none;';
  }, lifetime);
};

const shiftLeft = (list, lifetime = 300) => {
  const [first, last] = getExtremeElements(list);
  const elem = first.cloneNode(true);
  list.appendChild(elem);
  list.style.cssText = `transition: margin ${lifetime}ms ease;`;
  list.style.marginLeft = `-${elem.clientWidth}px`;
  setTimeout(function () {
    list.style.cssText = 'transition: none;';
    list.removeChild(first);
    list.style.marginLeft = '0px';
  }, lifetime);
};

export default function () {
  from(byClass('slider_base'), (slider) => {
    const list = byClassSimple('slider_base_list', slider);

    let isBlock = false;
    const lifetime = 300;
    const unblock = () => setTimeout(() => (isBlock = false), lifetime);
    slider.addEventListener('slider_shift', (event) => {
      if (!isBlock) {
        isBlock = true;
        const direction = event.detail ? event.detail.direction : '';
        if (direction === 'left') {
          shiftLeft(list, lifetime);
        } else if (direction === 'right') {
          shiftRight(list, lifetime);
        }
        unblock();
      }
    });
  });
}
