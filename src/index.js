import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import TodoApp from './components/App';

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
