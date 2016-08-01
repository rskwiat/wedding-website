import React, { Component } from 'react'

export default class Footer extends Component{
  render(){
    return(
      <footer>
        <div className="container container-flex">
          <p>Website built by: <a href="mailto:rskwiat@gmail.com">the groom</a></p>
        </div>
      </footer>
    )
  }
}