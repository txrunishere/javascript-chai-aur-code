// for-of loop with array

const arrValue = [1, 2, 3, 4, 5];

for (const value of arrValue) {
    // console.log(value);
}

// Here we don't need to give any condition or increment/decrement

//---------------------------------------------------------------------------

// We also use it with single string values

const str = "Hello JII !!";
for (const word of str) {
    if (word == " ") {
        continue;
    }
    //console.log(`Single char is ${word}`);
}

//------------------------------------------------------------------------------------

// for-in loop (use with objects)

// const myObject = {
//     tiger: "Sherrrr",
//     goat: "bakri",
//     bear: "bhaluu",
//     cheetah: "cheetaaa"
// }

// for (const key in myObject) {
//     // console.log(key);
//     // console.log(myObject[key]);
//     console.log(`Desi name of ${key} was ${myObject[key]}`);
// }


// -++-++-++-++-++-++-++-++-++-++- Map -++-++-++-++-++-++-++-++-++-++-


// The Map object holds key-value pair and remembers the original insertion order of the keys

const map1 = new Map();

// To set key and value in a map object we use map.set. like.,
map1.set("a", 1);
map1.set("b", 69);
map1.set("c", 66);

// console.log(map1);

// To see the value of a key we use map.get here.,
// console.log(map1.get('a'));
// console.log(map1.get('b'));
// console.log(map1.get('c'));


// To change the value in a key we use set again on the key in which we want to change the value

// map1.set('a', 97);
// console.log(map1.get('a'));

// console.log(map1);


// To get the number how much key value pairs were exist in the map so we use it.,
// console.log(map1.size);


// If we delete a pair in map we use delete function.,
// map1.delete('c');
// console.log(map1);


// Map with for-of loop

for (const [key, value] of map1) {
    // console.log(map);
}