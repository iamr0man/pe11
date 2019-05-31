// const makeFocus = (number, pow) => {

//     let result = 1;
//     for(let i = 0; i < pow;i++) {
//         result *= number;
//     }
//     return result;
// };

// alert(makeFocus(3,4));

// const makeFocus = (number) => {

//     let result = 0;
//     for(let i = number; i > 0;i--) {
//         result += number;
//     }
//     return result;
// };

// alert(makeFocus(4));

// function ask(question, yes, no) {
//     if (confirm(question)){
//         yes();
//     }else{
//         no();
//     }

//     ask("Do you agree?", 
//         () => {alert("You agreed.")}, 
//         () => {alert("You cancaled.")}
//     );
// }

// ask();