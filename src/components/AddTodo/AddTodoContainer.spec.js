import React from 'react';
import { shallow } from 'enzyme';

import appStore from '../../store';

import AddTodoContainer from './AddTodoContainer';

describe('AddTodoContainer component', () => {

  const storeContext =  { context: { store: appStore } };

  it('renders AddTodoContainer correctly', () => {
    const wrapper = shallow(<AddTodoContainer />, storeContext);
    expect(wrapper).toMatchSnapshot();
  });

});
