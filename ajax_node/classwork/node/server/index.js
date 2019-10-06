const obj = require('./app/index');
const express = require('express')

const app = express();

app.get('/films', (req, res) => {
    const response = {};

    res.setHeader('Access-Control-Allow-Origin', '*');

    response.data = [
        'Kazakstan is a huge country'
    ]

    app.send(JSON.parse(response.data))
})

app.listen(3000)