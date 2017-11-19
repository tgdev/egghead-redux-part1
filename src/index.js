import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import appStore from './store';

import TodoApp from './components/App';

ReactDOM.render(
  <Provider store={appStore}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
