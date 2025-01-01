// *While often associated with JavaScript, functions like setTimeout, setInterval, fetch, and objects like console or the DOM (Document Object Model) are not part of the JavaScript language itself. They are provided by the browser environment, which extends JavaScript's core capabilities. These features are part of the Web APIs, which browsers implement to allow JavaScript to interact with the web platform. JavaScript acts as the programming language, while the browser provides the tools to manipulate the page, perform asynchronous operations, and interact with external resources.

// console.log("Hello Coder Army");

// setTimeout(()=>{
//     const a = 2+4;
//     console.log(a);
// },5000);

// let b = 20;
// let arr = [20,30,11];

// for (const i of arr) {
//     console.log(i+b);
// }

//////////////////////////////////////////////

// setTimeout(()=>{
//     const a = 2+4;
//     console.log(a);
// },5000);

// setInterval(()=>{
//     console.log("I am fast");
// },2000);

// let b = 20;
// let arr = [20,30,11];

// for (const i of arr) {
//     console.log(i+b);
// }

////////////////////////////////////////

console.log("I am first");

fetch("https://youtube.com").then((e)=>{
    console.log(e.json);
})
console.log("I am last");

////////////////////////////////////////

// *In JavaScript's event loop, the **microtask queue** has a higher priority than the **callback queue**. Microtasks, such as those created by `Promise` resolutions or `MutationObserver`, are executed immediately after the currently running task completes and before any tasks in the callback queue are processed. In contrast, the callback queue contains tasks like `setTimeout` and `setInterval`, which are executed only after the microtask queue is empty. This prioritization ensures that microtasks can handle critical operations promptly, like resolving promises, before moving on to less urgent callbacks.















///////////////////////////////////////

/*
// Timers
setTimeout(() => console.log("This is from setTimeout"), 1000);
setInterval(() => console.log("This is from setInterval"), 2000);

// DOM Manipulation
const div = document.createElement("div");
div.textContent = "Hello, this is a DOM element!";
document.body.appendChild(div);

// Event Listener
div.addEventListener("click", () => console.log("Div clicked!"));

// Networking API - Fetch
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("Fetched data:", data));

// Local Storage
localStorage.setItem("key", "value");
console.log("Local Storage:", localStorage.getItem("key"));

// Geolocation
navigator.geolocation.getCurrentPosition(
  position => console.log("Your location:", position.coords),
  error => console.error("Error getting location:", error)
);

// Multimedia
const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
audio.play();

// Canvas API
const canvas = document.createElement("canvas");
canvas.width = 200;
canvas.height = 100;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 100, 50);

// Console
console.log("This is a console log.");
console.error("This is a console error.");

// Notifications
if ("Notification" in window && Notification.permission === "granted") {
  new Notification("Hello from the Notification API!");
}

// Performance API
console.log("Current time (ms):", performance.now());

*/