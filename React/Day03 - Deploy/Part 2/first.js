import React from "react";
import ReactDOM from "react-dom/client";

const element1 = <h1>Hello, World</h1>

// Function Component
function greet(name){
  return <h2>Ram Ram {name}</h2>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<>{element1}{greet("Aman")}</>);

/////////////////////////////////////////////////////////////////

// Function Component
function Greet(props){
    return <h2>Ram Ram {props.name} {props.age}</h2>
}

// <Greet/> = function calling which is user define
const element = <Greet name="Aman" age="23"/>

