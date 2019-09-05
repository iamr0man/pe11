const express = require('express');
const app = express();

app.post('/add', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.send(JSON.stringify({
        message: 'Request is handled OK'
    }));
});

app.get('/products', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const response = {};
    const data = [{
            id: '1',
            title: 'Пиво Bud',
            price: 25,
            reviews: {
                rate: 5,
                comment: 'Insane beer for chiiling with your friends',
                date: '2019-08-31 10:35:40'
            }
        },
        {
            id: '2',
            title: 'Вино Syhoe',
            price: 253,
            old_price: 349,
            reviews: {}
        },
        {
            id: '3',
            title: 'Ноутбук ASUS VivoBook S13 S330UA Icicle Gold',
            price: 12253,
            old_price: 17199,
            reviews: {}
        },
        {
            id: '4',
            title: 'Телефон Iphone 7',
            price: 7253,
            old_price: 8199,
            reviews: {}
        }
    ];

    response.data = data;

    res.send(JSON.stringify(response));
});

app.listen(3000);