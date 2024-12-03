const arr = [2,3,4,5,6];
console.log(arr); // [ 2, 3, 4, 5, 6 ]
console.log(arr.length); // 5
console.log(arr[0]); // 2
// arr.at can take negative index also
console.log(arr.at(3)); // 5
console.log(arr.at(-1)); // 6
const newArr = arr;
console.log(newArr); // [ 2, 3, 4, 5, 6 ]

// structuredClone makes a new array without affecting the original
const newArr1 = structuredClone(newArr)
console.log("structuredClone",newArr1); // structuredClone [ 2, 3, 4, 5, 6 ]

newArr1[0] = 100;
console.log("old arr",newArr); // old arr [ 2, 3, 4, 5, 6 ]
newArr[0] = 50;
console.log(arr); // [ 50, 3, 4, 5, 6 ]

// push, add element at end
arr.push(30);
arr.push(40);
console.log(arr); // [50,  3,  4, 5, 6, 30, 40]

// pop, delete element from last
arr.pop();
console.log(arr); // [ 50, 3, 4, 5, 6, 30 ]

// unshift, add element at start
arr.unshift(500);
console.log(arr); // [500, 50, 3, 4, 5, 6, 30 ]

// shift, delete element from start
arr.shift();
console.log(arr); // [ 50, 3, 4, 5, 6, 30 ]

// delete 
delete arr[0];
console.log(arr); // [ <1 empty item>, 3, 4, 5, 6, 30 ] (hole created) don't use this

let arr1 = [1,2,6,3,4,6,10,11,12]
console.log(arr1);
console.log(arr1.indexOf(6)); // 2, if not present then -1
console.log(arr1.lastIndexOf(6)); // 5
console.log(arr1.includes(3)); // true

// slice (no change in the original array)
console.log(arr1); // [1,2,6,3,4,6,10,11,12]
console.log(arr1.slice(2,4)); // [ 6, 3 ]
console.log(arr1); // [1,2,6,3,4,6,10,11,12]

// splice (change the original array)
console.log(arr1); // [1,  2,  6,  3, 4, 6, 10, 11, 12]
console.log(arr1.splice(2,5)); // [ 6, 3, 4, 6, 10 ] only return five values
console.log(arr1); // [ 1, 2, 11, 12 ]

// splice(starting_index, total_element_delete, add values)
console.log(arr1.splice(2,3,"money",90,100)); // [11,12]
console.log(arr1); // [ 1, 2, 'money', 90, 100 ]

// join and toString
let arr2 = [10,20,30,40,50];
console.log(arr2.join("*")); // 10*20*30*40*50
console.log(arr2.toString()); // 10,20,30,40,50

// concat
let arr4 = [1,2,3];
let arr5 = [4,5,6];
let arr6 = [7,8,9]
console.log(arr4.concat(arr5,arr6)); // [1,2,3,4,5,6,7,8,9]
arr4.push(arr5);
console.log(arr4); // [ 1, 2, 3, [ 4, 5, 6 ] ]
console.log(arr4[3][0]); // 4

// 2D array
let arr7 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr7[2][0]); // 7

// 3D array
let arr8 = [
    [
        [1,2,3],[4,5,6]
    ],
    [
        [7,8,9],[10,11,12]
    ]
];
console.log(arr8[1][0][2]); // 9

// 3d converted to 2d with the help of "flat()"
let newArr2d = arr8.flat();
// let newArr2d = arr8.flat(Infinity); // this will return 1d array
console.log(newArr2d); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ] ]

let arr9 = [1,2,3,4,5];
console.log(Array.isArray(arr9)); // true

// not generally used
let arr10 = new Array(1,2,3,4,5);
// let arr10 = new Array(10); 
console.log(arr10); // [ 1, 2, 3, 4, 5 ]
// console.log(arr10); // [ <10 empty items> ]

// In JavaScript, arrays are objects and do not have continuous memory allocation. 
// This is because JavaScript is a dynamically-typed language and arrays can hold elements of different data types.
// The "typeof" operator can be used to verify that an array is an object.
let arr11 = [1,2,"hello",4,5];
console.log(arr11); // [ 1, 2, 'hello', 4, 5 ]
console.log(typeof arr11); // object













































































