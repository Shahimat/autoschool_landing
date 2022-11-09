export default {
  name: 'close_modal',
  type: 'click',
  listener: (state, element) => {
    return (event) => {
      state.set('is_open_modal', false);
      event.preventDefault();
    };
  },
};
