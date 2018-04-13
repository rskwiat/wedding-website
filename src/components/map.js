import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { 
  withScriptjs, 
  withGoogleMap, 
  GoogleMap, 
  Marker, 
  InfoWindow 
} from 'react-google-maps';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 41.6669706, lng: -73.9571263 }}
  >
    {props.isMarkerShown && 
      <Marker position={{ lat: 41.6669706, lng: -73.9571263 }}>
      <InfoWindow onCloseClick={props.onToggleOpen}>
        <div>
          Buttermilk Falls Inn:
          <a
            target="_blank" 
            rel="noopener noreferrer" 
            href={props.directions}
          >
            Directions
          </a>
        </div>
      </InfoWindow>
    </Marker>
  }
  </GoogleMap>
));

MyMapComponent.propTypes = {
  props: Proptypes.object
};

export default MyMapComponent;
