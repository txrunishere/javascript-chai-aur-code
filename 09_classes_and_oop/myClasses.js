// This concept is introduced after ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}@&*%$^(*&%^&5)`;
  }

  upperUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const newUser = new User("Tarun", "tarun@gmail.com", "strong");
// console.log(newUser);
console.log(newUser.encryptPassword());
console.log(newUser.upperUsername());



// Behind the Scene use of Functions

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}@&*%$^(*&%^&5)`;
};

User.prototype.upperUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const newUserTwo = new User("Deepak", "deepak@gmail.com", "pass");
console.log(newUserTwo.encryptPassword());
console.log(newUserTwo.upperUsername());