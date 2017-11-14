import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import TodoApp from './components/App';

const appRoot = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos} />,
    appRoot
  );
};

store.subscribe();
render();

/* eslint-disable no-console */
// console.log('===============');
// console.log('Initial state:');
// console.log(store.getState());
// console.log('===============');
//
// console.log('Dispatching ADD_TODO');
// store.dispatch({
//   type: 'ADD_TODO',
//   id: 0,
//   text: 'Learn Redux'
// });
//
// console.log('===============');
// console.log('Current state:');
// console.log(store.getState());
// console.log('===============');
//
// console.log('Dispatching ADD_TODO');
// store.dispatch({
//   type: 'ADD_TODO',
//   id: 1,
//   text: 'Master Redux'
// });
//
// console.log('===============');
// console.log('Current state:');
// console.log(store.getState());
// console.log('===============');
//
// console.log('Dispatching TOGGLE_TODO');
// store.dispatch({
//   type: 'TOGGLE_TODO',
//   id: 0
// });
//
// console.log('===============');
// console.log('Current state:');
// console.log(store.getState());
// console.log('===============');
//
// console.log('Dispatching SET_VISIBILITY_FILTER');
// store.dispatch({
//   type: 'SET_VISIBILITY_FILTER',
//   filter: 'SHOW_ACTIVE'
// });
//
// console.log('===============');
// console.log('Current state:');
// console.log(store.getState());
// console.log('===============');
/* eslint-enable no-console */
