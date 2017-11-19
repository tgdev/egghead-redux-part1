import React, { Component } from 'react';

import { ACTION_TOGGLE_TODO } from 'constants/action-types';

import getVisibleTodos from 'utils/get-visible-todos';

import store from '../../store';

import TodoList from 'components/TodoList/TodoList';

class TodoListContainer extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
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

export default TodoListContainer;
