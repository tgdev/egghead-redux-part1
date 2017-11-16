import React from 'react';
import { shallow } from 'enzyme';

import { FILTER_OPTION_ALL } from 'constants/visibility-filter-options';

import FilterLink from './FilterLink';

describe('FilterLink component', () => {

  const mockFilterOption = FILTER_OPTION_ALL;

  it('renders FilterLink correctly', () => {
    const wrapper = shallow(<FilterLink filter={mockFilterOption}>All</FilterLink>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders FilterLink with children', () => {
    const wrapper = shallow(<FilterLink filter={mockFilterOption}>All</FilterLink>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('a').children().length).toBe(1);
  });

});
