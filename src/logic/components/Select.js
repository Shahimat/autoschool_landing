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

const handleSetValue = (inputText, value, index, onSwitch, section, dataName) => (event) => {
  inputText.innerHTML = value;
  inputText.setAttribute('data-key', index);
  section.setAttribute(`data-${dataName}`, index);
  onSwitch();
}

let idnum = 0;

export default function () {
  from(byClass('select_base'), select => {
    const input = byClassSimple('select_base_button', select);
    const inputText = byClassSimple('select_input', input);
    const list = byClassSimple('select_list', select);
    const items = byClassSimple('select_list--item', select);
    const section = byClassSimple('section_calculator');
    input.id = `select_base_button_id${idnum}`;
    inputText.id = `select_input_id${idnum}`;
    idnum++;
    const onSwitch = handleSwitchList(input, list);
    inputText.setAttribute('data-key', 0);
    const dataName = select.id ?? 'select';
    input.addEventListener('click', onSwitch);
    items.forEach((item, index) => {
      item.addEventListener('click', handleSetValue(inputText, item.innerHTML, index, onSwitch, section, dataName));
      if (index === 0) {
        section.setAttribute(`data-${dataName}`, index);
      }
      item.setAttribute(`data-${dataName}`, index);
    });
    document.addEventListener('click', (event) => {
      if (input.classList.contains('active')) {
        const target = event.target;
        if (
          target.id === input.id ||
          target.id === inputText.id
        ) {
          return;
        }
        input.classList.remove('active');
        list.classList.remove('active');
      }
    });
  });
}