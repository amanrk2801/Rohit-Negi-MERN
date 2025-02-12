import React from "react";
import ReactDOM from "react-dom/client";

function Card() {
  return (
    <div>
      <img src="https://chriscross.in/cdn/shop/files/ChrisCrossRoyalBlueCottonT-Shirt.jpg?v=1735895850&width=2048" width="200px" />
    </div>
  );
}

function App() {
  return (
    <>
      // Header // Body
      <div>
        <Card />
      </div>
      // Footer
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Note: <App/> is used to call a function which is user-defined
