interface Person1 {
    name: string,
    age: number,
    gender: string,
    aadhar?: number
}
const p1: Person1 = {
    name: "Rohit",
    age: 20,
    gender: "Male"
}

// Partial = All property becomes optional
interface customer {
    name: string,
    age: number,
    balance: number
}

const c1: Partial<customer> = {
    name: "Rohit",
    balance: 420
}

// Required = All property should be filled
interface customer {
    name: string,
    age: number,
    balance: number
}
const c2: Required<customer> = {
    name: "Rohit",
    age: 20,
    balance: 420,
}

// Readonly = The property can only be read, write option is not available
interface customer {
    name: string,
    age: number,
    balance: number
}
const c3: Readonly<customer> = {
    name: "Rohit",
    age: 20,
    balance: 420,
}
// c3.balance = 1000; // Cannot assign to 'balance' because it is a read-only property.

// *Array of Objects
interface people { name: string, age: number };
interface manager { salary: number, id: string }

const arr: (people | manager)[] = [{ name: "Rohit", age: 20 }, { name: "Aman", age: 21 }, { salary: 420, id: "xyz" }];

// *function in TS
function greet(a: number): number {
    console.log(a); // 10
    return a + 5;
}
console.log(greet(10)); // 15

function meet(msg: string, val: number): void {
    console.log(msg, val);
}
meet("Hello", 123); // Hello 123 

// Default parameter
function print(msg: string = "Hello") {
    console.log(msg);
}
print();

// Optional parameter
function Gate(person?: string) {
    console.log(person || "Mohan");
}
// Gate("Rohit"); // Rohit
Gate(); // Mohan

// Arrow function
const sum = (a: number, b: number): number => {
    return a + b;
}
console.log(sum(3, 4)); // 7

// Callback function
function placeOrder(order: number, Callback: (amount: number) => void): void {
    const amount: number = order + 10;
    Callback(amount);
}
placeOrder(10, (amount: number) => {
    console.log(amount);
});

// Rest parameter
function total(...arr: number[]) {
    let ans: number = 0;
    arr.forEach((val: number) => {
        ans = ans + val;
        console.log(ans);
    });
}
total(1, 2, 3, 4, 5, 6, 7, 8, 9);

// extend keyword
interface human {
    name: string,
    age: number
}
interface Teacher extends human{
    salary: string,
    id: number
}
interface bankEmp extends human {
    salary: string,
    position: string
}
const u1 : Teacher = {
    name: "Rohit",
    age:20,
    salary: "20lakh",
    id: 123,
}

