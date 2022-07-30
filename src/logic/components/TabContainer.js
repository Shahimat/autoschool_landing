import { byClass, byClassSimple, from } from "../lib/slfp";

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

export default function () {
  from(byClass('tab_container'), tabContainer => {
    const buttons = byClassSimple('tab_container_link', tabContainer);
    const tabs = byClassSimple('tab_container_item', tabContainer);
    buttons.forEach((button, index) => {
      button.addEventListener('click', handleTabClick(buttons, tabs, index));
    });
    buttons[0].classList.add(className);
    tabs[0].classList.add(className);
  });
}