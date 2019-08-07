const ratings = {
    sony: 4.3,
    samsung: 3.9,
    vizio: 2.3,
    panasonic: 3.7,
    phillips: 3.1
}

const starsTotal = 5;

const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

let product;

productSelect.addEventListener('change', (e) => {
    product = e.target.value;
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});

ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;

    if(rating > 5){
        alert('Please rate 1 - 5');
        return;
    }

    ratings[product] = rating;
    getRatings();
});

document.addEventListener('DOMContentLoaded', getRatings);

function getRatings(){
    for(let rating in ratings){
        const starPercentage = (ratings[rating] / starsTotal) * 100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
}