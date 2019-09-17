const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hillel students will be suck')
})

app.listen(3000, () => {
    console.log('App listening on 3000 port');
})