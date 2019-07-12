import { FETCH_STORY } from 'constants/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STORY: 
      return action.payload
    default:
      return state;
  }
};