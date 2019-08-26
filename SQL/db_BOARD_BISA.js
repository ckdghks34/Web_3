var pool = require('../config/db_config');

module.exports = function() {
	return {
		select: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select * from BOARD_BISA';
				con.query(sql, function (err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_bisa_num: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select BISA_NUM from BOARD_BISA';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null.result);
				});
			});
		},
		select_bisa_content: function(callback){
			pool.getConnection(function(err,con){
				var sql = 'select BISA_CONTENT from BOARD_BISA';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_bisa_writer: function(callback) {
			pool.getConnection(function(err,con){
				var sql = 'select BISA_WRITER from BOARD_BISA';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_bisa_time: function(callback) {
			pool.getConnection(function(err, con) {
				var sql = 'select BISA_TIME from BOARD_BISA';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		}, 
		select_is_secret: function(callback){
			pool.getConnection(function(err, con){
				var sql = 'select IS_SECRET from BOARD_BISA';
				con.query(sql, function(err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		write: function(title,content,id,writer,time,callback){
			pool.getConnection(function(err, con){
				var sql = `insert into BOARD_BISA(S_ID,BISA_TITLE,BISA_CONTENT,BISA_WRITER,BiSA_TIME) value('${id}','${title}','${content}','${writer}','${time}')`;
				con.query(sql, function(err,result,fileds){
					con.release();
					console.log(result);

					if(err) return callback(err);
					else callback(null,result);
				});
			});
		},

		pool: pool
	}
};