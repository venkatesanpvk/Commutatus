import { GET_BG } from '../actions/types';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case GET_BG:
      return action.data;
    default:
      return state;
  }
};
