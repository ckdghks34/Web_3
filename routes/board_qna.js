var express=require('express');
var router=express.Router();
var db_board_qna=require('../SQL/db_BOARD_QNA')();

router.get('/', function(req,res,next){
	db_board_qna.select(function(err, result) {
		if(err) console.log(err);
		else res.send(result);
	})
})

module.exports=router;
