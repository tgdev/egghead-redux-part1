import deepFreeze from 'deep-freeze';

import { ACTION_SET_VISIBILITY_FILTER } from 'constants/action-types';
import { FILTER_OPTION_ALL, FILTER_OPTION_ACTIVE } from 'constants/visibility-filter-options';

import visibilityFilter from './visibility-filter.reducer';

describe('Visibility Filter Reducer', () => {

  describe('Set visibility filter', () => {

    it('Returns a string to determine what items are visible', () => {
      const stateBefore = FILTER_OPTION_ALL;
      const action = {
        type: ACTION_SET_VISIBILITY_FILTER,
        filter: FILTER_OPTION_ACTIVE
      };
      const stateAfter = FILTER_OPTION_ACTIVE;

      // prevent mutation on initial state
      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        visibilityFilter(stateBefore, action)
      ).toEqual(stateAfter);

    });

  });

});
