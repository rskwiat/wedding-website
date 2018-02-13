import {
  FETCH_LOCATION,
} from '../actions/types';

const INIT_STATE = {
  location: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_LOCATION: 
      return action.payload
    default:
      return state;
  }
};
