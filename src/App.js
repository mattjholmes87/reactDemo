import React, { useRef } from "react";

//Calling a method on the DOM
const App = () => {
  const myRef = useRef();

  const onClick = () => {
    myRef.current.focus();
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input ref={myRef} type="text" id="demo" />
      <button onClick={onClick}>Set Focus</button>
    </form>
  );
};

export default App;
