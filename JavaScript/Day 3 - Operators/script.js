// *** Conversions *** //
// String <=> number
let account_balance = "1000000000";
console.log(typeof account_balance); // string
let num = Number(account_balance);
console.log(typeof num); // number

// Boolean to number
let on_bool = true;
console.log(typeof on_bool); // boolean

let on_num = Number(on_bool);
console.log(typeof on_num); // number
console.log(on_num); // 1

// null
let x1 = null;
console.log(Number(x1)); // 0

// undefined
let x2;
console.log(Number(x2)); // NaN


// *** Operators *** //
// Arithmetic Operators
console.log(6*3+18/6-9); // 12
console.log((6*3)+(18/6)-9); // 12
console.log(20%3); // remainder: 2
let sum = 20;
sum++; // post increment 
++sum; // pre increment
console.log(sum); // remainder: 22
// Precedence Table => 
//     1. Divide Multiply left to right
//     2. Add sub left to right

// Assignment Operators
let num1 = 20;
num1 += 10;
console.log(num1); // 30

let num2 = 10;
// let num3 = num2 << 3; // [x << y => x*(2^y)] => 10*(2^3) : ans 80
let num3 = num2 >> 2; // [x >> y => x / 2^y] => 10 / 2^2 : ans 8
console.log(num3); // 8



