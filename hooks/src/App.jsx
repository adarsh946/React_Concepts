import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count <= 19) {
      return setCount(count + 1);
    }
    console.log("increment");
  };

  const decrement = () => {
    if (count >= 1) {
      return setCount(count - 1);
    }

    console.log("decrement");
  };

  return (
    <>
      <h1>This is couter project.</h1>
      <p>count is : {count}</p>
      <button onClick={increment}>Increase Value</button>
      <br />
      <button onClick={decrement}>Decrease Value</button>
    </>
  );
}

export default App;
