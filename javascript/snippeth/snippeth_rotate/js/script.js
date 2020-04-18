const cards = document.querySelectorAll('.card'); // find out element with class card

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove' , startRotate); //while mouse will hit container card function start
    card.addEventListener('mouseout' , stopRotate)
}

function startRotate(event) { //rotates card item
    const cardItem = this.querySelector('.card-item'); // add .card-item to call them
    const halfHeight = cardItem.offsetHeight / 2; //отступ от элемента, а  не это бади
    const halfWidth = cardItem.offsetWidth / 2;

    cardItem.style.transform = 'rotateX(' + -(event.offsetY -
        halfHeight) / 5 +'deg) rotateY(' +
        (event.offsetX - halfWidth) / 5 + 'deg'; //add css style elements .card
}

function stopRotate(event) { //rotates card item
    const cardItem = this.querySelector('.card-item'); // add .card-item to call them
    cardItem.style.transform = 'rotate(0)';
}

