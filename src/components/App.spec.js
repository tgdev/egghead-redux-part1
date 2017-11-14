import React from 'react';

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

  it('renders TodoApp correctly with no todos', () => {
    const wrapper = global.shallow(<App todos={[]} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.instance().props.todos.length).toEqual(0);
  });

  it('renders TodoApp correctly with saved todos', () => {
    const wrapper = global.shallow(<App todos={mockTodos} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.instance().props.todos.length).toEqual(2);
  });

});
