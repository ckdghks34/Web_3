var express = require('express');
var router = express.Router();
var db = require('../config/db_connect');

router.get('/',function(req,res,next){
	res.render('Dept_Intro.html');
});

router.get('/intro',function(req,res,next){
		res.render('Dept_Intro.html');
});

router.get('/curriculum',function(req,res,next){
		res.render('Dept_Curriculum.html');
});

router.get('/professor',function(req,res,next){
		res.render('Dept_Professor.html');
});

router.get('/council',function(req,res,next){
		res.render('Dept_Council.html');
});

router.get('/schedule',function(req,res,next){
		res.render('Dept_Schedule.html');
});

module.exports = router;
