import React, { Component } from 'react';
import Profile from '../components/profile';

export default class About extends Component {
  render() {
    return (
      <div className="container container-flex container-about">
        <Profile ImageUrl="http://placekitten.com/250/250" name="Melissa Sarah Koszer" about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id orci pulvinar ipsum suscipit molestie. Maecenas ligula sem, egestas eu porta et, scelerisque vel leo. Proin pretium cursus magna et porttitor. Pellentesque eget lectus eu arcu blandit tincidunt sed eget eros. Vestibulum nec consectetur mauris, ut dictum tortor." />
        <Profile ImageUrl="http://placekitten.com/250/250" name="Robert John Skwiat" about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id orci pulvinar ipsum suscipit molestie. Maecenas ligula sem, egestas eu porta et, scelerisque vel leo. Proin pretium cursus magna et porttitor. Pellentesque eget lectus eu arcu blandit tincidunt sed eget eros. Vestibulum nec consectetur mauris, ut dictum tortor." />
      </div>
    );
  }
}
