// if else
let age = 18;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}

console.log("=====================");

// if else if
let date = new Date();
let time = date.getHours();
console.log("time", time);
if (time < 10) {
  console.log("Good Morning");
} else if (time < 18) {
  console.log("Good Afternoon");
} else if (time < 22) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}

console.log("=====================");

// switch case
let day = date.getDay();
console.log("day", day);
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
    break;
}

console.log("=====================");

// loop - for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("=====================");

// nested loop star pattern
for (let i = 0; i < 5; i++) {
  // outer loop
  let row = "";
  for (let j = 0; j < i; j++) {
    // inner loop
    row += "* ";
  }
  console.log(row);
}

console.log("=====================");

// loop - while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

console.log("=====================");

// loop - do while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

console.log("=====================");

// loop - for in
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(key, person[key]);
}

console.log("=====================");

// loop - for of

let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

console.log("=====================");

// loop - forEach
colors.forEach(function (color, index) {
  console.log(index, color);
});

console.log("=====================");

// loop - map
let numbers = [1, 2, 3, 4, 5];
let square = numbers.map(function (number) {
  return number * number;
});

console.log(square);

console.log("=====================");

// loop - filter
let even = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(even);

console.log("=====================");

// loop - reduce

let sum = numbers.reduce(function (total, number) {
  return total + number;
}, 0);

console.log(sum);

console.log("=====================");

// loop - find
let find = numbers.find(function (number) {
  return number > 3;
});

console.log(find);

