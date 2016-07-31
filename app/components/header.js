import React, { Component } from 'react'

export default class Header extends Component{
  render(){
    return(
      <header>
        <h1>{this.props.tagline}</h1>
        <p>Tying the Knot</p>
      </header>
    )
  }
}