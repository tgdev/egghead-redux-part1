import { ACTION_SET_VISIBILITY_FILTER } from 'constants/action-types';
import { FILTER_OPTION_ALL } from '../constants/visibility-filter-options';

import { setVisibilityFilter } from './visibility-filter.actions';

describe('Visibility Filter actions', () => {

  it('Returns an object with correct type and filter', () => {

    const mockFilter = FILTER_OPTION_ALL;

    expect(setVisibilityFilter(mockFilter).filter).toEqual(FILTER_OPTION_ALL);
    expect(setVisibilityFilter(mockFilter).type).toEqual(ACTION_SET_VISIBILITY_FILTER);
  });

});
