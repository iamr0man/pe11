const wrap = document.querySelector('.wrap')
const inputPrice = document.querySelector('.input-price')
const invalidData = document.createElement('p');

inputPrice.addEventListener('blur', onBlur);

function onBlur() {
    
    const wrapForSpan = document.createElement('div');
    const currentPrice = document.createElement('span');
    const cross = document.createElement('i');
    
    if (inputPrice.value > 0) {

        wrapForSpan.classList.add('current-price-wrap')
        currentPrice.innerText = `Текущая цена: ${this.value}`;
        cross.innerHTML = '<i class="far fa-times-circle"></i>'
        cross.addEventListener('click', clearPrice);

        inputPrice.style.color = 'rgb(2, 158, 2)';

        wrapForSpan.appendChild(currentPrice);
        wrapForSpan.appendChild(cross);
        wrap.before(wrapForSpan);

        if (invalidData.length > 0) {
            wrap.after(invalidData);
        } else {
            invalidData.innerText = '';
        }
    } else {
        inputPrice.style.borderColor = 'red';
        inputPrice.style.color = 'red';
        invalidData.style.color = 'red';
        invalidData.innerText = 'Please enter correct price';
        wrap.after(invalidData);
    }
}

function clearPrice(event){
    document.body.removeChild(event.path[2]);
}