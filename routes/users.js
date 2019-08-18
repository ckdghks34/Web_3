var express = require('express');
var router = express.Router();
var db = require('../SQL/db_STUDENT')();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function(req,res,next) {
 db.select_login(req.body.id,req.body.pw, function(err, result){
	 console.log(result);
	 if(err) res.send(err);
	 else if(result[0].cnt == '1'){
		 res.send("success");
	 }else{
		 res.send("zz");
	 }
 	}); 
});

module.exports = router;
