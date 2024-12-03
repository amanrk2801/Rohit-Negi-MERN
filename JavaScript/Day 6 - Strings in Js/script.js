// primitive data type
const num = 10;
// num = 20; // not allowed
console.log(num); // 10

// non primitive data type
const obj = {
    name:"aman",
    age:27
}
obj.name="monu"; // change allowed for non-primitive data types
console.log(obj); // { name: 'monu', age: 27 }

//** Strings **//
let name = "Aman";
let str1 = "Hello " + name + " how are you?";
let str2 = 'Hello ' + name + ' how are you?';
let str3 = `Hello ${name} how are you?`;
console.log(str1);
console.log(str2);
console.log(str3); // Hello Aman how are you?

// Methods
console.log(str1.length); // 23
console.log('"hello"'); // "hello"
let greet = "Aman \nhow are you"

// escape character \
let greet1 = "Aman \\nhow are you"
console.log(greet);
console.log(greet1); // Aman \nhow are you

let special = "Pushpak";
console.log(special[0]); // P
console.log(special.charAt(3)); // h

console.log(special.toLowerCase()); // pushpak
console.log(special.toUpperCase()); // PUSHPAK
console.log(special); // Pushpak 

let hero = "Hello Coder Army Coder";
console.log(hero.indexOf("Coder")); // 6
console.log(hero.lastIndexOf("Coder")); // 17
console.log(hero.indexOf("coder")); // -1
console.log(hero.includes("Coder")); // true

//               012345678910
let newString = "Hello World";
//                     -4 -1
// slice can take negative index also
console.log(newString.slice(-4,-1)); // orl
// but in substring we can't use negative index
console.log(newString.substring(0,3)); // Hel
console.log(newString.substr(3,5)); // lo Wo

let str4 = "Hello World New World";
console.log(str4.replace("World", "India")); // Hello India New World
console.log(str4.replaceAll("World", "India")); // Hello India New India

let str5 = "Money! honey! makes! happy";
console.log(str5.split("! ")); // [ 'Money', 'honey', 'makes', 'happy' ]

let str6 = "      Hello World     ";
console.log(str6);//      Hello World
console.log(str6.trim()); // Hello World

// now string take memory in "Heap Memory"
let str7 = new String("Hello World");
console.log(str7); // [String: 'Hello World']
console.log(typeof str7); // object

 






















 























