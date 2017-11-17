import React from 'react';
import { shallow } from 'enzyme';

import Todo from './Todo';

describe('Todo component', () => {
  const mockClickHandler = jest.fn();

  it('renders Todo correctly', () => {
    const wrapper = shallow(<Todo text='Learn redux' completed={false} handleTodo={mockClickHandler} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a completed todo with line-through', () => {
    const wrapper = shallow(<Todo text='Learn redux' completed={true} handleTodo={mockClickHandler} />);
    expect(wrapper).toMatchSnapshot();
  });
});
