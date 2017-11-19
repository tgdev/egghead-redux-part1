import React from 'react';
import PropTypes from 'prop-types';

import Todo from 'components/Todo/Todo';

const TodoList = ({ todos, handleTodos }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            {...todo}
            handleTodo={() => handleTodos(todo.id)} />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  handleTodos: PropTypes.func.isRequired
};

export default TodoList;
