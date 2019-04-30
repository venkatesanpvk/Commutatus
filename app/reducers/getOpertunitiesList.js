import { GET_ICONS } from '../actions/types';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case GET_ICONS:
      return action.data;
    default:
      return state;
  }
};