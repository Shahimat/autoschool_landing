export default {
  name: 'test',
  fields: [
    'is_open_modal'
  ],
  callback: (element, field, value, instance) => {
    console.log('Hello World!');
    console.log(element);
    console.log(field, value);
    console.log(instance);
  }
}