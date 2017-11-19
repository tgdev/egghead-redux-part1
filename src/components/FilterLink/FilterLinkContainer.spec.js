import React from 'react';
import { shallow } from 'enzyme';

import { FILTER_OPTION_ALL } from 'constants/visibility-filter-options';

import appStore from '../../store';

import FilterLinkContainer from './FilterLinkContainer';

describe('FilterLinkContainer component', () => {

  const mockWithContext = () => {
    const mockFilterOption = FILTER_OPTION_ALL;
    const storeContext =  { context: { store: appStore } };

    return shallow(
      <FilterLinkContainer
        filter={mockFilterOption}>
        All
      </FilterLinkContainer>,
      storeContext
    );

  };

  it('renders FilterLinkContainer correctly', () => {
    const wrapper = mockWithContext();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with required children', () => {
    const wrapper = mockWithContext();
    expect(wrapper.children().length).toBe(1);
  });

  it('renders with required filter prop', () => {
    const wrapper = mockWithContext();
    const filterProp = wrapper.instance().props.filter;
    expect(filterProp).toEqual(FILTER_OPTION_ALL);
  });

});
