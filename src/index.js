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

store.subscribe(render);
render();
