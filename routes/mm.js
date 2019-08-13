var express=require('express');
var router=express.Router();
var db_mm=require ('../SQL/db_mm')();

router.get('/', function(req,res,next){
	db_mm.select(function(err,result){
		if(err) console.log(err);
		else res.send(result);
	})
})

module.exports=router;
