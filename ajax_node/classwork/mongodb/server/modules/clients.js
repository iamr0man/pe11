const express = require('express');
const router = express.Router();
const {
    jsonHandler
} = require('../services/jsonHandler');

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next();
})

router.get('/:id?', (req, res) => {
    const id = req.params.id;

    const result = jsonHandler.createResponse(() => {
        let result = require('../data/clients.json');

        if (id) {
            result = Array.isArray(result) &&
                result.filter(client => client.id === +id) || [];
        }
        return result;
    });
    res.send(result);
});

module.exports.routerClients = router;