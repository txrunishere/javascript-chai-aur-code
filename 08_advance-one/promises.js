// Promise is an Object

// First way to write a promise

const promiseOne = new Promise(function (resolve, reject) {
  // Promise Do an async task
  // and used in DB calls, cryptography, network

  setTimeout(function () {
    // console.log("I am Inside Promise");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  // console.log("I am outside the Promise");
});

// We also write it like this

new Promise((res, rej) => {
  setTimeout(() => {
    // console.log("I am Here!!");
    res();
  }, 1000);
}).then(() => {
  // console.log("I am Here too!!");
});

// How to use data which pass in promise

const promiseThree = new Promise((res, rej) => {
  setTimeout(() => {
    res({
      username: "Tarun",
      age: 17,
    });
  }, 3000);
});

promiseThree.then((user) => {
  //   console.log(user);
});

// Promise with an error

const promiseError = new Promise((res, rej) => {
  setTimeout(() => {
    let err = false;
    if (!err) {
      res({
        username: "Tarun",
        age: 17,
      });
    } else {
      rej("ERROR: Something went Wrong!!!");
    }
  }, 1000);
});

// promiseError
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("The Promise is either resolved or reject");
//   });

// Handle Promise with Async and Await

// const promiseFive = new Promise((res, rej) => {
//   setTimeout(() => {
//     let err = true;
//     if (!err) {
//       res({
//         username: "Deepak",
//         age: 17,
//       });
//     } else {
//       rej("ERROR: user not found!!!");
//     }
//   }, 1000);
// });

// async function promiseFiveAsync() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// promiseFiveAsync();

// Use of Promise in fetch

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://api.github.com/users/txrunishere");
//     // console.log(response);
//     const data = await response.json(); // It also takes time to fetch value so we use await here also
//     console.log(data);
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// }

// getAllUsers();


// Above fetch code using then and catch

fetch('https://api.github.com/users/txrunishere')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));