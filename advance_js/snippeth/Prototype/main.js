function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greeting = function(){
    return `Hi, there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');
// console.log(person1.greeting());

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

const customer1 = new Customer('Tom', 'Smith', '555-555-5552' , 'Standart');
console.log(customer1.greeting());