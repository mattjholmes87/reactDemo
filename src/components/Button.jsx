import React, { Component } from "react";

class Button extends Component {
  state = {};
  render() {
    return <button className={this.props.level}>{this.props.text}</button>;
  }
}

export default Button;
