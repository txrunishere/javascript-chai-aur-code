const name = new String('tarun-here-com');

// console.log(name[0]);  // ==> Print the 0th index of the variable name which is 'T'

// console.log(name.__proto__); // ==> To Print the Prototype of variable

// console.log(name.length);  // ==> To Print the length of variable

// console.log(name.toUpperCase()); // Here, toUpperCase() is a function which change to char to uppercase, so here we execute it like a function. But it don't change the original the offcial value because of the stack concept.

// console.log(name.charAt(2)); // ==> It is also  a function which give us the value to the given index

// console.log(name.indexOf('r')); // ==> give tells us the given alphabet is on which index

// const newString = name.substring(0, 5); // It breakes the value and gives it as your input
// console.log(newString);

// const anotherString = name.slice(-8, 4); // We can also pass negative values here.
// console.log(anotherString);

// let exName = "    deepak    ";
// console.log(exName);
// console.log(exName.trim());  // It removes the extra space before or end of a value
// console.log(exName.trimEnd());
// console.log(exName.trimStart().length);
// console.log(exName.length);

// const url = "https://google.com/email69@google.com";
// console.log(url.replace('69@', '-')); // ==> It replace a part of the value according to you.

// console.log(url.includes('google'));  // ==> It gives response in true or false 

// console.log(name.split("-")); // It splits up the value and make a array of it.

console.log(name.at(4)); // It tells us at what index is which alphabet
