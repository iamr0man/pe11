// let showMsg = (msgText, time) => {
//     setTimeout(()=>alert(msgText), time);
// }

// showMsg('Lacoste', 2000);


// const showMsg = (msgText, time, repeat) => {
//     let interval = setInterval(() => {
//         if (repeat===0) {
//             clearInterval(interval);
//         } else {
//             repeat--;
//             alert(msgText);
//         }
//     }, time);
// };

// showMsg('Lacoste', 2000, 4);


// const showMsg = (msgText, time, repeat) => {

//     setTimeout(() => {
//         if (repeat > 0) {
//             alert(msgText);
//             showMsg(msgText, time, --repeat);
//         }
//     }, time)
// };

// showMsg('Lacoste', 2000, 4);

// function getItem(){

//     if(!localStorage.getItem('userName')){
//         localStorage.setItem('userName', prompt('Enter your name'))
//     } 
//     alert(`hello ${localStorage.getItem('userName')}`)
// }

// getItem();


function questionUser(textForUser ,time) {

    if(!localStorage.getItem('count')){
        localStorage.setItem('count', '0')
    }
    let interval = setInterval( ()=> {
        let getCount = +localStorage.getItem('count'); 
        if(getCount<5) {
            if(confirm(textForUser)) {
                localStorage.setItem('count', 5);
                window.location.href = 'https://www.gov.am/ru/structure/12/';
            } else {
                localStorage.setItem('count' , (getCount+1).toString())
            }
        } else {
            clearInterval(interval);
        }
    }, time)
}

questionUser('Do you want to buy our Premium account?', 5000);