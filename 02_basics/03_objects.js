/**
 * Literal 
 * Constructor
 * Singleton
 */

// Object.create  // Constructor Method (Singleton)

// +++++++++++ Object Literals +++++++++++

const symbol = Symbol("token");

const user = {
    userName: "Tarun",
    "full name": "Tarun Soni",
    age: 17,
    [symbol]: "key123",
    email: "tarun@gmail.com",
    days: [1, 2, 3, 4, 5, 6, 7]
}

// console.log(user.userName); // from this way we don't access value of full name
// console.log(user["email"]); // Good way to access the value
// console.log(user["full name"]);
// console.log(typeof user[symbol]);

user.email = "tarun123@gmail.com" // To directly change the value of a key

// Object.freeze(user); // It freeze the object, so we can't change any value of a key
user.userName = "Deepak"; // Here name don't change because of frreze
// console.log(user);

user.callBack = function(){
    console.log(`Hello user ji`);
}
user.callBackTwo = function(){
    console.log(`Hello, ${this.name}`);
}

console.log(user.callBack); // this log returns a anonymous function
console.log(user.callBack());
console.log(user.callBackTwo());