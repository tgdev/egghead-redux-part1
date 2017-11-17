import React from 'react';
import { shallow } from 'enzyme';

import { FILTER_OPTION_ALL } from 'constants/visibility-filter-options';

import TodoFooter from './TodoFooter';

describe('TodoFooter component', () => {
  const mockClickHandler = jest.fn();
  const mockVisibilityFilter = FILTER_OPTION_ALL;

  afterEach(() => {
    mockClickHandler.mockReset();
  });

  it('renders TodoFooter correctly', () => {
    const wrapper = shallow(<TodoFooter visibilityFilter={mockVisibilityFilter} handleFilters={mockClickHandler} />);
    expect(wrapper).toMatchSnapshot();
  });

});
