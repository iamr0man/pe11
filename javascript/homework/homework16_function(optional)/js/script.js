const getFactorial = number => {

    if(number===1){
        return number;
    }

    number *= (getFactorial(number-1));

    return number;
};

let number = 0;

if(confirm("Do you want play with factorial?")) {
    number = +prompt('Insert number: ');
}

while(isNaN(number) || number === 0){
    alert('Your data incorrect!');
    number = +prompt('Insert number again: ');
}

console.log(getFactorial(number));