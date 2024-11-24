const user = {
  userName: "Tarun",
  age: 17,
  userLoggedin: function () {
    console.log(`${this.userName}, Welcome To Website`);
    // console.log(`${user.userName}, Welcome To Website`);
    console.log(this); // It returns the current context
  },
};

// user.userLoggedin();
// user.userName = "Deepak"
// user.userLoggedin();

// console.log(this); // It returns a empty object

// function coffee() {
//   let userName = "deepak";
//   console.log(this.userName); // Returns a vlaue undefined
//   console.log(this); // returns a full global object
// }
// coffee();



// ++++++++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++++++++

// Normal Arrow function
const addNumber = (num1, num2) => {
  return num1 + num2;
};

// console.log(addNumber(69, 1));


// Implicit return
// const addTwo = (n1, n2) => n1 + n2; // Takes statement of only one line
// const addTwo = (n1, n2) => (n1 + n2); // We also write it also like this
// If we use curly brackets here code don't work we use return then..

const addTwo = (n1, n2) => ({name: "tarun", age: 17}) // If we want to use a object in a implicit return then we use brackets over the object.

// console.log(addTwo(66, 3));
console.log(addTwo());