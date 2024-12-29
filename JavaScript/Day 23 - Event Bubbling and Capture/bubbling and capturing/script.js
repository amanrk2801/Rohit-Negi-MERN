const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// syntax 
// addEventListener(first_event: click, mouseover, callback: what to perform, capture: true/false);

// capture = false -> event bubbling
// capture = true -> event capturing

// event bubbling and event capturing

/********event bubbling***************/
// in to out
child.addEventListener("click",()=>{
    console.log("child clicked");
}, false)
parent.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("parent clicked");
}, false)
grandparent.addEventListener("click",()=>{
    console.log("grandparent clicked");
}, false)

/********event capturing***************/
// out to in
// child.addEventListener("click",(e)=>{
//     console.log("child clicked");
//     console.log(e.target);
//     console.log(e.currentTarget);
// }, true)
// parent.addEventListener("click",(e)=>{
//     console.log("parent clicked");
// }, true)
// grandparent.addEventListener("click",()=>{
//     console.log("grandparent clicked");
// }, true)


