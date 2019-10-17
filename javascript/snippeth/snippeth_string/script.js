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

const arr = ['better' , 'hire']
let randomLetters = ['h', 'r', 'i', 'e', 'b','e','','','e','r']

function isIncludes(word){
    return word.every((e, i, array) => {
        if(randomLetters.includes(e)){
            return true;
        }
    })
}

function deleteCharacter(word){
    word.forEach((element) => {
        const index = randomLetters.indexOf(element)
        randomLetters.splice(index, 1)  
        console.log(randomLetters)
    });
} 

function main(arr) {
    arr.forEach(e => {
        if(isIncludes([...e])){
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
            accum[value] = accum[value] ? accum[value] + 1 : 1;
            return accum
        }, {})


console.log(letter_count('arithmetics'))
