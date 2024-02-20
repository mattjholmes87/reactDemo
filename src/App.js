import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Controls from "./components/Controls";

const App = () => {
  const count = useSelector((state) => {
    return state.count;
  });

  const dispatch = useDispatch();

  return (
    <>
      <Controls />
      <p>Count: {count}</p>
    </>
  );
};

export default App;
