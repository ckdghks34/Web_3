var pool = require('../config/db_config');

module.exports = function () {
	return {
		select: function(callback){
			pool.getConnection(function(err, con){
				var sql ='select * from MM';
				con.query(sql, function (err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_m_num: function(callback){
			pool.getConnection(function(err, con){
				var sql = 'select M_NUM from MM';
				con.query(sql, function (err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_m_cate: function(callback){
			pool.getConnection(function(err, con){
				var.sql = 'select M_CATE from MM';
				con.query(sql, function (err, result, fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_is_mm: function(callback){
			pool.getConnection(function(err, con){
				var.sql = 'select IS_MM from MM';
				con.query(sql, function(err, result,fields){
					con.release();
					if (err) return callback(err);
					callback(null,result);
				});
			});
		},
		select_m_type: function(callback){
			pool.getConnection (function(err,con){
				var.sql = 'select M_TYPE from MM';
				con.query(sql, function(err, result, fields){
					con.release();
					if (err) return callback(err);
					callback(null, result);
				});
			});
		},
		pool: pool
	}
};
						
