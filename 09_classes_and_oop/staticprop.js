// static is not give access to all classes

class User {
    constructor (username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME: ${this.username}`);
    }

    static createId() {
        return Math.floor(Math.random() * 9999999);
    }
}

const newUser = new User("Tarun");
console.log(newUser.createId());