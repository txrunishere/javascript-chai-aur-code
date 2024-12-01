function setUsername (username) {
    this.username = username
    console.log("called from this side");
}

// setUsername("Deepak");

function createUser(username, email, password) {
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
}


const userOne = new createUser("Tarun", "tarun@gmail.com", "123456");
console.log(userOne);