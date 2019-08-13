var pool = require('../config/db_config');

module.exports = function() {
	return {
		select: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select * from COUNCIL';
				con.query(sql, function (err, result, fields){
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_c_num: function(callback) {
			pool.getConnection(function(err,con){
				var sql = 'select C_NUM from COUNCIL';
				con.query(sql, function (err, result, fields){
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_c_name: function(callback) {
			pool.getConnection(function(err,con){
				var sql = 'select C_NAME from COUNCIL';
				con.query(sql, function (err, result, fields){
					con.release();
					if(err) return callback(err);
					callback(null, result);
				});
			});
		},
		pool: pool
	}
};
