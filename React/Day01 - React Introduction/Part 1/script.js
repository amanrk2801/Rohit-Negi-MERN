// Create element through JS

const header1 = document.createElement("h1");
header1.innerText = "Hello";
header1.style.backgroundColor = "blue";
header1.style.color = "White";
header1.style.fontSize = "30px";

const header2 = document.createElement("h1");
header2.innerHTML = "World";
header2.style.backgroundColor = "orange";
header2.style.color = "White";
header2.style.fontSize = "30px";

const React = {
  createElement: function (tag, props, children) {
    const element = document.createElement(tag);

    if (typeof children === "object") {
      for (let val of children) element.append(val);
    } else element.innerText = children;
    for (let key in props) {
      element.style[key] = props[key];
    }
    return element;
  },
};

const header3 = React.createElement(
  "h1",
  { backgroundColor: "green", color: "white" },
  "Namaste"
);
const header4 = React.createElement(
  "h1",
  { backgroundColor: "hotpink", color: "white" },
  "India"
);

const root = document.getElementById("root");
root.append(header1);
root.append(header2);

const ReactDOM = {
  render: function (element, root) {
    root.append(element);
  },
};

ReactDOM.render(header3, document.getElementById("root"));
ReactDOM.render(header4, document.getElementById("root"));

// unordered list
const l1 = React.createElement("li", {}, "HTML");
const l2 = React.createElement("li", {}, "CSS");
const l3 = React.createElement("li", {}, "JS");

const ul = React.createElement("ul", { fontSize: "30px" }, [l1, l2, l3]);

ReactDOM.render(ul, document.getElementById("root"));
