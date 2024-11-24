var c = 300 // Global Scope: We use global scope inside any statement

if (true) {
  let a = 10;
  const b = 20;
  c = 30; // Block Scope: we use it inside a statement but don't outside the statement
}

// console.log(a);
// console.log(b);
// console.log(c);


// +-+-+-+-+-+-+-+-+-+-+-+-+-+ Scope Level and mini-hoisting +-+-+-+-+-+-+-+-+-+-+-+-+-+

function firstFunc() {
    const name = "tarun";

    function secondFunc() {
        const myId = 6969;
        console.log(`Hey, my name is ${name}`);
    }

    // console.log(myId); // Here, we don't access the myId because it is inside the secondFunc means myId is in a block scope here.
    secondFunc();

}
// firstFunc()


if (true) {
    const user = "tarun";
    if (user === "tarun") {
        const id = 6900;
        // console.log(`${user}'s id is ${id}`);
    }
    // console.log(id);
}
// console.log(user);


// ---------------------------------- hoisting ----------------------------------



// console.log(addOne(69)); // It executes the function and returns 70 in console

function addOne(num) {
    return num + 1;
}


// console.log(addTwo(68)); It gives a error because the declaration of function is after the execution 

const addTwo = function (num) {
    return num + 2;
}
