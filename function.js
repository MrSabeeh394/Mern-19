// Function
// function declaration
greeting("Sabeeh Ch"); // It can also call before creating a function
function greeting(name) {
    console.log("Hello, " + name);
}
// greeting("Sabeeh Ch");


// function expression
// here result is function name 
const result = function (marks) {
    console.log("You obtained marks = " + marks);
}
result(37); // function call


// Function parameter
function greet(name) { // name is parameter
    console.log("Hello " + name);

}
greet("Sabeeh"); // here sabeeh is argument

//Arrow funtion shorter syntax
const addNum = (a, b) => {
    console.log(a + b);
}
addNum(4, 5);









const obtainMarks = (stdName, stdNumbers) => {
    console.log("Name of student :" + stdName, " & Obtained marks :" + stdNumbers);

}
obtainMarks("Sabeeh", 99);


// arrow function without parameter
const print = () =>
    console.log("Hello world");
print();





// setTimeout(function() {
//     console.log("This is an anonymous function");
// }, 1000);


const add = function (a, b) {
    return a + b;

}
console.log(add(10, 15));


// IIFE stands for Immediately Invoked function expression
(function () {
    console.log("This is IIFE");
})();

//IIFE with parameter
(function (name) {
    console.log("My name : " + name);
})("Sabeeh Chaudhary");



// IIFE with arrow function
(() => {
    console.log("This is IIFE with arrow function ")
})();


// Default parameter:-

function data(name = "Sabeeh", age= 25) {
    console.log("Name :" + name, "Age :" + age);
}
data();










