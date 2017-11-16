import React from 'react';
import PropTypes from 'prop-types';

import { ACTION_SET_VISIBILITY_FILTER } from 'constants/action-types';

import store from '../../store';

const FilterLink = ({ filter, children }) => {
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
  children: PropTypes.string.isRequired
};

export default FilterLink;
