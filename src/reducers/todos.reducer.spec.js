import deepFreeze from 'deep-freeze';

import { ACTION_ADD_TODO, ACTION_TOGGLE_TODO } from 'constants/action-types';

import todos from './todos.reducer';

describe('Todos Reducer', () => {

  describe('Add Todos', () => {
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

    it('Adds a todo to a new state array', () => {
      expect(
        todos(stateBefore, action)
      ).toEqual(stateAfter);
    });

  });

  describe('Toggle Todos', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Master Redux',
        completed: false
      }
    ];
    const action = {
      type: ACTION_TOGGLE_TODO,
      id: 0
    };
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: true
      },
      {
        id: 1,
        text: 'Master Redux',
        completed: false
      }
    ];

    // prevent mutation on initial state
    deepFreeze(stateBefore);
    deepFreeze(action);

    it('Toggles the completed attribute of a todo based on id', () => {
      expect(
        todos(stateBefore, action)
      ).toEqual(stateAfter);
    });

  });

});
