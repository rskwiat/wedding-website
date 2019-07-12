import React from 'react';
import Proptypes from 'prop-types';
import { 
  withScriptjs, 
  withGoogleMap, 
  GoogleMap, 
  Marker, 
  InfoWindow 
} from 'react-google-maps';

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 41.6669706, lng: -73.9571263 }}
  >
    {props.isMarkerShown && 
      <Marker position={{ lat: 41.6669706, lng: -73.9571263 }}>
      <InfoWindow onCloseClick={props.onToggleOpen}>
        <div> 
          <a
            target="_blank" 
            rel="noopener noreferrer" 
            href={props.directions}
          >
          Directions to Buttermilk Falls Inn
          </a>
        </div>
      </InfoWindow>
    </Marker>
  }
  </GoogleMap>
));

Map.propTypes = {
  props: Proptypes.object
};

export default Map;
