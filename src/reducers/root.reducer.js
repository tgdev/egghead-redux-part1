import { combineReducers } from 'redux';

import todos from './todos.reducer';
import visibilityFilter from './visibility-filter.reducer';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   };
// };

export default todoApp;
