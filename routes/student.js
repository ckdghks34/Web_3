var express=require('express');
var router=express.Router();
var db_student=require('../SQL/db_STUDENT')();

router.get('/',function(req,res,next){
	db_student.select(function(err,result)	{
		if(err) console.log(err);
		else res.send(result);
	})
})

module.exports=router;
