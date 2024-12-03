// takes memory in stack
let num1 = 321;
// when we use "new" keyword it take memory in Heap Memory
let num2 = new Number(321);
let num3 = new Number(321);
console.log(num1==num2); // true
console.log(num2==num3); // false
console.log(typeof num1); // number
console.log(typeof num2); // object

let num = 231.68;
console.log(num.toFixed(1)); // 231.7
console.log(num.toPrecision(6)); // 231.680
console.log(num.toExponential(3)); // 2.317e+2
console.log(num.toString()); // "231.68"
console.log(num.valueOf()); // 231.68

// Math
console.log(Math.E); // 2.718281828459045
console.log(Math.LN10); // 2.302585092994046
console.log(Math.pow(2.718281828459045, 2.302585092994046)); // 10
console.log(Math.PI); // 3.141592653589793
console.log(Math.LOG10E); // 0.4342944819032518
console.log(Math.floor(Math.random()*10)+1); // random

// Ludo
console.log(Math.floor(Math.random()*(6-1+1)+1)); // random 1,2,3,4,5,6

let min = 40, max = 50;
console.log(Math.floor(Math.random()*(max-min+1)+min));

let number = 23.9;
console.log(Math.floor(number)); // 23
console.log(Math.ceil(number)); // 24























