import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <img alt={this.props.name} className="img-round" src={this.props.ImageUrl} />
        <h2>{this.props.name}</h2>
        <p>{this.props.about}</p>
      </div>
    );
  }
}

export default Profile;
