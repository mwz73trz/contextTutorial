import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Button = (props) => {
  const { increase } = useContext(CounterContext);
  return (
    <div>
      <button onClick={increase}>Click Me!</button>
    </div>
  );
};

export default Button;
