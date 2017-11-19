import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ACTION_SET_VISIBILITY_FILTER } from 'constants/action-types';

import FilterLink from './FilterLink';

class FilterLinkContainer extends Component {
  componentDidMount() {
    const { store } = this.context;
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
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

FilterLinkContainer.contextTypes = {
  store: PropTypes.object
};

export default FilterLinkContainer;
