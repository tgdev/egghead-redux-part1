import React from 'react';
import PropTypes from 'prop-types';

import { FILTER_OPTION_ALL, FILTER_OPTION_ACTIVE, FILTER_OPTION_COMPLETED } from 'constants/visibility-filter-options';

import FilterLink from 'components/FilterLink/FilterLink';

const TodoFooter = ({ visibilityFilter, handleFilters }) => {
  return (
    <p>Show:
      {' '}
      <FilterLink
        filter={FILTER_OPTION_ALL}
        currentFilter={visibilityFilter}
        handleFilter={handleFilters}>
        All
      </FilterLink>
      <FilterLink
        filter={FILTER_OPTION_ACTIVE}
        currentFilter={visibilityFilter}
        handleFilter={handleFilters}>
        Active
      </FilterLink>
      <FilterLink
        filter={FILTER_OPTION_COMPLETED}
        currentFilter={visibilityFilter}
        handleFilter={handleFilters}>
        Completed
      </FilterLink>
    </p>
  );
};

TodoFooter.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  handleFilters: PropTypes.func.isRequired
};

export default TodoFooter;
