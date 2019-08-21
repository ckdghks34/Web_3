var pool = require('../config/db_config');

module.exports = function() {
	return{
		select: function(callback) {
			pool.getConnection(function(err, con) {
				var sql = 'select * from BOARD_QNA';
				con.query(sql, function (err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_qna_num: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select QNA_NUM from BOARD_QNA';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_qna_content: function(callback) {
			pool.getConnection(function(err, con) {
				var sql = 'select QNA_CONTENT from BOARD_QNA';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_qna_writer: function(callback) {
			pool.getConnection(function(err, con) {
				var sql = 'select QNA_WRITER from BOARD_QNA';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_qna_time: function(callback) {
			pool.getConnection(function(err, con) {
				var sql = 'select QNA_TIME from BOARD_QNA';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_is_checked: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select IS_CHECKED from BOARD_QNA';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_is_secret: function(callback){
			pool.getConnection(function(err, con){
				var sql = 'select IS_SECRET from BOARD_QNA';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback (null, result);
				});
			});
		},
		pool: pool
	}
};
