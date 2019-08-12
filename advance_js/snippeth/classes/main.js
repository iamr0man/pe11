class Person {
    constructor(name, yob, job){
        this.name = name;
        this.yearOfBirth = yob;
        this.job = job; 
    }

    calculateAge(){
        let age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
}

const roman = new Person('Roman', 2001, 'junior software developer')