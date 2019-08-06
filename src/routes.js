const express = require('express');

const routes = express.Router();

routes.get('/', (req,res) => {
    return res.json({a:'dasds'})
})
routes.post('/devs', (req,res) => {
    return res.json({a:'dasds'})
})


module.exports = routes;