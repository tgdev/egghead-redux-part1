import React from 'react';
import { shallow } from 'enzyme';

import appStore from '../../store';

import AddTodo from './AddTodo';

describe('AddTodo component', () => {

  const storeContext =  { context: { store: appStore } };

  it('renders AddTodo correctly', () => {
    const wrapper = shallow(<AddTodo />, storeContext);
    expect(wrapper).toMatchSnapshot();
  });

});
