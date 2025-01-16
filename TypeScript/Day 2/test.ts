let age: number = 20;

// *Type Inference in TypeScript refers to the ability of the TypeScript compiler to automatically determine the type of a variable based on the value assigned to it. This means that even if you don't explicitly specify a type, TypeScript can infer the most appropriate type and apply it.
let count = 10; 
// count = "aman"; 

// *`any` : Allows any type of value without type checking.
let rupee: any;
rupee = 20;
rupee = "Rohit";
console.log(rupee.toUpperCase()); // ROHIT

// *`unknown` : Safer than `any`; operations on `unknown` values require type checks.
let value : unknown;
value = 20;
value = "Aman"
// value = 10.222222222;
// value = [];
if(typeof value === "string")
    console.log(value.toUpperCase()); // AMAN
else if(typeof value === "number")
    console.log(value.toFixed(2));
else
    console.log("Enter valid input");

// *Non Primitive

// *Array
let ar1: number[] = [1, 2, 3];
let ar2 = [4,5,6]; 
let ar3:(string | number)[] = ["Rohit", 20,11,"Aman"];
// ar3.push(true); // bcz ar3 accept string and number only
let ar4:(string | number | boolean)[] = ["Rohit", 20,11,"Aman"];
ar4.push(true); // it accept bcz we mentioned  

// *Tuples : Tuples are arrays with a fixed number of elements of specific types
let tup1: [string, number] = ["Rohit", 20];
let tup2: [string, number, string] = ["Rohit", 20, "Pune"];

// *Objects
// Inline
// Defining an object with inline type annotation
let obj: {name: string, age: number, gender: string} = {
    name: "Rohit",
    age: 20,
    gender: "male"
}

// Defining an object with explicit type annotation
let user : {name: string, age: number, balance: number};
user = {
    name: "rohit",
    age: 20,
    balance: 420
}

// Using type aliases for objects
type employee = {
    name: string,
    age: number,
    id: string
}
// Creating an object using the employee type alias
let e1 : employee = {
    name: "rohit",
    age: 20,
    id: "uber123"
}

// Using interfaces for objects
interface admin1 {
    name: string,
    age: number,
    position: string
}
// Creating an object using the admin1 interface
let emp: admin1 = {
    name:"rohit",
    age: 20,
    position: "SDE"
}

// Type vs Interface: Which is Best with Example

// Both type and interface in TypeScript are used to define the type of a value. However, there are some key differences between them.

// Type:
// Type is used to give a new name to an existing type. It is mainly used for primitive types like string, number, boolean, etc.

// Example:
type StringOrNumber = string | number;

let id: StringOrNumber = '123';
id = 123;

// Interface:
// Interface is used to define a blueprint of an object. It is mainly used for objects.

// Example:
interface Person {
  name: string;
  age: number;
}

let person1: Person = {
  name: 'John Doe',
  age: 30
};

// Which is Best?
// Both type and interface have their own use cases. It's not that one is better than the other. It's just that they are used in different scenarios.

// When to use type:
// Use type when you want to give a new name to an existing type.

// When to use interface:
// Use interface when you want to define a blueprint of an object.

// In summary, type is used for primitive types and interface is used for objects.



















// *Platform Independent Language: A programming language that can run on any platform without modification, such as Java, JavaScript or Python.
// Example: Java -> compile -> Byte code -> runtime -> machine code

// *Platform Dependent Language: A programming language that is specific to a particular platform and cannot run on another platform without modification, such as assembly language, C, C++.
// Example: C++ -> compiler -> machine code










    
    










