// Reduce : The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, number) => {
    // console.log(acc, number);
    acc = acc + number;
    return acc;
}, 0); // 0 is the initial value. here acc is a number
console.log(sum); // 15

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
    if (acc.hasOwnProperty(fruit)) {
        acc[fruit]++;
    } else {
        acc[fruit] = 1;
    }
    return acc;
}, {}); // {} is the initial value. here acc is an object
console.log(count); // { apple: 3, banana: 2, orange: 1 }

console.log('---------------------');

// Sets : A Set is a collection of unique values.

const numbersSet = new Set([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
console.log(numbersSet); // Set { 1, 2, 3, 4, 5 }

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(1);
set.add(2);
set.add(3);
console.log(typeof set); // object
console.log(set); // Set { 1, 2, 3 }
console.log(set.has(1)); // true
console.log(set.has(4)); // false
console.log(set.size); // 3
set.delete(1);
console.log(set); // Set { 2, 3 }
set.clear();
console.log(set); // Set {}
Set.prototype // run in browser console to see all the methods add: ƒ, clear: ƒ, delete: ƒ, has: ƒ, …}

// array to set, set to array
const array = [1, 2, 3, 4, 5];
const setFromArray = new Set(array);
console.log(setFromArray); // Set { 1, 2, 3, 4, 5 }
const arrayFromSet = [...setFromArray];
console.log(arrayFromSet); // [ 1, 2, 3, 4, 5 ]

// union : all elements from both sets without duplicates
const a = new Set([1, 2, 3, 4, 5]);
const b = new Set([3, 4, 5, 6, 7]);
const union = new Set([...a, ...b]); // spread operator
console.log("union: ",union); // Set { 1, 2, 3, 4, 5, 6, 7 }

// intersection : common elements
const intersection = new Set([...a].filter(x => b.has(x)));
console.log("intersection: ",intersection); // Set { 3, 4, 5 }

// difference : elements that are in the first set but not in the second
const difference = new Set([...a].filter(x => !b.has(x)));
console.log("difference: ",difference); // Set { 1, 2 }

// subset : all elements of the first set are in the second set
const c = new Set([1, 2, 3]);
const d = new Set([1, 2, 3, 4, 5]);
const isSubset = [...c].every(x => d.has(x));
console.log("isSubset: ",isSubset); // true

// superset : all elements of the second set are in the first set
const isSuperset = [...d].every(x => c.has(x));
console.log("isSuperset: ",isSuperset); // false

// Iterate over a set using forEach
const fruitsSet = new Set(['apple', 'banana', 'orange', 'grapes']);
fruitsSet.forEach(fruit => {
    if (fruit === 'banana') {
        // break; // error: Illegal break statement
        return; // skip the current iteration
    }
    console.log("Fruits: ",fruit);

});

// Iterate over a set using for...of
const vegetablesSet = new Set(['potato', 'tomato', 'onion', 'carrot']);
for (const vegetable of vegetablesSet) {
    if (vegetable === 'onion') {
        break; // break out of the loop
        // return; // error: Illegal return statement
    }
    console.log("Vegetables: ",vegetable);
}

// difference between for...of and forEach -> forEach can't be stopped or breaked out of the loop but for...of can be stopped or breaked out of the loop

console.log('---------------------');

// Maps : A Map is a collection of key-value pairs. A key can be of any type. A value can also be of any type. A Map maintains the order of the keys. A Map is iterable.

const colors = new Map();
colors.set('red', '#ff0000');
colors.set('green', '#00ff00');
colors.set('blue', '#0000ff');
colors.set('blue', '#0000gg'); // overwrite the value
console.log(colors); // Map { 'red' => '#ff0000', 'green' => '#00ff00', 'blue' => '#0000ff' }
console.log(colors.get('green')); // #00ff00
console.log(colors.has('yellow')); // false
console.log(colors.size); // 3
colors.delete('green');
console.log(colors); // Map { 'red' => '#ff0000', 'blue' => '#0000ff' }
colors.clear();
console.log(colors); // Map {}
console.log(typeof colors); // object
Map.prototype // run in browser console to see all the methods clear: ƒ, delete: ƒ, entries: ƒ, forEach: ƒ, …}

// another way to create a map
const fruitsMap = new Map([
    ['apple', 5],
    ['banana', 10],
    ['orange', 15]
]);
console.log(fruitsMap); // Map { 'apple' => 5, 'banana' => 10, 'orange' => 15 }

// for...of loop to iterate over a map
for (const [key, value] of fruitsMap) { // array destructuring
    console.log("Fruits: ",key, value);
}

// iterate over a map using forEach
fruitsMap.forEach((value, key) => { // forEach takes a callback function with value and key as arguments
    console.log("Fruits: ",key, value);
});

// Difference between Object and Map
// 1. A Map can have keys of any type. An Object can only have keys of type string or symbol.
// 2. A Map maintains the order of the keys. An Object does not maintain the order of the keys.
// 3. A Map is iterable. An Object is not iterable.







