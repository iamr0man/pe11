// debugger;
//
// let fact = +prompt("number"), res = 1;
//
// while(fact > 1) {
//     res*= fact;
//     fact--;
// }
//
// alert(res);

// let prime = +prompt("number"), res = false, counter = 0;
//
// for(let i = 1; i <= prime; i++) {
//     if(prime % i === 0){
//         ++counter;
//     }
// }
// if(counter === 2){
//     res = true;
//     alert(res);
// } else {
//     alert(res);
// }

for(let i = 0; i < 4; i++) {
    for(let j = 0; j < i+1; j++) {
        console.log("*");
    }
}