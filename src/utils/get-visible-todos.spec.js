import deepFreeze from 'deep-freeze';

import { FILTER_OPTION_ALL, FILTER_OPTION_ACTIVE, FILTER_OPTION_COMPLETED } from 'constants/visibility-filter-options';

import multipleTodosMock from 'mocks/multiple-todos.mock';

import getVisibleTodos from './get-visible-todos';

describe('getVisibleTodos()', () => {

  const mockTodos = multipleTodosMock;
  deepFreeze(mockTodos);

  it('returns all todos by default', () => {
    const visibleTodos = getVisibleTodos(mockTodos);
    expect(visibleTodos.length).toEqual(4);
  });

  it('returns all todos when filter is set to SHOW_ALL', () => {
    const visibleTodos = getVisibleTodos(mockTodos, FILTER_OPTION_ALL);
    expect(visibleTodos.length).toEqual(4);
  });

  it('returns active todos when filter is set to SHOW_ACTIVE', () => {
    const visibleTodos = getVisibleTodos(mockTodos, FILTER_OPTION_ACTIVE);
    expect(visibleTodos.length).toEqual(2);
  });

  it('returns completed todos when filter is set to SHOW_COMPLETED', () => {
    const visibleTodos = getVisibleTodos(mockTodos, FILTER_OPTION_COMPLETED);
    expect(visibleTodos.length).toEqual(2);
  });
});
