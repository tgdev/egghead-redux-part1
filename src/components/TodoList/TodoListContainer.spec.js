import React from 'react';
import { shallow } from 'enzyme';

import TodoListContainer from './TodoListContainer';

describe('TodoListContainer component', () => {
  it('renders TodoListContainer correctly', () => {
    const wrapper = shallow(<TodoListContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
