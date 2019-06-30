const f_font = document.querySelectorAll('.input-wrapper i')[0];
const s_font = document.querySelectorAll('.input-wrapper i')[1];
const f_pass = document.querySelectorAll('input')[0];
const s_pass = document.querySelectorAll('input')[1];

const f_password = document.querySelector('input');
f_password.setAttribute('type', 'text');

f_font.addEventListener('click', changeEye);
s_font.addEventListener('click', changeEye);

function changeEye(event) {
    
classList = event.target.classList;
let prevText = event.target.previousElementSibling.innerText;
let prevElement =  event.target.previousElementSibling;
if(classList.contains('fa-eye')) {
        classList.replace('fa-eye' , 'fa-eye-slash');
        prevElement.setAttribute('type', 'password');
        prevElement = '#'.repeat(prevText.length);
    } else {
        classList.replace('fa-eye-slash' , 'fa-eye');
        prevElement.setAttribute('type', 'text');
        prevElement = prevText;
    }
}

document.querySelector('.btn').addEventListener('click', isEqual);

const p = document.createElement('p');
function isEqual(event) {
    event.preventDefault();
    if(f_pass.value === s_pass.value && f_pass.value.length > 0) 
        alert('You are welcome!');
    else {
        p.style.color = 'red';
        p.innerText = 'Need to input equal value';
        s_pass.parentNode.appendChild(p);
    }
}