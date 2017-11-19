import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ACTION_SET_VISIBILITY_FILTER } from 'constants/action-types';

import store from '../../store';

import FilterLink from './FilterLink';

class FilterLinkContainer extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { filter, children } = this.props;
    const { visibilityFilter } = store.getState();
    const isActive = filter === visibilityFilter;

    return (
      <FilterLink
        active={isActive}
        handleFilter={() => {
          store.dispatch({
            type: ACTION_SET_VISIBILITY_FILTER,
            filter
          });
        }}>
        {children}
      </FilterLink>
    );
  }
}

FilterLinkContainer.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default FilterLinkContainer;
