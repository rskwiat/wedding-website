import React, { Component } from 'react'

export default class Date extends Component{
  render(){
    return(
      <div className="date">
        <h2>Save the date: <span>{this.props.date}</span></h2>
      </div>
    )
  }
}