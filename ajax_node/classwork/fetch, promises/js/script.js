$(function () {
    
    const pa = new ProductApi();
    pa.loadProducts().done(function (res) {
        
        let products = [];
        const data = JSON.parse(res).data;
        
        if (Array.isArray(data)) {
            products = data.map(product => new Product(product))
        }

        let container = document.getElementById('container')
        container.innerHTML = List.buildList(products, function (item) {
            return `<div class="title">${item.name}</div><div class="cart"><button class="btn-add" type="button">add to cart</button></div>`
        });

        $('.btn-add').on('click', () => alert('success'))
    })
});