import keys from "settings/keys";

import {
  FETCH_LOCATION,
  FETCH_STORY,
  FETCH_ACCOMMODATIONS,
} from 'constants/types';

import * as contentful from 'contentful';

const client = contentful.createClient({
  space: keys.space_id,
  accessToken: keys.accessToken
});

export const fetchLocation = () => async (dispatch) => {
  const data = await client.getEntry("3uQj71mpX7r8r7rwrWQ7S9");
  dispatch({ 
    type: FETCH_LOCATION, 
    payload: data.fields.data
  });
};

export const fetchAccommodations = () => async (dispatch) => {
  const data = await client.getEntry('5x1T7uzIX6l3mjXUXKarKE');
  dispatch({ 
    type: FETCH_ACCOMMODATIONS, 
    payload: data.fields.data
  });
}

export const fetchStory = () => async (dispatch) => {
  const data = await client.getEntry('VEnDsNY52vap9SWFLVjyJ');
  dispatch({ 
    type: FETCH_STORY, 
    payload: data.fields.data
  });
}
