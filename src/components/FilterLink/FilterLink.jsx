import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ACTION_SET_VISIBILITY_FILTER } from 'constants/action-types';

import store from '../../store';

class FilterLink extends Component {
  constructor() {
    super();
    this.handleSetFilter = this.handleSetFilter.bind(this);
  }

  handleSetFilter() {
    store.dispatch({
      type: ACTION_SET_VISIBILITY_FILTER,
      filter: this.props.filter
    });
  }

  render() {
    const { filter, children, currentFilter } = this.props;

    if (filter === currentFilter) {
      return <span>{children}</span>;
    }

    return (
      <button onClick={this.handleSetFilter}>
        {children}
      </button>
    );
  }
}

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired
};

export default FilterLink;
