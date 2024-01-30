import React, { Component } from "react";
import "./App.css";

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
        <input type="text" onInput={this.onTodoInput} />
        <button onClick={this.onClickAdd}>Add</button>
        <h1>Total todos: {totalTodo}</h1>
        {todos.map((todo) => {
          return (
            <div className={todo.done ? "done" : "undone"}>
              <p onClick={() => this.onClickToggleTodo(todo.title)}>
                {todo.title}
              </p>
              <button onClick={() => this.onClickDelete(todo.title)}>X</button>
            </div>
          );
        })}
        <button onClick={this.onClickDeleteAll}>Delete All</button>
      </>
    );
  }
}

export default App;
