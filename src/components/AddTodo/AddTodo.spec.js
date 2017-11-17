import React from 'react';
import { shallow, mount } from 'enzyme';

import AddTodo from './AddTodo';

describe('AddTodo component', () => {

  let mockAddHandler = jest.fn();

  afterEach(() => {
    mockAddHandler.mockReset();
  });

  it('renders AddTodo correctly', () => {
    const wrapper = shallow(<AddTodo handleAddTodo={mockAddHandler} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('triggers handleAddTodo when "Add Todo" button is clicked', () => {
    // const handleAddTodo = jest.spyOn(AddTodo.prototype, 'handleAddTodo');
    const wrapper = mount(<AddTodo handleAddTodo={mockAddHandler} />);
    wrapper.find('button').first().simulate('click');
    expect(mockAddHandler).toHaveBeenCalledTimes(1);
  });

});
