import { GET_OPERTUNITIES, UPDATE_LIST } from './types';
import { getOpertunities, updateOpertunities } from './api';

export function getContentActivityData(data) {
  return {
    type: GET_OPERTUNITIES,
    data,
  };
}
export function updateContentActivityData(data) {
  return {
    type: UPDATE_LIST,
    data,
  };
}
export function getOpertunitiesList() {
  return getOpertunities(getContentActivityData);
}

export function updateOpertunitiesList(data) {
  return updateOpertunities(updateContentActivityData, data);
}
