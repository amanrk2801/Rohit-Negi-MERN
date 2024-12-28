// How Does JS code Works | Hoisting in JS
console.log(x); // undefined
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
var x = 10;
let y = 20;

// Hoisting in JS: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// Hoisting in JS only works with var and function declarations, not with let and const.

console.log("-------------------");

greet(); // Hello World!

function greet() {
  console.log("Hello World!");
}

// meet(); // ReferenceError: Cannot access 'meet' before initialization

let meet = function () {
  console.log("Good Morning!"); 
};

meet(); // Good Morning!

console.log("-------------------"); 

let a = 10;
let b = 20;
function sum() {
    return a + b;
}
 
var ans = sum(a, b);
console.log(ans); // 30




