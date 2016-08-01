import React, {PropTypes, Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

import Header from '../components/header';


const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

export default class Wedding extends Component{

  constructor(props) {
    super(props);
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render(){
    return(
      <div>
        <div className="container container-flex container-reception">
          <h2>Ceremony &amp; Reception</h2>
          <h2>Fall 2018</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus odio, venenatis ac libero a, congue vestibulum justo. Quisque fermentum mattis volutpat. Donec eget dignissim nisl. Pellentesque egestas fringilla tincidunt. Curabitur ullamcorper lectus id ligula dapibus iaculis. Aliquam eleifend magna ut justo sagittis iaculis. In vestibulum quis dui ut sagittis. Sed facilisis velit non purus feugiat luctus. Etiam mattis convallis nulla, a cursus nisi sagittis sit amet. Integer fermentum pharetra vehicula. In rhoncus quis ex a congue.</p>
          <Gmaps
            width={'100%'}
            height={'400px'}
            lat={coords.lat}
            lng={coords.lng}
            zoom={12}
            loadingMessage={'Wedding Details...'}
            params={{v: '3.exp', key: 'AIzaSyAtVYppoetdJIYZmsg0z6TJGZf5qVsufk0'}}
            onMapCreated={this.onMapCreated}>
            <Marker
              lat={coords.lat}
              lng={coords.lng}
              draggable={true}
              onDragEnd={this.onDragEnd} />
            <InfoWindow
              lat={coords.lat}
              lng={coords.lng}
              content={'Venue Name'}
              onCloseClick={this.onCloseClick} />
            <Circle
              lat={coords.lat}
              lng={coords.lng}
              radius={500}
              onClick={this.onClick} />
          </Gmaps>

        </div>

      <div className="container container-flex container-about">
        <div className="profile">
          <h2>Guest Information</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium est non feugiat viverra. Quisque facilisis neque a purus lobortis cursus. Phasellus facilisis enim nisl, vel viverra felis maximus vitae. Ut eget dolor ut neque interdum eleifend. Suspendisse potenti. Vestibulum non dui quis ante accumsan viverra vel ac lectus.</p>
        </div>

        <div className="profile">
          <h2>Hotel Accomdations</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium est non feugiat viverra. Quisque facilisis neque a purus lobortis cursus. Phasellus facilisis enim nisl, vel viverra felis maximus vitae. Ut eget dolor ut neque interdum eleifend. Suspendisse potenti. Vestibulum non dui quis ante accumsan viverra vel ac lectus.</p>

        </div>

      </div>

      


      </div>
    )
  }
}
