var express = require('express');
var router = express.Router();
var db_student = require('../SQL/db_STUDENT')();
var db_admin=require('../SQL/db_ADMIN')();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function(req,res,next) {
	db_admin.check_id(req.body.id,req.body.pw,function(err, result){
		if(err) console.log(err);
		else	
		{
			if(result.length == 0)
			{
				db_student.select_login(req.body.id,req.body.pw, function(err, result){
					if(err) console.log(result);
					else
					{
						if(result == 0){
							res.send("Falied!! plz check your id, pw");
						}
						else
						{
							res.send(result[0].S_NAME+"("+result[0].S_ID+")님 안녕하세요!");
						}
					}
				});
			}

			else
			{
				res.send(result[0].A_NAME+"님 안녕하세요!");
			}

		}});
 	}); 

module.exports = router;
