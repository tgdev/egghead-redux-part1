import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ACTION_TOGGLE_TODO } from 'constants/action-types';

import getVisibleTodos from 'utils/get-visible-todos';

import TodoList from 'components/TodoList/TodoList';

class TodoListContainer extends Component {
  componentDidMount() {
    const { store } = this.context;
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const { todos, visibilityFilter } = store.getState();
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

    return (
      <TodoList
        todos={visibleTodos}
        handleTodos={id => {
          store.dispatch({
            type: ACTION_TOGGLE_TODO,
            id
          });
        }} />
    );
  }
}

TodoListContainer.contextTypes = {
  store: PropTypes.object
};

export default TodoListContainer;
