debugger;

// const normalizeUrl = adress => {
//     if(adress.substring(0,8) === 'https://'){
//         return adress;
//     } else if(adress.startsWith('http://')){
//         return `https://${adress.slice(6)}`;
//     } else {
//         return `https://${adress}`;
//     }
// };

// console.log(normalizeUrl('https://yandex.ru'));
// console.log(normalizeUrl('http://yandex.ru'));
// console.log(normalizeUrl('htps://yandex.ru'));
// console.log(normalizeUrl('yandex.ru'));

// let word = 'Hey';
// word[0] === (word[0] > String.fromCharCode(64) || word[0] < String.fromCharCode(91));

// const convertText = word => word[0] > String.fromCharCode(64) &&
//  word[0] < String.fromCharCode(91) ? word : reverse(word);

//  console.log(convertText('Hey'));

// const mysubstr = (str, endSubstring) => {

//     let newString = '', index = 0;
//     while(index < endSubstring) {
//         const currentChar = str[index];
//         newString = `${newString}${currentChar}`;
//         index++; 
//     }
//     return newString;
// }

// console.log(mysubstr('gotundefined', 3));