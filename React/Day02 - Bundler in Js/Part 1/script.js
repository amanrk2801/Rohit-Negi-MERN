const element1 = React.createElement(
  "h1",
  {
    id: "header",
    className: "header-class",
    style: { background: "blue", color: "white" },
  },
  "Hello World"
);

const element2 = React.createElement(
  "h1",
  {
    id: "footer",
    className: "footer-class",
    style: { background: "blue", color: "white" },
  },
  "Namaste India"
);

const div = React.createElement("div", {}, [element1, element2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);
