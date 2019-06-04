// var a = 5; 
// if (true){
//     var a = 10;
// } 
// alert(a); 

// (function hello() { return 1; }); alert(hello); 

let arr = new Array("Wind", "Rain", "Fire");
const str = arr.join(' / ');

arr.push("Earth");

// myArray.push("Semptember"); 
// myArray.pop();


// const firstElemment = arr.shift();
arr.unshift('Human', 'Weapon');

arr = arr.slice(2, arr.length); //first version

// arr.slice(1, 4, 'a', 'b', 'c');

// arr.forEach(e => console.log(e));

const numbers = [79, 2, 12, 9];
const arrMap = numbers.map(e => e % 2 === 0 ? e+1 : e+2);
arrMap.forEach(e => console.log(e));

var a1 = ['a', 10, 'b', 20, 'c', 30];
var a2 = a1.filter(function(item) { return typeof item == 'number'; });
console.log(a2);

var a = [10, 20, 30];
var total = a.reduce(function(first, second, index) { return first + second; }, 0);
console.log(total)