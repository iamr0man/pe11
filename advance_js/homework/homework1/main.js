/**
 * Класс, объекты которого описывают параметры гамбургера. 
 * 
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {

    this.size = size;
    this.stuffing = stuffing;
    this.topping = [];
    
    if(size === undefined && stuffing === undefined) {
        throw new HamburgerException("no size given")
    } else if(size !== Hamburger.SIZE_SMALL && size !== Hamburger.SIZE_LARGE) {
        throw new HamburgerException(`invalid size ${this.size.name}`)
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
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 * 
 * @param newTopping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function (newTopping) {
    let currentTopping = newTopping === Hamburger.TOPPING_MAYO ? 'TOPPING_MAYO' : 'TOPPING_SPICE';
    if (!(this.topping.includes(newTopping))) {
        this.topping.push(newTopping);
    } else {
        throw new HamburgerException(`duplicate topping ${currentTopping}`);
    }
}

/**
 * Убрать добавку, при условии, что она ранее была 
 * добавлена.
 * 
 * @param oldTopping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (oldTopping) {
    let topping = this.topping;
    if (topping.includes(oldTopping)) {
        topping.splice(topping.indexOf(oldTopping), 1);
    }
}

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function () {
    return this.topping;
}

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {
    return this.size;
}

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
}
/**
 * Find topping
 *  */ 
Hamburger.prototype.findItem = function(toping) {
    if(toping === Hamburger.TOPPING_SPICE){
        console.log('true');
    }
} 

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {
    let sum = 0;
    for (let [key, value] of Object.entries(this)) {
        if (value instanceof Array) {
            if (value.length > 1) {
                sum += value.reduce((acc, current) => acc.cost + current.cost);
            } else {
                sum += value[0].cost;
            }
        } else {
            sum += value.cost;
        }
    }
    return parseInt((sum * 105.58).toFixed(2));
}

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () {
    let sum = 0;
    for (let [key, value] of Object.entries(this)) {
        if (value instanceof Array) {
            if (value.length > 1) {
                sum += value.reduce((acc, current) => acc.calories + current.calories);
            } else {
                sum += value[0].calories;
            }
        } else {
            sum += value.calories;
        }
    }
    return sum;

}


/**
 * Представляет информацию об ошибке в ходе работы с гамбургером. 
 * Подробности хранятся в свойстве message.
 * @constructor 
 */
function HamburgerException(message) {
    this.message = message;
    this.name = "Исключение, определенное пользователем";
}

try {
    var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());
// сколько стоит
console.log("Price: ", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// А сколько теперь стоит? 
console.log("Price with sauce: ", hamburger.calculatePrice());
// Проверить, большой ли гамбургер? 
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1

// var h2 = new Hamburger(); // => HamburgerException: no size given

// var h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE);

var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
h4.addTopping(Hamburger.TOPPING_MAYO);
h4.addTopping(Hamburger.TOPPING_SPICE);
h4.addTopping(Hamburger.TOPPING_SPICE);

} catch(e){
    console.log(e.message);
}


