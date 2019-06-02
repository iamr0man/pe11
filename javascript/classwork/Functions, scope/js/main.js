
//Task 1
// function sum(num1, num2) {
//     return num1+num2;
// }
//
// let gogiAge = sum;
//
// let fooAge = gogiAge(6, 8);

// function sumAll() {
//     let sum = 0;
//     for(let arg of arguments) {
//         console.log("thr arg is: ", arg);
//         sum = sum + arg;
//     }
//     return sum;
// }
//
// console.log(sumAll(5, 2, 6 , 8));

//Task 2

// function counter (start, end) {
//     for(start; start <= end; start++) {
//         console.log(start);
//     }
// }
//
// counter(5, 10);

//Task 3
// function calculateResidue(firstNum, secondNumber, dividedNumber){
//     for(firstNum; firstNum <= secondNumber; firstNum++) {
//         if (firstNum % dividedNumber === 0) {
//             console.log(firstNum);
//         }
//     }
// }
// calculateResidue(+prompt("First:"), +prompt("Second:"), +prompt("Third:"));

//Task 3 (Optional)

// debugger;
//
// function receiveRange() {
//     let firstNum = +prompt("First:"),
//      secondNumber = +prompt("Second: ");
//     arr.push(firstNum);
//     arr.push(secondNumber);
// }
//
// let arr = [];
// receiveRange();
// console.log(arr);

// Task 4
const SIZE_SMALL = {
    name: 'SIZE_SMALL',
    price: 15,
    cal: 250,
};

const SIZE_LARGE = {
    name: 'SIZE_LARGE',
    price: 25,
    cal: 340,
};

const STUFFING_CHEASE = {
    name: 'STUFFING_CHEASE',
    price: 4,
    cal: 25,
};

const STUFFING_SALAD = {
    name: 'STUFFING_SALAD',
    price: 5,
    cal: 5,
};

const STUFFING_BEEF = {
    name: 'STUFFING_BEEF',
    price: 10,
    cal: 50,
};


function getPrice(size, stuffing) {
    let priceResult = 0;
        switch(size) {
            case SIZE_SMALL.name:
                priceResult+=SIZE_SMALL.price;
                break;
            case SIZE_LARGE.name:
                priceResult+=SIZE_LARGE.price;
                break;
        }
        switch (stuffing) {
            case STUFFING_CHEASE.name:
                priceResult+=STUFFING_CHEASE.price;
                break;
            case STUFFING_SALAD.name:
                priceResult+=STUFFING_SALAD.price;
                break;
            case STUFFING_BEEF.name:
                priceResult+=STUFFING_BEEF.price;
                break;
        }
    return priceResult;
    }
console.log(getPrice('SIZE_LARGE', 'STUFFING_BEEF'));