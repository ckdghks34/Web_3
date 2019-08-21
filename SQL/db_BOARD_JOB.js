var pool = require('../config/db_config');

module.exports = function() {
	return {
		select: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select * from BOARD_JOB';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_job_num: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select JOB_NUM from BOARD_JOB';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_job_content: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select JOB_CONTENT from BOARD_JOB';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_job_time: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select JOB_TIME from BOARD_JOB';
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
