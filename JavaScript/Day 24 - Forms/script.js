const form = document.querySelector("form");

// Event type
// 1. input
// form.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// 2. change
// form.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

// 3. focus
// form.addEventListener("focus", (e) => {
//   console.log(e.target.value);
// });

// 4. focusin
// form.addEventListener("focusin", (e) => {
//   console.log(e.target.value);
// });

// 5. focusout
// form.addEventListener("focusout", (e) => {
//   console.log(e.target.value);
// });

// 6. blur or focusout
// form.addEventListener("blur", (e) => {
//   console.log(e.target.value);
// });

// 7. click
// form.addEventListener("click", (e) => {
//   console.log("single clicked");
// });

// 8. dblclick
// form.addEventListener("dblclick", (e) => {
//   console.log(e);
// });

// 9. submit
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); // to stop from refresh
//   console.log("Form submitted successfully!");
// });

// 10. reset
// first change in html: <button type="reset">Reset</button>
// form.addEventListener("reset", (e) => {
//   console.log("Form reset successfully!");
// });

// 11. FormData
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   console.log(formData);
// });

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const first = document.getElementById("name"); // Corrected ID
//     console.log(first.value);

//     const second = document.getElementById("email"); // Corrected ID
//     console.log(second.value);

//     const third = document.getElementById("age"); // Corrected ID
//     console.log(third.value);

//     const fourth = document.getElementById("course"); // Corrected ID
//     console.log(fourth.value);

//     const result = document.getElementById("result"); // Corrected ID
//     result.innerHTML = `name: ${first.value}, email: ${second.value}, age: ${third.value}, course: ${fourth.value}.`;

//     document.body.append(result); // This line is not necessary as the result element is already in the HTML
// })

// optimize code with FormData
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const formData = new FormData(form);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
    const result = document.getElementById("result");
    result.innerHTML = `name: ${formData.get("name")}, email: ${formData.get("email")}, age: ${formData.get("age")}, course: ${formData.get("course")}.`;
})

