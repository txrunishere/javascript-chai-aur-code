//  *********************Primitive*********************

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

1; const score = 100 // => type: number output: 100
const scoreValue = 100.374 // => type: number, output: 100.374

2; const name = "Tarun"; // ==> type: string

3; const isLoggedIn = false // => type: boolean, output: false

4; const outsideTemp = null // => type: object, output: null

5; let userEmail; // => type: undefined, output: undefined

6; const id = Symbol('123') // type: symbol, output: Symbol(123)
const anotherId = Symbol('123')

// console.log(id === anotherId);  ==> Gives false in output

7; const bigNumber = 345654357665435675409806n // => type: bigint
// const bigNumber = 345654357665435675409806 // => type: number


// *************************Reference (Non primitive)*************************

// Array, Objects, Functions


// Array
const heros = ["shaktiman", "naagraj", "doga"]; // ==>> type: object


// Object
let myObj = {
    name: "Tarun",
    age: 17,
}  // ===> type: Object


// Function
const myFunction = function(){
    console.log("Hello world");
}  // ==> type: function


// Fro Study all types in Detail ===> https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// # MEMORY
// Stack (Primitive), Heap (Non-Primitive)


// Example of Stack MEMORY
let myName = "Tarun";
let anotherName = myName; // ==> It Gives me output Tarun

anotherName = "Deepak"; // Here it repalce the value of anotherName

console.log(myName); // ==> Output: Tarun
console.log(anotherName); // ==> Output: Deepak


// Example of Heap MEMORY
let userOne = {
    name: "Tarun",
    age: 17
}

let userTwo = userOne

// If i change the name in userTwo
userOne.name = "Deepak";
// So, here it changes in both userOne and userTwo

console.log(userOne);
console.log(userTwo);