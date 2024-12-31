// A callback is a function that is passed as an argument to another function
// and is executed after the completion of that function.

// We use callbacks to handle asynchronous operations, such as API calls or database queries,
// allowing our program to continue executing other tasks while waiting for the operation to complete.

// Example:
function fetchData(callback){
    setTimeout(()=>{
        console.log("Data fetched successfully.");
        const user = {
            name: "Aman",
            age: 27,
            city: "Gondia",
        }
        callback(user);
    },2000)
}

function editName(user){
    console.log(`Edit your name: ${user.name}`);
}

function editAge(user){
    console.log(`Edit your age: ${user.age}`);
}

function editCity(user){
    console.log(`Edit your city: ${user.city}`);
}

fetchData(editName); // Edit your name: Aman
fetchData(editAge); // Edit your age: 27
fetchData(editCity); // Edit your city: Gondia

