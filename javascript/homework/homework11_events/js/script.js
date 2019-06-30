let buttons = document.getElementById('btn-wrapper');
buttons = Array.prototype.slice.call(buttons.children)

document.body.addEventListener('keydown', changeColor);

let indexLastElement = 0;
function changeColor(e) {
    buttons.forEach((btn, index, array) => {
        if (e.key.toLowerCase() === btn.innerText.toLowerCase()) {
            array[indexLastElement].style.backgroundColor = '#33333a';
            btn.style.backgroundColor = 'blue';
            indexLastElement = index;
        }
    })
}