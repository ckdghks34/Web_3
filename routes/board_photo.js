var express=require('express');
var router=express.Router();
var db_board_photo=requrie('../SQL/db_BOARD_PHOTO')();

router.get('/',function(req,res,next) {
	db_board_photo.select(function(err,result) {
		if(err) console.log(err);
		else res.send(result);
	})
})

module.exports=router;

