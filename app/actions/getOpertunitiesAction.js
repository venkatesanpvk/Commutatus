import { GET_ICONS } from './types';
import { getIconList } from './api';

export function getContentActivityData(data) {
  return {
    type: GET_ICONS,
    data
  };
}

export function getOpertunitiesList(getIcons) {
  return getIconList(getContentActivityData);
}
