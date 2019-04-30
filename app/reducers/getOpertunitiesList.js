import { GET_OPERTUNITIES } from '../actions/types';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case GET_OPERTUNITIES:
      return action.data;
    default:
      return state;
  }
};
