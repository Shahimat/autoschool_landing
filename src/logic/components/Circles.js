import { Vector } from "../lib/slf";
import { byClass, byClassSimple, from } from "../lib/slfp";

const Current = new Vector();

const getElemCenter = (elem) => {
  let box = elem.getBoundingClientRect();

  return {
    X: Math.round((box.right + box.left) * 0.5),
    Y: Math.round((box.top + box.bottom) * 0.5),
  }
}

const elements = [];

window.addEventListener('mousemove', e => {
  Current.set(e.clientX, e.clientY);
  if (elements.length > 0) {
    for (let elem of elements) {
      const { circles, circle_0, circle_1, circle_2, circle_3, delta } = elem;
      delta.assign( getElemCenter(circles) ).minus(Current).prod(100 / 8000);
      const { c0, c1, c2, c3 } = { c0: 0, c1: 0.5, c2: 0.8, c3: 1.2 };
      circle_0.style.transform = `translate(${-50 + delta.X * c0}%,${-50 + delta.Y * c0}%)`;
      circle_1.style.transform = `translate(${-50 + delta.X * c1}%,${-50 + delta.Y * c1}%)`;
      circle_2.style.transform = `translate(${-50 + delta.X * c2}%,${-50 + delta.Y * c2}%)`;
      circle_3.style.transform = `translate(${-50 + delta.X * c3}%,${-50 + delta.Y * c3}%)`;
    }
  }
});

from(byClass('circles_base'), circles => {
  const circle_0 = byClassSimple('circles_base--circle_0', circles);
  const circle_1 = byClassSimple('circles_base--circle_1', circles);
  const circle_2 = byClassSimple('circles_base--circle_2', circles);
  const circle_3 = byClassSimple('circles_base--circle_3', circles);
  elements.push({
    circles,
    circle_0,
    circle_1,
    circle_2,
    circle_3,
    delta: new Vector(),
  });
});