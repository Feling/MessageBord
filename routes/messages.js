var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.post('/', function (req, res, next) {
    var message = new Message({
        content:
    });

});

module.exports = router;
