var express=require('express');
var router = express.Router();
var db_course = require('../SQL/db_COURSE')();

router.get('/', function(reg,res,next) {
	db_course.select(function(err,result) {
		if(err) console.log(err);
		else res.send(result);
	})
})

module.exports = router;
