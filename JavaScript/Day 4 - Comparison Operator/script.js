//*** comparison operators ***//

// number to number
let x = 10;
let y = 10;
console.log(x == y); // true
// == both are equal
// < less than and > than
// <= less than equal to >= greater than equal to

let num = 10;
let str = "10";
// type conversion honga string to number
console.log(num == str); // true

// === type check then compare the value (strict check)
console.log(num === str); // false : because of type conversion (num is a number, str is a string)

console.log(typeof null); // object
console.log(typeof undefined); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false (strict check)

// null can only be equivalent to undefined (==)
console.log(null == 0); // false 
console.log(null < 0); // false
console.log(null > 0); // false
console.log(null <= 0); // true
console.log(null >= 0); // true

console.log(NaN == NaN); // false
let str1 = "aman";
let str2 = "monu";
console.log(str1==str2); // false
console.log(Number(str1)); // NaN
console.log(Number(str1)==Number(str2)); // false


let abc1 = 123;
let abc2 = "123";
let abc3 = 123;
console.log(abc1==abc2==abc3); // false

console.log(null != undefined); // false
console.log(null !== undefined); // true

// *** Logical Operators *** //
let age = 18;
let money = 420;
console.log(age >= 18 && money > 200); // true
console.log(age >= 15 || money > 2000); // true
console.log(!(age >= 15 || money > 2000)); // false

// *** Bitwise Operators (bit by bit compare) *** //
console.log(4&5); // 4 (ans: first digit (if small))
console.log(4|5); // 5 (ans: second digit (if big))
console.log(4^5); // 1 (ans: diff of digit)
console.log(~1); // -2 (+1-3)
console.log(1<<2); // 4 ([x << y => x*(2^y)])
console.log(4>>2); // 0 ([x >> y => x / (2^y)])

let sum; // undefined (but we can declare it later)
let cal = null; // null (but we can declare it later)
// sum=10;
// cal=20;
console.log(sum);
console.log(cal);

console.log(0.1+0.2); // 0.30000000000000004
console.log((0.1+0.2).toFixed(2)); // 0.30

