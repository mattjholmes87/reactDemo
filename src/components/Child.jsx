import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();
    console.log("Constructor ran, this component is born");
    this.state = { test: true };
  }
  render() {
    return <p>I am child</p>;
  }
}

export default Child;
