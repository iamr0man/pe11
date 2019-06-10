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

function findShort(s){ 
	s = s.split(' ').map(element => element.length);
 	return Math.min.apply(0, s);
}