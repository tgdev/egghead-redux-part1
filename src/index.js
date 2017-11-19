import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import appStore from './store';

import TodoApp from './components/App';

// temp provider from video 25
// class Provider extends React.Component {
//   getChildContext() {
//     return {
//       store: this.props.store
//     };
//   }
//
//   render() {
//     return this.props.children;
//   }
// }

Provider.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired
};

Provider.childContextTypes = {
  store: PropTypes.object
};

ReactDOM.render(
  <Provider store={appStore}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
