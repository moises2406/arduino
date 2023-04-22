const { Router } = require('express');
const path = require('path');


const rute = Router();



rute.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'));
});

module.exports = rute;