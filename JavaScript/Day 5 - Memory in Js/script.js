// Primitive data type : Immutable (no change allowed)
let a = 10;
let b = a;
a=30;
console.log(a); // 30
console.log(b); // 10

// Non Primitive data type : Mutable (change allowed)
let obj1 = {
    name: "aman",
    age: 27
}

let obj2 = obj1;
obj2.name="monu";
console.log(obj1); // { name: 'monu', age: 27 }
console.log(obj2); // { name: 'monu', age: 27 }

let arr1 = [1,2,3];
let arr2 = arr1;
arr2[0] = 2;
console.log(arr2); // [2,2,3]



 
