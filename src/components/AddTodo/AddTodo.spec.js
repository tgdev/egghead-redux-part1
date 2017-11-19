import React from 'react';
import { shallow } from 'enzyme';

import AddTodo from './AddTodo';

describe('AddTodo component', () => {
  it('renders AddTodo correctly', () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper).toMatchSnapshot();
  });

});
