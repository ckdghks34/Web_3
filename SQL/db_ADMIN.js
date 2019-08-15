var pool = require('../config/db_config');

module.exports = function() {
	return {
		select: function(callback) {
			pool.getConection(function(err,con){
				var sql = 'select * from ADMIN';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_a_id: function(callback) {
			pool.getConnection(function(err,con){
				var sql = 'select A_ID from ADMIN';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_a_num: function(callback){
			pool.getConnection(function(err,con){
				var sql = 'select A_NUM from ADMIN';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_a_pw: function(callback){
			pool.getConnection(function(err,con){
				var sql = 'select A_PW from ADMIN';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_a_name: function(callback) {
			pool.getConnection(function(err,con){
				var sql = 'select A_NAME from ADMIN';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		pool: pool
	}

};
