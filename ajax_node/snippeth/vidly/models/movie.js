const Joi = require('joi');
const {
    genreSchema
} = require('./genre')
const mongoose = require('mongoose');

const Movie = mongoose.model(
    'Movies',
    new mongoose.Schema({
        title: {
            type: String,
            required: true,
            trim: true,
            minlength: 5,
            maxlength: 50
        },
        genre: {
            type: genreSchema,
            required: true
        },
        numberInStock: {
            type: Number,
            required: true,
            min: 0
        },
        numberRentalRate: {
            type: Number,
            required: true,
            min: 0
        }
    })
);

function validateMovie(movie) {
    const schema = {
        name: Joi.string()
            .min(5)
            .maxlength(50)
            .required(),
        genreId: Joi.string()
            .required(),
        numberInStock: Joi.number()
            .min(0)
            .required(),
        dailyRentalRate: Joi.number()
            .min(0)
            .required()
    };

    return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;