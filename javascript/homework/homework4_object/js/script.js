// function createNewUser() {

//     let name = prompt("Insert your name: "),
//         surname = prompt("Insert your surname: ");

//     while (name.length === 0 || surname.length === 0) {
//         alert("Your data incorrect. Try again!");
//         name = prompt("Insert your name: ");
//         surname = prompt("Insert your surname: ");
//     }

//     Object.defineProperty

    // const newUser = {
    //     firstName: name,
    //     lastName: surname,
//     getLogin: function () {
//         return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
//     },
//     setFirstName(name) {
//         this.firstName = name;
//     }
// };

//     Object.defineProperties(newUser, {
//         firstName: {
//             writable: false
//         },
//         lastName: {
//             writable: false,
//             configurable: true,
//             enumerable: true
//         }
//     });

//     return newUser;
// }
// let newUser = createNewUser();
// // console.log(newUser.getLogin());
// console.dir(newUser);


function createNewUser() {

    let name = prompt("Insert your name"),
        surname = prompt("Insert your surname");

    while (name.length === 0 || surname.length === 0) {
        alert("Your data incorrect. Try again!");
        name = prompt("Insert your name: ");
        surname = prompt("Insert your surname: ");
    }

    const newUser = new Object();
    this.firstName = name;
    this.lastName = surname;
    this.getLogin = function () {
        return (this.firstName[0] + this.lastName).toLowerCase();
    }
    this.setFirstName = function(newFirstName) {
        debugger;
            Object.defineProperty(this, newUser.firstName, {
                writable: true,
                value: newFirstName
            })
        }

    Object.defineProperty(newUser, newUser.firstName, {
        writable: false
    })
}

let newUser = new createNewUser();
newUser.setFirstName("Roman");
console.log(newUser);