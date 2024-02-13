import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState();
  const getTodos = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );

    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return (
    <>
      {todos &&
        todos.map((todo) => {
          return <Todo {...todo} />;
        })}
    </>
  );
};

export default App;
