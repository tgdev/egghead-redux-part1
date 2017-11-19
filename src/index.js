import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './components/App';

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
