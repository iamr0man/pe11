const IS_PRIME = 2;
let firstUserNumber = +prompt("Input your number: "),
    secondUserNumber = +prompt("Input your number: "),
    primeNumber = 0,
    counter = 0;

while(isNaN(firstUserNumber) || isNaN(secondUserNumber) || firstUserNumber > secondUserNumber){
    alert("Your data incorrect. Try again.");
    firstUserNumber = +prompt("Input your number: ");
    secondUserNumber = +prompt("Input your number: ");
}

while(firstUserNumber % 1 !==0 || secondUserNumber % 1 !==0) {
    alert("We need whole numbers! Try again.")                  
    firstUserNumber = +prompt("Input your number: ");
    secondUserNumber = +prompt("Input your number: ");         //дальше я хотел сделать проверка на то, что первое меньше чем второе, 
                                                               //если нет - кинуть его по метке на цикл валидации, но не нашёл подходящий материал
}

for(let i = firstUserNumber; i <= secondUserNumber; i++) {
    prime = i;
    for(let j = 1; j <= prime; j++) {
        if(prime % j === 0) {
            counter++;
        }
    }
    if(counter === IS_PRIME){
        alert(`${i} number is prime`);  
    } else {
        alert(`${i} number is not prime`)
    }
    counter = 0;
}