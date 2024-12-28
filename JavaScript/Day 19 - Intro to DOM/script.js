// DOM: Document Object Model
// The DOM is a programming interface for web documents.
// When a web page is loaded in a browser, the HTML document is parsed and converted into a tree-like structure called the DOM tree.
// This tree structure represents the HTML elements as objects, along with their properties and methods.
// Through the DOM, JavaScript can access and manipulate the structure, style, and content of the web page dynamically.

// Key Features of the DOM:
// - **Dynamic Content Manipulation**: You can add, modify, or remove elements and their attributes in real time.
// - **Event Handling**: The DOM allows you to add event listeners to elements (e.g., clicks, key presses, etc.).
// - **Cross-Language**: The DOM is language-independent, meaning any language that can run in a browser can interact with it, though JavaScript is the most commonly used.

// Example of DOM Manipulation:

console.dir(document); // shows all the document internal in browser console 

// 1. Accessing an element 
// i. by ID - This section demonstrates how to access an element in the DOM by its unique ID.
let header = document.getElementById('first');
console.log(header); // Logs the element with ID "header"

// ii. by class name : getElementsByClassName returns a collection
let headers = document.getElementsByClassName('header1');
console.log(headers); // Logs the collection of elements with class "header1"
for (let i = 0; i < headers.length; i++) {
    headers[i].textContent = "Topics";
}

// 2. Changing the content of an element
header.textContent = "Welcome to the DOM!"; // Updates the text content of the header element

// 3. Adding a new element to the DOM
let newElement = document.createElement('p'); // Creates a new <p> element
newElement.textContent = "This is a new paragraph added to the DOM."; // Sets the text content
document.body.appendChild(newElement); // Appends the new element to the body

// 4. Modifying styles dynamically
header.style.color = "blue"; // Changes the text color of the header element
header.style.fontSize = "24px"; // Adjusts the font size

// 5. Adding an event listener
header.addEventListener('click', function() {
    alert("Header clicked!"); // Shows an alert when the header is clicked
});

// 6. Removing an element from the DOM
document.body.removeChild(newElement); // Removes the paragraph element from the body
