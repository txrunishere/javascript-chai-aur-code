// **Conditional Operators in decision statements
// <, >, <=, >=, ==, !=, ===, !==

const points = 200

if (points > 100) {
    let power = "strength"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // We can't access the power here !!


// const balance = 1000


// if (balance > 500) console.log("test") // Use of implicit scope in if-else statements

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// } // If we want we pass more than two conditions then we use else if

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// If with AND operator 
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

// If with OR operator
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}