var pool = require('../config/db_config');

module.exports = function() {
	return {
		select: function(callback) {
			pool.getConnection(function(err, con) {
				var sql = 'select * from BOARD_NOTICE';
				con.query(sql, function (err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_notice_content: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select NOTICE_CONTENT from BOARD_NOTICE';
				con.query(sql, function (err,result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_notice_time: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select NOTICE_TIME from BOARD_NOTICE';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				}),
			}),
		},
		pool: pool
	}
};
