// Empty placeholder to reserve reducer namespace.
// Otherwise redux may complain when we asyncrhonously
// inject reducers.

/**
 * Routing to be implemented
 */
import { combineReducers } from 'redux';

import getOpertunitiesList from 'reducers/getOpertunitiesList';

const allReducers = {
  getOpertunitiesList,
};

const appReducer = combineReducers(allReducers);

export default appReducer;
