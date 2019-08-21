var pool = require('../config/db_config')

module.exports = function() {
	return {
		select: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select * from BOARD_PHOTO';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		}),
		select_photo_num: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select PHOTO_NUM from BOARD_PHOTO';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_photo_content: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select PHOTO_CONTENT from BOARD_PHOTO';
				con.query(sql, function(err, result,fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_photo_time: function(callback) {
			pool.getConnection(function(err, con) {
				var sql = 'select PHOTO_TIME from BOARD_PHOTO';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		};
		pool: pool
	}
};
