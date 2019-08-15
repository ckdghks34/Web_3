var pool = require('../config/db_config');

module.exports = function() {
	return{
		select: function(callback) {
			pool.getConnection(function(err,con){
				var sql = 'select * from LOCKER';
				con.query(sql, function (err,result,fields){
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_l_id: function(callback){
			pool.getConnection(function(err,con){
				var sql = 'select L_ID from LOCKER';
				con.query(sql, function(err,result,fields){
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_l_num: function(callback){
			pool.getConnection(function(err,con){
				var sql = 'select L_NUM from LOCKER';
				con.query(sql, function(err,result,fields) {
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_l_section: function(callback){
			pool.getConnection(function(err, con){
				var sql = 'select L_SECTION from LOCKER';
				con.query(sql, function(err,result,fields){
					con.release();
					if(err) return callback(err);
					callback(null,result);
				});
			});
		},
		select_is_l: function(callback){
			pool.getConnection(function(err, con){
				var sql = 'select IS_L from LOCKER';
				con.query(sql, function(err, result, fields){
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_l_time: function(callback){
			pool.getConnection(function(err, con){
				var sql = 'select L_TIME from LOCKER';
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

