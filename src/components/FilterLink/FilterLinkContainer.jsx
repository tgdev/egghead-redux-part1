import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setVisibilityFilter } from 'actions/visibility-filter.actions';

import FilterLink from './FilterLink';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleFilter: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
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
