// how to create object : first method
// NOTE: key(string) : value(string)
const obj = {
    1: "one",
    firstName: "Aman",
    gender: "Male",
    age: 27
}

console.log(obj); // { '1': 'one', firstName: 'Aman', gender: 'Male', age: 27 }
console.log(obj.age); // 27
console.log(obj["age"]); // 27
console.log(obj[1]); // one

// second method to create Object
const person = new Object();
// property add
person.name = "Pushpak";
person.age = 27;
person.gender = "Male";
console.log(person); // { name: 'Pushpak', age: 27, gender: 'Male' }
// delete
delete person.age;
console.log(person); // { name: 'Pushpak', gender: 'Male' }
// Modify or update
person.name = "Monu";
console.log(person); // { name: 'Monu', gender: 'Male' }

// third method to create object
class People{
    constructor(name, age, gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}

let person1 = new People("Rohit",20,"Male");
// In a constructor, the "this" keyword refers to the object that called the constructor.
let person2 = new People("Mohit",21,"Male");
console.log(person1); // People { name: 'Rohit', age: 20, gender: 'Male' }
console.log(person2); // People { name: 'Mohit', age: 21, gender: 'Male' }

let obj1 = {
    firstName: "rohit",
    age:30,
    gender: "male"
};
// keys, values
const arr = Object.keys(obj1);
// const arr = Object.values(obj1);
console.log(arr); // [ 'firstName', 'age', 'gender' ]

// 2d array : key, value pairs
const newArr = Object.entries(obj1);
console.log(newArr); // [ [ 'firstName', 'rohit' ], [ 'age', 30 ], [ 'gender', 'male' ] ]

// assign use case : but this changes original array
let obj2 = {a:1,b:2};
let obj3 = {c:3,d:4};

// let obj4 = Object.assign(obj2,obj3);
// console.log(obj4); // { a: 1, b: 2, c: 3, d: 4 }
// console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }


// assign use case : to protect form modifying original array use {} obj
let obj4 = Object.assign({}, obj2,obj3);
console.log(obj4); // { a: 1, b: 2, c: 3, d: 4 }
console.log(obj2); // { a: 1, b: 2 }

// Spread Operator
const obj5 = {...obj2, ...obj3};
console.log(obj5); // { a: 1, b: 2, c: 3, d: 4 }

























