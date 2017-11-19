import deepFreeze from 'deep-freeze';

import { ACTION_ADD_TODO, ACTION_TOGGLE_TODO } from 'constants/action-types';

import todo from './todo.reducer';

describe('Todo Reducer', () => {

  describe('Add Todo', () => {
    const stateBefore = {};
    const action = {
      type: ACTION_ADD_TODO,
      id: 0,
      text: 'Learn Redux'
    };
    const stateAfter = {
      id: 0,
      text: 'Learn Redux',
      completed: false
    };

    // prevent mutation on initial state
    deepFreeze(stateBefore);
    deepFreeze(action);

    it('Returns a new object', () => {
      expect(
        todo(stateBefore, action)
      ).toEqual(stateAfter);
    });

    it('Returns default object if action type is invalid', () => {
      const invalidAction = { type: null };
      expect(
        todo(stateBefore, invalidAction)
      ).toEqual(stateBefore);
    });

  });

  describe('Toggle Todo', () => {
    const stateBefore = {
      id: 1,
      text: 'Master Redux',
      completed: false
    };
    const action = {
      type: ACTION_TOGGLE_TODO,
      id: 1
    };
    const stateAfter = {
      id: 1,
      text: 'Master Redux',
      completed: true
    };

    // prevent mutation on initial state
    deepFreeze(stateBefore);
    deepFreeze(action);

    it('Returns a specified todo with updated completed attribute', () => {
      expect(
        todo(stateBefore, action)
      ).toEqual(stateAfter);
    });

  });


});
