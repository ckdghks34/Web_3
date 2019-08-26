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

router.get('/bisa/save', function(req,res,next){
		res.render('save_popup.html');
});

router.get('/bisa/cancle', function(req,res,next){
		res.render('cancle_popup.html');
});

router.get('/photo',function(req,res,next){
		res.render('Community_photo.html');
});

router.get('/free',function(req,res,next){
		res.render('Community_free.html');
});

router.get('/free/write', function(req,res,next){
	res.render('write.html');
});

router.get('/free/save', function(req,res,next){
	res.render('save_popup.html');
});

router.get('/free/cancle', function(req,res,next){
	res.render('cancle_popup.html');
});

router.get('/QnA',function(req,res,next){
		res.render('Community_QNA.html');
});

router.get('/QnA/write', function(req,res,next){
	res.render('write.html');
});

router.get('/QnA/save', function(req,res,next){
	res.render('save_popup.html');
});

router.get('/QnA/cancle', function(req,res,next){
	res.render('cancle_popup.html');
});

module.exports = router;
