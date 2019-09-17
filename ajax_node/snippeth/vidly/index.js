const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/costumers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());
app.use(express.json())
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);

const port = process.env.POTY || 3000;
app.listen(port, () => console.log(`Listening the port ${port}...`))