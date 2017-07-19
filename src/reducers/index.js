import {combineReducers} from 'redux';
import trees from './TreeReducer';

const rootReducer = combineReducers({
  trees
});

export default rootReducer;
