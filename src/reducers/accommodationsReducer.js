import { FETCH_ACCOMMODATIONS } from 'constants/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ACCOMMODATIONS: 
      return action.payload
    default:
      return state;
  }
};