import {
  FETCH_STORY,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STORY: 
      return action.payload
    default:
      return state;
  }
};
