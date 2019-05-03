import { GET_OPERTUNITIES, UPDATE_LIST,GET_BG,OPP_DATA } from './types';
import { getOpertunities, updateOpertunities,getBackground,getData } from './api';

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
export function dispatchData(data) {
  return {
    type: OPP_DATA,
    data,
  };
}
export function dispatchBgData(data) {
  return {
    type: GET_BG,
    data,
  };
}
export function getOpertunitiesList() {
  return getOpertunities(getContentActivityData);
}

export function updateOpertunitiesList(data,id) {
  return updateOpertunities(updateContentActivityData, data,id);
}
export function getBackgrounds() {
  return getBackground(dispatchBgData);
}
export function getDatas(id) {
  return getData(dispatchData,id);
}