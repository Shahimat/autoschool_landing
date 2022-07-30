import { byClass, byClassSimple, from } from "../lib/slfp";

const handleTextAreaChange = (input, legend, legendContainer) => {
  const setClassByValue = (value) => {
    if (value === '') {
      legend.classList.remove('custom_textarea_legend_content_filled');
      legendContainer.classList.remove('custom_textarea_border_top_second_filled');
    } else {
      legend.classList.add('custom_textarea_legend_content_filled');
      legendContainer.classList.add('custom_textarea_border_top_second_filled');
    }
  };
  setClassByValue(input.value);
  return (event) => {
    setTimeout(() => {
      setClassByValue(input.value);
    }, 10);
  }
}

export default function () {
  from(byClass('custom_textarea'), textarea => {
    const input = byClassSimple('custom_textarea_input', textarea);
    const legend = byClassSimple('custom_textarea_legend_content', textarea);
    const legendContainer = byClassSimple('custom_textarea_border_top_second', textarea);
    input.addEventListener('keydown', handleTextAreaChange(input, legend, legendContainer));
  });
}