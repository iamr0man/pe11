// 'use strict'

// function method() {
//     alert(this)
// }

// method()

function method() {
    // debugger;
    let a = 1;
    let b = 2;

    {
        let a = 3;
        b += a;
    }

    console.log(a + b);
};
// let user = {
//     name: "John"
// };

const alarm1 = () => user.name;

// method.call(this, user)

const arr = '5';
// console.log(arr);

// console.log(arr instanceof String);

class Animal {}
class Rabbit extends Animal {}
const rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Animal);
console.log(Rabbit instanceof Animal);

// try {

// } finally {

// } catch (e) {

// }

try {
    console.log(1);
} catch {
    console.log(2);
} finally {
    console.log(3);
}

let creature = "Bird";

{
    // var creature = "Fish";
}

creature = "Cat";

console.log(creature);

const person = {
    name: "Den",
    surname: "Smith",
    age: 22
};

const admin = {
    role: "admin",
    access: "full"
};

let {
    name,
    surname,
    age
} = person;
const {
    role: access
} = admin;
debugger;
const user = {
    name: `${surname} ${name}`,
    access
};

console.log(access);