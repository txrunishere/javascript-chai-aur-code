const score = 690;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(typeof balance.toString()); // ==> Converts the value to String
// console.log(balance.toFixed(2)); // ==> give the decimal value according to the fractionDigits we give 

const otherNumber = 24.9888;
// console.log(otherNumber.toPrecision(3)); // ==> It roundoff the value of the digits like if we have number 24.9888, and we pass '3' in precision value so it prints 25.0 

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en')); // ==> This method put comas between the numbers and we see numbers according to the different countries like here i pass 'en' so it print numbers in USA format 
// console.log(hundreds.toLocaleString('en-IN')); // ==> It is same as above but it print numbers in indian format

// ----------------------------MATHS----------------------------

// console.log(Math);
// console.log(Math.abs(-4)); // ==> It converts the negative value to positive only
// console.log(Math.round(3.700)); // ==> roundoff's the given value
// console.log(Math.ceil(4.1)); // ==> it give nearest greater value rather it is 4.1 or 4.9
// console.log(Math.floor(4.1)); // ==> it gives nearest lowest value rather it is 4.1 or 4.9
// console.log(Math.sqrt(5)); // ==> gives square root of the given number  

// console.log(Math.random()); // => Gives a random value between 0 to 1.

// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

const minimum = 10
const maximum = 20

console.log(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum); 