export default (actions, state) => {
  const elements = document.querySelectorAll('[data-action]');
  for (let element of elements) {
    let name = element.getAttribute('data-action');
    let action = actions.find(item => item.name === name);
    if (action) {
      element.addEventListener(
        action.type,
        action.listener(state, element),
      )
    }
  }
}