var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { id: '404411828', name: 'Wang Wen-Yi' });
});

module.exports = router;