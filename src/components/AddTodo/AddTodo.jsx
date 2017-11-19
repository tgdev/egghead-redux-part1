import React from 'react';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

import { ACTION_ADD_TODO } from 'constants/action-types';

const AddTodo = (props, { store }) => {
  let input;

  return [
    <input key='add-todo-input' type="text" ref={node => { input = node; }} />,
    <button
      key='add-todo-btn'
      onClick={() => {
        store.dispatch({
          type: ACTION_ADD_TODO,
          id: uuidv4(),
          text: input.value
        });
        input.value = '';
      }}>
      Add Todo
    </button>
  ];
};

AddTodo.contextTypes = {
  store: PropTypes.object
};

export default AddTodo;
