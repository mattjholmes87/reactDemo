import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { todo, onClickToggleTodo, onClickDelete } = this.props;

    return (
      <div className={todo.done ? "done" : "undone"}>
        <p onClick={() => onClickToggleTodo(todo.title)}>{todo.title}</p>
        <button onClick={() => onClickDelete(todo.title)}>X</button>
      </div>
    );
  }
}

export default Todo;
