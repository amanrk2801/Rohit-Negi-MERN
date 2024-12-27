// for of loop
const arr = [1, 2, 3, 4, 5];
arr[7] = 6;
arr.name = "JavaScript";
for (let i of arr) {
  console.log(i); // 1 2 3 4 5
}
console.log(arr[Symbol.iterator]); // [Function: values]

// don't use for of loop for objects
const obj = {
  name: "JavaScript",
  estd: 1995,
  founder: "Brendan Eich",
};

console.log(obj[Symbol.iterator]); // undefined

// for (let i of obj) { // obj is not iterable. Why? Because it doesn't have Symbol.iterator method
//     console.log(i);
// }

for (let i of Object.keys(obj)) {
  console.log("keys: ", i);
}

for (let i of Object.values(obj)) {
  console.log("values: ", i);
}

for (let i of Object.entries(obj)) {
  console.log("entries: ", i);
}

console.log("--------------------------------------------------");

// for Each : uses callback function
const arr1 = [10, 20, 30, 40, 50];
// single argument : number
// double argument : number, index
// triple argument : number, index, array
arr1.forEach(function (number, index, arr) {
  arr1[index] = number * 10;
  console.log(number, index, arr);
});

console.log(arr1);

console.log("--------------------------------------------------");

// Filter : uses callback function
const arr2 = [10, 20, 30, 40, 50];
const filteredArr = arr2.filter(function (number) {
  return number > 30;
});
console.log(filteredArr);

const students = [
  { name: "John", age: 20 },
  { name: "Doe", age: 30 },
  { name: "Smith", age: 40 },
  { name: "Alex", age: 50 },
  { name: "Bob", age: 60 },
];

const filteredStudents = students.filter(function (student) {
  return student.age > 30;
});
console.log(filteredStudents);

console.log("--------------------------------------------------");

// Map : uses callback function
const arr3 = [10, 20, 30, 40, 50];
const mappedArr = arr3.map(function (number) {
  return number * 10;
});
console.log(mappedArr);

console.log("--------------------------------------------------");

// Reduce : uses callback function
const arr4 = [10, 20, 30, 40, 50];
const reducedArr = arr4.reduce(function (acc, number) {
  return acc + number;
}, 0);
console.log(reducedArr);

console.log("--------------------------------------------------");
// chain filter, map, reduce
const arr5 = [10, 20, 30, 40, 50];
const result = arr5
  .filter(function (number) {
    return number > 30;
  }) // [40, 50]
  .map(function (number) {
    return number * 10;
  }) // [400, 500]
  .reduce(function (acc, number) {
    return acc + number;
  }, 0); // 900
console.log(result); // 900


