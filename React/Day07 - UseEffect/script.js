import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./src/component/Colorful";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>Counter is {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          style={{ fontSize: "10px" }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
          style={{ fontSize: "10px" }}
        >
          Decrement
        </button>
      </div>
      <Colorful />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
