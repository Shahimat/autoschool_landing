import initialState from "./state.json";
import State from './StateConstructor';
import bindings from './bindings';
import StateConstructor from './StateConstructor';
import ActionBuilder from './ActionBuilder';
import actions from './actions';

const state = new StateConstructor(initialState);
state.activate( state );
globalThis.state = state;

export default function () {
  const elements = document.querySelectorAll('[data-state]');
  for (let element of elements) {
    let field = element.getAttribute('data-state');
    state.addElement(field, element);
  }
  for (let binding of bindings) {
    state.addCallback(binding.name, binding.callback);
    for (let field of binding.fields) {
      state.addBinding(binding.name, field);
    }
  }
  ActionBuilder(actions, state);
}