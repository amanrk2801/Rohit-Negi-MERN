// Closure example 1
function outerFunction() {
    let outerVariable = "I am the outer variable";
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}
let newFunction = outerFunction();
newFunction();

// Closure example 2
function add(a) {
    return function(b) {
        return a + b;
    }
}
let add5 = add(5);
console.log(add5(2));
