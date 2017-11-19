import { connect } from 'react-redux';

import { ACTION_TOGGLE_TODO } from 'constants/action-types';

import getVisibleTodos from 'utils/get-visible-todos';

import TodoList from 'components/TodoList/TodoList';

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleTodos: id => {
      dispatch({
        type: ACTION_TOGGLE_TODO,
        id
      });
    }
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
