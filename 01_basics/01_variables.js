const accId = 13980;
let accEmail = "tarun@gmai.com";
var accPassword = "1234556";
accCity = "Jaipur"  // It is not proper way to make a variable without any variable type (eg., let, const, var).

// accId = 95380; // You can not change value of a const variable

accEmail = "tsoni@gmail.com";
accPassword = "098765";
accCity = "Delhi";


/**
 * Prefer not to use var 
 * because of issue in block scope and functional scope
 */

console.table([accId, accEmail, accPassword, accCity]);
