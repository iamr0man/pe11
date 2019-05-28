// let numberFlat = parseInt(prompt("Input number your flat:"));
//
// let numberEntrance = Math.ceil(numberFlat/4/9);
//
// if(isNaN(numberFlat) || numberFlat < 0 || numberFlat > 145) {
//     alert("Your number incorrect, sorry");
// } else {
//     if(numberFlat <= 36) {
//         alert(`Your floor is ${Math.ceil(numberFlat/4)} and the entrance - ${numberEntrance}`);
//     }
//     else if(numberFlat <= 72){
//         alert(`Your floor is ${Math.ceil(numberFlat/4-9)} and the entrance - ${numberEntrance}`);
//     }
//     else if(numberFlat <= 108) {
//         alert(`Your floor is ${Math.ceil(numberFlat/4-18)} and the entrance - ${numberEntrance}`);
//     }
//     else {
//         alert(`Your floor is ${Math.ceil(numberFlat/4-27)} and the entrance - ${numberEntrance}`);
//     }
// }

// let flag = true;
//
// if(isNaN(number)) {
//
//     alert("Too high/small digit");
//
// } else {
//         if(number <= 99) {
//             if(number < -9) {
//                 alert("Its negative two-digit number");
//             }
//             alert("Its positive two-digit number");
//         }
//         else if(number <= 999) {
//             if(number < -999) {
//                 alert("Its negative three-digit number");
//             }
//             alert("Its positive three-digit number");
//         }
// }

// let k, p, res = true;
//
//
// k = parseInt(prompt("Input k"));
// p = prompt("Input p");
//
// if(p === 0) {
//     alert("the roots doesn`t exsist");
// } else {
//     if((k/p)>1) {
//         res = k > p;
//     }else {
//         res = k < p;
//     }
// }
//
// alert(res);

// let finalPrice = parseInt(prompt("Input your prive check: "));
//
// if(finalPrice <= 500) {
//     finalPrice -= finalPrice/100*3;
// } else {
//     finalPrice -= finalPrice/100*5;
// }
//
// alert(finalPrice);

// let a = parseInt(prompt("Input a: ")), b= parseInt(prompt("Input b: ")), c= parseInt(prompt("Input c: ")) , discr = Math.pow(b,2) - 4 * a * c;
//
// if(discr > 0) {
//     alert(`one - ${(-b + Math.sqrt(discr))/(2*a)}, second - ${(-b - Math.sqrt(discr))/(2*a)}`);
// } else if (discr === 0) {
//     alert(`One root - ${-b/(a*2)}`);
// } else {
//     alert("the roots doesnt exists");
// }

// let randomNum = Math.floor(Math.random() * 6) + 1;
// alert(randomNum);
// let userNum = parseInt(prompt("Your number: "));
//
// if(userNum > randomNum) {
//     userNum = parseInt(prompt("Too high! Try another number: "));
//     if(userNum > randomNum) {
//         userNum = parseInt(prompt("Too high! Try another number: "));
//         if(userNum > randomNum) {
//             userNum = parseInt(prompt("Too high! Try another number: "));
//         } else if(randomNum < userNum) {
//             userNum = parseInt(prompt("Too low! Try another number: "));
//         } else {
//             alert("Its right number")
//         }
//     } else if(userNum < randomNum) {
//         userNum = parseInt(prompt("Too low! Try another number: "));
//         if(userNum > randomNum) {
//             userNum = parseInt(prompt("Too high! Try another number: "));
//         } else if(userNum < randomNum) {
//             userNum = parseInt(prompt("Too low! Try another number: "));
//         } else {
//             alert("Its right number")
//         }
//     } else {
//         alert("Its right number")
//     }
// } else if(userNum < randomNum) {
//     userNum = parseInt(prompt("Too low! Try another number: "));
//     if(userNum > randomNum) {
//         userNum = parseInt(prompt("Too high! Try another number: "));
//         if(userNum > randomNum) {
//             userNum = parseInt(prompt("Too high! Try another number: "));
//         } else if(userNum < randomNum) {
//             userNum = parseInt(prompt("Too low! Try another number: "));
//         } else {
//             alert("Its right number")
//         }
//     } else if(userNum > randomNum) {
//         userNum = parseInt(prompt("Too high! Try another number: "));
//         if(userNum > randomNum) {
//             userNum = parseInt(prompt("Too high! Try another number: "));
//         } else if(userNum < randomNum) {
//             userNum = parseInt(prompt("Too low! Try another number: "));
//         } else {
//             alert("Its right number")
//         }
//     } else {
//         alert("Its right number")
//     }
// } else {
//     alert("Its right number")
// }

// let three_digit = +prompt("Input number: ")
// first = Math.floor(three_digit / 100 ), two =Math.floor(three_digit%100/10), three = three_digit%10, res = 0;
//
// debugger;
//
// if(three_digit <= 999 && three_digit >= 100) {
//     if(three_digit % 2 === 0){
//         res = first + two + three;
//     } else {
//         res = first * two * three;
//     }
// } else {
//     alert("Its another number")
// }
//
// alert(res);