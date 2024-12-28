/***************Create Element*****************/ 
function attach(content){
let element = document.createElement("li");
element.innerHTML = content;

const element2 = document.createElement("li");
element2.innerHTML = content+" v2.0";

const parent = document.getElementById("root");
parent.appendChild(element); // this take only one and attach at last
parent.append(element,element2) // this takes multiple and attach at last
};

attach("TS");
attach("React");

/***************Text Node*****************/ 

const element = document.createTextNode("Hello Coder Army");
const parent = document.getElementById("root");
parent.append(element); // text without tag

/***************Attribute Node*****************/ 
// access to first list
const element1 = document.createAttribute("id");
element1.value = "first";

const curr_list = document.querySelector("li")
curr_list.setAttributeNode(element1);

const select1 = document.getElementById("first");
select1.style.backgroundColor = "blue";

// access to second list
const element2 = document.createAttribute("id");
element2.value = "second";

const parent1 = document.getElementById("root");
parent1.children[1].setAttributeNode(element2);

const select2 = document.getElementById("second");
select2.style.backgroundColor = "purple";

/*********Access Attribute of a class***********/ 
const element3 = document.getElementById("root");
element3.setAttribute("custom", "20");
element3.setAttribute("class", "un_list");
element3.removeAttribute("custom");

/*********Add nodes to the DOM***********/ 
const parent2 = document.getElementById("root");
const element4 = document.createElement("li");
element4.innerHTML = "Aman Google SDE";

// parent2.prepend(element4); // append to the top of list
// parent2.append(element4); // append last of the list

const child2 = parent2.children[1];
// parent2.insertBefore(element4, child2); // append at second index list

// parent2.replaceChild(element4,child2); // this will replace with the current html list

parent2.innerHTML += "<li>Lifetime</li>"

const element5 = document.createElement("div");
element5.innerHTML = "Hello, India";

parent2.insertAdjacentElement("beforebegin", element5);
parent2.insertAdjacentElement("afterbegin", element5);
parent2.insertAdjacentElement("beforeend", element5);
parent2.insertAdjacentElement("afterend", element5);

/*******Delete node or element**********/
document.querySelector("li").remove();








