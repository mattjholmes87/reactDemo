import React, { Component } from "react";
import Child from "./components/Child";
import axios from "axios";

class App extends Component {
  state = { show: true };

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Toggle
        </button>
        {this.state.show && (
          <>
            <Child />
          </>
        )}
      </>
    );
  }
}
export default App;
