var express = require('express');
var router = express.Router();
var fruits = require('../data/fruits');

router.get('/', function (req, res) {
	res.render('index', { fruits });
});

router.post('/fruits', function (req, res) {
	fruits.push(req.body.fruit);
	res.redirect('/');
});

module.exports = router;
