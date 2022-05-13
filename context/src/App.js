import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import CounterContextProvider from "./context/CounterContext";

function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <Counter />
        <Button />
      </CounterContextProvider>
    </div>
  );
}

export default App;
