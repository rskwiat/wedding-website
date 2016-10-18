import React, { Component } from 'react';

class Date extends Component {
  render() {
    const { date } = this.props;

    return (
      <div className="date">
        <h2>Save the date: </h2>
        <span>{date}</span>
      </div>
    );
  }
}

export default Date;
