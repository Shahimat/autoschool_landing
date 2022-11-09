export default {
  name: 'open_modal',
  type: 'click',
  listener: (state, element) => {
    return (event) => {
      state.set('is_open_modal', true);
      event.preventDefault();
    };
  },
};
