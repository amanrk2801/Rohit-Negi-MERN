import React from "react";
import ReactDOM from "react-dom/client";

// JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.
// JSX is converted into React.createElement() calls by a transpiler like Babel.

const name = "Aman Kumbhalwar";
const obj ={
    age: 23,
    salary: "$200k"
}

const obj2 = {
    color: "hotpink"
}

// React Element
const newElement = (
  <>
    <h1 id="first" className="second">Hello World!</h1>
    <h2 style={obj2}>Namaste India</h2>
    <p>Name: {name}, Salary: {obj.salary}</p>
  </>
);

// React Component
// function Based Component
function greet(){
    return <h1>Work in Progress</h1>
}

const newElement2 = greet();

const newElement3 = <>{newElement} {newElement2}</>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(newElement3);
