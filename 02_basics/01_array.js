// Array

const myArr = [0, 1, 2, 3, 4, 5]; // => Indexing of an array is starts from 0. If we change in an array then it do shallow copies (change directly in the reference) rather than deep copies (not change directly in references)

// console.log(myArr);
// console.log(typeof myArr); // => array has type of Object

const myArr2 = new Array("hwllo", "world", "ironman", "spiderman"); // We also declare array like this

// console.log(myArr2[2]);


// ----------Array Methods----------

// myArr.push(6); // adds the item at the last of the array
// console.log(myArr);

// myArr.pop(); // It removes the last item from the array
// console.log(myArr);

// myArr.unshift(6);
// console.log(myArr);

// myArr.shift(); // adds the item at the start of the array
// console.log(myArr); // It removes the start item from the array

// console.log(myArr.includes(0)); // Gives a boolean value basis on if given item is in array or not
// console.log(myArr.indexOf(4)); // gives the position of the item 

const newArr = myArr.join(1); // It convert the array into string type and by pass a separator we join the array by it
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


/**
 * *****Important*****
 * Splice & Slice
 */

console.log('A', myArr);

const mya1 = myArr.slice(1, 3); // It takes a start and end number from user and return the sliced postion to the user but it don't change in the original array. It don't include the last item

console.log(mya1);
console.log('B ', myArr);

const mya2 = myArr.splice(1, 4); // Here, we 
console.log(mya2);
console.log('C ', myArr);

console.log(myArr);