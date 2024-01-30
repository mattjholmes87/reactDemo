import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();
    console.log("Constructor ran, this component is born");
    this.state = { test: true };
  }

  componentDidMount() {
    console.log("I run after HTML is in the DOM");
  }

  render() {
    console.log("Render ran, the HTML is about to be created");
    return <p>I am child</p>;
  }
}

export default Child;
