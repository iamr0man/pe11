class ProductError {
    constructor(message) {
        this.name = 'producterror';
        this.message = message;
    }

    getMessage() {
        return this.message;
    }
}

class Product {
    constructor({id, price = 0, reviews = [] ,title: name, old_price = 0}) {
        this.name = name;
        this.id = id;
        this.old_price = old_price === 0 ? price : old_price;
        this.reviews = reviews;
        this.discount = 0;
    };

    get price() {
        return
        this._price -
            this.discount * this._price / 100;
    }

    makeDiscount(disc) {
        this.discount = disc;
    }

    print() {
        // console.log(`Product name: ${this.name}
        // Product price: ${this._price}
        // Discount: ${this.discount}%
        // Final price: ${this.price}`)
    }

    toString() {
        return `Product name: ${this.name}
        Product price: ${this._price}
        Discount: ${this.discount}%
        Final price: ${this.price}`
    }

    compare(product) {
        // if (this._price > p2.price) {
        //     console.log(`${p1.name} is more expensive ${p1.price}`)
        // } else {
        //     console.log(`${p2.name} is more expensive ${p2.price}`);
        // }
    }
}

class ProductApi extends api {
    loadProducts() {
        return super.get('http://localhost:3000/products')
    }
} 