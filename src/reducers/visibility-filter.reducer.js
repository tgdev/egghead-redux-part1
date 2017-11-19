import { ACTION_SET_VISIBILITY_FILTER } from 'constants/action-types';
import { FILTER_OPTION_ALL } from 'constants/visibility-filter-options';

const visibilityFilter = (state = FILTER_OPTION_ALL, action) => {
  switch (action.type) {
  case ACTION_SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
};

export default visibilityFilter;
