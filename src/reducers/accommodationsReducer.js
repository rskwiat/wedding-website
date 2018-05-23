import {
  FETCH_ACCOMMODATIONS,
} from '../actions/types';

const INIT_STATE = {
  accommodations: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_ACCOMMODATIONS: 
      return action.payload
    default:
      return state;
  }
};
