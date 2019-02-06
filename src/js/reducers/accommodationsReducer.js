import {
  FETCH_ACCOMMODATIONS,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ACCOMMODATIONS: 
      return action.payload
    default:
      return state;
  }
};
