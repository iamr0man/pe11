// const gogi = Object.create([]);
// console.log(gogi);


// function foo() {

//     let age = 25;

//     const human = {

//         name: undefined,
//         age: 6,
    
//         user: {
//             name: 'Roman',
//             age: 17,
//             greeting: function() {
//                 // const age = 18; локальный скоп
//                 console.log(this.age)}
//         }
//     }
    
//     human.user.greeting();
// }

// foo();

// const user = {
//     name: "Foo",
//     age: 25,
//     greeting: function() {
//         console.log('context in greeting', this)
//         const inside = () => {
//             console.log('context in inside', this)
//         }
//         inside();
//     }
// }

// for(let key in user) {
//     console.log(user[key]);
// }

// user.greeting();

// function keyUser(name = "Sasha", age = 1) {

//     const user = {
//         name: name,
//         age: age
//     };

//     return user;
// }

// console.log(keyUser('Roman', 17));
// console.log(keyUser());

// const keyUser = (name, age) => {
//     const user = new Object();
//     Object.defineProperty(user, 'name',{
//         value: name,
//         writable: false
//     });
//     user.age = age;
//     user.incrementAge = function(){
//         this.age++;
//     };
//     user.addField = function(fieldName, fieldValue){
//         this[fieldName] = fieldValue;
//     };
//     return user;
// };

// const foo = keyUser("Gosha" , 23);
// console.log(foo);

// foo.addField('pets', []);
// console.log(foo);

function User(name, age) {
    this.age = age;
    Object.defineProperty(this, 'name',{
        value: name,
        writable: false
    });
    this.age = age;
    const incrementAge = () => { //private - visilble in function scope
        this.age++;             //function not valid - window
    };
    this.addField = function(fieldName, fieldValue){
        incrementAge();
        this[fieldName] = fieldValue;
    };
};

console.log(new User('Gosha', 69));

const user = new User('Artem', 18);
user.addField('car' , []);
console.log(user.age);
