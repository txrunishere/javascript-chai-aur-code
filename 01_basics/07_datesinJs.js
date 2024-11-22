// Dates

let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toDateString()); // ==> Prints in format of 'day month date year'
// console.log(myDate.toLocaleDateString()); // ==> returns date in format of dd/mm/yyyy
// console.log(myDate.toLocaleString()); // ==> returns date and time both in format of dd/mm/yyyy, time

// console.log(myDate.toLocaleTimeString()); // returns only current time 

// console.log(myDate.toString()); // gives a description format of day date time and more

// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// console.log(typeof myDate); // => Type of myDate is an object

let myCreatedDate = new Date(2024, 10, 22); // => Here Months are started from 0 and 0 means january 

// let myCreatedDate = new Date(2024, 10, 22, 5, 3) // => Here it also includes time
// let myCreatedDate = new Date("2023-01-14") // => When we write our custom date, here months were start from 01
let myCreatedDate2 = new Date("01-14-2023") // => to write date as your choice 
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate2);

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // => to also print seconds

let newDate = new Date();

// console.log(newDate);

// console.log(newDate.getMonth()); // It also give a number value and it start from 0, here 0 means january
// console.log(newDate.getMonth() + 1); // => If we want exact month we use this 
// console.log(newDate.getDay()); // => It gives day in number and day it also starts form 1 means 1 is equal to monday

newDate.toLocaleString('default', {
    weekday: "long",
});

console.log(newDate.toString());


// ctrl + spacebar for suggestions