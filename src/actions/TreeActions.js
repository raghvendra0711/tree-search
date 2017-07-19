import * as types from './actionTypes';

export function searchTree(search) {
  return { type: types.SEARCH_TREE, search};
}
