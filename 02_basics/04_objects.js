// const snapchat = new Object(); // Singleton Object
const facebook = {} // Non-singleton Object

// console.log(facebook);

facebook.id = "90826347658945"
facebook.name = "tarun"
facebook.isLoggedIn = true

// console.log(facebook);

const user = {
    email: "tarun@gmail.com",
    userName: {
        userFullName: {
            firstName: "tarun",
            lastName: "soni"
        }
    }
}

// console.log(user.userName.userFullName.firstName);
// console.log(facebook);

const obj1 = {1: "spider", 2: "tiger"}
const obj2 = {3: "lion", 4: "bear"}
const obj4 = {5: "snake", 6: "wolf"}

const objj = { obj1, obj2 }  // Not correct way to join a object
// console.log(objj);

const obj3 = Object.assign({}, obj1, obj2, obj4) // Good way to join to object
// console.log(obj3);

const joinObj = {...obj1, ...obj2} // Best way: Spread the objects and store in a different variable
// console.log(joinObj);

const users = [
    {
        id: 101,
        name: "Deepak"
    },
    {
        id: 102,
        name: "Aaryan",
    },
    {
        id: 103,
        name: "Tarun"
    }
]

// console.log(users[2].name); // To access a specific object from array

// console.log(Object.values(facebook)); // It returns a array of all values of the given object
// console.log(Object.keys(facebook)); // It returns a array of all keys of the given object
// console.log(Object.entries(facebook)); // It returns a array of array of the given object

// console.log(facebook.hasOwnProperty("id")); // returns a boolean value if exists


// +-+-+-+-+-+-+-+-+-+-+-+-+-de-structure and JSON API+-+-+-+-+-+-+-+-+-+-+-+-+-


const myCourse = {
    courseName: "Sigma",
    price: 4999,
    courseInstructor: "apnacollege"
}

// myCourse.courseName; // Normal way to get a object value

const {courseName: cName} = myCourse // To extract the key value from a object
console.log(cName); // access value like that

