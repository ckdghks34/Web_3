var pool = require('../config/db_config')

module.exports = function() {
	return {
		select: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select * from BOARD_FREE';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_free_num: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select FREE_NUM from BOARD_FREE';
				con.query(sql, function(err, result, fields){
					con.release();
					if(err) return callback(err);
					callback(null. result);
				});
			});
		},
		select_free_content: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select FREE_CONTENT from BOARD_FREE';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		}, 
		select_free_writer: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select FREE_WRITER from BOARD_FREE';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_free_time: function(callback){
			pool.getConnection(function(err, con){
				var sql = 'select FREE_TIME from BOARD_FREE';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null. result);
				});
			});
		},
		pool: pool
	}
};
