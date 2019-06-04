// function myMap(callback){
//     let resultArray = [];
//     for(let i = 0; i < this.length; i++){
//         const currentIndex = callback(this.i, i, this);
//         resultArray.push(currentIndex);
//     }
//     return resultArray;
// }

function getBreakFast(){
    
    let dish = 'fresh meat',
    fantasticBreakFast = [];
    do{
        dish = prompt('What did you eat at the morning?');
        if(dish.length > 2){
            fantasticBreakFast.push(dish);
        }
    } while(dish.length > 2);
    
    return fantasticBreakFast;
}


// function giveMe(array){
//     array.forEach((element,index,scrArray) => {console.log(scrArray.pop(element)); giveMe(scrArray)});
// }

// giveMe(getBreakFast());

// const copyArray = (array) => {
//     let newArray = new Array();
//     array.forEach(element => {
//         newArray.push(element);
//     });

//     return newArray;
// }

const copyArray = (array) => array.map((e) => e);

console.log(copyArray(getBreakFast()));

// const getBr = getBreakFast();
// const newArray = copyArray(getBr);

// console.log("===" , getBr === newArray);
// console.log("==" , getBr == newArray);


// function getItemsList(goodsName) {
//     goodsName = goodsName.split(',');
//     const goods = new Set(goodsName);
//     return [...goods];
// }

// console.log(getItemsList("Milk, cheese, bread, water, Cola, Cola"))