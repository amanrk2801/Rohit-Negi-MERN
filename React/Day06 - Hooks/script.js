// useState is a Hook
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="first">
      <h1>Count is: {count}</h1>
      <div className="btn">
        <button className="btn" onClick={increment}>
          Inc
        </button>
        <button className="btn" onClick={() => setCount(count - 1)}>
          Dec
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
