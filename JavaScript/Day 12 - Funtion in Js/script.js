// Function
function greet(name) { // name->parameter
    if (typeof name !== 'string') {
        console.error('Name must be a string');
        return;
    }
    console.log(`Hello ${name}`);
}

function age(year) { // year->parameter
    const currentYear = new Date().getFullYear();
    if (typeof year !== 'number' || year > currentYear) {
        console.error('Year must be a valid number less than or equal to the current year');
        return;
    }
    return currentYear - year;
}

greet('aman'); // aman->argument
let myAge = age(1997); // 1997->argument
console.log(myAge);

// Function Expression
const func = function () {
    console.log('This is a function expression');
}

func();

// Arrow Function
const arrowFunc = () => {
    console.log('This is an arrow function');
}

arrowFunc();

// Spread Operator
const numbers = [1, 2, 3, 4, 5];
let num = [...numbers, 6, 7, 8, 9, 10];
console.log('Spread Numbers:', num);

// Rest Parameter
function sum(...number) {
    console.log('Rest Numbers:', number);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 

// Object Destructuring
const person = {
    name: 'Aman',
    age: 24,
    amount: 1000
}

function fun1() {
    console.log(`Name: ${person.name}, Age: ${person.age}, Amount: ${person.amount}`);
}

function fun2({name, age, amount}) { // Object Destructuring
    console.log(`Name: ${name}, Age: ${age}, Amount: ${amount}`);
}

fun1(person);
fun2(person);

// Pass by Value
function passByValue(value) {
    value = 10;
}

let value = 20;
passByValue(value);
console.log('Pass by Value:', value);

// Pass by Reference
function passByReference(obj) {
    obj.name = 'Aman';
}

let obj = {};
passByReference(obj);
console.log('Pass by Reference:', obj);





