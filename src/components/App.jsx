import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ACTION_ADD_TODO, ACTION_TOGGLE_TODO } from 'constants/action-types';
import { FILTER_OPTION_ALL, FILTER_OPTION_ACTIVE, FILTER_OPTION_COMPLETE } from 'constants/visibility-filter-options';

import store from '../store';

import FilterLink from './FilterLink/FilterLink';

let nextTodoId = 0;

class TodoApp extends Component {

  render() {
    return (
      <div>

        <input type="text" ref={node => { this.input = node; }} />
        <button
          onClick={() => {
            store.dispatch({
              type: ACTION_ADD_TODO,
              id: nextTodoId++,
              text: this.input.value
            });
            this.input.value = '';
          }}
        >
          Add Todo
        </button>

        <ul>
          {this.props.todos.map(todo => {
            return (
              <li key={todo.id}
                onClick={() => {
                  store.dispatch({
                    type: ACTION_TOGGLE_TODO,
                    id: todo.id
                  });
                }}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none'
                }} >
                {todo.text}
              </li>
            );
          })}
        </ul>

        <p>Show:
          {' '}
          <FilterLink filter={FILTER_OPTION_ALL}>All</FilterLink>
          <FilterLink filter={FILTER_OPTION_ACTIVE}>Active</FilterLink>
          <FilterLink filter={FILTER_OPTION_COMPLETE}>Completed</FilterLink>
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
  })).isRequired
};

export default TodoApp;
