// const a = new String("Hello world"); // a === "Hello world" is false
// const b = String("Hello world"); // b === "Hello world" is true
// a instanceof String; // is true
// b instanceof String; // is false
// typeof a; // "object"
// typeof b; // "string"

const myName = String("Tarun");
const myNameTwo = "Tarun";
// console.log("Value of myName is:", myName);
// console.log("Type of myName is:", typeof myName);
// console.log(myName[0]);
// console.log(myName.__proto__); // It returns a empty Object

// for (let i = 0; i < myName.length; i++) {
//     console.log(`${i} value of myName is ${myName[i]}`);
// }

const newName = new String("My Name is Tarun"); // This style of define a string is display that newName is a String. It make a Object
// console.log("Value of newName is:", newName);
// console.log("Type od newName is:", typeof newName);
// console.log(newName.__proto__); // It returns a empty Object
// console.log(newName.length);
// console.log(newName.toUpperCase()); // it prints the all character to upper case
// console.log(newName.toLowerCase()); // it prints the all character to lower case
// console.log(myName.charAt(3)); // Prints the value of given palce
// console.log(myName.indexOf("ar")); // finds and prints the index of the given character
// console.log(myName.substring(1, 3)); // It returns 'ar'
// console.log(myName.slice(1, 3));

let exName = "             Deepak";
// console.log(exName);
// console.log(exName.length);
// console.log(exName.trim());
// console.log(exName.trim().length);

let url = "tarun69@gmail.com";
// console.log(url.replace('69', '-'));
// console.log(url.includes('gmail'));
// console.log(url.includes('google'));
// console.log(url.at(4));

// console.log(url.split("a")); // It spreads the string on the basis of a latter means where 'a' latter exists it break a index of array
// console.log(newName.split(" "));
// console.log(newName.split(""));

const sym = Symbol("example");
// console.log(sym);
// console.log(typeof sym);
// console.log(`${sym}`); // Gives ERROR

const printFromCode = String.fromCharCode(2);
// console.log(printFromCode); // Gives the character exists on that charcode
// for (let i = 1; i <= 200; i++) {
//     console.log(String.fromCharCode(i));
// }

// console.log(String.fromCodePoint(4367));

const str1 = "Hello";
const str2 = "World";
const str3 = "How Are you!!";

// console.log(str1 + ' ' + str2);
// console.log(str1.concat(", ", str2));
// console.log(str1.concat(" ", str2));
// console.log(str1.concat(" ", str2, str3));
// console.log(str1.concat(" ", str2," ", str3));
// console.log(str1.endsWith('o')); // True
// console.log(str1.endsWith('l')); // False

const sentence = "The quick brown fox jumps over the lazy dog.";
// const word = "fox";
const word = "goat";

// console.log(
//   `The word "${word}" ${
//     sentence.includes(word) ? "is" : "is not"
//   } in the sentence`
// );
// Expected output: "The word "fox" is in the sentence"

// console.log("Hello to the World".includes("Hello")); // True
// console.log("Hello to the World".includes("hello")); // False


// const num = 5;
// console.log(
//     `${num < 10 ? "Small Than 10" : "Greater than 10"}`
// );


const paragraph = "I think Ruth's dog is cuter than your dog!"; 
const searchTerm = 'dog';

// console.log(
//   `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
// );
// Expected output: "Index of the last "dog" is 38"


const paragraph2 = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z, a-z]/g;
// console.log(paragraph2.match(para3));


const strOne = 'Breaded Mushrooms';
// console.log(strOne.padEnd(25, '-'));
// Expected output: "Breaded Mushrooms........"
const strTwo = '200';
// console.log(strTwo.padEnd(5, "*"));
// Expected output: "200  "


const strThree = '5';
// console.log(strThree.padStart(5, '0'));
// Expected output: "00005"


const mood = 'Happy! ';
// console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "


const truth = "Kiya Rappers paisa kama pa rahe h";
// console.log(truth.replace("Kiya", "Hn,"));
const para = "I think Ruth's dog is cuter than your dog!";
// console.log(paragraph.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"
// Global flag required when calling replaceAll with regex
const dogRegex = /Dog/gi;
// console.log(paragraph.replaceAll(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"



const str = 'The quick brown fox jumps over the lazy dog.';
// console.log(str.slice(31));
// Expected output: "the lazy dog."
// console.log(str.slice(4, 19));
// Expected output: "quick brown fox"
// console.log(str.slice(-4)); // Here, negative value means count starts from end
// Expected output: "dog."
// console.log(str.slice(-9, -5));
// Expected output: "lazy"


const paraSplit = "The quick brown fox jumps over the lazy dog.";
const logSplit = paraSplit.split(" ", 6); // Here 6 is limit of the returned array
// const logSplit = paraSplit.split(" ");
// split(separator)
// split(separator, limit)
// console.log(logSplit);


const strSubString = "Moniter";
// substring(indexStart)
// substring(indexStart, indexEnd)
// console.log(strSubString.substring(1, 3)); // Expected Value: 'on'
// console.log(strSubString.substring(2)); // Here count starts from 2nd 'n' index and goes to last


const stringObj = new String("footer");
// console.log(stringObj); // It returns [String: 'footer'] this type of value
// console.log(stringObj.toString());
// const numberStr = 69;
// numberStr.toString();
// console.log(typeof numberStr);


const stringValue = new String('foo');
// console.log(stringValue);
// Expected output: String { "foo" }
// console.log(stringValue.valueOf());
// Expected output: "foo"

