const className = 'active';

const handleTabClick = (buttons, tabs, current) => {
  return (event) => {
    setTimeout(() => {
      buttons.forEach(button => {
        button.classList.remove(className);
      })
      tabs.forEach(tab => {
        tab.classList.remove(className);
      })
      buttons[current].classList.add(className);
      tabs[current].classList.add(className);
    }, 10);
  }
}

setTimeout(() => {
  const tabContainers = document.querySelectorAll('.tab_container');
  tabContainers.forEach(tabContainer => {
    const buttons = tabContainer.querySelectorAll('.tab_container_link');
    const tabs = tabContainer.querySelectorAll('.tab_container_item');
    buttons.forEach((button, index) => {
      button.addEventListener('click', handleTabClick(buttons, tabs, index));
    });
    buttons[0].classList.add(className);
    tabs[0].classList.add(className);
  });
}, 100);