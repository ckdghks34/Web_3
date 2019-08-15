var express = require('express');
var route = express.Router();
var db_board_cal = require('../SQL/db_BOARD_CAL')();

router.get('/', function(req,res,next) {
	db_board_cal.select(function(err,result) {
		if(err) console.log(err);
		else res.send(result);
	})
})

module.exports=router;
