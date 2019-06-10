// var a = 5; 
// if (true){
//     var a = 10;
// } 
// alert(a); 

// (function hello() { return 1; }); alert(hello); 

// let arr = new Array("Wind", "Rain", "Fire");
// const str = arr.join(' / ');

// arr.push("Earth");

// myArray.push("Semptember"); 
// myArray.pop();


// const firstElemment = arr.shift();
// arr.unshift('Human', 'Weapon');

// arr = arr.slice(2, arr.length); //first version

// arr.slice(1, 4, 'a', 'b', 'c');

// arr.forEach(e => console.log(e));

// const numbers = [79, 2, 12, 9];
// const arrMap = numbers.map(e => e % 2 === 0 ? e+1 : e+2);
// arrMap.forEach(e => console.log(e));

// var a1 = ['a', 10, 'b', 20, 'c', 30];
// var a2 = a1.filter(function(item) { return typeof item == 'number'; });
// console.log(a2);

// var a = [10, 20, 30];
// var total = a.reduce(function(first, second, index) { return first + second; }, 0);
// console.log(total)

// function descendingOrder(array) {
//     debugger;
//     array = ('' + array).split('');
//     let length = array.length,
//         template = 0;
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - i - 1; j++) {
//             if (array[j] < array[j + 1]) {
//                 template = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = template;
//             }
//         }
//     }
//     return +array.join('');
// }

// console.log(descendingOrder(987))

// function descendingOrder(number) {
//     array = ('' + number).split('').array.sort((a, b) => {
//         if (a > b) {
//             return -1;
//         }
//         if (a < b) {
//             return 1;
//         }
//     });
//     return +array.join('');
// }

function DNAStrand(dna){
    let result = dna.split('').map((element,index, array) => {
        array[index] = element.allReplace({'A' :'T', 'C':'G', 'T': 'A', 'G':'C'});
    })
    return result;
}

String.prototype.allReplace = function(obj) {
    let currentChar = this;
    for (let x in obj) {
        currentChar = currentChar.replace(new RegExp(x, 'g'), obj[x]);
    }
    return currentChar;
};

debugger;
console.log(DNAStrand ("ATTGC"));