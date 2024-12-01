// Object Literal

// const user = {
//     username: "Tarun",
//     age: 17,
//     signedIn: true
// }

// console.log(user);
// console.log(user.username);


function user(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`User ${this.username}`);
    }

    return this;
}

// const firstUser = user("Tarun", 7, true);
// const secondUser = user("Deepak", 0, false); // Here we can't log the second user but it overwrite the value of user
// console.log(firstUser);


const firstUser = new user("Tarun", 7, true);
const secondUser = new user("Deepak", 0, false); // It gives a new interense (type of copy). IT don't overwrite the value of user function
console.log(firstUser);
console.log(firstUser.greeting());
console.log(secondUser);
// Here, new keyword create a new empty Object (interense) which calls a constructor function due to new keyboard



// function user2(username, age, signedIn) {
//     username = username;
//     age = age;
//     signedIn = signedIn

//     return `${username} is ${age} years old and signin status was ${signedIn}` 
// }
// const myUser = user2("Tarun", 17, true);
// console.log(myUser);


// Note: JS has a prototypel behaviour