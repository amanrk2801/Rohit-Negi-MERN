// Global Object : window object in browser
// Chrome Browser Console : window object
// Node.js Console : global object

// why we use this keyword? 
// Answer: In the Chrome browser, the global object is the window object, while in Node.js, the global object is called global. This can cause confusion, so we use the 'this' keyword to access the properties and methods of the object itself.

console.log("This Keyword in JavaScript");

// This keyword: this keyword is that it refers to the object it belongs to. It has different values depending on where it is used: 

// 1. In a method, this refers to the owner object.
// 2. Alone, this refers to the global object.
// 3. In a function, this refers to the global object.
// 4. In a function, in strict mode, this is undefined.
// 5. In an event, this refers to the element that received the event.
// 6. Methods like call(), and apply() can refer this to any object.

// THIS KEYWORD IN GLOBAL CONTEXT
// 1. Global Context (outside of any function)
// In browsers : window
// In Node.js : global (module's exports object)
let a = 10;
const b = 20;

// console.log(this); // window object -> when we run this code in browser
console.log(this); // {} -> when we run this code in Node.js 
console.log("-------------------");


// THIS KEYWORD IN FUNCTION CONTEXT
// 2. Inside a function
// i) (Non Strict Mode) -> when this is used inside a regular function, it refers to the global object
// ii) (Strict Mode) -> this will be undefined inside a function

// Non-Strict Mode
function foo() {
    console.log(this);
}

foo(); // window object -> when we run this code in browser

// Strict Mode 
function bar() {
    'use strict';
    console.log(this);
}

bar(); // undefined
console.log("-------------------");

// 3. Inside a method 
// When this is used inside a method, it refers to the object that owns the method.
const obj = {
    name: 'John1',
    age: 30,
    greet() {
        console.log(this); // obj
    }
}

obj.greet(); // this refers to the object that owns the method
// window.greet(); // window object : see the output in browser it points to the window object or global object
console.log("-------------------");

// 4. Inside a nested function
// In a nested function, this will refer to the global object
const person = {
    name: 'John2',
    age: 30,
    greet() {
        function innerFunction() {
            console.log(this); // window object
        }
        innerFunction();
    }
}

person.greet();
console.log("-------------------");

// 5. Arrow Functions
// Arrow functions do not have their own this. They are not well suited for defining object methods. Instead, they inherit this from the surrounding lexical scope.

const person1 = {
    name: 'John3',
    age: 30,
    greet: function() {
        const innerFunction = () => {
            console.log(this); // person1 object
        }
        innerFunction();
    }
}

person1.greet(); // here this we can't see in node.js console but in browser console we can see the output. "this" is pointing to the window object.
console.log("-------------------");

// 6. Inside a Constructor or Class
// In constructors and classes, this refers to the instance of the object being created.
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const user = new User('John', 30);
user.greet(); // this refers to the instance being created


console.log("----------Extras--------------");

// Arrow functions do not have their own `this` keyword. 
// They inherit `this` from the surrounding lexical scope.
let greet = () => {
    console.log(this); // In a browser, this refers to the global `window` object
}

greet();

// In a non-strict mode, regular functions have `this` referring to the global object (e.g., `window` in browsers).
let meet = function() {
    console.log(this); // In non-strict mode, this is the global object
}

meet();

// In strict mode, the value of `this` in a regular function is `undefined` 
"use strict";
let meet1 = function() {
    console.log(this); // undefined
}

meet1(); 


