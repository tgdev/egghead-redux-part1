import React from 'react';
import { shallow, mount } from 'enzyme';

import Todo from './Todo';

describe('Todo component', () => {
  let mockClickHandler = jest.fn();

  afterEach(() => {
    mockClickHandler.mockReset();
  });

  it('renders Todo correctly', () => {
    const wrapper = shallow(<Todo text='Learn redux' completed={false} handleTodo={mockClickHandler} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a completed todo with line-through', () => {
    const wrapper = shallow(<Todo text='Learn redux' completed={true} handleTodo={mockClickHandler} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('triggers handleToggleTodo when todo item is clicked', () => {
    const wrapper = mount(<Todo text='Learn redux' completed={true} handleTodo={mockClickHandler} />);
    wrapper.find('li').first().simulate('click');
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});
