// const button = document.querySelector("#btn"); // Use ID selector for better performance
// const body = document.querySelector("#body"); // Use ID selector for better performance

/*************Mouse Event*****************/
// 1. click
// 2. dblclick
// 3. mouseover
// 4. mousemove

// button.addEventListener("mousemove", () => {
//     body.style.backgroundColor = "blue"; // Use lowercase for color values
// });

// button.addEventListener("mouseout", () => {
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
// });

// button.addEventListener("click", () => {
//     alert("Hello, how are you?");
// });

/*************Keyboard Event*****************/
// 1. keydown
// 2. keyup

// const header = document.getElementById("header");

// document.addEventListener("keydown", (e) => {
//     if (e.key === 'Enter') {
//         alert("You pressed the Enter key!");
//     }
//     else{
//         console.log(e)
//     }
// });

// document.addEventListener("keyup", () => {
//     alert("You released a key!");
// });

/*************Event Object*****************/
// 1. event
// 2. event.target
// 3. event.type
// 4. event.key
// 5. event.clientX
// 6. event.clientY

// document.addEventListener("click", (event) => {
//     console.log("Event:", event);
//     console.log("Event Target:", event.target);
//     console.log("Event Type:", event.type);
//     console.log("Event Key:", event.key ? event.key : "No key pressed");
//     console.log("Event Client X:", event.clientX);
//     console.log("Event Client Y:", event.clientY);
// });

/*************Calculator*****************/

// const btn = document.querySelector("#add")

// btn.addEventListener("click",()=>{
//     // Read the data
//     const input1 = document.getElementById("first");
//     const number1 = Number(input1.value);
//     const input2 = document.getElementById("second");
//     const number2 = Number(input2.value);

//     if(isNaN(number1) || isNaN(number2))
//         return;

//     // Output the result
//     const result = number1 + number2;
//     const res = document.getElementById("result");
//     res.textContent = "Result: " + result;
// });

/*************Bubble animation*****************/
document.body.addEventListener("click", ()=>{
    const circle = document.createElement("div");
    circle.className = "circle";

    const texts = ["Hello", "Hi", "Hey", "Hola", "Bonjour", "Ciao", "Namaste", "Konnichiwa", "Guten Tag", "Olá"];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    circle.textContent = randomText;
    
    circle.style.textAlign = "center";
    circle.style.lineHeight = "100px";

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left = `${x-50}px`;
    circle.style.top = `${y-50}px`;
    
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "grey", "black", "white"]
    circle.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];

    document.body.appendChild(circle);

    setTimeout(()=>{
        circle.remove();
    }, 5000)
});
 





