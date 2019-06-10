function createNewUser() {

    let name = prompt("Insert your name"),
        surname = prompt("Insert your surname");

    while (name.length === 0 || surname.length === 0) {
        alert("Your data incorrect. Try again!");
        name = prompt("Insert your name: ");
        surname = prompt("Insert your surname: ");
    }
    const user = {};
    Object.defineProperties(user, {
        'firstName': {
            value: name,
            writable: false,
            configurable: true
        },
        'lastName': {
            value: surname,
            writable: false,
            configurable: true
        }
    });
    user.getLogin = function () {
        return (this.firstName[0] + this.lastName).toLowerCase();
    }
    user.setFirstName = function (value) {
        Object.defineProperty(user, 'firstName', {
            writable: true,
            value: value
        });
        Object.defineProperty(user, 'firstName', {
            writable: false
        });
    };
    user.setLastName = function (value) {
        Object.defineProperty(user, 'lastName', {
            writable: true,
            value: value
        });
        Object.defineProperty(user, 'lastName', {
            writable: false
        });
    };
    return user;
}

let newUser = new createNewUser();
console.log(newUser.getLogin());
newUser.setFirstName("Roman");
console.log(newUser);