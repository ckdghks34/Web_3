var express = require('express');
var router = express.Router();
var db = require('../config/db_connect');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('main.html');
});

router.get('/loginsuccess',function(req,res,next){
	res.render('login.html');
});
module.exports = router;
