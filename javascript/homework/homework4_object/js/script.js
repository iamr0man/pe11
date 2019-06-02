const createNewUser = () => {
    let name = prompt("Insert your name: "),
    surname = prompt("Insert your surname: ");

    while(name.length === 0 || surname.length === 0) {
        alert("Your data incorrect. Try again!");
        name = prompt("Insert your name: ");
        surname = prompt("Insert your surname: ");
    }

    const newUser = {
        firstName: name,
        lastName: surname,
        getLogin: function() {
            return this.firstName[0].toLowerCase() + this.lastName.toLowerCase(); 
        },
        // get getFirstName(){
        //     return firstName;
        // },
        // get getLastName(){
        //     return lastName;
        // },
        set setFirstName(newFirstName) {
            this.firstName = newFirstName;
        },
        set setLastName(newLastName) {
            this.lastName = newLastName;
        }
    };

        Object.defineProperties(newUser, {
            firstName: {
                writable: false 
            },
            lastName: {
                writable: false
            }
        });
        return newUser;           
    }
let newUser = createNewUser();
console.log(newUser.getLogin());

// newUser.firstName = "Roman";
// newUser.lastName = "Abramovich";

newUser.setFirstName = "Roman";
newUser.setLastName = "Abramovich";

console.log(newUser.firstName);
console.log(newUser.lastName);
console.log(newUser);