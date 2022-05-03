import { byClass, byClassSimple, from } from "../lib/slfp";

from(byClass('section_category'), section => {
  const btnLeft = byClassSimple('section_category_nav_arrow_button--left', section);
  const btnRight = byClassSimple('section_category_nav_arrow_button--right', section);

  const sliders = [];
  from(byClass('slider_base'), slider => {
    sliders.push(slider);
  }).then(() => {
    btnLeft.addEventListener('click', () => {
      const event = new CustomEvent('slider_shift', { detail: { direction: 'right' } });
      sliders.forEach(slider => slider.dispatchEvent(event));
    });
    btnRight.addEventListener('click', () => {
      const event = new CustomEvent('slider_shift', { detail: { direction: 'left' } });
      sliders.forEach(slider => slider.dispatchEvent(event));
    });
  });
});