import React, { Component } from 'react';

export default class Profile extends Component{
  render(){
    return(
      <div className="profile">
        <img className="img-round" src={this.props.ImageUrl} />
        <h2>{this.props.name}</h2>
        <p>{this.props.about}</p>
      </div>
    )
  }
}