cart = ["pizza","coke","sandwich"];

// function placeOrder(cart , callback){
//     console.log("Talking with Domino's");
    
//     setTimeout(()=>{
//      console.log("Order Placed Succesfully");
//      const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
//      callback(order);
//     },2000)
// }

// function preparingOrder(order , callback){
//     console.log("Pizza preparation started....");

//     setTimeout(()=>{
//         console.log("Pizza preparation Done");
//         const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
//         callback(foodDetails);
//        },5000)
// };

// function pickupOrder(foodDetails,callback){
//     console.log("Reaching restaurant for picking order")

//     setTimeout(()=>{
//         console.log("Order picked up by Delivery Boy");
//         const droplocation = foodDetails.location;
//         callback(droplocation);
//        },3000)
// }

// function deliverOrder(droplocation){
//     console.log("Delivery boy on the way");

//     setTimeout(()=>{
//         console.log("Order Delivered succesfully");
//     },5000)
// }


// placeOrder(cart, callback);
// preparingOrder(order , callback)
// pickupOrder(foodDetails,callback)
// deliverOrder(droplocation)


// placeOrder(cart , (order)=>{
//     preparingOrder(order , (foodDetails)=>{
//         pickupOrder(foodDetails, (droplocation)=>{
//             deliverOrder(droplocation);
//         });
//     })
// });

const cart = ["pizza", "coke", "sandwich"];

// Function to place an order
function placeOrder(cart) {
    console.log("Talking with Domino's");
    
    // Creating a Promise for placing the order
    const pr = new Promise(function (resolve, reject) {
        setTimeout(() => {
            const food_available = true; // Simulating food availability
            
            if (food_available) {
                console.log("Order Placed Successfully");
                const order = { 
                    orderId: 221, 
                    food: cart, 
                    restaurant: "Dominos", 
                    location: "Dwarka" 
                };
                resolve(order); // Resolving the Promise with the order details
            } else {
                reject("Items Out of Stock"); // Rejecting the Promise if items are unavailable
            }
        }, 2000);
    });

    return pr; // Returning the Promise
}

// Function to prepare the order
function preparingOrder(order) {
    console.log("Pizza preparation started...");

    // Creating a Promise for preparing the order
    const pr = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Pizza preparation Done");
            const foodDetails = { 
                token: 12, 
                restaurant: order.restaurant, 
                location: order.location 
            };
            resolve(foodDetails); // Resolving the Promise with food details
        }, 5000);
    });

    return pr; // Returning the Promise
}

// Function to pick up the order
function pickupOrder(foodDetails) {
    console.log("Reaching restaurant for picking order");

    // Creating a Promise for picking up the order
    const pr = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Order picked up by Delivery Boy");
            const droplocation = foodDetails.location;
            resolve(droplocation); // Resolving the Promise with the drop location
        }, 3000);
    });

    return pr; // Returning the Promise
}

// Function to deliver the order
function deliverOrder(droplocation) {
    console.log("Delivery boy on the way");

    // Simulating delivery without returning a Promise, but can be modified to include one
    setTimeout(() => {
        console.log("Order Delivered Successfully");
    }, 5000);
}

// Using the Promise chain to manage the order lifecycle
placeOrder(cart) // Step 1: Place the order
    .then(order => preparingOrder(order)) // Step 2: Prepare the order
    .then(foodDetails => pickupOrder(foodDetails)) // Step 3: Pick up the order
    .then(droplocation => deliverOrder(droplocation)) // Step 4: Deliver the order
    .catch(error => console.log(error)); // Catch and log any errors

// Promise Syntax Reference
// const pr = new Promise(function(resolve, reject) {
    // Asynchronous operation
// });
