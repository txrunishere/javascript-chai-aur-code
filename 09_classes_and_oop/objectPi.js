const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);
// console.log(Math.PI);


// We create a Obj to change its properties using descriptor
const user = {
    name: "Aaryan",
    age: 20,
    workFromHome: true,
    userOnline: function () {
        console.log(true);
    }
}

// console.log(user);
// console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "name", {
    // value: "Tarun",
    // writable: false,
    enumerable: false, // It only work on name value of the object
});

// Object.defineProperty(user, "age", {
//     enumerable: false,
// });

// user.name = "Deepak"

// console.log(Object.getOwnPropertyDescriptor(user, "name"));


// use of for of loop to direct access user object
for (const [key, value] of Object.entries(user)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}