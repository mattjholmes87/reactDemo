import React, { Component } from "react";
import "./App.css";
import Interface from "./components/Interface";

class App extends Component {
  state = {
    todos: [
      { title: "Clean Car", done: false },
      { title: "Buy Bread", done: true },
      { title: "Feed Fish", done: false },
    ],
  };

  onTodoInput = (e) => {
    this.setState({ todoInput: e.target.value });
  };

  onClickAdd = () => {
    const isDuplicate = this.state.todos.some((todo) => {
      return todo.title === this.state.todoInput;
    });

    if (isDuplicate) {
      return;
    }

    const todos = [...this.state.todos];
    todos.push({ title: this.state.todoInput, todo: false });
    this.setState({ todos });
  };

  onClickDelete = (title) => {
    const todos = [...this.state.todos];
    const indexOf = todos.findIndex((todo) => todo.title === title);
    todos.splice(indexOf, 1);
    this.setState({ todos });
  };

  onClickToggleTodo = (title) => {
    const todos = [...this.state.todos];
    const indexOf = todos.findIndex((todo) => todo.title === title);
    todos[indexOf].done = !todos[indexOf].done;
    this.setState({ todos });
  };

  onClickDeleteAll = () => {
    this.setState({ todos: [] });
  };

  render() {
    console.log(this.state);
    const { todos } = this.state;

    let totalTodo = 0;
    todos.forEach((todo) => {
      if (!todo.done) {
        totalTodo++;
      }
    });

    return (
      <>
        <Interface
          onTodoInput={this.onTodoInput}
          onClickAdd={this.onClickAdd}
          totalTodo={totalTodo}
          todos={this.state.todos}
          onClickToggleTodo={this.onClickToggleTodo}
          onClickDelete={this.onClickDelete}
          onClickDeleteAll={this.onClickDeleteAll}
        />
      </>
    );
  }
}

export default App;
