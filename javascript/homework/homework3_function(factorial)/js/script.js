const getFactorial = number => {

    let result = 1;
    while(number > 0){
        result*=number;
        number--;
    }
    return result;
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