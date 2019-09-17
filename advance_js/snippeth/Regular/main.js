let str = "eighteenth sweet boy will be today // ,= ee boy"

console.log(/eight/g.test(str)); // true lastindex 4
console.log(str.search(/ee/g));
console.log(/ee/g.exec(str));



console.log(str.match(/ee/)); //the same as exec because with out global flag 
console.log(str.match(/ee/g)); //without deteils 

let [...arr] = str.matchAll(/ee/g);
console.log(arr); //iterator

str = '22 august 2 thousand 1';
console.log(str.match(/\d+\s\w+/g).join('-'));

str = 'My first prog. language - Java, but now i`m learning JavaScript';
console.log(str.match(/\bjava\b/i));

let res = 'Завтрак в 09:00 в комнате 123:456'.match(/\b\w\w\b/g).join(":")
console.log(res);

str1 = 'i will fly to Spain every half year';
str2 = 'i will fly to San-francisco every half year';
str3 = 'i will fly to Saragoza every half year';
console.log(str1.match(/to S[a-z]+/));
console.log(str2.match(/to S[a-z-]+/));
console.log(str3.match(/to S[a-z]+/));

[...arr] = 'Завтрак в 09:00. Ужин в 21-30'.match(/\d+[:-]\d+/g);
console.log(arr);

str = 'sweet man wear calvin clain underwear with white color ... Сolour is the most ...';
console.log(str.match(/colou?r/g));

let reg = /[.]{3,}/g;
console.log("Привет!... Как дела?.....".match(reg));

reg = /#[\da-f]{6}\b/gi;

str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678.\ncolors\ncwrwd\n";
console.log(str);
console.log(str.match(reg)) // #121212,#AA00ef

console.log(str.match(/^\w+/g));

console.log('a "witch" and her "broom" is one'.match(/".+"/)); //greedy
console.log('a "witch" and her "broom" is one'.match(/".+?"/g)); //non-greedy
console.log('1234 4568'.match(/\w+ \w+?/g));

reg = /<![\s\S]+?-->/g;

str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;
console.log(str.match(reg)); // '<!-- My -- comment \n test -->', '<!---->'

reg = /<[^<>]+>/g;

str = '<> <a href="/"> <input type="radio" checked> <b>';

console.log(str.match(reg)); // '<a href="/">', '<input type="radio" checked>', '<b>'