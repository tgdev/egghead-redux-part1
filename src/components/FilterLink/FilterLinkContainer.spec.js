import React from 'react';
import { shallow, mount } from 'enzyme';

import { FILTER_OPTION_ALL } from 'constants/visibility-filter-options';

import FilterLinkContainer from './FilterLinkContainer';

describe('FilterLinkContainer component', () => {

  const mockFilterOption = FILTER_OPTION_ALL;

  it('renders FilterLinkContainer correctly', () => {
    const wrapper = shallow(
      <FilterLinkContainer
        filter={mockFilterOption}>
        All
      </FilterLinkContainer>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with required children', () => {
    const wrapper = shallow(
      <FilterLinkContainer
        filter={mockFilterOption}>
        All
      </FilterLinkContainer>
    );
    expect(wrapper.children().length).toBe(1);
  });

  it('renders with required filter prop', () => {
    const wrapper = mount(
      <FilterLinkContainer
        filter={mockFilterOption}>
        All
      </FilterLinkContainer>
    );
    const filterProp = wrapper.props().filter;
    expect(filterProp).toEqual(FILTER_OPTION_ALL);
  });

});
