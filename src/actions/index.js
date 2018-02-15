import {
  FETCH_LOCATION,
  FETCH_STORY,
} from './types';

export const fetchLocation = () => async (dispatch) => {
  const res = await fetch('/api/location');
  res.setRequestHeader({
    credentials: 'same-origin',
    method: 'GET'
  });
  console.log(res);
  const data = await res.json();

  dispatch({ 
    type: FETCH_LOCATION, 
    payload: data
  });
};

export const fetchStory = () => async (dispatch) => {
  const res = await fetch('/api/story');
  const data = await res.json();
  dispatch({ 
    type: FETCH_STORY, 
    payload: data
  });
}