const header = document.querySelector("#first");
// header.innerHTML = "Hello, world!";

// querySelector give u the first element which have the .header2 class
// and when we want all than we use
// querySelectorAll gives u NodeList which have same .header2 class
const ul = document.querySelector(".header2");
// ul.style.backgroundColor = "pink";

// ulist gives u node list to iterate we use this
const ulist = document.querySelectorAll(".header2");
// 1. forEach Iteration
// ulist.forEach((val)=>{
//     val.style.color = "red";
// })

// 2. for..of Iteration
// for(let val of ulist)
//     val.style.color = "red";

// 3. for loop Iteration
// for (let i = 0; i < ulist.length; i++) {
//     ulist[i].style.color = "red";
// }

// Convert NodeList into Array then for loop iteration
let arr = Array.from(ulist);
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.style.color = "green";
} 

// let obj = document.querySelector('ul li'); // <li>HTML</li>
// let obj = document.querySelectorAll('ul li'); // NodeList(3) [li, li, li]

let list = document.getElementsByTagName("li");
// Iterate through loop
// 1. for loop
for (let i = 0; i < list.length; i++) {
    const element = list[i];
    element.style.color = "black";
}

// 2. first convert to Array then loop with forEach
let listArr = Array.from(list);
listArr.forEach(element => {
    element.style.color = "green";
});

// 3. for of
for (const element of list) {
    element.style.color = "purple"
}


const li = document.querySelector("li");
console.log(li.parentElement); // ul#third.header2
console.log(li.parentNode); // ul#third.header2

const parent = document.querySelector("ul");
console.log(parent); // ul#third.header2
console.log(parent.childNodes); // NodeList(7) [text, li, text, li, text, li, text] : here text is the space counting
console.log(parent.children); // HTMLCollection(3) [li, li, li]
console.log(parent.firstChild); // #text : means space in the list remove space and see we get <li style="color: purple;">HTML</li>
console.log(parent.firstElementChild); // <li style="color: purple;">HTML</li>

console.log(parent.nextSibling);
console.log(parent.previousSibling);
console.log(parent.nextElementSibling); // <h3>Hello</h3>
console.log(parent.previousElementSibling); // <h2 id="second" class="header1">Topics Covered so far</h2>

let iH = document.getElementById("first").innerHTML;
console.log(`innerHTML: ${iH}`); // Output: innerHTML: Hello Coder <strong style="display: none;">Army</strong>
let tC = document.getElementById("first").textContent;
console.log(`textContent: ${tC}`); // Output: textContent: Hello Coder Army
let iT = document.getElementById("first").innerText;
console.log(`innerText: ${iT}`); // Output: innerText: Hello Coder





































