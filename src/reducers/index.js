import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import storyReducer from './storyReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  location: locationReducer,
  story: storyReducer,
  form: formReducer,
});

export default rootReducer;
