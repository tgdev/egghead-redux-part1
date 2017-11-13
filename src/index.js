import 'babel-polyfill';
import { createStore } from 'redux';

import todoApp from './reducers/root.reducer';

const store = createStore(todoApp);

/* eslint-disable no-console */
console.log('===============');
console.log('Initial state:');
console.log(store.getState());
console.log('===============');

console.log('Dispatching ADD_TODO');
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
});

console.log('===============');
console.log('Current state:');
console.log(store.getState());
console.log('===============');

console.log('Dispatching ADD_TODO');
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Master Redux'
});

console.log('===============');
console.log('Current state:');
console.log(store.getState());
console.log('===============');

console.log('Dispatching TOGGLE_TODO');
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 0
});

console.log('===============');
console.log('Current state:');
console.log(store.getState());
console.log('===============');

console.log('Dispatching SET_VISIBILITY_FILTER');
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_ACTIVE'
});

console.log('===============');
console.log('Current state:');
console.log(store.getState());
console.log('===============');

/* eslint-enable no-console */
