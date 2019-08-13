var express=require('express');
var router=express.Router();
var db_council=require('../SQL/db_COUNCIL')();

router.get('/',function(req, res, next) {
	db_council.select(function(err,result) {
		if(err) console.log(err);
		else res.send(result);
	})
})

module.exports=router;
