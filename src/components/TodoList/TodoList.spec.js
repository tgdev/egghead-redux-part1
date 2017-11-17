import React from 'react';
import { shallow } from 'enzyme';

import newTodosMock from 'mocks/new-todos.mock';

import TodoList from './TodoList';

describe('TodoList component', () => {
  const mockTodos = newTodosMock;
  const mockClickHandler = jest.fn();

  it('renders TodoList correctly', () => {
    const wrapper = shallow(<TodoList todos={mockTodos} handleTodos={mockClickHandler} />);
    expect(wrapper).toMatchSnapshot();
  });
});
