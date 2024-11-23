function sayMyName() {
  console.log("T");
  console.log("A");
  console.log("R");
  console.log("U");
  console.log("N");
}
// sayMyName();

//                 parameters
function addTwoNum(num1, num2) {
    return num1 + num2;
}

// addTwoNum(3, 3);

// const result = addTwoNum(4, 5);
// console.log(result);

//        arguments
// addTwoNum(2, 4);

function loggedIn (userName = "temp") {
    if (!userName) {
        console.log("Enter a Username");
        return;
    }

    return `${userName} just log in`
}

console.log(loggedIn());  // here, we console log the fnction because in function we return the statement