// Callback function : A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
function callbackFunction(name) {
  console.log(`Hello ${name}`);
}

function greet(callback) {
  const name = "JavaScript";
  callback(name);
}

greet(callbackFunction); 

console.log("--------------------------------------------------");

function fetchData(cb) {
  console.log("fetching data from server");

}

const setIntervalId = setInterval(fetchData, 300);
setTimeout(() => {
  clearInterval(setIntervalId);
}, 1000);

