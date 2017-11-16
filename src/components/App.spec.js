import React from 'react';
import { shallow, mount } from 'enzyme';

import { FILTER_OPTION_ALL } from 'constants/visibility-filter-options';

import newTodosMock from 'mocks/new-todos.mock';
import updatedTodosMock from 'mocks/updated-todos.mock';

import App from './App';

describe('App component', () => {

  const mockTodos = newTodosMock;
  const altMockTodos = updatedTodosMock;

  const mockVisibiltyFilter = FILTER_OPTION_ALL;

  it('renders TodoApp correctly with no todos', () => {
    const wrapper = shallow(<App todos={[]} visibilityFilter={mockVisibiltyFilter} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.instance().props.todos.length).toEqual(0);
  });

  it('renders TodoApp correctly with saved todos', () => {
    const wrapper = shallow(<App todos={mockTodos} visibilityFilter={mockVisibiltyFilter} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.instance().props.todos.length).toEqual(2);
  });

  it('renders a completed todo with line-through', () => {
    const wrapper = shallow(<App todos={altMockTodos} visibilityFilter={mockVisibiltyFilter} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('triggers handleAddTodo when "Add Todo" button is clicked', () => {
    const handleAddTodo = jest.spyOn(App.prototype, 'handleAddTodo');
    const wrapper = mount(<App todos={[]} visibilityFilter={mockVisibiltyFilter} />);
    wrapper.find('button').first().simulate('click');
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
  });

  it('triggers handleToggleTodo when todo item is clicked', () => {
    const handleToggleTodo = jest.spyOn(App.prototype, 'handleToggleTodo');
    const wrapper = mount(<App todos={mockTodos} visibilityFilter={mockVisibiltyFilter} />);
    wrapper.find('li').first().simulate('click');
    expect(handleToggleTodo).toHaveBeenCalledTimes(1);
  });

});
