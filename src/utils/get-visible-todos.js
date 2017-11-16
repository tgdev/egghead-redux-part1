import { FILTER_OPTION_ALL, FILTER_OPTION_ACTIVE, FILTER_OPTION_COMPLETED } from 'constants/visibility-filter-options';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
  case FILTER_OPTION_ALL:
    return todos;
  case FILTER_OPTION_ACTIVE:
    return todos.filter(todo => !todo.completed);
  case FILTER_OPTION_COMPLETED:
    return todos.filter(todo => todo.completed);
  default:
    return todos;
  }
};

export default getVisibleTodos;
