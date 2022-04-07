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

setTimeout(() => {
  const fieldsets = document.querySelectorAll('.custom_fieldset');
  fieldsets.forEach(fieldset => {
    const input = fieldset.querySelector('.custom_fieldset_input');
    const legend = fieldset.querySelector('.custom_fieldset_legend_content');
    const legendContainer = fieldset.querySelector('.custom_fieldset_border_top_second');
    input.addEventListener('keydown', handleFieldSetChange(input, legend, legendContainer));
  });
}, 100);