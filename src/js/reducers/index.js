import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import storyReducer from './storyReducer';
import accommodationsReducer from './accommodationsReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  story: storyReducer,
  accommodations: accommodationsReducer,
});

export default rootReducer;
