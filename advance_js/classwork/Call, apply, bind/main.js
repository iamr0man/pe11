// function Human(name, height, weight) {
//     this.name = name;
//     this.height = height;
//     this.weight = weight;
//     this.abilities = [
//         Human.CAN_DRINK,
//         Human.CAN_EAT
//     ];
// }

// Human.prototype.canDo = function(){
//     return this.abilities.join(', ')
// };

// Human.prototype.addAbilities = function(ability){
//     this.abilities.push(ability);
//     return this;
// };


// Human.CAN_WALK = {speed: 4};
// Human.CAN_EAT = {spaciousness: 6};
// Human.CAN_DRINK = {spaciousness: 10};
// Human.CAN_CODE = {position: 'junior'};

// function Programmer (name, height, weight){
//     Human.call(this, name, height, weight);
//     this.__proto__ = Human.prototype;
//     this.addAbilities(Human.CAN_CODE);
// }

// const p = new Programmer("Roman", 180, 70);

class ProductError{

    constructor(message){
        this.message = message;
        this.name = 'product error';
    }
}

class Product{

    #id = Math.floor(Math.random()*120);

    constructor(name,price){
        this.name =name;
        this.price = price;
    }

    static comparingProduct(o1, o2){
        if(o1.price - o2.price > 0){
            return 1;
        } else if(o1.price - o2.price < 0) {
            retutn -1;
        } else {
            return 0;
        }

    }

    get id(){
        return this.#id;
    }

    set price(val) {
        if(val > 0){
            this._price = val;
        } else {
            throw new ProductError('Wrong price set');
        }
    }

    get price(){
        return this._price;
    }

    makeDiscount(discount){
        return this.price - (this.price * discount/100);
    }

    print(){
        return `name of product is ${this.name} and his price - ${this.price}$`;
    }
}

try {
    const i6 = new Product('phone 6', 240);
    const i7 = new Product('phone 7', 340);
    const i8 = new Product('phone 8+', 540);
    // console.log(Product.comparingProduct(i8, i7));
    console.log(Product.comparingProduct(i6,i7,i8));
} catch(e){
    // console.log(e.message);
}
