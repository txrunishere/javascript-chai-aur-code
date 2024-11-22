const heroes = ["shaktiman", "ironman", "spiderman"];
const characters = ["mario", "jett", "nzaru"];

// heroes.push(characters);

// console.log(heroes);
// console.log(heroes[3][1]); // Here 3 represents the characters array and 1 represents the item on 1st index which is 'jett'

const allArr = heroes.concat(characters); // It conbimes the two array 
// console.log(allArr);

// Spread (Important)

const spread = [...heroes, ...characters]; // It spread the array in individual items and print it. Used in CRUD operations also.
// console.log(spread);

let nestedArr = [1, 2, 3, [4, 5, 6], 7, [1, 2, [1, 2, 3, 4]]];
// console.log(nestedArr);

const flatArr = nestedArr.flat(Infinity); // Here we pass a digit for how much arrays we go inside., like here above there are max 3 array, but we also use Infinity
// console.log(flatArr);

// console.log(Array.isArray(heroes)); // it gives a boolean result from which we identify the given value is array or not

// console.log(Array.from("tarun"));

// console.log(Array.from( { name: "tarun" } )); // Important according to interviewss

let count1 = 123;
let count2 = 875;
let count3 = 642;

console.log(Array.of(count1, count2, count3)); // It makes a array of given variables