import { combineReducers } from 'redux';
import filter from './filter';
import postit from './postit'; 
import incId from './incId'; 

const rootReducer = combineReducers({
  filter,
  postit,
  incId, 
});

export default rootReducer;