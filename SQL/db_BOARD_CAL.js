var pool = require('../config/db_config;');

module.exports = function () {
	return {
		select: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select * from BOARD_CAL';
				con.query(sql,function (err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_cal_num: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select CAL_NUM from BOARD_CAL';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_cal_start: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select CAL_START from BOARD_CAL';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_cal_end: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select CAL_END from BOARD_CAL';
				con.query(sql, function(err,result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_cal_content: function(callback) {
			pool.getConnection(function(err,con){
				var sql = 'select CAL_CONTENT from BOARD_CAL';
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
