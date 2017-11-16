import React from 'react';
import PropTypes from 'prop-types';

import { ACTION_SET_VISIBILITY_FILTER } from 'constants/action-types';

import store from '../../store';

const FilterLink = ({ filter, children, currentFilter }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return (
    <button onClick={() => {
      store.dispatch({
        type: ACTION_SET_VISIBILITY_FILTER,
        filter
      });
    }}>
      {children}
    </button>
  );
};

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired
};

export default FilterLink;
