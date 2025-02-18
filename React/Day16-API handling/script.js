import React from "react";
import ReactDOM from "react-dom/client";
import stores from "./stores";
import { Provider } from "react-redux";
import CoinCreate from "./CoinCreate";

function App() {
  return (
    <Provider store={stores}>
    <CoinCreate></CoinCreate>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
