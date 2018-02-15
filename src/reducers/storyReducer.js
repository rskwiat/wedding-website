import {
  FETCH_STORY,
} from '../actions/types';

const INIT_STATE = {
  story: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_STORY: 
      return action.payload
    default:
      return state;
  }
};
