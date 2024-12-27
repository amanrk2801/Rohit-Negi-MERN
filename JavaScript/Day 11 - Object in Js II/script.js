let obj1 = {
    a:1,
    b:2
}

// shallow copy : changes affect the original
let obj2 = obj1;
console.log(obj1, obj2); // { a: 1, b: 2 } { a: 1, b: 2 }
obj2.a=20;
console.log(obj1, obj2); // { a: 20, b: 2 } { a: 20, b: 2 }
 
// deep copy : changes only affect the copied object
let obj3 = structuredClone(obj1);
obj3.a = 100;
console.log(obj3, obj1); // { a: 100, b: 2 } { a: 20, b: 2 }

// Nested object
const user = {
    name: "Rohit",
    age: 25,
    address:{
        pincode: 246149,
        city: "kotdwar"
    }
}

console.log(user.address.pincode); // 246149

// assign
const user1 = Object.assign({},user);
console.log(user1);
user1.address.pincode = "123"; // two-level object change
user1.name = "Mohit"; // one-level object, no change
console.log(user);

// Object.freeze
Object.freeze(user); // Prevent any modification to an object
user.name = "Rohan"; // This will not change the name as the object is frozen
console.log(user);

// Object.seal
Object.seal(user);
user.age = 100; // prevents adding or removing properties
user.address.pincode = "456"; // but allow modifications of existing properties
console.log(user);

// Destructing of an object
let Person = {
    name: "Rohit",
    age: 25,
    gender: "Male",
    aadhar: 123456789
}

const {name: full_name, age, gender: G} = Person;
console.log(full_name, age, G); // Rohit 25 Male

// Rest operator
const {name, gender, ...Person1} = Person; 
console.log(name, gender); // Rohit Male
console.log(Person1); // { age: 25, aadhar: 123456789 }

// Array Destructing 
const arr = [1,2,3,4,5,6];
// const [first, second, third] = arr;
const [first, second, ...third] = arr;
// console.log(first, second, third); // 1 2 3 
console.log(first, second, third); // 1 2 [ 3, 4, 5, 6 ]

let student = {
    name: "Rohit",
    age: 25,
    arr: [10,20,30],
    address: {
        pincode: 441601,
        city: "Gondia"
    }
}

const {name: firstName} = student;
console.log(firstName); // Rohit
const {address: {pincode, city}} = student;
console.log(pincode, city); // 441601 Gondia

// const {arr: arr2} = student;
const {arr: [one, two, three]} = student;
// console.log(arr2); // [ 10, 20, 30 ]
console.log(one, two, three); // 10 20 30

let emp = {
    firstName: "rohit",
    age: 25,
    greet: function(){
        console.log("Hello Coder Army");
    },
    meet: function(){
        return "5'o clock"
    }
}

emp.greet(); // Hello Coder Army
let meet = emp.meet();
console.log(meet); // 5'o clock

// Prototype chaining is a mechanism in JavaScript where an object can inherit properties and methods from another object. This is achieved by setting the prototype of an object to another object. When a property or method is not found in the current object, JavaScript looks for it in the prototype object, and if not found there, it continues to look up the prototype chain until it reaches the Object.prototype. This allows for a hierarchical structure of objects, where objects can inherit properties and methods from their prototypes.

// Prototype Chaining Example

let animal = {
    eat: function(){
        console.log("Eating...");
    }
}

let dog = {
    bark: function(){
        console.log("Barking...");
    }
}

dog.__proto__ = animal; // Prototype chaining -> costlier operation
// dog = Object.create(animal); // this is the better way to do prototype chaining

dog.eat(); // Eating...
dog.bark(); // Barking...

let newArr = [10,20,30,40,50];
console.log(newArr); // [ 10, 20, 30, 40, 50 ]
console.log(newArr.__proto__ === Array.prototype); // true
console.log(newArr.__proto__.__proto__ === Object.prototype); // true
console.log(newArr.__proto__.__proto__.__proto__ === null); // true
console.log(newArr.__proto__); // Object(0) []
console.log(newArr.__proto__.__proto__); // [Object: null prototype] {}
console.log(newArr.__proto__.__proto__.__proto__); // null