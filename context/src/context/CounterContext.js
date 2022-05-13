import { createContext, useState } from "react";

export const CounterContext = createContext();

const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <CounterContext.Provider value={{ count, increase }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
