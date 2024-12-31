//  call back hell

// Domino's pizza 

// Function to place the order
function placeOrder(callback){ // value inside callback: ()=>{ preparingOrder();}
    // This step initiates the order. It depends on no other step before it.
    console.log("Talking with Domino's");
    
    setTimeout(()=>{
     console.log("Order Placed Successfully");
     callback(); // Calls preparingOrder when the order is placed successfully
    },1000)
}

// Function to prepare the order
function preparingOrder(callback){ // value inside callback: ()=>{ pickupOrder();}
    // This step depends on the successful completion of placeOrder.
    console.log("Pizza preparation started....");

    setTimeout(()=>{
        console.log("Pizza preparation Done");
        callback(); // Calls pickupOrder when the pizza is prepared
       },2000)
};

// Function to pick up the order
function pickupOrder(callback){ // value inside callback: ()=>{ deliverOrder();}
    // This step depends on the successful completion of preparingOrder.
    console.log("Reaching restaurant for picking order")

    setTimeout(()=>{
        console.log("Order picked up by Delivery Boy");
        callback(); // Calls deliverOrder when the order is picked up
       },3000)
}

// Function to deliver the order
function deliverOrder(){
    // This step depends on the successful completion of pickupOrder.
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered successfully");
        // This is the final step and does not call any further functions.
    },4000)
}
// Example of callback hell: functions are nested, leading to a pyramid structure
// The following execution order is:
// 1. placeOrder -> 2. preparingOrder -> 3. pickupOrder -> 4. deliverOrder
// callback hell: function inside function as argument and so on
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    })
});







