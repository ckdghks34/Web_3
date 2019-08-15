var express=require('expess');
var router=express.Router();
var db_board_notice ('../SQL/db_BOARD_NOTICE')();

router.get('/', function(req,res,next) {
	db_board_notice.select(function(err,result) {
		if(err) console.log(err);
		else res.send(result);
	})
})

module.exports=router;
