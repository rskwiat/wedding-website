import { FETCH_LOCATION } from 'constants/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LOCATION: 
      return action.payload
    default:
      return state;
  }
};