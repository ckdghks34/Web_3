var express = require('express');
var router = express.Router();
var db = require('../config/db_connect');

router.get('/',function(req,res,next){
		res.render('Announcement_notice.html');
});

router.get('/notice',function(req,res,next){
	res.render('Announcement_notice.html');
});

router.get('/job',function(req,res,next){
	res.render('Announcement_job.html');
});

module.exports = router;
