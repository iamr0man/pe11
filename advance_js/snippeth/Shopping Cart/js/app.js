(function () {

    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart')

    cartInfo.addEventListener('click', function () {
    cart.classList.toggle('show-cart')
    });
})();

(function () {

    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            // console.log(e.target);

            if (e.target.parentElement.classList.contains('store-item-icon')) {
                let fullPath = e.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf('img') + 3;
                let partPath = fullPath.slice(pos);

                const item = {};
                item.img = `img-cart${partPath}`;

                let name = e.target.parentElement.parentElement.nextElementSibling
                    .children[0].children[0].textContent;
                let price = e.target.parentElement.parentElement.nextElementSibling
                    .children[0].children[1].textContent.slice(1).trim();

                item.name = name;
                item.price = price;

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between',
                    'text-capitalize', 'my-3');

                cartItem.innerHTML = `
                    <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                    <div class="item-text">
                        <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                        <span>$</span>
                        <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                    </div>
                    <a href="#" id='cart-item-remove' class="cart-item-remove">
                        <i class="fas fa-trash"></i>
                    </a>`;

                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');

                cart.insertBefore(cartItem,total);
                alert('item added to the cart');
                showTotals();
            }
        });
    });

    function showTotals(){
        
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');

        items.forEach(function(item){
            total.push(parseFloat(item.textContent));
        });
        
        const totalMoney = total.reduce(function(acc, item){
            acc+=item;
            return acc;
        }, 0).toFixed(2);

        document.getElementById('cart-total').textContent = totalMoney;
        document.querySelector('.item-total').textContent = totalMoney;
        document.getElementById('item-count').textContent = total.length;
    }

})();

const cartList = document.getElementById('cart');
const clearBtn = document.getElementById('clear-cart')

cartList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);

function removeItem(e){
    if(e.target.parentElement.parentElement.classList.contains('cart-item')){
        if(confirm("Are u sure?")){
            e.target.parentElement.parentElement.remove();
            showTotals();
        }
    }
}

function showTotals(){
        
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');

    items.forEach(function(item){
        total.push(parseFloat(item.textContent));
    });
    
    const totalMoney = total.reduce(function(acc, item){
        acc+=item;
        return acc;
    }, 0).toFixed(2);

    document.getElementById('cart-total').textContent = totalMoney;
    document.querySelector('.item-total').textContent = totalMoney;
    document.getElementById('item-count').textContent = total.length;
}

function clearItems() {
    while (cartList.firstElementChild.classList.contains('cart-item')) {
        cartList.removeChild(cartList.firstElementChild);
    }
    showTotals();
}