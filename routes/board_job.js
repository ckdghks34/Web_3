var express=require('express');
var router=express.Router();
var db_board_job=require('../SQL/db_BOARD_JOB')();

router.get('/', function(req,res,next){
	db_board_job.select(function(err,result) {
		if(err) console.log(err);
		else res.send(result);
	})
})

module.exports=router;
