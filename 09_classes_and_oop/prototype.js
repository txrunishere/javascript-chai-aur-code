const myName = "Tarun";

// console.log(myName.trueLength);

const animals = ["Dog", "Cow"];

const pcSpecs = {
    cpu: "ryzen",
    gpu: "AMD",
    monitor: "acer",

    bestCPU: function () {
        console.log(`${cpu} is best !!`);
    }
}

Object.prototype.myPC = function () {
    console.log(`Ryzen are Best`);
}

// here array access this method but object not because it is specially made for array
Array.prototype.sayHello = function () {
    console.log("Hello to User");
}

// pcSpecs.myPC();
// animals.myPC();

// pcSpecs.sayHello(); // It gives us a error


// ++++++++++++++++++++++++++++Inheritance++++++++++++++++++++++++++++

// Old Syntex
const user = {
    name: "Tarun",
    email: "tarun@gmail.com"
}

const courseSeller = {
    makeCourse: true
}

const support = {
    isAvailable: true
}

const taSupport = {
    makeAssignment: 'JS-Assignments',
    isAvailableFullTime: true,
    __proto__: support // kind of join two objects with each other
}

// courseSeller.__proto__ = user


// Modern Syntex
Object.setPrototypeOf(support, courseSeller);


// Make truelength method

const userName = "Tarun    ";

String.prototype.trueLength = function () {
    // console.log(this);
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

userName.trueLength();
"Deepak    ".trueLength();

