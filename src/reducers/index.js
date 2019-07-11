
import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import storyReducer from './storyReducer';
import accommodationReducer from './accommodationsReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  story: storyReducer,
  accommodations: accommodationReducer
});

export default rootReducer;