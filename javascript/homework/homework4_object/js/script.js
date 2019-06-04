function createNewUser() {

    let name = prompt("Insert your name: "),
        surname = prompt("Insert your surname: ");

    while (name.length === 0 || surname.length === 0) {
        alert("Your data incorrect. Try again!");
        name = prompt("Insert your name: ");
        surname = prompt("Insert your surname: ");
    }

    const newUser = {
        firstName: name,
        lastName: surname,
        getLogin: function () {
            return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
        }
    };

    Object.defineProperties(newUser, {
        firstName: {
            writable: false,
            configurable: true,
            enumerable: true
        },
        lastName: {
            writable: false,
            configurable: true,
            enumerable: true
        }
    });

    return newUser;
}
let newUser = createNewUser();
console.log(newUser.getLogin());