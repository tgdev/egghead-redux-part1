import React from 'react';
import { shallow, mount } from 'enzyme';

import FilterLink from './FilterLink';

describe('FilterLink component', () => {

  const mockActive = true;
  const mockNotActive = false;


  let mockClickHandler = jest.fn();

  afterEach(() => {
    mockClickHandler.mockReset();
  });

  it('renders FilterLink correctly', () => {
    const wrapper = shallow(
      <FilterLink
        active={mockActive}
        handleFilter={mockClickHandler}>
        All
      </FilterLink>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with required children', () => {
    const wrapper = shallow(
      <FilterLink
        active={mockActive}
        handleFilter={mockClickHandler}>
        All
      </FilterLink>
    );
    expect(wrapper.children().length).toBe(1);
  });

  it('renders current filter differently to other filters', () => {
    const wrapperActive = shallow(
      <FilterLink
        active={mockActive}
        handleFilter={mockClickHandler}>
        All
      </FilterLink>
    );
    expect(wrapperActive).toMatchSnapshot();

    const wrapperInactive = shallow(
      <FilterLink
        active={mockNotActive}
        handleFilter={mockClickHandler}>
        All
      </FilterLink>
    );
    expect(wrapperInactive).toMatchSnapshot();
  });

  it('triggers handleToggleTodo when todo item is clicked', () => {
    const wrapper = mount(
      <FilterLink
        active={mockNotActive}
        handleFilter={mockClickHandler}>
        All
      </FilterLink>
    );
    wrapper.find('button').first().simulate('click');
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });

});
