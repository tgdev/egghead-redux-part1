import React from 'react';

import AddTodoContainer from './AddTodo/AddTodoContainer';
import TodoListContainer from './TodoList/TodoListContainer';
import TodoFooter from './TodoFooter/TodoFooter';

const TodoApp = () => {

  return (
    <div>
      <AddTodoContainer />
      <TodoListContainer />
      <TodoFooter />
    </div>
  );

};

export default TodoApp;
