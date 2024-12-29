// const red = document.getElementById("red");
// const blue = document.getElementById("blue");
// const orange = document.getElementById("orange");
// const green = document.getElementById("green");
// const purple = document.getElementById("purple");
// const yellow = document.getElementById("yellow");
// const body = document.body;

// red.addEventListener("click",()=>{
//     body.style.backgroundColor = "red";
// })
// blue.addEventListener("click",()=>{
//     body.style.backgroundColor = "blue";
// })
// orange.addEventListener("click",()=>{
//     body.style.backgroundColor = "orange";
// })
// green.addEventListener("click",()=>{
//     body.style.backgroundColor = "green";
// })
// purple.addEventListener("click",()=>{
//     body.style.backgroundColor = "purple";
// })
// yellow.addEventListener("click",()=>{
//     body.style.backgroundColor = "yellow";
// })

/**********Optimize code******************/
// const buttons = document.querySelectorAll("button");
// const body = document.body;
// buttons.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         body.style.backgroundColor = e.target.id;
//     })
// })

/*Optimize with event bubbling and event capturing*/
// this is also called as event delegation
const root = document.getElementById("root");
root.addEventListener("click", (e) => {
//   console.log(e.target.tagName);
  if (e.target.tagName === "BUTTON") {
    document.body.style.backgroundColor = e.target.id;
  }
//   console.log(e.target.id);
});
