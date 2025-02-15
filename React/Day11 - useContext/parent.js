import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import GlobalContext from "./global";
import { useContext } from "react";
import Child from "./child";

function App() {
  const [count, setCount] = useState(0);
  const data = useContext(GlobalContext);
  return (
    <>
      <GlobalContext.Provider value={{ ctn: count, sctn: setCount }}>
        <h1>Hello {data}</h1>
        <Child count={count} setCount={setCount} />
      </GlobalContext.Provider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
