var pool = require('../config/db_config');

module.exports = function () {
	return {
		select: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select * from COURSE';
				con.query(sql, function (err, result, fields){
					con.release();
					if (err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_c_id: function (callback) {
			pool.getConnection(function(err, con){
				var sql = 'select C_ID from COURSE';
				con.query(sql, function(err,result,fields){
					con.release();
					if(err) return callback(err);
					callback(null,result);
				});
			});
		},
		select_c_num: function (callback) {
			pool.getConnection(function (err, con){
				var sql = 'select C_NUM from COURSE';
				con.query(sql, function(err,result,fields){
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_c_name: function (callback){
			pool.getConnection (function (err, con){
				var sql = 'select C_NAME from COURSE';
				con.query(sql, function(err, result, fields){
					con.release();
					if(err) return callback(err);
					callback(null,result);
				});
			});
		},
		select_c_time: function(callback){
			pool.getConnection (function (err, con){
				var sql = 'select C_TIME from COURSE';
				con.query(sql, function(err, result, fields){
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_c_loc: function(callback) {
			pool.getConnection (function (err, con){
				var sql = 'select C_LOC from COURSE';
				con.query(sql, function(err, result, fields){
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		pool: pool
	}
};
