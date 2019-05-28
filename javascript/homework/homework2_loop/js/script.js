const userNumber = +prompt("Input your number: ");
let counter = 0;

for(let i = 0; i < userNumber; i++) {
    if(i % 5 === 0 && i !== 0) {
        console.log(i);
        counter++;
    }
}

if(counter===0) {
    alert("Sorry, no numbers");
} else {
    alert(`congratulation, we found ${counter} number which divided by 5`);
}