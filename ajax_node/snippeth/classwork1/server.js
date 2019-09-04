console.log('Test I am working with NodeJs');

const express = require('express');

const app = express();

app.get('/add', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // res.send('Test string!!!!');
    
    res.send(JSON.stringify({
        "id": "22e51fe2-4571-45cf-9715-c001717cae6b",
        "text": "The human tongue tastes bitter things with the taste buds toward the back. Salty and pungent flavors are tasted in the middle of the tongue, sweet flavors at the tip!",
        "source": "djtech.net",
        "source_url": "http:\/\/www.djtech.net\/humor\/useless_facts.htm",
        "language": "en",
        "permalink": "https:\/\/uselessfacts.jsph.pl\/22e51fe2-4571-45cf-9715-c001717cae6b"
    }));

});

app.listen(3000);
