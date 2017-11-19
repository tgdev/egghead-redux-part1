import React from 'react';

import { FILTER_OPTION_ALL, FILTER_OPTION_ACTIVE, FILTER_OPTION_COMPLETED } from 'constants/visibility-filter-options';

import FilterLinkContainer from 'components/FilterLink/FilterLinkContainer';

const TodoFooter = () => {
  return (
    <p>Show:
      {' '}
      <FilterLinkContainer
        filter={FILTER_OPTION_ALL}>
        All
      </FilterLinkContainer>
      {' '}
      <FilterLinkContainer
        filter={FILTER_OPTION_ACTIVE}>
        Active
      </FilterLinkContainer>
      {' '}
      <FilterLinkContainer
        filter={FILTER_OPTION_COMPLETED}>
        Completed
      </FilterLinkContainer>
    </p>
  );
};

export default TodoFooter;
