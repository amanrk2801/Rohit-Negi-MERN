// *** Primitive Data Type *** //

// Number
let account_balance = 3_00_00_000;
console.log(account_balance);
console.log(typeof account_balance); // Number

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// String
let firstName = "Aman";
console.log(firstName);
console.log(typeof firstName); // String

// Undefined
let lastName;
console.log(lastName);
console.log(typeof lastName); // Undefined

// Boolean
let statement = true;
console.log(statement);
console.log(typeof statement); // Boolean

// Null
let middleName = null;
console.log(middleName);
console.log(typeof middleName); // Object

// BigInt
// Note: Number only saves 64-bit integers, but BigInt can handle larger integers, so we use BigInt
let max_1 = BigInt(1000000000000000000);
let max_2 = 1000000000000000000n;
console.log(max_1);
console.log(max_2);

// Symbol
let sym = Symbol("hello");
console.log(sym);

// *** Non - Primitive Data Type *** //
// Array
let arr = [10,20,30];
console.log(arr);
console.log(typeof arr); // object

// Object
let obj = {
    firstName: "aman",
    age: "27",
}
console.log(obj);
console.log(typeof obj); // object

// functions
let fun = () => {
    console.log("Hello, fun");
}

fun();
console.log(typeof fun); // function




