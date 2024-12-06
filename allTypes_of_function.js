// TERMINOLOGIES

/**
 * Functions & Methods
 * Declaration & Defination
 * Arguments & Parameters
 * Callback & Higher Order Function (HOD) 
 */


// Declaration of Functions
// without expression
function hello() {
    console.log("Hello World");
}
// hello();



// function with parameters

//                parameters
function printParam(params) {
    console.log(params);
}

//             arguments
// printParam("I am Parameter");



// function with expression
const expressionFunc = function(a, b) {
    console.log(a + b);
}
// expressionFunc(2, 3);





// +-+-+-+-+-+-+ return from a function +-+-+-+-+-+-+

function sum(a, b) {
    return a + b;
}
// sum(2, 2); // returns nothing
// const addition = sum(5, 5);
// console.log(addition);



// +-+-+-+- Default Parameters in Function +-+-+-+-

function defFunc(a = 0, b = 0) {
    return (2 * (a + b));
}
// let defFuncVar = defFunc(2, 2);
// let defFuncVar = defFunc(2); // Before Default Params returns NaN
// let defFuncVar = defFunc(2); // After Default Params returns actual value
// console.log(defFuncVar);




// ++++++++++++++++ Rest Parameters ++++++++++++++++
// we have only one rest parameter in one function
// we make last parameter to rest parameter not to first one

function animals(x, ...y) {
    console.log(x);
    console.log(y);
}

// animals("dog", "goat", "cat", "bear", "sheep");
// here 'dog' goes in x parameter and rest arguments goes in y




// ++++++++++ Arrow Function +++++++++++

const arrowFunc = (x, y) => {
    return x + y;
}
// console.log(arrowFunc(2, 2));


// Make that one liner code more simpler
const add = (a, b) => a + b;
// console.log(add(2, 2));

// But, if we have only one parameter we don't need to use brackets we simply write

const onePrint = x => x;
// console.log(onePrint("Hellow"));




// ----------------- Nested Function -----------------

function outerFunc () {
    console.log("Hi, i am outer function");
    function innerFunc() {
        console.log("Hi, i am inner function");    
    }
    innerFunc();
}
// outerFunc();
// Here, outer function execute first then inner function execute





// example of callback function

function foo(bar) {
    bar();
}

// foo(function () {
//     console.log("BAR");
// });
// Here, the function which is in the argument of the foo function is a anonymous function






// Higher Order Function (HOF)

// 1. It takes one or more functions as argument
// 2. It may return a function

function returnFn() {
    return function () {
        console.log("returning");
    }
}

const fn = returnFn()
// console.log(fn());





// +++++ Recursion +++++

const funcABC = function bar() {
    bar();
}

// real use of recursion

function fetchWater(count) {
    if (count === 0) {
        console.log("No more water left!!");
        return;
    }
    console.log("Fetching Water...");
    fetchWater(count - 1);
}

// fetchWater(3);



// for (let i = 5; i >= 0; i--) {
//     if (i === 0) {
//         console.log("No more water left");
//         return;
//     }
//     console.log('Fetching Water...');
// }