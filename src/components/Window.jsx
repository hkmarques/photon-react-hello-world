import React, { Component } from 'react';

export default class Window extends Component {
  render() {
    const { children } = this.props;
    return <div className="window">{children}</div>;
  }
}
