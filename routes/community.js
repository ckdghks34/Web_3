var express = require('express');
var router = express.Router();
var db = require('../config/db_connect');

router.get('/',function(req,res,next){
		res.render('Community_bisa.html');
});

router.get('/bisa',function(req,res,next){
		res.render('Community_bisa.html');
});

router.get('/bisa/write', function(req,res,next){
		res.render('write.html');
});

router.get('/photo',function(req,res,next){
		res.render('Community_photo.html');
});

router.get('/free',function(req,res,next){
		res.render('Community_free.html');
});

router.get('/QnA',function(req,res,next){
		res.render('Community_QNA.html');
});

module.exports = router;
