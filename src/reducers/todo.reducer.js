import { ACTION_ADD_TODO, ACTION_TOGGLE_TODO } from 'constants/action-types';

const todo = (state, action) => {
  switch (action.type) {
  case ACTION_ADD_TODO:
    return {
      id: action.id,
      text: action.text,
      completed: false
    };
  case ACTION_TOGGLE_TODO:
    if (state.id !== action.id) { return state; }
    return {
      ...state,
      completed: !state.completed
    };
  default:
    return state;
  }
};

export default todo;
