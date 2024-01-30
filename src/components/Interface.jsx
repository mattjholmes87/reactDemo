import React, { Component } from "react";
import Todo from "./Todo";

class Interface extends Component {
  render() {
    const {
      onTodoInput,
      onClickAdd,
      totalTodo,
      todos,
      onClickToggleTodo,
      onClickDelete,
      onClickDeleteAll,
    } = this.props;

    return (
      <>
        <input type="text" onInput={onTodoInput} />
        <button onClick={onClickAdd}>Add</button>
        <h1>Total todos: {totalTodo}</h1>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.title}
              todo={todo}
              onClickToggleTodo={onClickToggleTodo}
              onClickDelete={onClickDelete}
            />
          );
        })}
        <button onClick={onClickDeleteAll}>Delete All</button>
      </>
    );
  }
}

export default Interface;
