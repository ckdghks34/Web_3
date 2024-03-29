var pool = require('./db_config');

	module.exports = function () {
		return {
			select: function(callback){
				pool.getConnection(function(err, con){
					var sql = 'select * from STUDENT';
					con.query(sql, function (err, result, fields) {
						con.release();
						if (err) return callback(err);
						callback(null, result);
					});
				});
			},
			pool: pool
		}
	};
