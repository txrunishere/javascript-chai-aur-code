let score = "Tarun"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "tarun"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "tarun" => true

let someNumber = "33"

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);  // Addition
// console.log(2-2);  // Subtraction 
// console.log(2*2);  // Multiplication
// console.log(2**3);  // To get the Power
// console.log(2/3);  // Division
// console.log(2%3);  // Modules

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// let str4 = "1" + 2;
// console.log(str4);
// console.log(typeof str4); // Just to check the type of str4

// console.log("1" + 2);
// console.log(1 + "2");

// let str5 = 1 + "2"
// console.log(str5);
// console.log(typeof str5);


// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

let x = 3;
const y = x++;
// console.table([x, y]); // postfix first print then change

let x2 = 3;
const y2 = ++x2;
// console.table([x2, y2]); // prefix first change then print
