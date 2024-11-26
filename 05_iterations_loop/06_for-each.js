const language = ["js", "html", "css", "jsx"];


// Basic use of foreach method in array
language.forEach((item) => {
    // console.log(item);
});


// arguments we pass in an foreach loop.,

language.forEach((value, index, arr) => {
    // console.log(
    //     value,
    //     index,
    //     arr
    // );
})


// real use of foreach loop [{}, {}, {}]. Most common iteration.,

const userData = [
    {
        name: "deepak",
        age: 17
    },
    {
        name: "tarun",
        age: 17
    },
    {
        name: "aaryan",
        age: 17
    }
];

// console.log(userData);

userData.forEach((value) => {
    console.log(value.name);
    console.log(value.age);
});

