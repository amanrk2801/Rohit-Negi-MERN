// Promises

const Promises = fetch(
  `http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`
);
console.log(Promises); // Logs "Promise { <pending> }" because 'fetch' is asynchronous and immediately returns a Promise. The Promise is still pending when logged, as 'console.log' does not wait for it to resolve.

// setTimeout(()=>{
//     console.log(Promises);
// },2000)

// Promises.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })

// Promises state
// 1. pending | 2. resolve | 3. reject

// Promises.then((response)=>{
//     const Promise = response.json();
//     Promise.then((data)=>{
//         console.log(data);
//     })
// }).catch((error)=>{
//     console.log(error);
// })

// Promises.then((response) => {
//   const Promise = response.json();
//   Promise.then((data) => {
//     console.log(data);
//   });
// }).catch((error) => {
//   console.log(error);
// });

// Promise chaining
// Promises.then((response) => {
//   return response.json();
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Short-Hand 
fetch(
  `http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


