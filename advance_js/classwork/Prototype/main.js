function Animal() {
    debugger;
    this.moveType = this.__proto__.moveType;
    this.getName = this.__proto__.getName;
}
let Fish = {
    moveType: "swim",
    speed: 95
}
let Rabbit = {
    moveType: "jump",
    speed: 300,
    getName: function(){
        console.log("Rabbit")
    } 
}
Animal.__proto__ = Fish;
Animal.prototype = Rabbit;
let theBrave = new Animal();
// console.log(theBrave.speed, Animal.speed)
console.log("invoke theBrave =>", theBrave);