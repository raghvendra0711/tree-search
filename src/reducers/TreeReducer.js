import * as types from '../actions/actionTypes';
import treeData from '../api/mockTreeApi';

export default function TreeReducer(state = treeData, action) {
  
  switch (action.type) {
    case types.SEARCH_TREE:
      return Object.assign({}, state, {search: action.search});
    default:
      return state;
  }
}
