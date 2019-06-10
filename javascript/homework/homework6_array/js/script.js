function filterBy(array, object){
    const arrOfObject = [];
    object = object.name.toLowerCase();
    array.forEach(element => {
        if(typeof element === object){
            arrOfObject.push(element);
        }
    });
    return arrOfObject;
}
const arrayOfNumber = filterBy([NaN, 9 , '9'], Number);
console.log(arrayOfNumber);