import React from 'react';
import { shallow } from 'enzyme';

import AddTodo from './AddTodo';

describe('AddTodo component', () => {

  // let mockAddHandler = jest.fn();
  //
  // afterEach(() => {
  //   mockAddHandler.mockReset();
  // });

  it('renders AddTodo correctly', () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper).toMatchSnapshot();
  });

  // it('triggers handleAddTodo when "Add Todo" button is clicked', () => {
  //   const wrapper = mount(<AddTodo />);
  //   wrapper.find('button').first().simulate('click');
  //   expect(mockAddHandler).toHaveBeenCalledTimes(1);
  // });

});
