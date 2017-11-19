import React from 'react';
import PropTypes from 'prop-types';

const FilterLink = ({ active, children, handleFilter }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <button onClick={() => handleFilter()}>
      {children}
    </button>
  );
};

FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  handleFilter: PropTypes.func
};

export default FilterLink;
