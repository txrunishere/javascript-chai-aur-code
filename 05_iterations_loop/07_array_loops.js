
// Filter in array
// If we use filter method, it return the values and if we want to use it than we store it in a variable
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const numLessFour = nums.filter((num) => num > 4);
// const numLessFour = nums.filter((num) => (num > 4));
const numLessSeven = nums.filter((num) => {
  return num > 7;
});
// console.log(numLessFour);
// console.log(numLessSeven);

// Apply condition in same way from foreach method
const newNums = [];

nums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

// console.log("Numbers which are less than 4 are: ", newNums);


// real use of filter
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// const userBooks = books.filter((book) => book.genre === 'History');
// const userBooks = books.filter((book) => book.publish === 1981);
// console.log(userBooks);

// If we want to check multiple values in filter method then.,

const userBooks = books.filter((book) => {
  return book.publish === 1981 && book.genre === "Fiction";
});

// console.log(userBooks);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numMap = myNums.map((num) => num + 5);
const numMap = myNums.map((num) => {
  return num + 10;
});
// console.log(numMap);

// +++++++++++++++++ Chaining in array function +++++++++++++++++
const chaining = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

// console.log(chaining);

// Reduce

const arrReduce = [1, 2, 3, 4, 5];

// const arrTotal = arrReduce.reduce((accumulator, currentValue) => {
//   console.log(
//     `accumulator is ${accumulator} and currentValue is ${currentValue}`
//   );
//   return accumulator + currentValue;
// }, 0);

const arrTotal = arrReduce.reduce((acc, currVal) => acc + currVal, 0);

// console.log(arrTotal);

const item = [
  {
    itemName: "monitor",
    price: 15599
  },
  {
    itemName: "mouse",
    price: 299
  },
  {
    itemName: "keyboard",
    price: 699
  }
]

const payingBill = item.reduce((acc, item) => acc + item.price, 0);
// console.log(payingBill);