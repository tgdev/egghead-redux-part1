import { ACTION_ADD_TODO, ACTION_TOGGLE_TODO } from '../constants/action-types';

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
  case ACTION_TOGGLE_TODO:
    // find todo with matching id
    // update it's completed field to opposite of current value
    return state.map(todo => {
      if (todo.id !== action.id) { return todo; }
      return {
        ...todo,
        completed: !todo.completed
      };
    });
  default:
    return state;
  }
};

export default todos;
