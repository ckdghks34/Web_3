var express=require('express');
var router=express.Router();
var db_admin=require('../SQL/db_ADMIN')();

router.get('/', function(req,res,next){
	db_admin.select(function(err,result){
		if(err) console.log(err);
		else res.send(result);
	})
})

module.exports=router
