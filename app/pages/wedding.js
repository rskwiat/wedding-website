import React, { Component } from 'react';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

const coords = {
  lat: 41.667019,
  lng: -73.9574923
};

const headerContent = [
  {
    copy: 'Ceremony & Reception',
    key: 'ceremony'
  },
  {
    copy: 'October 27th 2018',
    key: 'saveTheDate'
  }
];

class Wedding extends Component {

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

  contentRender() {
    return headerContent.map((data) => {
      return (
        <h2 key={data.key}>{data.copy}</h2>
      );
    });
  }


  render() {
    return (
      <div>
        <div className="container container-reception">
          {this.contentRender()}
          <Gmaps
            width={'100%'}
            height={'400px'}
            lat={coords.lat}
            lng={coords.lng}
            zoom={12}
            loadingMessage={'Loading Wedding Details...'}
            params={{ v: '3.exp', key: 'AIzaSyAtVYppoetdJIYZmsg0z6TJGZf5qVsufk0' }}
            onMapCreated={this.onMapCreated}
          >
            <Marker
              lat={coords.lat}
              lng={coords.lng}
              draggable
              onDragEnd={this.onDragEnd}
            />
            <InfoWindow
              lat={coords.lat}
              lng={coords.lng}
              content={'Buttermilk Falls Inn'}
              onCloseClick={this.onCloseClick}
            />
            <Circle
              lat={coords.lat}
              lng={coords.lng}
              radius={250}
            />
          </Gmaps>
        </div>

        <div className="container">
          <div className="row row-flex">
            <div className="card">
              <h3>About the Venue</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lacus diam. In pretium bibendum odio gravida iaculis. Integer ut lorem facilisis, lacinia erat sit amet, bibendum tellus. In eget dui vel ex pretium blandit. Etiam id suscipit arcu, sit amet accumsan ex. Curabitur ex tellus, rutrum ut dictum eget, dapibus ac felis. Duis facilisis interdum tincidunt. Donec et nibh elit. Aliquam cursus nibh ut tempus vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus elementum lacinia lectus, vel mollis erat. Aliquam condimentum pellentesque erat, ut rhoncus eros convallis at.</p>
            </div>

            <div className="card">
              <h3>Accomdations</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lacus diam. In pretium bibendum odio gravida iaculis. Integer ut lorem facilisis, lacinia erat sit amet, bibendum tellus. In eget dui vel ex pretium blandit. Etiam id suscipit arcu, sit amet accumsan ex. Curabitur ex tellus, rutrum ut dictum eget, dapibus ac felis. Duis facilisis interdum tincidunt. Donec et nibh elit. Aliquam cursus nibh ut tempus vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus elementum lacinia lectus, vel mollis erat. Aliquam condimentum pellentesque erat, ut rhoncus eros convallis at.</p>
            </div>

          </div>
        </div>


      </div>
    );
  }
}

export { Wedding };
