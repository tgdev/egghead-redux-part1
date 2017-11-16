import React from 'react';
import { shallow, mount } from 'enzyme';

import { FILTER_OPTION_ALL, FILTER_OPTION_ACTIVE } from 'constants/visibility-filter-options';

import FilterLink from './FilterLink';

describe('FilterLink component', () => {

  const mockFilterOption = FILTER_OPTION_ALL;
  const mockCurrentFilter = FILTER_OPTION_ALL;

  it('renders FilterLink correctly', () => {
    const wrapper = shallow(
      <FilterLink
        filter={mockFilterOption}
        currentFilter={mockCurrentFilter}>
        All
      </FilterLink>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders FilterLink with children', () => {
    const wrapper = shallow(
      <FilterLink
        filter={mockFilterOption}
        currentFilter={mockCurrentFilter}>
        All
      </FilterLink>
    );
    expect(wrapper.children().length).toBe(1);
  });

  it('renders FilterLink with filter and currentFilter props', () => {
    const wrapper = mount(
      <FilterLink
        filter={mockFilterOption}
        currentFilter={mockCurrentFilter}>
        All
      </FilterLink>
    );
    const filterProp = wrapper.props().filter;
    const curentFilterProp = wrapper.props().currentFilter;
    expect(filterProp).toEqual(FILTER_OPTION_ALL);
    expect(curentFilterProp).toEqual(FILTER_OPTION_ALL);
  });

  it('renders current filter differently to other filters', () => {
    const wrapper = shallow(
      <FilterLink
        filter={mockFilterOption}
        currentFilter={FILTER_OPTION_ACTIVE}>
        All
      </FilterLink>
    );
    expect(wrapper).toMatchSnapshot();
  });

  // it('triggers a function when clicked', () => {
  //   const wrapper = shallow(<FilterLink filter={mockFilterOption}>All</FilterLink>);
  //   const link = wrapper.find('a');
  //   const mockEvent = { preventDefault: jest.fn() };
  //   link.simulate('click', mockEvent);
  //   expect(link).toHaveBeenCalledTimes(1);
  // });

});
