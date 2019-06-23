// let link = document.createElement('a');
// link.innerHTML = '<p>&copy;danitcompany</p>';
// emph.appendChild(link);

// let elem = document.createElement('div');
//   elem.innerHTML = '<b>Новый элемент</b>';

// function insertAfter(elem, refElem){
//     return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
// }

// function removeChild(parent){
//     debugger;
//     let parentChildren = document.getElementById('.table')
//     for(let i = 0; i < parentChildren.length; i++){
//         console.log(parent.removeChild[i]);
//     }
// }
// removeChild(table);

// let body = document.body;

// вставить elem после первого элемента
// insertAfter(elem, body.firstElementChild); // <--- должно работать

// const list = document.querySelectorAll('#ol > li');

// for(let i = 0; i < list.length; i++){
//     // list[i].onclick = function emphesize(){
//     //     debugger;
//     //     this.classList.add('emph');
//     //     console.log(this.className);
//     //     console.log(this)
//     //     console.log(this.style)
//     //     // this.style.fontSize = '22px';
//     //     console.log(this.style);
//     }
// }

let list = document.getElementById('ol');
let next = document.getElementById('next');


list.onclick = function(event){
    let target = event.target;
    target.classList.add('emph');
};

let current = list.firstElementChild;

next.onclick = function() {
    
}
