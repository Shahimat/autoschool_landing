import { byClass, byClassSimple, from } from "../lib/slfp";

const handleSwitchList = (input, list) => (event) => {
  if (!input.classList.contains('active')) {
    input.classList.add('active');
    list.classList.add('active');
  } else {
    input.classList.remove('active');
    list.classList.remove('active');
  }
}

const handleSetValue = (inputText, value, index, onSwitch) => (event) => {
  inputText.innerHTML = value;
  inputText.setAttribute('data-key', index);
  onSwitch();
}

from(byClass('select_base'), select => {
  const input = byClassSimple('select_base_button', select);
  const inputText = byClassSimple('select_input', input);
  const list = byClassSimple('select_list', select);
  const items = byClassSimple('select_list--item', select);
  const onSwitch = handleSwitchList(input, list);
  inputText.setAttribute('data-key', 0);
  input.addEventListener('click', onSwitch);
  items.forEach((item, index) => {
    item.addEventListener('click', handleSetValue(inputText, item.innerHTML, index, onSwitch));
  });
  document.addEventListener('click', (event) => {
    if (input.classList.contains('active')) {
      const target = event.target;
      if (
        target.classList.contains('select_base_button') || 
        target.classList.contains('select_input') ||
        target.classList.contains('select_arrow_decor_img')
      ) {
        return;
      }
      input.classList.remove('active');
      list.classList.remove('active');
    }
  });
});