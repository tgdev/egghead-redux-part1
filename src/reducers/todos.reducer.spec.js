import deepFreeze from 'deep-freeze';
import { ACTION_ADD_TODO } from '../constants/action-types';
import todos from './todos.reducer';

describe('Todos Reducer', () => {

  describe('AddTodo', () => {
    const stateBefore = [];
    const action = {
      type: ACTION_ADD_TODO,
      id: 0,
      text: 'Learn Redux'
    };
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }
    ];

    // prevent mutation on initial state
    deepFreeze(stateBefore);
    deepFreeze(action);

    it('should add a todo to a new state object', () => {
      expect(
        todos(stateBefore, action)
      ).toEqual(stateAfter);
    });

  });

});
