const express = require('express');
const lib = require('./app/index');
const films = require('./app/films');

const app = express();

app.get('/films', films.handleGetFilms);

// app.get('/product-id', (req, res) => {
//     const productId = req.query['product-id'];
//     const results = [
//         {id: 1, title: 'Iphone 7'},
//         {id: 2, title: 'Iphone 8'},
//         {id: 3, title: 'Iphone 10'},
//         {id: 4, title: 'Iphone 11'}
//     ]

//     res.send(JSON.stringify(
//         productId ? results.filter(i => i.id === +productId) : results
//     ))
// })
let data = require('./app/data/news.json');

app.get('/news', (req, res) => {
    res.setHeader('Access-Control-Allow-origin', '*');

    const html = data.map(i => `
    <iframe wigth="420" height="250" src="${i.videoUrl}"></iframe>
    <a href="#">${i.description}</a>
    <p>${i.date}</p>
    `).join('');
    console.log('object')
    res.send(html)
})

app.get('/news/:id', (req, res) => {
    
    res.setHeader('Access-Control-Allow-origin', '*');
    const id = req.params.id;
    const i = data[id];
    
    res.send(`
    <iframe wigth="420" height="250" src="${i.videoUrl}"></iframe>
    <a href="#">${i.description}</a>
    <p>${i.date}</p>
    `);
})

app.listen(3000);