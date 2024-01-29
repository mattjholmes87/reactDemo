import React, { Component } from "react";

class App extends Component {
  state = { todos: ["Clean Car", "Buy Bread", "Feed Fish"] };

  onTodoInput = (e) => {
    this.setState({ todoInput: e.target.value });
  };

  onClickAdd = () => {
    const todos = [...this.state.todos];
    todos.push(this.state.todoInput);
    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;

    return (
      <>
        <input type="text" onInput={this.onTodoInput} />
        <button onClick={this.onClickAdd}>Add</button>
        {todos.map((todo) => {
          return <p>{todo}</p>;
        })}
      </>
    );
  }
}

export default App;
