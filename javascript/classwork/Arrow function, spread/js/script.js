// function sum(a,b) {
//     console.log(this);
//     return a+b;
// }

// const sum = (...args) => {

//     console.log('arrow arguments - ', args );
//     let sum = 0;
//     for (let element in args) {
//         sum+=args[element];
//     }
//     return sum;
// };

// console.log(sum(45,55)); 
// debugger;
// const calculateResidue = (...range) => {
//     for(range[0]; range[0] <= range[1]; range[0]++){
//         if(range[0] % range[2] === 0){
//             console.log(range[0]);
//         }
//     }
// }

// calculateResidue(1, 5, 3);

const factorial = number => {
    if(number === 1) {
        return number;
    }

    number *= factorial(number-1);

    return number;
}