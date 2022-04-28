const handleSwitchList = (input, list) => (event) => {
  if (!input.classList.contains('active')) {
    input.classList.add('active');
    list.classList.add('active');
  } else {
    input.classList.remove('active');
    list.classList.remove('active');
  }
}

const handleSetValue = (inputText, value, onSwitch) => (event) => {
  inputText.innerHTML = value;
}

setTimeout(() => {
  const selects = document.querySelectorAll('.select_base');
  selects.forEach(select => {
    const input = select.querySelector('.select_base_button');
    const inputText = input.querySelector('.select_input');
    const list = select.querySelector('.select_list');
    const items = select.querySelectorAll('.select_list--item');
    const onSwitch = handleSwitchList(input, list);
    input.addEventListener('click', onSwitch);
    items.forEach(item => {
      item.addEventListener('click', handleSetValue(inputText, item.innerHTML, onSwitch));
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
}, 100);