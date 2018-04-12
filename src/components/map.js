import React, { Component } from 'react';


import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [51.505, -0.09]
const MapComponent = () => (
  <Map center={position} zoom={7} zoomControl={false}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Marker position={position}>
      <Popup>
        <span>A pretty CSS3 popup.<br />Easily customizable.</span>
      </Popup>
    </Marker>
  </Map>
);

export default MapComponent;

// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

// class MapComponent extends Component {
//   constructor() {
//     super();

//     this.state = {
//       lat: 41.6669666,
//       lng: -73.9571263,
//       zoom: 13,
//     }
//   }

//   render() {
//     const {
//       zoom
//     } = this.state;
//     const position = [this.state.lat, this.state.lng]
//     return (
//       <div className="map">
//       <Map center={position} zoom={zoom}>
//         <Marker position={position}>
//           <Popup>
//             <span>
//               A pretty CSS3 popup. <br /> Easily customizable.
//             </span>
//           </Popup>
//         </Marker>
//       </Map>
//       </div>
//     )
//   }
// }

// export default MapComponent;