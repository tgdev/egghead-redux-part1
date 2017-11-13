import { ACTION_ADD_TODO } from '../constants/action-types';

const todos = (state = [], action) => {
  switch (action.type) {
  case ACTION_ADD_TODO:
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false
      }
    ];
  default:
    return state;
  }
};

export default todos;
