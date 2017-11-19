import uuidv4 from 'uuid/v4';

import { ACTION_ADD_TODO, ACTION_TOGGLE_TODO } from 'constants/action-types';

export const addTodo = text => {
  return {
    type: ACTION_ADD_TODO,
    id: uuidv4(),
    text
  };
};

export const toggleTodo = id => {
  return {
    type: ACTION_TOGGLE_TODO,
    id
  };
};
