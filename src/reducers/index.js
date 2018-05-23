import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import storyReducer from './storyReducer';
import accommodationsReducer from './accommodationsReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  location: locationReducer,
  story: storyReducer,
  accommodations: accommodationsReducer,
  form: formReducer,
});

export default rootReducer;
