// const userEmail = "t@run.here";
const userEmail = ""; // Here this empty string is a falsy value

if (userEmail) {
    console.log("User was login in");
} else {
    console.log("User not loggedin");
}


/** +++++++++++++ Falsy Values +++++++++++++
 *  false
 *  0
 *  -0
 *  bigint => 0n   // Note: Here if we declare a bigint and store 0n in it so it is a falsy value
 *  "" => Empty String
 *  null
 *  undefined
 *  NaN => Not a Number
 */

/** ------------- Truthy Values -------------
 *  true
 *  1
 *  "0"
 *  "false"
 *  " "
 *  []
 *  {}
 *  function(){}
 */


// false == 0
// false == ''
// 0 == ''


const array = [];

if (array.length === 0) {
    console.log("Empty Array");
}


const obj = {}

if (Object.keys(obj).length === 0) {
    console.log("Empty Object");
}


// +-+-+-+-+-+-+-+-+-+-+-+-Nullish Coalescing Operator (??)+-+-+-+-+-+-+-+-+-+-+-+-
// Works on null and undefined
// If a value comes from database is null or undefined then it takes the other value  

let num1;
// num1 = 5 ?? 10; 
num1 = undefined ?? 10; // here it prints the second value
// num1 = null ?? 10;

console.log(num1);


// +-+-+-+-+-+-+-+-+-+-+-+- Terniary Operator +-+-+-+-+-+-+-+-+-+-+-+-


// Syntex if terniary operator
condition ? true : false

