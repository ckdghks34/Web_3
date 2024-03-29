var pool = require('../config/db_config');

module.exports = function () {
	return {
		select: function(callback){
			pool.getConnection(function(err, con){
				var sql = 'select * from STUDENT';
				con.query(sql, function (err, result, fields) {
					con.release();
					if (err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_s_id: function(callback){
			pool.getConnection(function(err,con){
				var sql='select S_ID from STUDENT';
				con.query(sql, function(err,result,fields){
					con.release();
					if(err) return callback(err);
					callback(null,result);
				});
			});
		},
		select_s_pw: function(callback){
			pool.getConnection(function(err,con){
				var sql = 'select S_PW from STUDENT';
				con.query(sql, function(err,result,fields){
					con.release();
					if (err) return callback(err);
					callback(null,result);
				});
			});
		},
		select_s_name: function(callback){
			pool.getConnection(function(err,con){
				var sql = 'select S_NAME from STUDENT';
				con.query(sql, function(err,result,fields){
					con.release();
					if (err) return callback(err);
					callback(null,result);
				});
			});
		},
		select_s_grade: function(callback){
			pool.getConnection(function(err,con){
				var sql = 'select S_GRADE from STUDENT';
				con.query(sql,function(err,result,fields){
					con.release();
					if (err) return callback(err);
					callback(null,result);
				});
			});
		},
		select_login: function(id,pw,callback){
			pool.getConnection(function(err, con) {
				var sql = `select S_NAME,S_ID from STUDENT where S_ID = "${id}" AND S_PW = "${pw}"`;
				con.query(sql, function(err, result, fields){
					con.release();
					console.log(result);
					//console.log(cnt);
					if (err) return callback(err);
					else	callback(null, result);
				});
			});
		},
		pool: pool
	}
};
