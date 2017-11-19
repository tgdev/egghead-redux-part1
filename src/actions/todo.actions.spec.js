import { ACTION_ADD_TODO, ACTION_TOGGLE_TODO } from 'constants/action-types';

import { addTodo, toggleTodo } from './todo.actions';

describe('Todo actions', () => {

  it('Returns an object with correct type and text', () => {
    const mockNewTodo = 'Write action tests';

    expect(addTodo(mockNewTodo).text).toEqual('Write action tests');
    expect(addTodo(mockNewTodo).type).toEqual(ACTION_ADD_TODO);
  });

  it('Returns an object with correct type and id', () => {
    const mockToggledTodo = 'todo-1';

    expect(toggleTodo(mockToggledTodo).id).toEqual('todo-1');
    expect(toggleTodo(mockToggledTodo).type).toEqual(ACTION_TOGGLE_TODO);
  });

});
