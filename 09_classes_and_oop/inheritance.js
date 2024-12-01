class User {
    constructor (username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}


// extends class from a class

class Teacher extends User {
    constructor (username, email, password) {
        super(username);
        // this.username = username
        this.email = email;
        this.password = password;
    }

    newClass() {
        console.log(`A new class was added by ${this.username}`);
    }
}

const newUser = new Teacher("Mukesh", "mukesh@gmail.com", "mukesh@123");
// newUser.newClass();
// newUser.logMe(); // Here Teacher class access the logMe method because it is instence of User class 

const secondUser = new User("Tarun");
// secondUser.newClass();
// secondUser.logMe();

// To check and two classes any inheritence or not.,

console.log(newUser instanceof User); // It returns a Boolean response