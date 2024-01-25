import React, { Component } from "react";
import Button from "./components/Button";

class App extends Component {
  onClick = () => {
    console.log("Button Clicked");
  };

  onTextInput = () => {
    console.log("User Typed");
  };
  render() {
    return (
      <>
        <Button text={"Button 1"} level="important" />
        <Button text={"Button 2"} level="danger" />
        <Button text={"Button 3"} level="ok" />
        <button onClick={this.onClick}>Click Me!</button>
        <input type="text" onInput={this.onTextInput} />
      </>
    );
  }
}

export default App;
