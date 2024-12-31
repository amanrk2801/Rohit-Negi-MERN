//  JS is a single threaded synchronous language:

// 1. JS: Synchronous (one after the other)

// console.log("first");
// console.log("second");
// console.log("third");

// 2. JS : Async TASK (In JavaScript, asynchronous operations don't block the execution of other code)

// console.log("first");

// setTimeout(() => {
//     console.log("second");
// }, 2000);


// console.log("third");

// 3. single threaded: One task will be executed at a time: 

// (Synchronous TASK)

console.log("first");

const timer = Date.now();

// this loop block the thread for 2 second
while(Date.now()-timer<2000){
    // Wait for 2 second
}

console.log('second');

console.log("third");

//* Note: JavaScript is a single-threaded language, but setTimeout is not a part of the JavaScript language itself; it is part of the browser's Web API. This is why asynchronous behavior is possible. With the help of setTimeout, we can simulate asynchronous operations in JavaScript.