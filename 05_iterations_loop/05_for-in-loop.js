// for-in loop (use with objects)

const animalObj = {
  tiger: "Sherrrr",
  goat: "bakri",
  bear: "bhaluu",
  cheetah: "cheetaaa",
};

for (const key in animalObj) {
  // console.log(key); // To get the keys of the object
  // console.log(animalObj[key]); // To get the value of the object
  // console.log(`Desi name of ${key} is ${animalObj[key]}`);
}

// for-in loop with array

const programmingLang = ["js", "html", "css", "jsx", "ejs"];

for (const key in programmingLang) {
//   console.log(key);
//   console.log(programmingLang[key]);
}



// for-in loop with math

const map1 = new Map();

map1.set("a", 1);
map1.set("b", 69);
map1.set("c", 66);

for (const key in map1) {
    // console.log(key);
} 

// It returns nothing because map is not a Iterable 

