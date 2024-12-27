const obj = {
  name: "John",
  age: 30,
  city: "New York",
  Orange: 0,
};

// let curr = "Orange";
let curr = "Apple";
obj.Grapes = 1;
obj["Banana"] = 1;
obj[curr] = 0;

console.log(obj.hasOwnProperty("name")); // true

if (obj.hasOwnProperty(curr)) {
  obj[curr]++;
} else {
  obj[curr] = 1;
}
console.log(obj); // { name: 'John', age: 30, city: 'New York', Orange: 1, Grapes: 1, Banana: 1, Apple: 1 }