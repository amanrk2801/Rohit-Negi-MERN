// useRef
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  function start() {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIsRunning(true);
    }
  }
  function stop() {
    if (isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  }
  function end() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }
  return (
    <>
      <h1>Stopwatch is: {time}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={end}>Reset</button>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const money = useRef(0);
  return (
    <>
      <StopWatch />
      <h1>Counter is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h1>Money is: {money.current}</h1>
      <button onClick={() => (money.current = money.current + 1)}>
        Increment
      </button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
