import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ACTION_SET_VISIBILITY_FILTER } from 'constants/action-types';

import FilterLink from './FilterLink';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleFilter: () => {
      dispatch({
        type: ACTION_SET_VISIBILITY_FILTER,
        filter: ownProps.filter
      });
    }
  };
};

const FilterLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);

FilterLinkContainer.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default FilterLinkContainer;
