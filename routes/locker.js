var express=require('express');
var router=express.Router();
var db_locker=require('../SQL/db_LOCKER')();

router.get('/',function(req,res,next){
	db_locker.select(function(err,result)	{
		if(err) console.log(err);
		else res.send(result);
	})
})

module.exports=router;
