// let byClass = document.getElementsByClassName('text')[0];
// let byId = document.getElementById('span-id')
// let byTag = document.getElementsByTagName('p')[0]
// let qSelector = document.querySelector('p:last-of-type');
// console.dir(qSelector.innerHTML);

// let listElement = document.querySelectorAll('.list-item');
// listElement.forEach(element => {
//     if(element.innerText === 'list-element 3'){
//         console.log(element.innerText);
//     }
// });

// let goodsList = document.querySelectorAll("#storage>li")
// console.log(goodsList);

// goodsList.forEach(el => {
//     if(el.innerText.includes(": 0")){
//         el.innerText = el.innerText.replace(": 0", ': out of stock');
//         el.style.color = 'red';
//     } 
// })

let goodsList = document.querySelectorAll("#storage>li");
let userGood,
    existsGood;

while (existsGood === undefined) {
    userGood = prompt("Insert good: ").toLowerCase();
    goodsList.forEach(elem => {
        if (elem.innerText.toLowerCase().includes(userGood)) {
            existsGood = elem;
        }
    });
}

let userCount = prompt("Input count");

existsGood.innerText = existsGood.innerText.slice(0, existsGood.innerText.indexOf(':')+1)+ ' ' + userCount;