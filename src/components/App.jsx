import React from 'react';

import AddTodo from './AddTodo/AddTodo';
import TodoListContainer from './TodoList/TodoListContainer';
import TodoFooter from './TodoFooter/TodoFooter';

const TodoApp = () => {

  return (
    <div>
      <AddTodo />
      <TodoListContainer />
      <TodoFooter />
    </div>
  );

};

export default TodoApp;
