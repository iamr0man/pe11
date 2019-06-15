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

function reverseWords(str) {
    return str.split("")
}

console.log(reverseWords('Roma Diana'))