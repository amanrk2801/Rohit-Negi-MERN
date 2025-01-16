"use strict";
const p1 = {
    name: "Rohit",
    age: 20,
    gender: "Male"
};
const c1 = {
    name: "Rohit",
    balance: 420
};
const c2 = {
    name: "Rohit",
    age: 20,
    balance: 420,
};
const c3 = {
    name: "Rohit",
    age: 20,
    balance: 420,
};
;
const arr = [{ name: "Rohit", age: 20 }, { name: "Aman", age: 21 }, { salary: 420, id: "xyz" }];
// *function in TS
function greet(a) {
    console.log(a); // 10
    return a + 5;
}
console.log(greet(10)); // 15
function meet(msg, val) {
    console.log(msg, val);
}
meet("Hello", 123); // Hello 123 
// Default parameter
function print(msg = "Hello") {
    console.log(msg);
}
print();
// Optional parameter
function Gate(person) {
    console.log(person || "Mohan");
}
// Gate("Rohit"); // Rohit
Gate(); // Mohan
// Arrow function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 4)); // 7
// Callback function
function placeOrder(order, Callback) {
    const amount = order + 10;
    Callback(amount);
}
placeOrder(10, (amount) => {
    console.log(amount);
});
// Rest parameter
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => {
        ans = ans + val;
        console.log(ans);
    });
}
total(1, 2, 3, 4, 5, 6, 7, 8, 9);
const u1 = {
    name: "Rohit",
    age: 20,
    salary: "20lakh",
    id: 123,
};
