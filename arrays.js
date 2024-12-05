// new Array()
// new Array(element1)
// new Array(element1, element2)
// new Array(element1, element2, /* …, */ elementN)
// new Array(arrayLength)

// Array()
// Array(element1)
// Array(element1, element2)
// Array(element1, element2, /* …, */ elementN)
// Array(arrayLength)



//  ** Static Methods **

// --> The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)
// console.log(Array.from('tarun'));
// console.log(Array.from([1, 2, 3], (x) => x + 5));



// --> The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

// console.log(Array.of('foo', 2, 'bar', true));
// Expected output: Array ["foo", 2, "bar", true]
// console.log(Array.of());
// Expected output: Array []



// --> The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

const array1 = [5, 12, 8, 130, 44];
let index = 2;
// console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;
// console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"
const atArr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr.at(5));



const animal = ["cow", "dog", "goat", "dear"];
const heroes = ["spiderman", "batman", "jonhy sins"];
const spread = [...animal, ...heroes]
// console.log(spread);


// --> The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const concatArr = animal.concat(heroes);
// console.log(concatArr);



// --> The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// We only impliment Conditions here.

// every(callbackFn)
// every(callbackFn, thisArg)

const arrEvery = [1, 56, 26, 50, 76, 6];
// console.log(arrEvery.every( ( value ) => value < 100 )); // Returns true



// --> The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

// fill(value)
// fill(value, start)
// fill(value, start, end)

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Fill with 0 from position 2 until position 4
// console.log(array2.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]
// Fill with 5 from position 1
// console.log(array2.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]
// console.log(array2.fill(6));
// Expected output: Array [6, 6, 6, 6]

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(array3.fill("Hello", 3, 6));



// --> The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// filter(callbackFn)
// filter(callbackFn, thisArg)

// const words = ["Sparky", "Gaint", "Firecracker", "Log", "Arrows", "Inferno"];
// console.log(words.filter( (word) => word.length <= 6 ));




// --> The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// find(callbackFn)
// find(callbackFn, thisArg)

// It only returns first value
const arrFind = [1, 45, 6969, 2, 8, 56, 904, 43, 56];
// console.log(arrFind.find( (num) => num > 100 ));



// --> The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)

const arrFindIndex = [1, 56, 34, 10, 73, 82];
// console.log(arrFindIndex.findIndex( (num) => num > 5 && num < 20 ));



// --> The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

// findLast(callbackFn)
// findLast(callbackFn, thisArg)

// Starts to find from last of the array
const array4 = [5, 12, 50, 130, 44];
const found = array1.findLast((element) => element > 45);
// console.log(found);



// --> The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// findLastIndex(callbackFn)
// findLastIndex(callbackFn, thisArg)

const array5 = [5, 12, 50, 130, 44];
const isLargeNumber = (element) => element > 45;
// console.log(array5.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130




// --> The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// flat()
// flat(depth)

const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]
const arr2 = [0, 1, [2, [3, [4, 5]]]];
// console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]
// console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]
// console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]




// --> The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

// flatMap(callbackFn)
// flatMap(callbackFn, thisArg)

const arrFlatMap = [1, 2, 1];
const result = arrFlatMap.flatMap((num) => (num === 2 ? 69 : 1));
// console.log(result);
// Expected output: Array [1, 2, 2, 1]




// --> The forEach() method of Array instances executes a provided function once for each array element

// forEach(callbackFn)
// forEach(callbackFn, thisArg)

const arrForEach = ['a', 'b', 'c'];
// arrForEach.forEach((element) => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

const arrForEach2 = [1, 2, 3];
// arrForEach2.forEach(( element) => console.log(element + 1));




// --> The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate

// includes(searchElement)
// includes(searchElement, fromIndex)

const arrIncludes = [1, 2, 3];
// console.log(arrIncludes.includes(1));
// Expected output: true
const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));
// Expected output: true
// console.log(pets.includes('goat'));
// Expected output: false

const example = ["cat", "dog", "bat", "goat", "bear"]
// console.log(example.includes("dog", 2));




// --> The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

// indexOf(searchElement)
// indexOf(searchElement, fromIndex)

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// Expected output: 1
// Start from index 2
// console.log(beasts.indexOf('bison', 2));
// Expected output: 4
// console.log(beasts.indexOf('giraffe'));
// Expected output: -1




// --> The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

// join()
// join(separator)

const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// Expected output: "Fire,Air,Water"
// console.log(elements.join(''));
// Expected output: "FireAirWater"
// console.log(elements.join(' - '));
// Expected output: "Fire - Air - Water"




// --> The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// lastIndexOf(searchElement)
// lastIndexOf(searchElement, fromIndex)

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3
// console.log(animals.lastIndexOf('Tiger'));
// Expected output: 1
// console.log(animals.lastIndexOf('dog')); // Output: -1




// --> The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

// map(callbackFn)
// map(callbackFn, thisArg)

const arrMap = [2, 4, 6, 8, 10, 12];
// console.log(arrMap.map( (num) => num * 2 ));




// --> The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

// push()
// push(element1)
// push(element1, element2)
// push(element1, element2, /* …, */ elementN)

const animalsPush = ['pigs', 'goats', 'sheep'];

const count = animalsPush.push('cows');
// console.log(count);
// Expected output: 4
// console.log(animalsPush);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

// animalsPush.push('chickens', 'cats', 'dogs');
// console.log(animalsPush);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]





// --> The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

// pop()

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// console.log(plants.pop());
// Expected output: "tomato"
// console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
// plants.pop();
// console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]




// --> The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

// reverse()

const arrayRev = ['one', 'two', 'three'];
// console.log('array:', arrayRev);
// Expected output: "arrayRev:" Array ["one", "two", "three"]
const reversed = arrayRev.reverse();
// console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]
// Careful: reverse is destructive -- it changes the original array.
// console.log('array:', arrayRev);
// Expected output: "arrayRev:" Array ["three", "two", "one"]





// --> The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

// shift()

const myFish = ["angel", "clown", "mandarin", "surgeon"];

// console.log("myFish before:", myFish);
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();

// console.log("myFish after:", myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']
// console.log("Removed this element:", shifted);
// Removed this element: angel




// --> The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.

// unshift()
// unshift(element1)
// unshift(element1, element2)
// unshift(element1, element2, /* …, */ elementN)

const arrayUnshift = [1, 2, 3];

console.log(arrayUnshift.unshift(4, 5));
// Expected output: 5
console.log(arrayUnshift);
// Expected output: Array [4, 5, 1, 2, 3]




// --> The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// slice()
// slice(start)
// slice(start, end)

const animalSlice = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animalSlice.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
// console.log(animalSlice.slice(2, 4));
// Expected output: Array ["camel", "duck"]
// console.log(animalSlice.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]
// console.log(animalSlice.slice(-2));
// Expected output: Array ["duck", "elephant"]
// console.log(animalSlice.slice(2, -1));
// Expected output: Array ["camel", "duck"]
// console.log(animalSlice.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//  0     1     2     3     4
//  |     |     |     |     |     |
//  |  S  |  L  |  I  |  C  |  E  |
//  |     |     |     |     |     |
//    -5    -4    -3    -2    -1





// --> The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// some(callbackFn)
// some(callbackFn, thisArg)

function isBiggerThan10(element, index, array) {
    return element > 10;
}
// console.log([2, 5, 8, 1, 4].some(isBiggerThan10)); // false
// console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); // true




// --> The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

// sort()
// sort(compareFn)

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
// console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const arraySort = [1, 30, 4, 21, 100000];
arraySort.sort();
// console.log(arraySort);
// Expected output: Array [1, 100000, 21, 30, 4]




// --> The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

const monthsSplice = ["Jan", "Feb", "March", "April", "May", "June"];

// monthsSplice.splice(1, 2, "I am Here")
// console.log(monthsSplice);
