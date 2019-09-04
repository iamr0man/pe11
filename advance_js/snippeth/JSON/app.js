// let user = {
//     name: "Василий Иванович",
//     age: 35
// };

// user = JSON.parse(JSON.stringify(user, null, 2));
// console.log(user);

// let room = {
//     number: 23
//   };

//   let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
//   };

//   room.occupiedBy = meetup;
//   meetup.self = meetup;

//   alert( JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     return (value == meetup) ? undefined : value;
// }));

// let room = {
//     number: 23
//   };

//   let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
//   };

//   // цикличные ссылки
//   room.occupiedBy = meetup;
//   meetup.self = meetup;

//   alert( JSON.stringify(meetup, function replacer(key, value) {
//     return (key != '' && value === meetup) ? undefined : value;
//   }));

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(response => response.json())
    .then(commits => alert(commits[0].author.login));