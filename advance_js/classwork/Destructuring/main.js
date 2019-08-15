// let user = {name: 'Jong', years: 30};

// let {name, years: age, admin = false} = user;

// console.log(name)
// console.log(age)
// console.log(admin)

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1,2, 10])));

function inBetween(start, end) {
    return el => el >= start && el <= end;
}

function inArray(arr) {
    debugger;
    return function(el){
        return arr.includes(el);
    }
}