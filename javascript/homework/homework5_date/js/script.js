function createNewUser() {

    let name = prompt("Insert your name:"),
        surname = prompt("Insert your surname:"),
        birthday = prompt("Insert your birthday in format(day.month.year):");

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
        },
        'birthday': {
            value: birthday.split('.'),
            writable: false,
            configurable: true
        }
    });
    user.getLogin = function () {
        return (this.firstName[0] + this.lastName).toLowerCase();
    }
    user.getAge = function () {
        const now = new Date(),
            fullAge = now.getFullYear() - user.birthday[2];
        return now.getMonth()+1 >= user.birthday[1] && now.getDate()+1 >= user.birthday[0] ? fullAge : fullAge - 1;
    }
    user.getPassword = function(){
        return user.firstName[0].toUpperCase() + user.lastName.toLowerCase() + user.birthday[2];
    }
    return user;
}
let newUser = new createNewUser();
console.log(newUser.getAge());
console.log(newUser.getPassword());