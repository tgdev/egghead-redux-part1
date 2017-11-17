import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ handleAddTodo }) => {
  let input;
  return [
    <input key='add-todo-input' type="text" ref={node => { input = node; }} />,
    <button
      key='add-todo-btn'
      onClick={handleAddTodo}>
      Add Todo
    </button>
  ];
};

AddTodo.propTypes = {
  handleAddTodo: PropTypes.func.isRequired
};

export default AddTodo;
