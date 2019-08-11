var pool = require('../config/db_config');

module.exports = function () {
	return {
		select: function(callback) {
			pool.getConnection(function(err, con){
				var sql = 'select * from COURSE';
				con.query(sql, function (err, result, fields){
					con.release();
					if (err) return callback(err);
					callback(null, result);
				});
			});
		},
		select_id : function (callback) {
			pool.gtConncetion(function(err, con){
				var sql = 'select C_ID from COURSE';
				con.query(sql, function(err,result,fields){
					con.release();
					if(err) return callback(err);
					callback(null,result);
				});
			});
		},
		pool:pool
	}
};
