import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  state = { fontSize: 10 };
  render() {
    return (
      <div>
        <p className="done">Hello World external style</p>
        <p
          style={{
            backgroundColor: "red",
            color: "white",
            fontSize: `${this.state.fontSize}`,
          }}
        >
          Hello World inline style
          <button
            onClick={() => {
              this.setState({ fontSize: this.state.fontSize + 1 });
            }}
          >
            +
          </button>
        </p>
      </div>
    );
  }
}

export default App;
