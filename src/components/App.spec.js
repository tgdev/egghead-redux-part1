import React from 'react';
import { shallow } from 'enzyme';

import { FILTER_OPTION_ALL } from 'constants/visibility-filter-options';

import App from './App';

describe('App component', () => {

  const mockTodos = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }, {
      id: 1,
      text: 'Master Redux',
      completed: false
    }
  ];

  const altMockTodos = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: true
    }, {
      id: 1,
      text: 'Master Redux',
      completed: false
    }
  ];

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

  // it('adds a todo when button is clicked', () => {
  //   const wrapper = mount(<App todos={[]} />);
  //   wrapper.find('button').simulate('click', { store.dispatch()});
  //   wrapper.update();
  //   expect(wrapper.instance().props.todos.length).toEqual(1);
  // });

  it('renders a completed todo with line-through', () => {
    const wrapper = shallow(<App todos={altMockTodos} visibilityFilter={mockVisibiltyFilter} />);
    expect(wrapper).toMatchSnapshot();
  });

});
