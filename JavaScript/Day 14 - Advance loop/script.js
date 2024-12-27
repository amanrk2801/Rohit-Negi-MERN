let obj = {
  name: "Rahul",
  age: 20,
  city: "Delhi",
};

// Using for in loop
for (let key in obj) {
  console.log(`${key} : ${obj[key]}`);
}
// Output:
// name : Rahul
// age : 20
// city : Delhi

console.log('---------------------------------');
let obj1 = Object.create(obj);
obj1.money = 1000;
obj1.car = "BMW";
console.log(obj1); // { money: 1000, car: 'BMW' }
console.log(obj1.name); // Rahul
console.log(obj1.age); // 20

// Using for in loop obj1 have own property and inherited property
for (let key in obj1) {
    console.log(`${key} : ${obj1[key]}`);
  }

console.log('---------------------------------');


