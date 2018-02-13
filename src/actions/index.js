import {
  FETCH_LOCATION,
} from './types';

export const fetchLocation = () => async (dispatch) => {
  const res = await fetch('/api/location');
  const data = await res.json();
  console.log(data);
  dispatch({ 
    type: FETCH_LOCATION, 
    payload: data
  });
};
