import { byClass, byClassSimple, from } from "../lib/slfp";

const handleFieldSetChange = (input, legend, legendContainer) => {
  const setClassByValue = (value) => {
    if (value === '') {
      legend.classList.remove('custom_fieldset_legend_content_filled');
      legendContainer.classList.remove('custom_fieldset_border_top_second_filled');
    } else {
      legend.classList.add('custom_fieldset_legend_content_filled');
      legendContainer.classList.add('custom_fieldset_border_top_second_filled');
    }
  };
  setClassByValue(input.value);
  return (event) => {
    setTimeout(() => {
      setClassByValue(input.value);
    }, 10);
  }
}

from(byClass('custom_fieldset'), fieldset => {
  const input = byClassSimple('custom_fieldset_input', fieldset);
  const legend = byClassSimple('custom_fieldset_legend_content', fieldset);
  const legendContainer = byClassSimple('custom_fieldset_border_top_second', fieldset);
  input.addEventListener('keydown', handleFieldSetChange(input, legend, legendContainer));
});