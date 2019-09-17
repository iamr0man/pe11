const {
    Costumer,
    validate
} = require('../models/customer');
const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    const costumers = await Costumer.find().sort({
        name: 1
    });
    res.send(costumers);
});

router.post('/', async (req, res) => {
    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const costumer = new Costumer({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    });
    const result = await costumer.save();
    res.send(result);
});

router.put('/:id', async (req, res) => {
    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const costumer = await Costumer.findByIdAndUpdate(
        req.params.id, {
            name: req.body.name,
            phone: req.body.phone,
            isGold: req.body.isGold
        }, {
            new: true
        }
    );

    if (!costumer)
        return res
            .status(404)
            .send('The costumer with the given ID was not found.');

    res.send(costumer);
});

router.delete('/:id', async (req, res) => {
    const costumer = await Costumer.findByIdAndRemove(req.params.id);

    if (!costumer)
        return res.send(404).send('The costumer with the given ID was not found.');

    res.send(costumer);
});

router.get('/:id', async (req, res) => {
    const costumer = await Costumer.findById(req.params.id);

    if (!costumer)
        return res.send(404).send('The costumer with the given ID was not found.');

    res.send(costumer);
});

module.exports = router;