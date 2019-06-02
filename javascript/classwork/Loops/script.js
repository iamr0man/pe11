// let a = [1,9,8,7,1,5,6];
//
// for (elem in a) {
//     a[elem] = 56;
//     console.log("a." + elem + " = " + a[elem]);
// }
//

// const object = {
//     name: 'Roman',
//     surname: 'Korniienko',
//     description: 'best man ever',
//     pets: {
//         name: 'Sebek',
//         age: 15,
//         status: 'online'
//     }
// };
//
// for(let key in object) {
//     console.log(`${key} - ${object[key]}`)
// }

let a,
    b,
    sign,
    prevOp = 0;

while(confirm("One more operation?")) {
     a = +prompt('insert first number'),
     b = +prompt('insert second number'),
     sign = prompt('insert math operation');

    while (isNaN(parseInt(a))) {
        if (a !== 'PREV_OP') {
            a = +prompt('Insert first number');
        } else {
            a = prevOp;
            break;
        }
    }

    while (isNaN(parseInt(b))) {
        if (b !== 'PREV_OP') {
            b = +prompt('Insert second number');
        } else {
            a = prevOp;
            break;
        }
    }

    while (sign !== '*' && sign !== '%' && sign !== '+' && sign !== '-' && sign !== '/' && sign !== '**') {
        sign = prompt('Insert math operation');
    }

    switch (sign) {
        case '+':
            prevOp = a + b;
            alert(`a = ${a}, b = ${b}, math operation = '${sign}'. Result = ${a + b}`);
            break;
        case '-':
            prevOp = a - b;
            alert(`a = ${a}, b = ${b}, math operation = '${sign}'. Result = ${a - b}`);
            break;
        case '/':
            prevOp = a / b;
            alert(`a = ${a}, b = ${b}, math operation = '${sign}'. Result = ${a / b}`);
            break;
        case '*':
            prevOp = a * b;
            alert(`a = ${a}, b = ${b}, math operation = '${sign}'. Result = ${a * b}`);
            break;
        case '%':
            prevOp = a % b;
            alert(`a = ${a}, b = ${b}, math operation = '${sign}'. Result = ${a % b}`);
            break;
    }
}
