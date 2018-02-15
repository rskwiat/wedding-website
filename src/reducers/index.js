import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import storyReducer from './storyReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  story: storyReducer,
});

export default rootReducer;
