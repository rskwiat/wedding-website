import {
  FETCH_LOCATION,
  FETCH_STORY,
  SUBMIT_FORM,
} from './types';

export const fetchLocation = () => async (dispatch) => {
  const res = await fetch('/api/location', { method: 'GET' });
  const data = await res.json();

  dispatch({ 
    type: FETCH_LOCATION, 
    payload: data
  });
};

export const fetchStory = () => async (dispatch) => {
  const res = await fetch('/api/story', { method: 'GET' });
  const data = await res.json();
  dispatch({ 
    type: FETCH_STORY, 
    payload: data
  });
}

export const submitForm = (data) => (dispatch) => {
  fetch('/api/rsvp', { 
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((response) => { 
    dispatch({
      type: SUBMIT_FORM
    });
  });
}

