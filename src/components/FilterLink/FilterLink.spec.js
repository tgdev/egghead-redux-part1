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
    expect(wrapper.children().length).toBe(1);
  });

  // it('renders FilterLink with filter prop', () => {
  //   const wrapper = shallow(<FilterLink filter={mockFilterOption}>All</FilterLink>);
  //   const filterProp = wrapper.instance().props.filter;
  //   expect(filterProp).toEqual(FILTER_OPTION_ALL);
  // });

  // it('triggers a function when clicked', () => {
  //   const wrapper = shallow(<FilterLink filter={mockFilterOption}>All</FilterLink>);
  //   const link = wrapper.find('a');
  //   const mockEvent = { preventDefault: jest.fn() };
  //   link.simulate('click', mockEvent);
  //   expect(link).toHaveBeenCalledTimes(1);
  // });

});
