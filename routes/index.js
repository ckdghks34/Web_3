var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/testSql')();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('main.html');
});

module.exports = router;
