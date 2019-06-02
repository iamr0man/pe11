// let string1 = prompt("Insert your string: "),
//     string2 = '';

// for(let i = 0; i < string1.length; i++) {
//     if(i % 2 !== 0) {
//         string2 += string1[i].toUpperCase();
//     }else{
//         string2 += string1[i];
//     }
// }

// console.log(string2);

const cut = (string, maxLength) => {
    let result = '';
    if(string.length > maxLength) {
        result+= string.substring(0, maxLength) + '...';
    }
    else {
        result = string;
    }
    return result;
}

console.log(cut("wikiped", 4));

const Storage = {
	apple: 8,
	beef: 162,
	banana: 14,
	chocolate: 0,
	milk: 2,
	water: 16,
	coffee: 0,
	blackTea: 13,
	cheese: 0
};


const getAmount = (goodsList) => {
    const goodsArray = goodsList.split(', ');
    for(let i = 0; i < goodsArray.length; i++){
        if(Storage.hasOwnProperty(goodsArray[i])) {
            goodsArray[i] += ' - ' + Storage[goodsArray[i]];
        } else {
            goodsArray[i] += ' - not found'; 
        }
    }

    let result = '';
    for(let good of goodsArray) {
        result += good + ', ';
    }

    return result;
}

// console.log(getAmount('apple, milk, cheese, avoxado'));

// текущая дата
// var date = new Date();

// час в текущей временной зоне
// console.log( date.getHours() );

// сколько сейчас времени в Лондоне?
// час в зоне GMT+0
// console.log( date.getUTCHours() );

// function bench(f) {
//     var date = new Date();
//     for (var i = 0; i < 10000; i++) {
//         f(arr);
//     }
//     return new Date() - date;
// }

// console.log('cut - '+bench(cut("Wikip" , 4)) + 'ms');
// console.log('getAmount - '+bench(getAmount('apple, milk, cheese, avoxado')) + 'ms');

const getDayAgo= (numberOfDays) => {
    const date = new Date();
    const currentDate = date.getDate();
    date.setDate(currentDate - numberOfDays);
    return date.getDate();
};

console.log(getDayAgo(7));