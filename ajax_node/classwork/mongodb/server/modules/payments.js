const express = require('express');
const router = express.Router();
const {
    jsonHandler
} = require('../services/jsonHandler');

router.get('/', (req, res) => {
    const data = require('../data/payments.json');

    res.send(jsonHandler.createResponse(data));
});

router.get('/clients/:id?', (req, res) => { 
    const id = req.params.id;
    
    const result = jsonHandler.createResponse(() => {
        let result = require('../data/payments.json');

        if (id) {
            result = Array.isArray(result) && result.filter(pay => pay.id === +id) || [];
        }
        return result;
    })
    res.send(result);
});

module.exports.routerPayments = router;