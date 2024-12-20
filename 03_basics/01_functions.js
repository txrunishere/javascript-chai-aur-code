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

// console.log(loggedIn());  // here, we console log the fnction because in function we return the statement


// -+-+-+-+-+-+-+-+-+-+ rest operator -+-+-+-+-+-+-+-+-+-+

function cartItemPrice(value1, value2, ...num) {
    // return value1;
    // return value2;
    return num;
}

// console.log(cartItemPrice(35, 45, 55, 65, 75)); // Here if we want to print all these arguments then we use rest operator like ...num It return array of all arguments



// *********************** function with objects ***********************

const item = {
    itemName: "book",
    price: 199
}

function handleObject(object) { // Here in this parameter we pass our object in which we perform our task
    console.log(`The Price of ${object.itemName} is ${object.price}`);
}

// handleObject(item);

// handleObject({
//     itemName: "Bottle",
//     price: 99
// }); // We also use it like that



// functions with array

const myArray = [100, 200, 300, 400, 500];

function returnRandomValue(array) {
    const rand = Math.floor(Math.random() * 5);
    return array[rand]
}

// console.log(returnRandomValue(myArray));  //returns the random value form the myArray
