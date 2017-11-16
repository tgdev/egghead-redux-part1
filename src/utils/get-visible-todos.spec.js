import deepFreeze from 'deep-freeze';

import { FILTER_OPTION_ALL, FILTER_OPTION_ACTIVE, FILTER_OPTION_COMPLETED } from 'constants/visibility-filter-options';

import getVisibleTodos from './get-visible-todos';

describe('getVisibleTodos()', () => {

  const mockTodos = [
    {
      id: 0,
      text: 'todo1',
      completed: false
    },
    {
      id: 1,
      text: 'todo2',
      completed: true
    },
    {
      id: 2,
      text: 'todo3',
      completed: true
    },
    {
      id: 3,
      text: 'todo4',
      completed: false
    }
  ];

  deepFreeze(mockTodos);

  it('returns all todos by default', () => {
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
