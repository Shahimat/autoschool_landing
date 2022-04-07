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

setTimeout(() => {
  const textareas = document.querySelectorAll('.custom_textarea');
  textareas.forEach(textarea => {
    const input = textarea.querySelector('.custom_textarea_input');
    const legend = textarea.querySelector('.custom_textarea_legend_content');
    const legendContainer = textarea.querySelector('.custom_textarea_border_top_second');
    input.addEventListener('keydown', handleTextAreaChange(input, legend, legendContainer));
  });
}, 100);