// const numUser = parseInt(prompt("Input number"));
//
// if(numUser || numUser === 0) {
//     alert("krasava")
// } else {
//     prompt('ne krasava, try to repeat' , numUser);
// }

// if(a > b && a > c) {
//     alert(a);
// } else if (b > a && b > c) {
//     alert(b);
// } else if(c > a && c > b) {
//     alert(c);
// } else if (a === b && b === c && a === c) {
//     alert("three numbers are equal");
// } else if (a === b || b === c || a === c ) {
//     alert("two numbers are equal");
// } else {
//     alert("hz");
// }

let num = parseInt(prompt("input number"));

if(isNaN(num)) {
    alert("Not a number");
} else if(num > 0 ){
    alert("Your number " + num + " is a positive");
} else if(num < 0) {
    alert("Your number " + num + " is a negative")
} else {
    alert("It`s not a number!")
}