import { ACTION_ADD_TODO, ACTION_TOGGLE_TODO } from 'constants/action-types';
import todo from './todo.reducer';

const todos = (state = [], action) => {
  switch (action.type) {
  case ACTION_ADD_TODO:
    return [
      ...state,
      todo(undefined, action)
    ];
  case ACTION_TOGGLE_TODO:
    return state.map(td => todo(td, action));
  default:
    return state;
  }
};

export default todos;
