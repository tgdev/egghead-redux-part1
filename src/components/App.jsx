import React from 'react';
import PropTypes from 'prop-types';

import { ACTION_ADD_TODO, ACTION_TOGGLE_TODO, ACTION_SET_VISIBILITY_FILTER } from 'constants/action-types';

import getVisibleTodos from 'utils/get-visible-todos';

import store from '../store';

import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import TodoFooter from './TodoFooter/TodoFooter';

let nextTodoId = 0;

const TodoApp = ({ todos, visibilityFilter }) => {

  const visibleTodos = getVisibleTodos(todos, visibilityFilter);

  return (
    <div>

      <AddTodo handleAddTodo={text => {
        store.dispatch({
          type: ACTION_ADD_TODO,
          id: nextTodoId++,
          text
        });
      }} />

      <TodoList
        todos={visibleTodos}
        handleTodos={id => {
          store.dispatch({
            type: ACTION_TOGGLE_TODO,
            id
          });
        }} />

      <TodoFooter
        visibilityFilter={visibilityFilter}
        handleFilters={filter => {
          store.dispatch({
            type: ACTION_SET_VISIBILITY_FILTER,
            filter
          });
        }} />

    </div>
  );

};

TodoApp.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.oneOf([true, false])
  })).isRequired,
  visibilityFilter: PropTypes.string.isRequired
};

export default TodoApp;
