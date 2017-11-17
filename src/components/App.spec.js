import React from 'react';
import { shallow } from 'enzyme';

import { FILTER_OPTION_ALL } from 'constants/visibility-filter-options';

import newTodosMock from 'mocks/new-todos.mock';

import App from './App';

describe('App component', () => {

  const mockTodos = newTodosMock;

  const mockVisibilityFilter = FILTER_OPTION_ALL;

  it('renders TodoApp correctly with no todos', () => {
    const wrapper = shallow(<App todos={[]} visibilityFilter={mockVisibilityFilter} />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.instance().props.todos.length).toEqual(0);
  });

  it('renders TodoApp correctly with saved todos', () => {
    const wrapper = shallow(<App todos={mockTodos} visibilityFilter={mockVisibilityFilter} />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.instance().props.todos.length).toEqual(2);
  });

});
