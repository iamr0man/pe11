const operation = (num1, num2, sign) => {
  
    result = 0;
    switch(sign) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break 
        case '*':
            result = num1 * num2; 
            break;
        case '/':
            result = num1 / num2;
    }
    return result;
};

let firstNumber = 0,
    secondNumber = 0,
    sign = '';

if(confirm("Do you want concat or divided some numbers?")) {
    firstNumber = +prompt('Insert first number: '),
    secondNumber = +prompt('Insert second number: '),
    sign = prompt('Insert math operation');
}

while(isNaN(firstNumber) || isNaN(secondNumber)){
    alert('Your data incorrect. Try againg!');
    firstNumber = +prompt('Insert first number: '),
    secondNumber = +prompt('Insert second number: ');
}

console.log(operation(firstNumber, secondNumber, sign));
