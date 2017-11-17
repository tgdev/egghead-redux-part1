import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, completed, handleTodo }) => {
  return (
    <li
      onClick={handleTodo}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }} >
      {text}
    </li>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleTodo: PropTypes.func.isRequired
};

export default Todo;
