const Joi = require('joi');
const mongoose = require('mongoose');

const Costumer = mongoose.model(
    'Costumer',
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 50
        },
        isGold: {
            type: Boolean,
            default: false
        },
        phone: {
            type: String,
            required: true,
            minlength: 5
        }
    })
);

function validateCostumer(costumer) {
    const schema = {
        name: Joi.string()
            .min(3)
            .max(50)
            .required(),
        phone: Joi.string()
            .min(5)
            .max(50)
            .required(),
        isGold: Joi.boolean()
    };

    return Joi.validate(costumer, schema);
}

exports.Costumer = Costumer;
exports.validate = validateCostumer;