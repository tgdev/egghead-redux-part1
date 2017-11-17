import React from 'react';
import PropTypes from 'prop-types';

const FilterLink = ({ filter, children, currentFilter, handleFilter }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return (
    <button onClick={() => handleFilter(filter)}>
      {children}
    </button>
  );
};

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func
};

// FilterLink.defaultProps = {
//   handleFilter: undefined
// };

export default FilterLink;
