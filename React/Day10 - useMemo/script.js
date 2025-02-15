// useMemo
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

// useMemo hook
// 1. Counter button: increase
// 2. Input field: Fibonacci number
// 0 1 1 2 3 5 8 13 21 34

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState("");
  // const [result, setResult] = useState(null);

  // Recursion code : Time Complexity (2^n)
  const Fibonacci = useCallback((n) => {
    if (n <= 1) return n;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }, []);

  const result = useMemo(() => Fibonacci(number), [number]);

  // or

  //   useEffect(() => {
  //     setResult(Fibonacci(number));
  //   }, [number]);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <div>
        <h2>Fibonacci number is: {result}</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
