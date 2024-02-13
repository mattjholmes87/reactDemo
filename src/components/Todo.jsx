import React from "react";

const Todo = ({ id, title, completed }) => {
  return (
    <>
      <h1 className={completed ? "completed" : "incompleted"}>{title}</h1>
    </>
  );
};

export default Todo;
