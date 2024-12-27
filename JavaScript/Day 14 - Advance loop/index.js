// 1. Writable : true -> this is not protect from the hacking but it is used to prevent from the accidental changes
// 2. Enumerable
// 3. Configurable
// 4. Object.defineProperty
// 5. Object.create
// 6. for in loop
// 7. for loop


// let obj = {};
// obj.name = "Rahul";
// obj.age = 20;
// console.log(obj); // { name: 'Rahul' }
// console.log(Object.getOwnPropertyDescriptor(obj, "name")); // { value: 'Rahul', writable: true, enumerable: true, configurable: true }

console.log("---------------------------------");
let obj = {};
Object.defineProperty(obj, "name", {
  value: "Rahul",
  writable: false, // Cannot redefine property later: name
  enumerable: true,
  configurable: false,
});

obj.name = "Rohan";
// Object.defineProperty(obj, "name", {
//   writable: true, // Cannot redefine property: name
// });
console.log(obj); // { name: 'Rahul' }

console.log("---------------------------------");

const user = {
    name: "Rahul",
    age: 20,
    account_number: 1234567890,
}

Object.defineProperty(user, "account_number", {
    writable: false,
});

user.account_number = 9876543210;
console.log(user); // { name: 'Rahul', age: 20, account_number: 1234567890 }

console.log("---------------------------------");

const customer = {
    name: "Rahul",
    age: 20,
    account_number: 1234567890,
    balance: 1000,
}

const customer2 = Object.create(customer);
customer2.city = "Pune";
customer2.state = "Maharashtra";

// enumerable: false => balance will not be displayed
Object.defineProperty(customer, "balance", {
    enumerable: false,
});

// for in loop will not display balance but will display other properties of customer2 with inherited properties
for (let key in customer2) {
    console.log(key); // name age account_number balance
}

// toString is not displayed in for in loop because enumerable: false in Object.prototype
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));

console.log("---------------------------------");

// for in loop don't use with arrays
let arr = [1, 2, 3, 4, 5];
arr.name = "Rahul";
arr.age = 20;

// use for loop instead of for in loop
for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
} // this will display only index and value

for (let key in arr) {
    console.log(key, arr[key]); // 0 1 2 3 4
} // this will display index, value and name, age

/** for in loop -> Output:
 * index value
    0       1
    1       2
    2       3
    3       4
    4       5
    name    Rahul
    age     20
 */




