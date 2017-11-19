import React from 'react';
import PropTypes from 'prop-types';

import { addTodo } from 'actions/todo.actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return [
    <input key='add-todo-input' type="text" ref={node => { input = node; }} />,
    <button
      key='add-todo-btn'
      onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
      Add Todo
    </button>
  ];
};

AddTodo.propTypes = {
  dispatch: PropTypes.func
};

export default AddTodo;
