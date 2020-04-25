// function printerError(s) {

//     let errors = 0;
//     debugger;
//     for(let i = 0; i < s.length; i++){
//       if(s[i] > s[i+1] && s[i+1] > s[i+2]) {
//         errors++;
//       }  
//     }
//    return errors;
// }

// console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));

// function partlist(arr) {
//     const newArray = [];
//     for(let i = 0; i < arr.length-1; i++){
//       newArray.push([arr.slice(0, i+1).join(' '), arr.slice(i+1, arr.length).join(' ')]);
//     }
//     return newArray;
// }

// function disemvowel(str) {
//     return str.replace(/[aeiouy]/gi, '');;
// }
// // /^[aeiou]$/i

// console.log(disemvowel('GGGooOPOOOPOOOPP'));

// const today = new Date(),
// tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1, 23),
// res = (tomorrow.getHours()+1 - today.getHours());
// console.log(res*60*60);

// function duplicateCount([...text]) {
//     const string = text.join('');
//     let res = 0,
//     counter = 0;
//     for (let i = 0; i < string.length; i++) {
//         for (let j = 0; j < string.length; j++) {
//             if(text[i] === string[j]){
//                 counter++;
//             }
//         }
//         if(counter > 1) {res++;}
//     }
//     return res;
// }

// debugger;
// console.log(duplicateCount('abca'));


// function flattenAndSort([...array]) {
//     let res = [];
//     function flattenDeep(arr1) {
//         return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
//     }
//     res = flattenDeep(array);
//     return res.sort((a, b) => a -b);
// }
// debugger;
// console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));


// function getMiddle(s){
//     let res = '';
//         for(let i = s.length/2-1; i < s.length/2+1; i++){
//         res += s[i];
//     }
//     return res;
// }

// console.log(getMiddle('mid'));

// function getCount(str) {
//     let vowelsCount = 0,
//     vowel = 'aeiou'.split('');

//     for(let i = 0; i < str.length; i++){
//       for(let j = 0; j < vowel.length;j++){
//         if(str[i] === vowel[j]){
//             vowelsCount++;
//             break;
//           }
//       }
//     }

//     return vowelsCount;
// }

// debugger;
// console.log(getCount('pear tree'));

// function highAndLow(numbers){
//     numbers = numbers.split(' ');
//     let high = numbers[0], min = numbers[0];
//     for(let i = 1; i < numbers.length; i++){
//         if(high<numbers[i]) {high = numbers[i];}
//         if(min>numbers[i]) {min = numbers[i];}
//     }
//     return high + ' ' + min;
// }

// debugger;
// console.log(highAndLow('456 89 1 0'))

// function findShort(s){ 
// 	s = s.split(' ').map(element => element.length);
//  	return Math.min.apply(0, s);
// }

// function XO(str) {
// 	let counterO = 0,
// 	counterX = 0;

// 	if(str === ''){return true;}

// 	str = str.toLowerCase().split('');

//     if(str.indexOf('o') === -1 && str.indexOf('x') === -1){return false;}

//     for(let i = 0; i < str.length; i++){
//       if(str[i] === 'o'){counterO++;}
//       if(str[i] === 'x'){counterX++;}
//     }

//     if(counterO === counterX) {return true;}

//     return false;
// }


// function XO(str){
// 	let x = str.match(/x/gi);
// 	let o = str.match(/o/gi);
// 	return (x && x.length) === (o && o.length);
// }

// function XO(str){
// 	str = str.toLowerCase().split('');
// 	debugger;
// 	return str.filter(x => x === 'x').length === str.filter(o=> o === 'o').length;
// }

// function getMiddle(s){
// 	const length = s.length % 2 === 0;
// 	return length ? s.slice(Math.floor(s.length/2)-1,Math.floor(s.length/2)+1) : s[Math.floor(s.length/2)];
// }

// function solution(number){
// 	let sum = 0;
// 	for(let i = 0; i < number; i++){
// 		if(i % 3 === 0 || i % 5 === 0){sum+=i;}
// 	}
// 	return sum;   
// }

// console.log(solution(10));

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".

// function DNAStrand(dna) {
// 	dna = dna.toUpperCase();
// 	let res = '';
// 	for (let i = 0; i < dna.length; i++) {
// 		switch (dna[i]) {
// 			case 'A':
// 				res += 'T';
// 				break;
// 			case 'T':
// 				res += 'A';
// 				break;
// 			case 'C':
// 				res += 'G';
// 				break;
// 			case 'G':
// 				res += 'C';
// 				break;
// 		}
// 	}
// 	return res;
// }

// const pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
// 	return dna.split('').map(function(v){return pairs[v]}).join('');
// }

// console.log(DNAStrand('ATTGC'));

// function solution(nums){
// 	nums = nums || [];
// 	return nums.sort((a,b) => a - b);
// }

// function squareDigits(num){
// 	return +(('' + num).split('').map(element => element*element).join(''));
// }
// console.log(squareDigits(9119));

// function GetSum( a,b )
// {
//   let result =0, temp = b;
//   if(a > b) {b = a; a = temp};
// 	do{
// 		result+=a;
// 		a++;
// 	}while(a <= b);
// 	return result;
// }

// console.log(GetSum(379, -439))

// function nbYear(p0, percent, aug, p) {
// 	debugger;
//     let i = p0, year = 0;
//     for(;i <= p; i = parseInt(i + i*(percent/100)+aug)){year++}
//     return year;
// }

// console.log(nbYear(1500000, 0.0, 10000, 2000000));

// function isIsogram(str){
// 	debugger;
// 	return (str && str.toLowerCase().split('').filter((letter => letter === letter)).length < 2);
// }

// function isIsogram(str){
// 	// debugger;
// 	str = str.toLowerCase().split('');
// 	for(let i = 0; i < str.length; i++){
// 		if(str.indexOf(str[i], i+1) !== -1) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// function isIsogram(str){
// 	str.toLowerCase().split('').filter((letter, i, array) => {
// 		if(array.indexOf(letter, i+1) !== -1){ 
// 			return false;
// 		}
// 	});
// }

// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size === str.length;
// }

// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("isogram"));
// console.log(isIsogram("aBA"));
// console.log(isIsogram(""));

// function findNextSquare(sq){
// 	return Math.sqrt(sq)%1 ? -1 : Math.pow(Math.sqrt(sq) + 1,2);
// }

// console.log(findNextSquare(625))
// console.log(findNextSquare(115))

// function sumTwoSmallestNumbers(numbers) {  
// 	let temp = numbers.indexOf(Math.min.apply(0, numbers));
// 	console.log(numbers.slice(-temp, temp));
// 	return Math.min.apply(0, numbers) + Math.min.apply(0, numbers.slice(-temp, temp));
// }

// function sumTwoSmallestNumbers(numbers) { 
// 	let temp = numbers.indexOf(Math.min.apply(0, numbers));
// 	return Math.min.apply(0, numbers.splice(temp, 1)) + Math.min.apply(0, numbers);
// }


// function sumTwoSmallestNumbers(numbers) {
// 	numbers.sort((a,b) => a-b);
// 	return numbers[0] + numbers[1];
// }
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19,4, 22]))

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }

// function removeSmallest(numbers) {
//     debugger;
//     const min = Math.min.apply(0, numbers);
//     return numbers.filter(e => e > min);
// }

// function removeSmallest(numbers) {
//     const min = Math.min.apply(0, numbers), newArr = [];
//     let flag = false;
//     debugger;
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] !== min) newArr[i] = numbers[i];
//         else if(numbers[i] === min && !flag) {
//             flag = true;
//             newArr[i] = numbers[++i]; 
//         }
//         else if(flag) {
//             newArr[i] = numbers[i];
//         }
//     }
//     return newArr;
// }

// console.log(removeSmallest([9, 4,  6, 4 ,8, 4, 4]));

// function dontGiveMeFive(start, end){

//     let arr = [];
//     for(let i = start; i <= end; i++){
//         arr.push(i);
//     }
//     arr = arr.map(val => val+'');
//     arr = arr.filter(val => {
//         for(let i = 0; i < val.length; i++){
//             if(!val.includes('5')){
//                 return val;
//             }
//         }
//     });
//     return arr.length;
// }

// console.log(dontGiveMeFive(1,16))

// function dontGiveMeFive(start, end) {
//     let count = 0
//     for (let i = start; i <= end; i++) {
//       if (!/5/.test(i)) {
//         count++
//       }
//     }
//     return count
// }

// function oddOrEven(array) {
//     return array.reduce((a,b) => a+b , 0) % 2 === 0 ? 'even' : 'odd';
// }

// function reverseWords(str) {
//     let result = ''; 
//     str.split(' ').map(val => {
//         result += val.split('').reverse().join('') + ' ';
//     })
//     return result.substring(0, result.length -1);
// }

// function reverseWords(str) {

//     return str.split(' ').map(function(word){
//         return word.split('').reverse().join('');
//     }).join(' ')
// }

// console.log(reverseWords('Roma D1ana'))

// function removeSmallest(array) {
//     array.splice(array.indexOf(Math.min(...array)), 1);
//     return array;
// }

// function reverseWords(array) {
//     const indexOfMin = Math.min(...array);
//     return [...array.slice(0, indexOfMin), ...array.slice(indexOfMin + 1)]
// }

// function removeSmallest(array){
//     const min = Math.min(...array);
//     return array.filter((val, ind, array) => ind !== array.indexOf(min));
// }

// console.log(removeSmallest([1,2,3,4,1,5,6]))

// const sequenceSum = (begin, end, step) => {
//     if(begin > end) return 0;
//     return sequenceSum(begin + step, end, step);

// };

// let res = sequenceSum(1,5,3);
// console.log(res);

// function deepEqual(obj1, obj2) {

//     let result = true;
//     for (let key in obj1) {
//         if (obj1[key] === obj2[key]) {
//             continue;
//         } else if (typeof obj1[key] === 'object') {
//             result = deepEqual(obj1[key], obj2[key]) //JSON.stringify(obj1) === JSON.springify(obj2);
//         } else {
//             result = false;
//         }
//     }
//     return result;
// }

// function deepEqual(a, b) {
//     if (a === b) return true;

//     if (a == null || typeof a != "object" ||
//         b == null || typeof b != "object")
//         return false;

//     var propsInA = 0,
//         propsInB = 0;

//     for (var prop in a)
//         propsInA += 1;

//     for (var prop in b) {
//         propsInB += 1;
//         if (!(prop in a) || !deepEqual(a[prop], b[prop]))
//             return false;
//     }

//     return propsInA == propsInB;
// }

// debugger;
// const res = deepEqual({
//     title: 'Modern JavaScript',
//     arr: [1, , 22],
// }, {
//     title: 'Modern JavaScript',
//     arr: [1, , 22]
// });

// function filter(array, test){
//     let passed = [];
//     for(let item of array){
//         if(test(item)){
//             passed.push(item);
//         }
//     }
//     return passed;
// }

// function every(array, test){
//     let result = true;
//     const everys = [];
//     for(let item of array){
//         if(test(item)){
//             everys.push(item);
//         } else {
//             result = false;
//         }
//     }
//     return result;
// }

// function evert(array, test){
//     for(let item of predicate){
//         if(!predicate(element)) return false;
//     }
//     return true;
// }

// console.log(every([1,3,5, 11], (n) => n < 10));

// function map(array, transform){
//     let mapped = [];
//     for(let item of array){
//         mapped.push(transform(item));
//     }
//     return mapped;
// }

// function reduce(array, combine, start) {
//     let current = start;
//     for(let item of array){
//         current = combine(current + item);
//     }
//     return current;   
// }

// function reduce(array){
//     return array.reduce((acc, current) => acc.concat(current));
// }

// let arrays = [[1, 2, 3], [4, 5], [6]];
// console.log(reduce(arrays))

// function loop(start, test, update, body) {
//    debugger;
//     for (let value = start; test(value); value = update(value)) {
//       body(value);
//     }
//   }

// loop(3, n => n > 0, n => n - 1, console.log);

// function countBy(items, groupName) {
//     let counts = [];
//     for(let item in items){
//         let name = groupName(item);
//         let known = counts.findIndex(i => i.name === name);
//         if(known === -1){
//             counts.push({name, count: 1});
//         } else {
//             counts[known].count++;
//         }
//     }
//     return counts;
// }
// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

// class Vector {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   plus({x, y}){
//     return new Vector(this.x + x, this.y + y); 
//   }

//   minus({x, y}){
//     return new Vector(this.x - x, this.y - y); 
//   }

//   length(){
//     return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
//   }
// }

// console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// console.log(new Vector(3, 4).length());

// let map = {one: true, two: true, hasOwnProperty: true};

// Object.defineProperty(map, 'hasOwnProperty', {
//   value: function(key) {
//     return Object.keys(this).some((v) => v === key);
//   }
// })

// console.log(Object.prototype.hasOwnProperty.call(map, 'one'));

// console.log(map.hasOwnProperty(''));

// function stray(res){
//     res.sort((a,b) => a-b);
//     return res[0] === res[1] ? res[res.length -1] : res[0]
// }

// console.log(stray([-1,-1, -3, -1]))

// const stray = nums => nums.reduce((a, b) => a ^ b);
// debugger;
// console.log(stray([1,1,3, 1]))

// const reverseLetter = (str) => str.match(/([a-z])/g).reverse().join('')

// console.log(reverseLetter('roma'))

// function sorted(arr) {
//     console.log(arr);
//     if (JSON.stringify(arr) === JSON.stringify(arr.sort((a, b) => a - b))) {
//         return 'yes, ascending';
//     }
//     console.log(arr);

//     if (JSON.stringify(arr) === JSON.stringify(arr.sort((a, b) => b - a))) {
//         return 'no, descending';
//     }
//     console.log(arr);
//     return 'no'
// }

// console.log(sorted([11,5]))

// function divisors(integer) {
//     const arr = [];
//     for(let i = 2; i < integer; i++){
//         if(integer % i === 0){
//             arr.push(i);
//         }
//     }
//     if(arr.length === 0){
//         return `${integer} is prime`
//     }
//     return arr;
// };

// function divisors(int) {
//     const res = []
//     for(let i = 2; i < Math.floor(int / 2); i++) {
//         if(int % i === 0) res.push(i);
//     }
//     return res.length ? res : int + ' is prime';
// }

// console.log(divisors(15))
// console.log(divisors(13))

// function capitals(word) {
//     const res = []
//     for(let i = 0; i < word.match(/([A-Z])/g).length; i++){
//         res.push(word.indexOf(word.match(/([A-Z])/g)[i]));
//     }
// };

// capitals('CodEWaRs');

// function polindrome(str) {
//     for (let i = 0, j = str.length - 1; j > i; i++, j--) {
//         if (str[i] !== str[j]) return false;
//     }
//     return true;
// }

// function palindromeChainLength(n , count = 0) {
//     for(let i = 0;; i++){
//         if (polindrome(n + '')) {
//             return count;
//         } else {
//            return palindromeChainLength(reverseNumber(n) + n, ++count);
//         }
//     }
// }

// function reverseNumber(n) {
//     reverse = 0
//     while (n > 0){
//         lastDigit = n % 10
//         reverse = (reverse * 10) + lastDigit
//         n = Math.floor(n / 10)
//     }
//     return reverse;
// }

// const res = palindromeChainLength(87)
// console.log(res);

// var palindromeChainLength = function (n) {
//     var steps = 0;
//     while (!isPalindromic(n)) {
//         steps++;
//         n += reverseNum(n);
//     }
//     return steps;
// };

// function isPalindromic(n) {
//     if (n < 0) throw 'isPalindromic only works for positive numbers.';
//     if (Math.floor(n / 10) === 0) return true; // Single digit numbers are palindromic.
//     if (n % 10 === 0) return false; // n > 0, without leading 0s cannot be palindromic if ending in 0.
//     return reverseNum(n) === n;
// }

// function reverseNum(n) {
//     var r = 0;
//     while (n) {
//         r *= 10;
//         r += n % 10;
//         n = Math.floor(n / 10);
//     }
//     return r;
// }

// class MultiplicatorUnitFailure extends Error {}

// function primitiveMultiply(a, b) {
//     if (Math.random() < 0.2) {
//         return a * b;
//     } else {
//         throw new MultiplicatorUnitFailure("Klunk");
//     }
// }

// function reliableMultiply(a, b) {
//     for(;;){
//         try{
//             return primitiveMultiply(a, b)
//         }catch(e){
//             if(!(e instanceof MultiplicatorUnitFailure)){
//                 throw e;
//             }
//         }
//     }
// }
// const res = reliableMultiply(8, 8);
// console.log(res)

// let stock = "1 lemon, 2 cabbages, and 101 eggs";
// function minusOne(match, amount, unit) {
//   amount = Number(amount) - 1;
//   if (amount == 1) { // only one left, remove the 's'
//     unit = unit.slice(0, unit.length - 1);
//   } else if (amount == 0) {
//     amount = "no";
//   }
//   return amount + " " + unit;
// }
// console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// // → no lemon, 1 cabbage, and 100 eggs

// verify(/ca[rt]/,
//     ["my car", "bad cats"],
//     ["camper", "high art"]);

// verify(/pr?o?p/,
//     ["pop culture", "mad props"],
//     ["plop"]);

// verify(/ferr[eya]/,
//     ["ferret", "ferry", "ferrari"],
//     ["ferrum", "transfer A"]);

// verify(/[ia]cious/,
//     ["how delicious", "spacious room"],
//     ["ruinous", "consciousness"]);

// verify(/\s[.]/,
//     ["bad punctuation ."],
//     ["escape the dot"]);

// verify(/\w{7,}/,
//     ["hottentottententen"],
//     ["no", "hotten totten tenten"]);

// verify(/^[rw].+/,
//     ["red platypus", "wobbling nest"],
//     ["earth bed", "learning ape"]);

// function verify(regexp, yes, no) {
//     // Ignore unfinished exercises
//     if (regexp.source == "...") return;
//     let result = true;
//     yes.forEach(function (s) {
//         if (!regexp.test(s))
//             console.log("Не нашлось '" + s + "'");
//     });
//     no.forEach(function (s) {
//         if (regexp.test(s)) {
//             console.log("Неожиданное вхождение '" + s + "'");
//             result = false;
//         }
//     });
//     console.log(result)
// }

// reg = /<[\s\S]+?>/g;

// str = `... <!-- My -- comment
//  test --> ..  <!----> ..
// `;

// alert( str.match(reg) ); // '<!-- My -- comment \n test -->', '<!---->'

// reg = /<[^<>]+>/g;

// str = '<> <a href="/"> <input type="radio" checked> <b>';

// console.log(str.match(reg)); // '<a href="/">', '<input type="radio" checked>', '<b>'


// reg = /#(\w{3}\b|\w{6})+/g;

// str = "color: #3f3; background-color: #AA00ef; and: #abcd";

// alert( str.match(reg) ); // #3f3 #AA00ef

// reg = /^-*\w*[.,]*/g;

// str = "-1.5 0 2 -123.4.";
// };

// let res = [2, 2, 2, 2, 2]
// function chach(){
// 	return Math.floor(Math.sqrt(res.map(i => Math.pow(i, 2)).reduce((acc, cur) => acc + cur)) / 2);
// }

// console.log(chach());

// function red(res){
//     debugger;
//     const r = [];
//     return res.reduce((prev, cur) => {
//         r.push((prev+cur) / 2);
//         return 0;
//     })
// }

// console.log(red(res));

// const removeDuplicateWords = s => Array.from(new Set(s.split(' '))).join(' ')

// const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

// console.log(removeDuplicateWords('beta gamma gamma'));

// function sumDigits(number) {
//     return 0 || number.toString().match(/\d/g).reduce((acc, cur) => +acc + +cur)
// }

// function getDivisorsCnt(n){
//     let j = 0;
//     for(let i =1; i < n/2; i++){
//         if(n % i === 0){
//             j++;
//         }
//     }
//     return j;
// }

// function getDivisorsCnt(n){
//     for(let d = 0, i = n; i >0; i--){
//         if(n % i === 0) d++
//     }
//     return d;
// }

// function reverseNumber(n) {
//     if(n > 0) {
//         return reverseNumberM(n);
//     } else {
//         return -reverseNumberM(Math.abs(n))
//     }
// }

// function reverseNumberM(n){
//     let res = 0, lastDigit = 0;
//     while(n > 0) {
//         lastDigit = n % 10;
//         res = res * 10 + lastDigit;
//         n = Math.floor(n / 10);
//     }
//     return res;
// }

// console.log(reverseNumber(-1234))

// console.log(str.match(reg)); // -1.5, 0, 2, -123.4

// function findOdd(arr){
//     let res = 0;
//     const digits = new Map()
//     for(let i = 0; i < arr.length; i++){
//         if(digits.get(arr[i]) !== undefined) {
//             const val = digits.get(arr[i])
//             digits.set(arr[i], val+1)
//         } else {
//             digits.set(arr[i], 1);
//         }
//     }

//     for(const [key, value] of digits){
//         if(value % 2 !== 0) res = key;
//     }

//     console.log(res)
// }
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// function findOdd(A){
//     const obj = {}
//     A.forEach(e => {
//         obj[e] ? obj[e]++ : obj[e] = 1;
//     })

//     for(prop in obj){
//         if(obj[prop] % 2 !== 0) return prop
//     }
// }

// findOdd([ 5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10 ])

// let n = 39;
// let i = 0;
// let temp = []
// while (n >= 10) {
//     n = n + ''
//     temp = n.match(/\d/g);
//     n = temp.reduce((a, b) => a * b)
//     i++;
// }

// return i
// persistence(999);

// function digital_root(num) {
//     debugger;
//     let times = 0;

//     num = num.toString();
//     while(num.length > 1){
//         times++;
//         num = num.split('').map(Number).reduce((a,b) => a + b ).toString();
//     }
//     return +num;
// }

// function digital_root(n) {
//     return (n - 1) % 9 + 1;
// }

// console.log(digital_root(123))

const arr = ['better', 'hire']
let randomLetters = ['h', 'r', 'i', 'e', 'b', 'e', '', '', 'e', 'r']

function isIncludes(word) {
    return word.every((e, i, array) => {
        if (randomLetters.includes(e)) {
            return true;
        }
    })
}

function deleteCharacter(word) {
    word.forEach((element) => {
        const index = randomLetters.indexOf(element)
        randomLetters.splice(index, 1)
        // console.log(randomLetters)
    });
}

function main(arr) {
    arr.forEach(e => {
        if (isIncludes([...e])) {
            deleteCharacter([...e])
        }
    })
}

main(arr)
// function orderPlease(string) {
//     const arr = string.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             a_num = +arr[j].match(/\d/g)
//             b_num = +arr[j + 1].match(/\d/g)
//             if (a_num > b_num) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

//     return arr.join(' ')
// }

// function order(string) {
//     return string.split(' ').sort((a, b) => {
//         return a.match(/\d/) - b.match(/\d/)
//     }).join(' ')
// }

// console.log(order('Th1s t3st o2e'))

// function letter_count(string) {
//     const myObj = {}
//     for (let i = 0; i < string.length; i++) {
//         if (!myObj[string[i]]) {
//             myObj[string[i]] = 1;
//         } else {
//             let old = myObj[string[i]];
//             myObj[string[i]] = ++old;
//         }
//     }
//     return myObj
// }

const letter_count = s =>
    s.split('')
    .reduce((accum, value) => {
        console.log(accum[value])
        accum[value] = accum[value] ? accum[value] + 1 : 1;
        return accum
    }, {})


// console.log(letter_count('arithmetics'))

// function likes(names) {
//     switch(names.length){
//         case 0:
//             return "no one likes this"
//         case 1:
//             return `${names[0]} likes this`;
//         case 2:
//             return `${names[0]} and ${names[1]} like this`
//         case 3: 
//             return `${names[0]}, ${names[1]} and ${names[2]} like this`
//         default:
//             return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//     }
// }

function likes(names) {
    var templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ];
    const idx = Math.min(names.length, 4)
    return templates[idx].replace(/{name}|{n}/g, val => {
        return val === '{name}' ? names.shift() : names.length;
    })
}

// console.log(likes(["Alex", "Jacob", "Ebby", "Carol"]))

// const alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// function alphabetPosition(text) {
//     return text ? text
//     .toUpperCase()
//     .replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\'\`\#\;\%\_[^0-9|\W]|\<\>\-\&])/g,"")
//     .replace(/[^0-9|\W]/g, val => {
//         console.log(val)
//         return alphabet.indexOf(val) + ' '
//     })
//     // .replace(/  /g, ' ')
//     .trim() : ''
// }

function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map(e => e.charCodeAt() - 64)
        .join(' ')
}

// console.log(alphabetPosition("_erager$%#$3453:: rsger:32446: wgre:"))

// function songDecoder(song) {
//     return song
//         .replace(/WUB/g, ' ')
//         .replace(/  +/g, ' ')
//         .split('')
//         .join('')
//         .trim()
// }

function songDecoder(song) {
    return song.replace(/(WUB)+/g, ' ').trim()
}

// console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'))

function dec2bin(dec) {
    return (dec >>> 0).toString(2).split('').filter(n => +n === 1).length
}

// console.log(dec2bin(1234))

function array_diff(a, b) {
    return a.filter(x => b.indexOf(x) === -1)
}

// function array_diff(a, b) {
//     return a.filter(x => !b.includes(x))
// }

// console.log(array_diff([1, 2, 3], [2, 3, 5]))

// function findOutlier(integers){
//     const odd = [], even = []
//     for (let i = 0; i < integers.length; i++) {
//         if(integers[i] % 2 === 0)  
//             odd.push(integers[i])
//         else
//             even.push(integers[i]) 
//     }
//     return odd.length === 1 ? odd[0] : even[0];
// }

function findOutlier(int) {
    var even = int.filter(a => a % 2 == 0);
    var odd = int.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
}

// console.log(findOutlier([38092298,-143539080,183498450,104812148,-1897126,-95053961,92536448,-151040634,88809426,-38735280]))

function digPow(n, p) {
    const str = n + '';
    const tmp = str.split('').reduce((acc, cur) => {
        return acc + Math.pow(cur, p++)
    }, 0)
    return tmp % n !== 0 ? tmp / n : -1
}

// console.log(digPow(92, 1))

const findMissingLetter = (array) => {
    const prevDigit = array.map(v => v.charCodeAt(0))
        .filter((v, i, a) => Math.abs(a[i] - a[i + 1]) === 2).join()
    return String.fromCharCode(Number(prevDigit) + 1)
}

// console.log(findMissingLetter(['O','Q','R','S']))

let a = [13, 34, 42]
let b = [169, 1157, 1764]

// function comp(a, b){

//     if (a == null || b == null) return false;
//     if (a.length != b.length) return false;

//     const sortedA = a.map(x => x*x).sort()
//     const sortedB = b.sort();

//     return JSON.stringify(sortedA)==JSON.stringify(sortedB)
// }

// function comp(array1, array2) {
//     if(array1 == null || array2 == null) return false;
//     array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
//     return array1.map(v => v * v).every((v, i) => v == array2[i]);
//   }

// console.log(comp(a, b))

// function createPhoneNumber(numbers){
//     const phone = numbers.join("");
//     return String("(" + phone.slice(0,3) + ") " + phone.slice(3, 6) + "-" + phone.slice(6) )
// }

// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";

//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }

//     return format;
// }

function createPhoneNumber(numbers) {
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))



function longestSubstringWithoutDiblication(string) {
    string = string.split('')
    let lastSeen = {}
    const longest = [
        [],
        []
    ]
    let startIdx = 0;

    //     for(const char, i in string){
    //         if(char in lastSeen)
    //             startIdx = Math.max(startIdx, lastSeen[char + 1])
    //         if(longest[1] - longest[0] < i + 1 - startIdx)
    //             longest = [startIdx, i+1]
    //         lastSeen[char] = 1;
    //     }
    //     // return string[longest[0]:longest[1]]
    // }


    // const tmp = [
    //     {
    //       filters: [
    //         {
    //             filter:{
    //                 type:"Color"
    //             },
    //             subFilter: {
    //                 name: "Black"
    //             }
    //         },
    //         {
    //             filter:{
    //                 type:"Sizes"
    //             },
    //             subFilter: {
    //                 name: "43"
    //             }
    //         },
    //       ]
    //     },
    //     {
    //       filters: [
    //         {
    //             filter:{
    //                 type:"Sizes"
    //             },
    //             subFilter: {
    //                 name: "43"
    //             }
    //         },
    //         {
    //             filter:{
    //                 type:"Color"
    //             },
    //             subFilter: {
    //                 name: "Teal"
    //             }
    //         },
    //       ]
    //     },
    //   ]

    // for(let i = 0; i < tmp.length; i++){
    //     const log = _.get(tmp, `tmp[${i}].filters[${i}].subFilter.name`)
    //     console.log(log)
    // }


    // function isValidWalk(walk) {
    //     const tmp = {}
    //     if(walk.length !== 10) {
    //         return false;
    //     }
    //     walk.forEach(v => tmp[v] === undefined ? tmp[v]=0 : tmp[v]+=1 )

    //     return tmp.n === tmp.s && tmp.w === tmp.e
}

function isValidWalk(walk) {
    function count(v) {
        return walk.filter(d => d === v).lenght
    }
    return walk.length === 10 && count('s') === count('n') && count('w') === count('e')
}

// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
// console.log(isValidWalk(['w']))
// console.log(isValidWalk(['w', 'e', 'n', 's']))
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))

// function catMouse(x, j){
//     if(!x || x.match(/\w/g).length !== 3) return 'boring without all three'
//     const between = x.match(/(m|C)\.*[D]?\.*(m|C)/g)[0];
//     const isEscaped = between.substring(between.indexOf('.')+1).length - j >=0 && between.length > 2
//     if(x.match(/\w/g)[1] === 'D' && !isEscaped) return 'Protected!'

//     return isEscaped ? 'Escaped!'  : 'Caught!' 
// }

// console.log(catMouse('....CD.....m...', 2));
// console.log(catMouse('.D...mC..', 1));

function f(x) {
    alert(x);
}

function delay(f, ms) {
    return function (text) {
        setTimeout(f(text), ms)
    }
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

//   f1000("test"); // показывает "test" после 1000 мс
//   f1500("test"); // показывает "test" после 1500 мс

function debounce(f, ms) {
    return function (args) {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall && ((this.lastCall - previousCall) <= ms)) {
            clearTimeout(this.lastCallTimer);
        }
        this.lastCallTimer = setTimeout(() => f(args), ms);
    }
}

let logger = (args) => console.log(`My args are ${args}`);
// debounce: call the logger when two seconds have elapsed since the last call
let debouncedLogger = debounce(logger, 2000);

// debouncedLogger([1, 2, 3]);

function findNb(m) {
    let res = 0;
    const newArr = m.split('');

    for (let i = 0; i < m; i++) {
        res += Math.pow(m - i, 3)
    }

    console.log(res)
}

// findNb('45')

// console.log(bubble([5, 3, 2, 8, 1, 4]))

function sortArray(array) {
    const indices = []
    array
        .filter((v, i) => v % 2 !== 0 && indices.push(i))
        .sort((a, b) => a - b)
        .forEach((v, i) => array[indices[i]] = v)

    return array
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))

function findUniq(arr) {
    arr.sort((a, b) => a - b)
    return arr[0] === arr[1] ? arr.pop() : arr[0]
};

// console.log(findUniq([1,1,1,1,2,1]))

// function deleteNth(arr,n){
//     const d = {}
//     arr.forEach(v => d[v] !== undefined ? d[v]+=1 : d[v]=1)

//     for(let v in d) {
//         if(d[v] > n) {
//             for(let i = 0; i < d[v] - n; i++){
//                 arr.splice(arr.lastIndexOf(+v), 1)
//             }
//         } 
//     }
//     return arr
// }

function deleteNth(arr, n) {
    const cache = {}
    return arr.filter(n => {
        cache[n] = (cache[n || 0]) + 1;
        return cache[n] <= x
    })
}

// console.log(deleteNth([20,37,20,21], 1))
// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))

function tickets(arr) {

    let flag = "YES";
    const temp = [
        [],
        [],
        []
    ];

    arr.forEach(money => {
        switch (money) {
            case 25:
                temp[0].push(25)
                break;
            case 50:
                if (temp[0].includes(25)) {
                    temp[0].pop();
                    temp[1].push(50);
                } else
                    flag = 'NO'
                break;
            case 100:
                debugger
                if (temp[0].length >= 1 && temp[1].length >= 1) {
                    temp[0].pop()
                    temp[1].pop()
                } else if (temp[0].length >= 3) {
                    for (let i = 0; i < 3; i++) temp[0].pop()
                } else
                    flag = "NO"
                break;
        }
    })
    return flag
}

// console.log(tickets([25,25,25,100,25,25,50,100,25,25,25,100]))
// console.log(tickets([25,25, 50,50, 25, 25, 50,25]))
// console.log(tickets([ 25, 25, 25, 25, 50, 100, 50 ]))
// console.log(tickets([25,50,25,100,25,50,25,100,25,25,25,100,25,50,25,100]))

function tribonacci(signature, n) {
    for (let i = signature.length, j = 0; i < n; i++, j++) {
        signature.push(signature.slice(j, i).reduce((acc, curr) => acc + curr))
    }
    return signature
}
//   console.log(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])

// function uniqueInOrder(iterable){
//     //your code here - remember iterable can be a string or an array
//     const res = [];
//     for(let i = 1; i < iterable.length; i++) {
//         debugger
//         if(iterable[i-1] !== iterable[i]){
//             res.push(iterable[i-1])
//         }
//     }
//     res.push(iterable[iterable.length - 1])
//     return res
// }

// console.log(uniqueInOrder('AAD'))

// function iqTest(numbers){

//     // const indices = []
//     // array
//     //     .filter((v, i) => v % 2 && indices.push(i)) // filter odd number
//     //     .sort((a,b) => a - b)                       // sort odd number
//     //     .forEach((v, i) => array[indices[i]] = v)   // check index number and write him to general array
//     // return array

//     const even = numbers.split(' ').filter(v => v % 2 === 0)
//     const odd = numbers.split(' ').filter(v => v % 2 !== 0)

//     let indices = []
//     const isOdd = even.length > odd.length;

//     if(isOdd) {
//         numbers.split(' ').filter((v, i) => v % 2 && indices.push(i))
//     } else {
//         numbers.split(' ').filter((v, i) => v % 2 === 0 && indices.push(i))
//     }

//     return indices[0] + 1
// }

function iqTest(numbers) {
    let ieven = [],
        iodd = []
    const even = numbers.split(' ').filter((v, i) => v % 2 === 0 && ieven.push(i))
    const odd = numbers.split(' ').filter((v, i) => v % 2 !== 0 && iodd.push(i))

    return even.length > odd.length ? iodd[0] + 1 : ieven[0] + 1
}

// console.log(iqTest('2 9 15 23'))
// console.log(iqTest('2 2 2 4 4 5'))

// function list(names){
//     names = names.map(v => v.name);

//     switch(names.length) {
//         case 0: 
//             return ''
//         case 1:
//             return names[0]
//         case 2:
//             return `${names[0]} & ${names[1]}`
//         default:
//             const lastChild = names.pop();
//             return names.join(", ") + ' & ' + lastChild
//     }
// }

function list(names) {
    return names.reduce((prev, curr, index, array) => {
        debugger
        if (index === 0) {
            return curr.name
        } else if (index === array.length - 1) {
            return prev + " & " + curr.name
        } else {
            return prev + ", " + curr.name
        }
    }, '')
}

// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))

// function toCamelCase(str){
//     return !str ? str.split(/(-|_)/).filter((v, i) => i % 2 !== 1).reduce((prev, curr, index, array) => {
//         if(index === 0 && curr.charCodeAt(0) >= 97){
//             return curr;
//         } else {
//             return prev + curr[0].toUpperCase() +curr.substring(1)
//         }
//     }, '') : ''
// } 

function toCamelCase(str) {
    var regExp = /[-_]\w/ig;
    return str.replace(regExp, function (match) {
        return match.charAt(1).toUpperCase();
    });
}

console.log(toCamelCase('the_stealth-warrior'))

function dirReduc(arr) {

    if (arr.length === 4 &&
        arr.includes("SOUTH") &&
        arr.includes("NORTH") &&
        arr.includes("WEST") &&
        arr.includes("EAST")) return arr;

    // const oldArray = [].concat(arr)

    function count(d, od) {
        const length = arr.filter(v => v === d).length;
        for (let i = 0; i < length; i++) {
            arr.splice(arr.indexOf(d), 1);
            arr.splice(arr.indexOf(od), 1);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        // const current = arr[i]
        // if(current === arr[0])
        switch (arr[0]) {
            case "NORTH":
                count("SOUTH", "NORTH");
                break;
            case "WEST":
                count("EAST", "WEST")
                break;
            case "SOUTH":
                count("SOUTH", "NORTH");
                break;
            case "EAST":
                count("EAST", "WEST")
                break;
        }
    }

    return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST"]))
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))


//   function high(x){
//     const obj = {}
//     const aph = 'abcdefghijklmnopqrstuvwxyz'.split('').forEach((v, i) => obj[v] = i+1);

//     const countWord = word => word.split('').reduce((prev, acc) => prev + obj[acc] , 0)
//     const numbers = x.split(' ').map(v => countWord(v))

//     const biggest = Math.max(...numbers)
//     return x.split(' ')[numbers.findIndex(v => v === biggest)]
// }

// function high(x){
//     const obj = {}
//     const arr = x.split(' ')
//     const aph = 'abcdefghijklmnopqrstuvwxyz'.split('').forEach((v, i) => obj[v] = i+1);

//     const countWord = word => word.split('').reduce((prev, acc) => prev + obj[acc] , 0)
//     debugger
//     const numbers = arr.map(v => countWord(v))
//     return arr[numbers.indexOf(v => v === Math.max(...numbers))]
// }

function high(s) {
    let as = s.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}

// console.log(high('experience i need'))

function narcissistic(value) {
    const str = value + '';
    return str.split('').reduce((prev, acc) => prev + Math.pow(acc, str.length), 0) == value
}

console.log(narcissistic(153))

//   console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
//   console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST"]))
//   console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))
//   console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))

function countSmileys(arr) {
    const smiles = arr.join(' ').match(/(:|;)(-|~)?(\)|D)/g) || []
    return arr.length && !smiles.length ? 0 : smiles.length
}

function countSmileys(arr) {
    return arr.filter(v => /(:|;)(-|~)?(\)|D)/.test(v)).length
}

console.log(countSmileys([';]', ':[', ';*', ':$']))

function solution(str) {
    const res = []
    str = str.length % 2 ? str + "_" : str
    for (let i = 0; i < str.length; i += 2) {
        res.push(str.split('').splice(i, 2).join(''))
    }
    return res
}

function solution(str) {
    return (str.length % 2 ? str + "_" : str).match(/../g)
}

function isPrime(num) {
    if (num <= 0) return false;
    let counter = 0;
    const allowed = 2;
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) counter++
    }
    return counter === allowed ? true : false
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    let m = Math.ceil(Math.sqrt(num));
    for (let i = 2; i <= m; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function same(arr1, arr2) {
    const freq1 = {},
        freq2 = {};

    for (let key of arr1) {
        freq1[key] = (freq1[key] || 0) + 1
    }

    for (let key of arr2) {
        freq2[key] = (freq2[key] || 0) + 1
    }

    for (let key in freq1) {
        if (!(key ** 2 in freq2)) {
            return false;
        }

        if (freq1[key] !== freq2[key ** 2]) {
            return false;
        }
    }
    return true;
}

same([1, 2, 3], [1, 4, 9])

function anagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const freq = [];
    for (let i = 0; i < first.length; i++) {
        const letter = first[i];
        freq[letter] = (freq[letter] || 0) + 1;
    }

    for (let i = 0; i < second.length; i++) {
        const letter = second[i];
        if (!freq[letter]) {
            return false
        } else {
            freq[letter]--;
        }

    }
    return true;
}

// console.log(anagram('iceman', 'cinema'))

function sumZero(arr) {
    return arr.reduce((prev, acc) => prev + acc, 0) === 0 ? [arr[0], arr[arr.length - 1]] : undefined
}

// console.log(sumZero([-2,-1,0,1,2]))

function duplicateCount(text) {
    const arr = text.toLowerCase().split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
    let i = 0,
        res = [];
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            res.push(arr[i])
        } else {
            i = j
        }
    }
    return new Set(res).size
}

// console.log(duplicateCount('aabbcde'))
// console.log(duplicateCount('aabBcde'))
// console.log(duplicateCount('Indivisibility'))
// console.log(duplicateCount('Indivisibilities'))

// function window(arr, num){
//     let maxSum = 0, tempSum = 0;

//     for(let i = 0; i < num; i++){
//         maxSum+=arr[i];
//     }
//     tempSum = maxSum;
//     for(let i = num; i < arr.length; i++){
//         tempSum = tempSum - arr[num-1] + arr[i];
//         maxSum = Math.max(maxSum, tempSum)
//     }

//     return maxSum
// }

// function inArray(array1,array2){
//     const parsedArr = array2.join(' ')
//     return array1.filter(v => parsedArr.match(v)).sort((a,b) => a.localeCompare(b))
// }

function inArray(arr1, arr2) {
    return arr1.filter(function (needle) {
        return arr2.some(function (haystack) {
            return haystack.indexOf(needle) > -1;
        });
    }).sort();
}
// console.log(inArray(["live", "strong", "arp"],["lively", "alive", "harp", "sharp", "armstrong"]))

function expandedForm(num) {
    num = String(num)
    let res = []
    for(let i = 0; i < num.length; i++){
        if(num[i] !== '0') res.push(num[i] + '0'.repeat(num.length - i - 1))
    }
    return res.join(" + ")
}

// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");

// console.log(expandedForm(12))

function count (string) {  
    const res = {}
    for(let i = 0; i < string.length; i++) { 
      const current = string[i]
      res[current] = (res[current] || 0 ) + 1
    }
    return res
}

function count(string) {
    const res = {}
    string.split('').forEach(v => res[v] = (res[v] || 0) + 1)
    return res
}   

// console.log(count('chapter'))

// function wave(str) {
//     const improve = (v, i) => str.substring(0,i) + v.toUpperCase() + str.substring(i+1)

//     return str.split('').map((v, i) => improve(v, i)).filter(v => v !== str)
// }

function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}

console.log(wave(' gel lo '))

function toWeirdCase(string){
    let res = '';
    const arr = string.split(' ')
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        res += j % 2 ? arr[i][j].toLowerCase() : arr[i][j].toUpperCase()
      }
      res += ' '
    }
    return res.trim();
}

console.log(toWeirdCase('This is macbook pro 2016 year'))

function findMissing(list) {  
    //1 3 5 9 11
    //-5 -3 1 -1 3
    //-11 -9 -5 -3 -1
    if(list.length === 2) return -228;

    const isPositive = list.every(v => v >= 0)
    if(isPositive){

    }
}

function findMissing(list) {  
    let seq = {}, length = {}, biggestDiff = -1;
    list.forEach((v, i, arr) => seq[i] = v - arr[i-1]);
    delete seq[0];

    for(key in seq) {
        length[seq[key]] = (length[seq[key]] || 0) + 1
    }

    if(list.length === 3) {
        debugger
        let step, diffBetween;
        if(list.every(v => v > 0)){
            step = Math.min(...Object.values(seq));
            diffBetween = Math.max(...Object.values(seq));
        } else {
            step = Math.max(...Object.values(seq));
            diffBetween = Math.min(...Object.values(seq));
        }
        for(key in seq){
            if(seq[key] === diffBetween){
                return list[+key]-step;
            }
        }

    } else {
        biggestDiff = Math.min(...Object.values(length));
    }

    

    for(key in length){
        if(length[key] === biggestDiff){
            for(number in seq){
                if(seq[number] === +key) {
                    if(+number >= 2) {
                        return list[+number] - (list[+number-1] - list[+number-2])
                    } else {
                        return list[+number] - (list[list.length-1] - list[list.length-2])
                    }
                }
            }
        }
    }
}

function findMissing(list){
    const step = (list[list.length -1] - list[0]) / list.length;
    return list.filter((v, i) => v !== (list[0] + i * step))[0] - step;
}

// console.log(findMissing([1,3,5,9,11]))
// console.log(findMissing([-3, -1, 1, 3, 5, 9]))
// console.log(findMissing([-10, -5, 0, 10]))
console.log(findMissing([ -41, -69, -125 ]))

window.onload = function() {
    const canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        balls = [],
        bounce = -1,
        spring = .1,
        numBalls = 10;

    for(let i = 0; i < numBalls; i++) {
        const ball = new Ball(Math.random() * 20 + 5);
        ball.x = Math.random() * canvas.width / 2;
        ball.y = Math.random() * canvas.height / 2;
        ball.vx = Math.random() * 6 - 3;
        ball.vy = Math.random() * 6 - 3;
        balls.push(ball)
    }

    function checkCollision(ballA, i){
        let ballB, dx, dy, dist, min_dist;
        for(let j = i + 1; j < numBalls; j++){
            ballB = balls[j];
            dx = ballB.x - ballA.x;
            dy = ballB.y - ballA.y;
            dist = Math.sqrt(dx * dx + dy* dy);
            min_dist = ballA.radius + ballB.radius;

            if(min_dist > dist) {
                const tx = ballA.x + dx / dist * min_dist,
                    ty = ballA.y + dy / dist * min_dist,
                    ax = (tx - ballB.x) * spring,
                    ay = (ty - ballB.y) * spring;
                
                ballA.vx -= ax;
                ballA.vy -= ay;
                ballB.vx += ax;
                ballB.vy += ay;
            }
        }
    }

    function move(ball){
        ball.x += ball.vx;
        ball.y += ball.vy;
        if(ball.x + ball.radius > canvas.width){
            ball.x = canvas.width - ball.radius;
            ball.vx *= bounce;
        } else if(ball.x - ball.radius < 0) {
            ball.x = ball.radius;
            ball.vx *= bounce;
        }

        if(ball.y + ball.radius > canvas.height){
            ball.y = canvas.height - ball.radius;
            ball.vy *= bounce;
        } else if(ball.y - ball.radius < 0) {
            ball.y = ball.radius;
            ball.vy *= bounce;
        }
    }

    function draw(ball){
        ball.draw(context);
    }

    (function drawFrame () {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvas.width, canvas.height);

        balls.forEach(checkCollision);
        balls.forEach(move);
        balls.forEach(draw);
      }());
}
  