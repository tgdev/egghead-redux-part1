import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ACTION_ADD_TODO, ACTION_TOGGLE_TODO } from 'constants/action-types';
import { FILTER_OPTION_ALL, FILTER_OPTION_ACTIVE, FILTER_OPTION_COMPLETED } from 'constants/visibility-filter-options';

import getVisibleTodos from 'utils/get-visible-todos';

import store from '../store';

import TodoList from './TodoList/TodoList';
import FilterLink from './FilterLink/FilterLink';

let nextTodoId = 0;

class TodoApp extends Component {
  constructor() {
    super();
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
  }

  handleAddTodo() {
    store.dispatch({
      type: ACTION_ADD_TODO,
      id: nextTodoId++,
      text: this.input.value
    });
    this.input.value = '';
  }

  handleToggleTodo(id) {
    store.dispatch({
      type: ACTION_TOGGLE_TODO,
      id: id
    });
  }

  render() {
    const { todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

    return (
      <div>

        <input type="text" ref={node => { this.input = node; }} />
        <button
          onClick={this.handleAddTodo}
        >
          Add Todo
        </button>

        <TodoList
          todos={visibleTodos}
          handleTodos={this.handleToggleTodo} />

        <p>Show:
          {' '}
          <FilterLink
            filter={FILTER_OPTION_ALL}
            currentFilter={visibilityFilter}>
            All
          </FilterLink>
          <FilterLink
            filter={FILTER_OPTION_ACTIVE}
            currentFilter={visibilityFilter}>
            Active
          </FilterLink>
          <FilterLink
            filter={FILTER_OPTION_COMPLETED}
            currentFilter={visibilityFilter}>
            Completed
          </FilterLink>
        </p>

      </div>
    );
  }
}

TodoApp.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.oneOf([true, false])
  })).isRequired,
  visibilityFilter: PropTypes.string.isRequired
};

export default TodoApp;
