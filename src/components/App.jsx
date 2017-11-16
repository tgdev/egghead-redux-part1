import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ACTION_ADD_TODO, ACTION_TOGGLE_TODO } from 'constants/action-types';
import store from '../store';

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
