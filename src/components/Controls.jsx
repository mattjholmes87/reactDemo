import React from "react";
import { useDispatch } from "react-redux";
import { DECREMENT, INCREMENT, RESET } from "../redux/types";

const Controls = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: INCREMENT });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: RESET });
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Controls;
