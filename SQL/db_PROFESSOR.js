var pool = require('../config/db_config');

moudle.exports = function() {
	return {
		select: function(callback){
			pool.getConnection(function(err,con){
				var sql = 'select * from PROFESSOR';
				con.query(sql, function (err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_p_id: function(callback){
			pool.getConnection(function(err, con){
				var sql = 'select P_ID from PROFESSOR';
				con.query(sql, function(err, result, fields){
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_p_num: function(callback) {
			pool.getConnection(functin(err, con){
				var sql = 'select P_NUM from PROFESSOR';
				con.query(sql, function(err, result, fields){
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_p_name: function(callback) {
			pool.getConnection(function(err,con){
				var sql = 'select P_NAME from PROFESSOR';
				con.query(sql, function(err, result, fields){
					con.release();
					if(err) return callback(err);
				});
			});
		},

		pool: pool
	}
};
