// document.getElementById('clickMeBtn').addEventListener('click', () => alert('This is click!'))

// let box = document.createElement('div')
// box.style.height = '100px'
// box.style.width = '100px'
// box.style.backgroundColor = 'teal';

// box.addEventListener('click', (event) => event.target.style.backgroundColor = changeColor());

function changeColor(){
    const color = Math.floor(Math.random()*255);
    return `rgb(${color}, ${color}, 66)`;
}

// document.body.appendChild(box);

// let box = document.createElement('div');
// box.className = 'new-box';

// document.body.appendChild(box);

// let button = document.createElement('button')
// button.innerText = 'Change color'
// button.style.marginLeft = '627px'

// button.addEventListener('click', ()=> {
//     box.style.backgroundColor = changeColor();
// })

// document.body.append(button);

let box = document.createElement('div')
box.className = 'new-box'

const button = document.createElement('button')
button.setAttribute('type', 'text')

document.body.append(box)
document.body.append(button)



