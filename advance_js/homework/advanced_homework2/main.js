/**
 * Класс, объекты которого описывают параметры гамбургера. 
 * 
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
class Hamburger {
    constructor(size, stuffing) {
        try {
            this.size = size;
            this.stuffing = stuffing;
            this.topping = [];
            debugger;;
            if (!size) {
                throw new HamburgerException("no size given")
            } else if (size.name !== Hamburger.SIZE_SMALL.name && size.name !== Hamburger.SIZE_LARGE.name) {
                throw new HamburgerException(`invalid size ${this.size.name}`)
            }

        } catch (e) {
            console.log(e.message);
        }
    };

    addTopping(newTopping) {
        try {
            let currentTopping = newTopping === Hamburger.TOPPING_MAYO ? 'TOPPING_MAYO' : 'TOPPING_SPICE';
            if (!(this.topping.includes(newTopping))) {
                this.topping.push(newTopping);
            } else {
                throw new HamburgerException(`duplicate topping ${currentTopping}`);
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    getToppings = function () {
        return this.topping;
    }

    removeTopping(oldTopping) {
        let topping = this.topping;
        if (topping.includes(oldTopping)) {
            topping.splice(topping.indexOf(oldTopping), 1);
        }
    }

    getSize() {
        return this.size;
    }

    getStuffing() {
        return this.stuffing;
    }

    calculatePrice() {

        return this.topping.reduce((acc, current) => acc + current.cost, 0) + this.size.cost + this.stuffing.cost;

    }

    calculateCalories() {
        return this.topping.reduce((acc, current) => acc + current.calories, 0) + this.size.calories + this.stuffing.calories;
    }

}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {
    cost: 50,
    calories: 20,
    name: 'SIZE_SMALL'
};
Hamburger.SIZE_LARGE = {
    cost: 100,
    calories: 40,
    name: 'SIZE_LARGE'
};
Hamburger.STUFFING_CHEESE = {
    cost: 10,
    calories: 20,
    name: 'STUFFING_CHEESE'
};
Hamburger.STUFFING_SALAD = {
    cost: 20,
    calories: 5,
    name: 'STUFFING_SALAD'
};
Hamburger.STUFFING_POTATO = {
    cost: 15,
    calories: 10,
    name: 'STUFFING_POTATO'
};
Hamburger.TOPPING_MAYO = {
    cost: 15,
    calories: 5,
    name: 'TOPPING_MAYO'
};
Hamburger.TOPPING_SPICE = {
    cost: 20,
    calories: 0,
    name: 'TOPPING_SPICE'
};



/**
 * Представляет информацию об ошибке в ходе работы с гамбургером. 
 * Подробности хранятся в свойстве message.
 * @constructor 
 */
function HamburgerException(message) {
    this.message = message;
    this.name = "Исключение, определенное пользователем";
}


// var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// hamburger.addTopping(Hamburger.TOPPING_MAYO);

// console.log("Calories: ", hamburger.calculateCalories());

// console.log("Price: ", hamburger.calculatePrice());

// hamburger.addTopping(Hamburger.TOPPING_SPICE);

// console.log("Price with sauce: ", hamburger.calculatePrice());
// // Проверить, большой ли гамбургер? 
// console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// // Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// console.log("Have %d toppings", hamburger.getToppings().length); // 1

// debugger;

var h2 = new Hamburger(); // => HamburgerException: no size given


var h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE);

var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
h4.addTopping(Hamburger.TOPPING_MAYO);
h4.addTopping(Hamburger.TOPPING_SPICE);
h4.addTopping(Hamburger.TOPPING_SPICE);

var h5 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
h5.addTopping(Hamburger.TOPPING_MAYO);
h5.addTopping(Hamburger.TOPPING_SPICE);
h5.addTopping(Hamburger.TOPPING_SPICE);