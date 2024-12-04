255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)

Number("123"); // returns the number 123
Number("123") === 123; // true
Number("unicorn"); // NaN
Number(undefined); // NaN

// new Number(value)
// Number(value)

const a = new Number("123"); // a === 123 is false
const b = Number("123"); // b === 123 is true
a instanceof Number; // is true
b instanceof Number; // is false
typeof a; // "object"
typeof b; // "number"


// -------------------------------------------------------------------------------

const score = 69;
const scoreTwo = new Number(69);
// console.log(score);
// console.log(scoreTwo);


// console.log(Number.isFinite(5 / 2)); // True
// console.log(Number.isFinite(5 / 0)); // False


function checkInteger(x, y) {
    if (Number.isInteger(y / x)) {
        return "Integer"
    }
    return "Not Integer"
}

/**
 * Example
 * Integer: 2, 547, 324, 789 full numbers without any decimal
 * Non-Integer: 546.34, 22.00 etc.,
 */

// console.log(checkInteger(5, 10)); // return 'Integer' because value comes 2
// console.log(checkInteger(5, 11)); // return "Not Integer" because value comes 2.2


// console.log(Number.parseFloat("89746359grvhnrgvuhnkrgvhnk")); // it seperate the numbers which are at start and returns it 

const numFixed = 69;
// console.log(numFixed.toFixed(20));

const mixValueFixed = "478627597845vnhrirth";
// console.log(parseFloat(mixValueFixed).toFixed(2));

const strFixed = "Hello"
// console.log(strFixed.toLocaleString("hi_IN"));

const numPrecise = 69;
const pointNumber = 0.009;
// console.log(numPrecise.toPrecision(5)); // It add additional number at the end in given value number
// console.log(pointNumber.toPrecision(5));


const numObj = new Number(42);
// console.log(typeof numObj);
// Expected output: "object"
const num = numObj.valueOf();
// console.log(num);
// Expected output: 42
// console.log(typeof num);
// Expected output: "number"



// ------------------------------------ MATH ------------------------------------

// The Math.abs() static method returns the absolute value of a number.
const valueAbs = 4796.47 - 556456476.908467;
const simpleValue = 4796.47 - 556456476.908467;
// console.log(simpleValue);
// console.log(Math.abs(valueAbs)); // It makes the value Positive rather if it is Negative


// The Math.cbrt() static method returns the cube root of a number.
// console.log(Math.cbrt(-1));
// Expected output: -1
// console.log(Math.cbrt(1));
// Expected output: 1
// console.log(Math.cbrt(Infinity));
// Expected output: Infinity
// console.log(Math.cbrt(64));
// Expected output: 4
// console.log(Math.cbrt(1728)); // 12



// The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
// console.log(Math.ceil(0.95));
// Expected output: 1
// console.log(Math.ceil(4));
// Expected output: 4
// console.log(Math.ceil(7.004));
// Expected output: 8
// console.log(Math.ceil(-7.004));
// Expected output: -7

// console.log(Math.ceil(2.0000001));



// The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
// console.log(Math.floor(5.9999999999));



// The Math.fround() static method returns the nearest 32-bit single precision float representation of a number.
// console.log(Math.fround(5.05)); // Output: 5.050000190734863



// The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
// console.log(Math.max(5, 3, 8, 1, 4, 9));
// Expected output: 9
// console.log(Math.max(-1, -3, -2));
// Expected output: -1
const array1 = [5, 3, 8, 1, 4, 9];
// console.log(Math.max(...array1));
// Expected output: 3



// The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
// console.log(Math.min(2, 3, 1));
// Expected output: 1
// console.log(Math.min(-2, -3, -1));
// Expected output: -3
const array2 = [2, 3, 1];
// console.log(Math.min(...array1));
// Expected output: 1


// The Math.pow() static method returns the value of a base raised to a power. That is
// Math.pow(x, y) = x^y

// console.log(Math.pow(7, 3));
// Expected output: 343
// console.log(Math.pow(4, 0.5));
// Expected output: 2
// console.log(Math.pow(7, -2));
// Expected output: 0.02040816326530612
//                  (1/49)
// console.log(Math.pow(-7, 0.5));
// Expected output: NaN



// The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user. 
// console.log(Math.random());

// Use Math.random() with Math.floor to generate a random number between 1 t 10
// console.log(Math.floor(Math.random() * 10 + 1));



// The Math.round() static method returns the value of a number rounded to the nearest integer.

// console.log(Math.round(0.9));
// Expected output: 1
// console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5
// console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// Expected output: -5 -5 -6



// The Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.

// console.log(Math.sign(3));
// Expected output: 1
// console.log(Math.sign(-3));
// Expected output: -1
// console.log(Math.sign(0));
// Expected output: 0
// console.log(Math.sign('-3'));
// Expected output: -1

// Return value
// A number representing the sign of x:

// If x is positive, returns 1.
// If x is negative, returns -1.
// If x is positive zero, returns 0.
// If x is negative zero, returns -0.
// Otherwise, returns NaN.



// The Math.sqrt() static method returns the square root of a number.
// console.log(Math.sqrt(169));



// The Math.trunc() static method returns the integer part of a number by removing any fractional digits.
// console.log(Math.trunc(13.37));
// Expected output: 13
// console.log(Math.trunc(42.84));
// Expected output: 42
// console.log(Math.trunc(0.123));
// Expected output: 0
// console.log(Math.trunc(-0.123));
// Expected output: -0



// ** Static Properties **

// The Math.E static data property represents Euler's number, the base of natural logarithms, e, which is approximately 2.718.
// console.log(Math.E); // Output: 2.718281828459045


// The Math.PI static data property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.
// console.log(Math.PI);


// The Math.SQRT1_2 static data property represents the square root of 1/2, which is approximately 0.707.
// console.log(Math.SQRT1_2);


// The Math.SQRT2 static data property represents the square root of 2, approximately 1.414.
// console.log(Math.SQRT2);