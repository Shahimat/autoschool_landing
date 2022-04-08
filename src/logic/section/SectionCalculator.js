setTimeout(() => {
  const calculatorButton = document.querySelector('.btn_enroll');
  const calculatorModal = document.querySelector('.selection_calculator_modal');
  calculatorButton.addEventListener('click', (event) => {
    calculatorModal.classList.remove('selection_calculator_modal_nodisplay');
    event.preventDefault();
  });

  const calculatorCloseButton = document.querySelector('.scm_close_button');
  calculatorCloseButton.addEventListener('click', (event) => {
    calculatorModal.classList.add('selection_calculator_modal_nodisplay');
    event.preventDefault();
  });
}, 100);