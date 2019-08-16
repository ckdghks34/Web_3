var express = require('express');
var router = express.Router();
var db = require('../config/db_connect');

router.get('/',function(req,res,next){
		res.render('Applications_locker.html');
});

router.get('/locker',function(req,res,next){
		res.render('Applications_locker.html');
});

router.get('/course',function(req,res,next){
		res.render('Applications_course.html');
});

router.get('/mentomenti',function(req,res,next){
		res.render('Applications_mm.html');
});

module.exports = router;




