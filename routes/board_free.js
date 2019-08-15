var express=require('express');
var router=express.Router();
var db_board_free=require('../SQL/db_BOARD_FREE')();

router.get('/', function(req, res, next) {
	db_board_cal.select(function(err,result) {
		if(err) console.log(err);
		else res.send(result);
	})
})

module.exports=router;
