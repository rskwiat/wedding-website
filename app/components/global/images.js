import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <picture>
          <source srcSet={this.props.large} media="(min-width: 1000px)" />
          <source srcSet={this.props.medium} media="(min-width: 800px)" />
          <source srcSet={this.props.default} />
          <img srcSet={this.props.default} alt={this.props.alt} />
      </picture>
    );
  }
}

export default Image;
