const createNewUser = () => {

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
<<<<<<< HEAD
        getLogin: function() {
            return this.firstName[0].toLowerCase() + this.lastName.toLowerCase(); 
        },
    };

        Object.defineProperties(newUser, {
            firstName: {
                writable: false,
                configurable: true 
            },
            lastName: {
                writable: false,
                configurable: true
            }
        });

        Object.defineProperties(newUser, {
            setFirstName: {
                value = 'Roman'
            },
            setLastName: {
                value: 'Abramovich'
            }
        });

        return newUser;           
    }
let newUser = createNewUser();
console.log(newUser.getLogin());

newUser.setFirstName("Roman");
newUser.setLastName("Abramovich");

=======
        getLogin: function () {
            return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
        }
    };

    Object.defineProperties(newUser, {
        firstName: {
            writable: false,
            configurable: true
        },
        lastName: {
            writable: false,
            configurable: true
        }
    });

    Object.defineProperty(newUser, 'setFirstName', {
        set: function(firstName){
            this.firstName = firstName;
        }
    });

    Object.defineProperty(newUser, 'setLastName', {
        set: function(lastName){
            newUser.lastName = lastName;
        }
    });



    return newUser;
}
let newUser = createNewUser();
console.log(newUser.getLogin());
debugger;
newUser.setFirstName = "Roman";
newUser.setLastName = "Roman";
>>>>>>> 665592192353209c38b8919d526c54c3a64d3074

console.log(newUser);