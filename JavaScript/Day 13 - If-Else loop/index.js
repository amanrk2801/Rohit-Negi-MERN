// Scope 
// Global Scope, local scope(functional scope), block scope

var a = 10; 
let b = 20; 
const c = 30; 

function test() {
  var a1 = 40; 
  let b1 = 50; 
  const c1 = 60; 
  console.log("Function Scope: ", a1, b1, c1, a,b,c);
}

console.log('Global Scope: ', a, b, c);
test();
// console.log(a1, b1, c1); // ReferenceError: a1 is not defined bcz a1, b1, c1 are in function scope

if(true){ // block scope
    let a2 = 70;
    var b2 = 80;
    const c2 = 90;
}

// console.log('Block Scope: ', a2); // error: block scope
console.log('Block Scope: ', b2); // 80 : thats why we use let instead of var
// console.log('Block Scope: ', c2); // error: block scope

// function declaration
// greet(); // allowed
function greet(){
    console.log('Hello Greet');
}

greet(); // allowed

// function expression
// meet(); // error: meet is not a function
const meet = function(){
    console.log('Hello Meet');
}

meet(); // allowed

let arr = [1,2,3,4,5];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log('=====================');

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
}

const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city"]

for(let i=0; i<keys.length; i++){
    // console.log(keys[i]);
    console.log(person[keys[i]]);
}

// for(let key of keys){
//     console.log(key, person[key]);
// }

console.log('=====================');
const values = Object.values(person);
console.log(values); // ["John", 30, "New York"]
